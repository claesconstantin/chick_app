# Claude Code Instructions: Chickentrepreneur

## CONTEXT
- Author: Constantin Claes
- GitHub repo: https://github.com/claesconstantin/chick_app
- GitHub username: claesconstantin
- Deployed at: https://claesconstantin.github.io/chick_app

---

## TECH STACK
- Astro (static site generator)
- Markdown for articles
- GitHub Pages for hosting (free)
- GitHub Actions for auto-deploy on push to main

---

## STEP 1: CONFIGURE ASTRO

Update `astro.config.mjs` to:

```js
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://claesconstantin.github.io',
  base: '/chick_app',
});
```

---

## STEP 2: CREATE GITHUB ACTIONS DEPLOY WORKFLOW

Create file at `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: npm
      - run: npm install
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist
      - id: deployment
        uses: actions/deploy-pages@v4
```

---

## STEP 3: APPLY BRANDING

### Colors
- Background: `#FDFAF4`
- Text primary: `#2C2416`
- Text secondary: `#7A6A52`
- Text muted: `#B8A88A`
- Accent/gold: `#C4995A`
- Accent light: `#F5EDDA`
- Border: `#E8D5A3`

### Fonts
Import from Google Fonts:
- Headings: Cormorant Garamond (400, 500, 600, italic)
- Body: DM Sans (300, 400, 500)

### Global CSS
Create `src/styles/global.css` with:
- Background `#FDFAF4` on body
- Font: DM Sans for body text, Cormorant Garamond for all h1/h2/h3
- All links in `#C4995A`, no underline
- Max content width: 720px, centered
- No bold heavier than font-weight 500

---

## STEP 4: BUILD THE HOMEPAGE (`src/pages/index.astro`)

### Nav
- Left: 🐣 Chickentrepreneur (Cormorant Garamond, 18px)
- Right: two buttons only
  - "About" button (pill, background `#F5EDDA`, border `#E8D5A3`) → links to `/chick_app/about`
  - "Learn ↓" button (ghost pill) → dropdown with 5 categories:
    - 🧠 Mindset
    - 🗺️ Frameworks & GTM
    - 🛠️ Tools & Tech
    - 💼 Career
    - 🤝 Soft Skills
- Nav border-bottom: `0.5px solid #E8D5A3`
- Dropdown toggles on click, closes on outside click

### Hero
- Small pill tag: "Twice a month · Pure signal"
- H1 (Cormorant Garamond 48px): "Learn more than you earn."
- Subline (DM Sans 15px, `#7A6A52`): "Fresh eyes on the startup world, seen from the inside."
- Search bar (pill shape, border `#E8D5A3`, background `#FAF7F0`):
  - Placeholder: "What do you want to learn today?"
  - Muted caramel tones, no black contrast
- Learning timer widget:
  - Label: "I have"
  - Three preset buttons: 5 min / 10 min / 20 min (10 min active by default)
  - Label: "to learn"
  - Timer display in Cormorant Garamond, color `#C4995A`
  - Timer counts down when a preset is selected and started
- Below timer: small line "1 minute of reading = 1 minute of learning." in `#B8A88A`

### Concept map placeholder
- Section label: "Concept map" (uppercase, `#C4995A`, 11px)
- Soft container with sample concept nodes as pills
- Label: "Interactive concept graph · coming in v2"

### Categories grid
- Section label: "Explore by category"
- 3-column grid, 5 cards + 1 dashed "more coming" card:
  - 🧠 Mindset / Psychology · Philosophy
  - 🗺️ Frameworks & GTM / Mental models · Growth
  - 🛠️ Tools & Tech / Stack · Productivity
  - 💼 Career / Equity · Salary · Path
  - 🤝 Soft Skills / Communication · Leadership
  - dashed card: "More coming every week"

### Latest articles
- Section label: "Latest articles"
- List of article rows from `src/content/blog/` sorted by date descending
- Each row: category tag (pill) + title + read time (right aligned)
- Border between rows: `0.5px solid #E8D5A3`

### Footer
- Centered: "🐣 Chickentrepreneur · by Constantin Claes · Twice a month"
- Border-top: `0.5px solid #E8D5A3`

---

## STEP 5: BUILD THE ABOUT PAGE (`src/pages/about.astro`)

### Content in order

