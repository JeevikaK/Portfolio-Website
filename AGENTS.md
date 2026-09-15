# AGENTS.md

## Design & UI

* Always maintain the existing website's fonts, typography, colors, spacing, and overall visual language.
* Reuse existing styles, components, and design patterns before introducing new ones.
* New UI should feel like a natural part of the existing website.
* Always review the rendered UI after making visual changes, including responsiveness and overall consistency.

### Visual Reference Feedback Loop

When I provide a UI reference image:

1. Analyze its layout, spacing, typography, proportions, colors, and visual details.
2. Implement the design while maintaining the website's existing visual identity.
3. Render and compare the result against the reference.
4. Identify the biggest differences and correct them.
5. Repeat this **implement → compare → refine** process up to **5 times**, stopping early when the result closely matches the reference.

Do not consider a reference-based UI task complete without visually verifying the result.

## Code Quality

* Keep code minimal, clean, readable, and maintainable.
* Avoid unnecessary abstractions, dependencies, components, and duplicate code.
* Reuse existing utilities and components where appropriate.
* Follow the project's existing architecture and conventions.
* Prefer simple solutions over over-engineering.

## SEO & Performance

Treat SEO and performance as core requirements.

* Use semantic HTML, correct heading hierarchy, meaningful metadata, canonical URLs, and structured data where appropriate.
* Ensure important dynamic content is crawlable and indexable.
* Handle images correctly with descriptive alt text, optimized formats/sizes, responsive loading, and appropriate lazy loading.
* Maintain strong Core Web Vitals and avoid unnecessary JavaScript or layout shifts.
* Consider SEO when choosing between static generation, server rendering, and client rendering.
* Maintain sitemap and robots configuration where appropriate.
* Build for strong technical SEO and search visibility without using manipulative SEO practices.

## Teach Me

I want to learn from the changes being made.

For meaningful engineering decisions, briefly explain:

* **What** you changed.
* **Why** you chose that approach.
* The **advantages and trade-offs**.
* Why it fits this project.
* Relevant system-design concepts involving architecture, rendering, data flow, caching, performance, scalability, SEO, or maintainability.

Keep explanations practical and concise. Don't explain trivial code changes.

When multiple approaches exist, mention the important alternatives and why you selected one.

Do not introduce unnecessary complexity just for teaching purposes. Prefer the simplest appropriate solution and explain when a more advanced approach would become useful.

## Priority

When requirements conflict, prioritize:

1. My explicit instructions.
2. The provided design/reference.
3. Consistency with the existing website.
4. User experience, accessibility, and SEO.
5. Performance and maintainability.
6. Simplicity.
