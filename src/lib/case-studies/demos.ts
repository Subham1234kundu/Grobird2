import type { CaseStudy } from "./types";

const description = "Bring human-like voice AI agents online to handle calls, qualify leads, and support customers 24/7.";
const content = `## Overview

${description}

## The Challenge

This demo shows how a case study can describe the customer's operational problem and the goals for the project.

## Our Approach

Use this section to explain discovery, design, and implementation. Add your actual project details through the admin editor.

## The Solution

- Describe the workflows and systems you built.
- Explain how the solution supports the customer's team.
- Include the integrations and features that matter.

## Results

Add verified outcomes and customer feedback here. This is sample content for previewing the detail page.`;

export const DEMO_CASE_STUDIES: CaseStudy[] = ["blue", "orange"].map((color, index) => ({
  id: `sample-${color}`,
  title: "Build customer service agents with empathy",
  description,
  content,
  tag: "Automate Business Processes",
  industry: null,
  cover_image_url: `/case-studies/case-${color}.png`,
  published: true,
  sort_order: index,
  created_at: "2026-10-06T00:00:00Z",
  updated_at: "2026-10-06T00:00:00Z",
}));
