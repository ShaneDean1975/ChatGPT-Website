# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static HTML website for **Dean & Camper P.A.**, a personal injury law firm serving the Gulf Coast (Florida & Alabama). This is a lead generation site with no build system, no framework, and no package manager -- just static HTML/CSS/JS files ready for direct deployment.

## Architecture

### No Build Process
- No npm, no bundler, no framework. Files are uploaded directly to a web host.
- CSS is embedded in `<style>` tags within each HTML file (no external stylesheets).
- JavaScript is inline in `<script>` tags (vanilla JS only).
- Each HTML page is fully self-contained.

### Key Files
- `COMPLETE-HOMEPAGE-index.html` -- Production homepage (rename to `index.html` for deployment)
- `index.html` -- Alternative/older homepage version
- `dean-camper-law.html` -- Comprehensive resource page (1.9MB)
- `Dean_Camper_Final_Intake_System/intake_schema.json` -- Canonical lead intake data schema
- `Dean_Camper_Final_Intake_System/chat_config.html` -- Chat bot configuration

### Page Types
- **Practice area pages**: `{practice-area}-injuries.html` or `-claims.html` (9 total)
- **Location pages**: `{city}_car_accident_lawyer_page.html` (5 cities)
- **Attorney profiles**: `shane-dean.html`, `chad-camper.html`
- **Contact**: `contact.html`

### Practice Area Page Template
All practice area pages follow a consistent structure: header with logo/phone numbers, hero section, introduction, stats grid (4 boxes), types/categories list, common causes, injuries, FL & AL law differences (highlighted box), compensation details, how we help, statute of limitations, why choose us, areas served (5 locations), CTA with phone numbers, footer.

## Design System

**Colors**: Primary Navy `#1a2a6c`, Gold `#fdb900`, Accent Blue `#5da9e9`, Text Dark `#0f1419`, Text Light `#5a6978`, Background `#f5f8fa`, Border `#d0dae6`, Success Green `#16a34a`

**Fonts** (Google Fonts CDN): Crimson Pro (headings), Work Sans (body)

## Conventions

- Use "Injuries" in page names for most practice areas (matches user search intent); use "Claims" for Wrongful Death and Auto Insurance (legal terminology).
- All pages must include all 4 office phone numbers: Pensacola 850-433-3077, Fort Walton Beach 850-796-3077, Destin 850-269-7105, Mobile 251-283-0577.
- Phone numbers use `tel:` protocol links for click-to-call.
- Every page includes bilingual note "Si Hablo Espanol" and "No Fees Unless We Win".
- Images use WebP format with PNG fallback and lazy loading on below-fold content.
- Lead CaseID format: `LastName_FirstName_YYYY-###`

## SEO Requirements

This site is optimized for both traditional search engines AND AI search platforms (ChatGPT, Perplexity, Claude, Google SGE). When editing pages:

- Maintain JSON-LD structured data (`<script type="application/ld+json">`) -- schemas include LegalService, Person, AggregateRating, FAQPage, BreadcrumbList.
- Keep title tags under 60 characters with location keywords.
- Keep meta descriptions under 160 characters.
- Maintain proper heading hierarchy (H1 > H2 > H3).
- Include geo-targeting meta tags (geo.region, geo.placename, geo.position).
- Include Open Graph and Twitter Card meta tags.

## Intake System

Leads flow through: Website Chat -> Qualification Logic -> Zapier Automation -> Dropbox Storage.

**Qualification rules** (all must be true): `injury_confirmed = true`, `represented = false`, accident type in practice scope, jurisdiction is FL or AL, valid phone or email.

**Routing**: Qualified leads go to `/Leads/Qualified/`, disqualified to `/Leads/Disqualified/`, no-response to `/Leads/No-Response/`. Spanish conversations preserve originals (`summary_es`) alongside English translation (`summary_en`).

## Documentation

- `START-HERE-INSTRUCTIONS.md` -- Quick deployment steps
- `SYSTEM-SPEC.md` -- Complete technical specification (intake, qualification, automation)
- `DEPLOYMENT-CHECKLIST.md` -- Pre-launch, launch day, and post-launch checklist
- `SEO-IMPLEMENTATION-GUIDE.md` -- Technical SEO details
- `PRACTICE-PAGES-GUIDE.md` -- Template for creating new practice area pages
- `CONTACT_PAGE_DOCUMENTATION.md` -- Contact page implementation details
- `PHOTO-INTEGRATION-GUIDE 3.md` -- Adding attorney photos (600x400px recommended)