1. Eyebrow: "About" (uppercase, `#C4995A`, 11px)
2. H1: "Why I'm doing this."
3. Lead paragraph: "People keep asking me the same questions. How do you get into a startup? What should I expect? Is it worth leaving corporate? What does equity actually mean?"
4. Body: "I don't have all the answers. But I've been living it, and I keep notes."
5. Body: "Most of what I share feels obvious to me now. It wasn't six months ago. That's exactly why it's worth writing down."
6. Pull quote (left border 2px `#E8D5A3`, Cormorant Garamond italic 22px): "For a long time I learned before I acted. At some point that became a brake. So I flipped it: ship first, find the pattern after. What you'll find here are the patterns I pulled out of the mess."
7. Body: "Chickentrepreneur is where I share what I've learned from being on the ground at tech startups in Europe: the frameworks that hold up, the mindset shifts nobody tells you about, the career mechanics most people figure out too late, and the tools that genuinely move the needle."
8. Body: "This is not a guru's take. It's a fresh pair of eyes, shared in real time. If you're thinking about joining a startup, just started one, or moved from corporate and feel like you're drinking from a firehose: this is for you."

### Timeline section
Label: "The path so far"

6 timeline items with dot + vertical line connector:

| Period | Role | Company | Description | Tag |
|---|---|---|---|---|
| University | President, Junior Consulting Enterprise | LSMConseil · UCLouvain · Business Engineering | First taste of team dynamics, management and leadership. Soft skills I still use every day, now fully translated to the startup world. | Soft skills · Leadership |
| First venture | Co-founder | Posted · MarTech, pre-AI | Built a content repurposing tool with Thibaut. Pre-AI, figured things out the hard way: PMF hunting, no-code building, bootstrapping decisions. | Entrepreneurship · GTM · Product |
| First job | Founder Associate · CEO Right-Arm | Tapio · Carbon accounting software | Worked directly with the CEO across every function: ops, admin, HR, finance, strategy, team dynamics. The ultimate multi-hat role. | Operations · Strategy |
| Same company, new role | Growth Marketeer | Tapio | Promoted internally. Learned GTM from scratch: campaigns, frameworks, and the bridge between sales and marketing. | GTM · Growth · Marketing |
| Founded in parallel | Co-founder | FirstMovers · Belgium | The first and only community of young startup employees in Belgium. Workshops, events, mutual learning. A place where I learn as much as I teach. | Community · Network |
| Now | Customer Success Manager | Karomia · AI · Sustainability | Technical CSM role: front door to clients, bridge to product, sales and tech. Learning fast about product thinking, managing expectations, and building with AI on the ground. | AI · Product · Customer success |

### Sources grid
Label: "Where the knowledge comes from"

2x2 grid:
- 🐣 FirstMovers / A community of ambitious young people navigating the same questions.
- 🧪 Field experiments / Testing things, failing, adjusting. In real time, not in theory.
- 📖 Reading obsessively / Newsletters, books, frameworks, first-principles thinking.
- 🤝 People further ahead / Founders, operators, career-changers. Everyone has a lesson.

### CTA box
Background `#F5EDDA`, border `#E8D5A3`, border-radius 12px:
- Bold line: "Twice a month. Pure signal. 1 min of reading = 1 min of learning."
- Sub: "Start reading or pick what you want to learn first."
- Button: "Start learning →" (background `#C4995A`, color `#FAF7F0`, pill shape)

### Signature
- Name: Constantin Claes (Cormorant Garamond 20px)
- Role: Co-founder of FirstMovers · CSM @ Karomia · 🐣

---

## STEP 6: ARTICLE LAYOUT (`src/layouts/ArticleLayout.astro`)

- Same nav and footer as homepage
- Article header: category tag + title (Cormorant Garamond 36px) + read time + date
- Body: DM Sans 16px, line-height 1.8, max-width 680px centered
- Internal links: any word in the article body that matches the title or slug of another existing article should be highlighted in `#C4995A` and linked automatically
- At the bottom of each article: "Related concepts" section showing up to 3 linked articles based on shared category or tags

---

## STEP 7: CONTENT SCHEMA (`src/content/config.ts`)

```ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: z.enum(['mindset', 'frameworks', 'tools', 'career', 'soft-skills']),
    tags: z.array(z.string()),
    readTime: z.number(),
  }),
});

export const collections = { blog };
```

