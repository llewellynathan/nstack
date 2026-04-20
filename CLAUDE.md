# Project: Learning Platform Build System

A hybrid learning platform for self-directed teens and young adults. The app
teaches concepts (video, interactive, embedded practice). Physical making
projects are the application and assessment layer. Backward design (UbD)
is the methodology: desired results → assessment → learning plan.

## Architecture

```
app/                    # Web/mobile app (React/Next.js)
├── src/
│   ├── components/     # UI components
│   ├── modules/        # Learning modules (concept content, practice, mastery gates)
│   └── pages/          # App pages
curriculum/             # Content authored by education skills
├── {unit-slug}/
│   ├── app-content.md  # Concept sequence, practice items, feedback logic
│   ├── project-guide.md # Printable, standalone project instructions
│   └── materials.md    # Bill of materials with substitutions
design-docs/            # Learning Design Briefs from /learning-architect
├── learning-brief-{slug}-{date}.md
reviews/                # Output from review skills
├── learner-sim-{slug}-{date}.md
├── standards-map-{slug}-{date}.md
└── safety-review-{slug}-{date}.md
```

## Methodology: Backward Design (UbD)

Every learning experience follows three stages (Wiggins & McTighe):

**Stage 1 — Desired Results** (`/learning-architect`): What can the learner
do afterward? What transfers? What's cut?

**Stage 2 — Assessment Evidence** (`/learning-architect`): The physical
artifact the learner makes, plus the rubric that evaluates it. Designed
BEFORE any content. The artifact IS the assessment — no separate quiz.

**Stage 3 — Learning Plan** (`/curriculum-dev`): App content and project
steps, all designed backward from the summative task.

## The Audience

- **Teens and young adults** (roughly 13-20)
- **Homeschooled or self-directed** — no classroom, no trained teacher
- **Learning at home** — kitchen table, garage, apartment
- **The app is the instructor** — parent is logistics/safety, not content
- **The physical project is the assessment** — the artifact they make,
  evaluated against the rubric

## Skill Pipeline

### Education Layer (content design — Cowork)

```
/learning-architect    Stage 1 + 2: desired results, summative task, rubric
        ↓
/curriculum-dev        Stage 3: app content spec, project guide, materials
        ↓
/student-sim           Persona walkthrough, predict artifact quality
/standards-check       Map rubric to NGSS/ISTE/CCSS for portfolios
/maker-safety          Safety review for home settings
```

### App Design Layer (product design — Cowork)

```
/ux-architect          Flow and interaction design — forcing questions, state maps, edge states
/app-critique          Persona-based UX review — 6 personas test flows for friction and accessibility
/goal-design           Motivation and progress system — feedback loops, stall recovery, autonomy
```

### Product Layer (app building — Claude Code)

```
/office-hours          Product discovery (role TBD — may merge with learning-architect)
/plan-ceo-review       Scope and ambition check
/plan-design-review    UI/UX review (cognitive load, accessibility, reading level)
/plan-eng-review       Architecture review
/review                Code review
/qa                    QA testing (includes learner persona scenarios)
/ship                  Release engineer
/retro                 Retrospective
```

### Shared

```
/investigate           Systematic debugger
/careful, /guard       Safety guardrails
/freeze, /unfreeze     Edit lock
/checkpoint            Save/resume
/health                Code quality
/browse                Browser automation
/learn                 Cross-session memory
```

## Skill Routing

See SKILL.md for the full routing table. Key routes:

**Education layer:**
- Learning objectives, pedagogy, "design a lesson" → `/learning-architect`
- Lesson content, project guides, "write the module" → `/curriculum-dev`
- "Would a learner understand this?", pressure-test → `/student-sim`
- Standards alignment, transcripts, state reporting → `/standards-check`
- Tool safety, materials review, age-appropriate → `/maker-safety`

**App design layer:**
- "How should this feature work," flow design, edge states → `/ux-architect`
- "Test this design with users," UX review, accessibility → `/app-critique`
- Motivation design, progress system, stall recovery → `/goal-design`

## Commands

```bash
# App development
npm install             # install dependencies
npm run dev             # development server
npm run build           # production build
npm run test            # run tests
npm run lint            # lint

# Content pipeline (run from project root)
# These are the education skills — invoke as /skill-name in Claude Code
```

## Writing Rules (for content)

These apply when any skill writes learner-facing content:

- **Reading level:** Plain language. Short sentences. Concrete verbs.
  Roughly 8th-grade reading level unless the LDB says otherwise.
- **Define every term** the first time it appears. One new term per concept
  block.
- **Never use:** "simply," "just," "easy," "obviously," "of course."
  They gaslight struggling learners.
- **Concrete before abstract.** Example first, principle second.
- **One concept per block.** Cognitive load is a budget.
- **The project guide works offline.** A learner should be able to print it
  and build in a garage without a screen.
- **Every step has a self-check.** "If your joint is flush, move on. If
  there's a gap wider than a playing card, see Stuck?"
- **`[IMAGE]` placeholders are first-class.** Mark them where visuals matter.
  They're not decoration.

## Safety Rules (for maker content)

- Every tool gets explicit handling instructions, not "be careful."
- Temperature, PPE, ventilation — all specific, all realistic for home.
- Every tool has a less-experienced substitute named.
- No step assumes the learner has used the tool before.
- No step assumes a parent can demonstrate proper technique.
- Summative build sections get extra scrutiny — less scaffolding means more
  room for error.

## Evidence Discipline

When any skill cites learning science or safety guidance:

- "Research shows..." only with a specific study nameable on request.
- "Research suggests..." for inference across multiple studies.
- "A reasonable hypothesis is..." for extrapolation, flagged as such.
- "Best practice suggests..." ≠ "Research demonstrates..."
- Never fabricate effect sizes, percentages, or sample sizes.
- If asked for a source and you can't produce one: say so immediately.

## Builder Philosophy

See ETHOS.md for the full philosophy. Core principles:

1. Backward design is non-negotiable
2. The artifact is the assessment
3. The learner is on their own
4. Explicit over implicit
5. Performance beats exposure
6. Scaffolds fade
7. Engagement is a means, not an outcome
8. Cognitive load is a budget
9. Boil the lake (do the complete thing)
10. Search before building
11. Build for yourself
12. Autonomy is the goal

## Deploy

Deploys to Vercel (app) / Netlify (alternate). Push to main triggers deploy.

```bash
vercel --prod           # manual production deploy
```
