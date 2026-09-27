This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# Grobird2


## Admin panel

The admin lives at `/admin`. Signed-in users are always sent to `/admin/dashboard`; everyone else sees `/admin/login`.

### One-time setup

1. Create a Supabase project and put its keys in `.env`:

   ```
   NEXT_PUBLIC_SUPABASE_URL=https://<project>.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon / publishable key>
   SUPABASE_SERVICE_ROLE_KEY=<service role / secret key>
   NEXT_PUBLIC_SITE_URL=https://www.grobird.in   # used in password-reset emails
   ```

2. In the Supabase dashboard open **SQL Editor**, paste `supabase/schema.sql` and run it. It creates the `posts` and `leads` tables, their security policies, the public `blog-images` storage bucket, and seeds the four launch articles.

3. Create the first admin login:

   ```
   node scripts/create-admin.mjs admin@grobird.in "a strong password"
   ```

   Run it again with the same email to change the password.

4. In Supabase **Authentication -> URL Configuration**, add `<site url>/admin/auth/callback` to the redirect URLs so password-reset links work.

### What it manages

- **Blogs** - create, edit, publish/unpublish, feature and delete articles. Content is Markdown (`##` headings become the table of contents); cover images upload to Supabase Storage. Published posts appear on `/blogs`, `/blogs/<slug>` and the home page immediately.
- **Leads** - every submission from the contact and schedule-a-call forms, with status tracking and CSV export.
- **Analytics** - link to the Google Analytics property; the site tag loads when `NEXT_PUBLIC_GA_ID` is set.

If Supabase is unreachable the public blog falls back to the four built-in articles, so the site never goes blank.
