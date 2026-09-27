import "server-only";

import { createClient } from "@supabase/supabase-js";
import { isSupabaseConfigured, SUPABASE_ANON_KEY, SUPABASE_URL } from "@/lib/supabase/env";
import { FALLBACK_POSTS } from "./fallback";
import type { Post } from "./types";

/**
 * Anonymous client for the public site. It carries no cookies, so pages
 * that use it can be statically cached and revalidated on demand.
 */
function publicClient() {
  if (!isSupabaseConfigured()) return null;
  return createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

function sortPosts(posts: Post[]) {
  return [...posts].sort((a, b) => {
    const da = a.published_at ?? a.created_at;
    const db = b.published_at ?? b.created_at;
    return db.localeCompare(da);
  });
}

/**
 * Published posts, newest first. Falls back to the launch posts when the
 * database is unreachable or empty, so the blog never renders blank.
 */
export async function getPublishedPosts(): Promise<Post[]> {
  const supabase = publicClient();
  if (!supabase) return sortPosts(FALLBACK_POSTS);

  try {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("published", true)
      .order("published_at", { ascending: false });
    if (error || !data || data.length === 0) return sortPosts(FALLBACK_POSTS);
    return data as Post[];
  } catch {
    return sortPosts(FALLBACK_POSTS);
  }
}

export async function getPublishedPost(slug: string): Promise<Post | null> {
  const supabase = publicClient();
  const fallback = FALLBACK_POSTS.find((p) => p.slug === slug) ?? null;
  if (!supabase) return fallback;

  try {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .maybeSingle();
    if (error) return fallback;
    return (data as Post | null) ?? fallback;
  } catch {
    return fallback;
  }
}

/** The post to headline the collection: the newest flagged as featured. */
export function pickFeatured(posts: Post[]) {
  return posts.find((p) => p.featured) ?? posts[0] ?? null;
}