---

## STEP 8: CREATE 3 SAMPLE ARTICLES

### Article 1: `src/content/blog/surface-luck.md`

```markdown
---
title: "Surface luck: Action × Communication × People you meet"
description: "Luck isn't random. It's the output of three variables you can control."
pubDate: 2026-03-10
category: frameworks
tags: ["luck", "networking", "career", "action"]
readTime: 4
---

Your career is a game of surface luck.

Not blind luck. Surface luck.

The formula: Action × Communication × People you meet.

The more you act, the more you talk about what you're doing, and the more people you put yourself in front of — the more "lucky" you become. It's not magic. It's surface area.

Most people wait for luck to find them. They do the work quietly, hope someone notices, and wonder why nothing happens.

The ones who move fast do the opposite. They act visibly. They talk about what they're building before it's finished. They show up in rooms where the right people are.

Action without communication is invisible work. You can be the best operator in the room and nobody knows it.

Communication without action is noise. Talking about things you haven't done erodes trust fast.

People are the multiplier. Every new person you meet is a new probability node. Some will open doors. Most won't. But the more nodes, the higher the odds.

The startup world rewards surface luck more than almost any other environment. Because things move fast, decisions are made informally, and relationships compound.

So the question isn't "how do I get lucky?"

It's: how do I increase my surface area today?
```

### Article 2: `src/content/blog/speed-vs-velocity.md`

```markdown
---
title: "Speed vs. velocity: why direction matters more than pace"
description: "Going fast only makes sense if you're going the right way."
pubDate: 2026-03-01
category: mindset
tags: ["focus", "strategy", "direction", "productivity"]
readTime: 3
---

We confuse speed with velocity all the time.

Speed is how fast you're moving. Velocity is speed in a specific direction.

In physics, speed is a scalar. Velocity is a vector.

The difference matters more than you think.

Going fast in the wrong direction doesn't bring you closer to your destination. It takes you further away, faster.

I see this constantly in startups. Teams sprinting. Shipping fast. Moving with urgency. But nobody stopped to ask: are we going the right way?

This is why strategy isn't optional. It's the direction component of your velocity.

Without it, you have speed. Lots of energy, lots of motion, very little progress.

The best operators I've met are not the fastest. They're the most directional. They move with purpose. They say no to things that don't move the needle. They pause to recalibrate before sprinting again.

Speed feels productive. Velocity is productive.

Before you optimize for pace, make sure you've locked in direction.
```

### Article 3: `src/content/blog/99-percent-done.md`

```markdown
---
title: "99% done is not done: the last mile of execution"
description: "Nothing is done until it's communicated and adopted."
pubDate: 2026-02-15
category: soft-skills
tags: ["communication", "execution", "teamwork", "adoption"]
readTime: 3
---

One of the sharpest things I learned at Tapio:

99% done is not done.

Nothing is finished until it's communicated — and adopted.

You can build the perfect process. Write the cleanest doc. Ship the most useful feature. But if nobody knows about it, uses it, or changes their behavior because of it — it didn't happen.

This sounds obvious. It isn't.

Most people treat communication as the last 1%. The thing you do after the real work. The email you send when it's done.

But communication is part of the work. It's what converts effort into impact.

I've seen great strategies die because the person who built them assumed everyone would just get it. I've seen simple tools transform teams because someone took the time to explain them well, repeatedly, until the behavior changed.

The adoption gap is where most execution fails. Not in the doing. In the landing.

So before you mark something as done, ask: does everyone who needs to know, know? Has anything actually changed because of this?

If not, you're at 99%.

Finish the job.
```

---

## STEP 9: BUILD AND DEPLOY

```bash
npm run build
```

Fix any errors, then:

```bash
git add .
git commit -m "feat: full chickentrepreneur site with branding, homepage, about, articles"
git push
```

---

## STEP 10: VERIFY

Confirm the site is live at `https://claesconstantin.github.io/chick_app` and all pages render correctly:

- `/chick_app/` — homepage
- `/chick_app/about` — about page
- `/chick_app/blog/surface-luck` — article 1
- `/chick_app/blog/speed-vs-velocity` — article 2
- `/chick_app/blog/99-percent-done` — article 3
