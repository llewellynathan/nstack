---
name: learning-platform
version: 0.1.0
description: |
  Build system for a hybrid learning platform. App teaches concepts to
  self-directed teens and young adults; physical making projects are the
  assessment. Uses backward design (UbD). Routes to specialized skills
  for education content design, app development, and quality assurance.
allowed-tools:
  - Bash
  - Read
  - Write
  - Edit
  - AskUserQuestion
  - WebSearch
---

## Skill Routing

When the user's request matches one of these patterns, invoke the
corresponding skill instead of answering directly.

### Education Layer (content design)

- Learning objectives, pedagogy, "design a lesson," "I want to teach X,"
  "how should this be taught," "is this unit any good," backward design,
  summative task, rubric design
  → invoke `/learning-architect`

- Lesson content, project guides, "write the module," "build the content,"
  app content spec, materials list, "turn this into a lesson"
  → invoke `/curriculum-dev`

- "Would a learner understand this?", pressure-test, "test this lesson,"
  persona walkthrough, "run the personas," confusion check
  → invoke `/student-sim`

- Standards alignment, NGSS, ISTE, Common Core, transcript, portfolio,
  state reporting, "what standards does this hit"
  → invoke `/standards-check`

- Tool safety, materials review, age-appropriate, "is this safe,"
  substitutions, PPE, ventilation, "review for safety"
  → invoke `/maker-safety`

### Product Layer (app building)

- Product ideas, "is this worth building," brainstorming, feature scoping
  → invoke `/office-hours`

- Scope check, ambition, "think bigger," product strategy
  → invoke `/plan-ceo-review`

- UI/UX review, design audit, visual polish, cognitive load check
  → invoke `/plan-design-review`

- Architecture review, technical design, "lock in the plan"
  → invoke `/plan-eng-review`

- Code review, "check my diff," pre-landing review
  → invoke `/review`

- QA, "test the site," find bugs, dogfood a user flow
  → invoke `/qa`

- Ship, deploy, push, create PR
  → invoke `/ship`

- Update docs after shipping
  → invoke `/document-release`

- Weekly retro, "what did we ship"
  → invoke `/retro`

### Utility

- Bugs, errors, "why is this broken," 500 errors
  → invoke `/investigate`

- Safety mode, careful mode
  → invoke `/careful` or `/guard`

- Restrict edits to a directory
  → invoke `/freeze` or `/unfreeze`

- Save progress, checkpoint, resume
  → invoke `/checkpoint`

- Code quality, health check
  → invoke `/health`

## Education Pipeline Sequence

The education skills form a backward-design pipeline. Enforce this order:

1. `/learning-architect` — Stage 1 (desired results) + Stage 2 (summative
   task + rubric). Produces a Learning Design Brief (LDB).
2. `/curriculum-dev` — Stage 3 (learning plan). Requires the LDB. Produces
   app content spec, project guide, materials list.
3. After `/curriculum-dev`, the following run in any order:
   - `/student-sim` — persona walkthroughs against the content
   - `/standards-check` — alignment mapping for transcripts/portfolios
   - `/maker-safety` — safety review for home settings

**Hard gates:**
- `/curriculum-dev` will not start without an LDB containing a summative
  task and rubric.
- `/student-sim`, `/standards-check`, and `/maker-safety` will not start
  without a curriculum package from `/curriculum-dev`.
- If a review skill finds a design-level problem (not just an execution
  problem), route back to `/learning-architect`, not `/curriculum-dev`.

## Methodology Reminder

This system uses backward design (Understanding by Design, Wiggins &
McTighe). The physical artifact the learner makes IS the assessment.
All content traces backward from the summative task. See ETHOS.md for the
full philosophy.

When any conversation touches learning content, pedagogy, or curriculum:
- Enforce the UbD sequence (desired results → assessment → learning plan).
- If someone designs content before the summative task exists, flag it.
- The rubric evaluates the artifact, not a quiz.
- The learner is mostly alone. The app is the instructor.

## Writing Standards

When producing learner-facing content (applies to all skills):

- Plain language, short sentences, concrete verbs.
- Define every term on first use.
- Never use "simply," "just," "easy," "obviously," "of course."
- Concrete example before abstract principle.
- One new concept per block.
- Project guides work offline (printable, no screen required).
- Every step has a self-check.
- `[IMAGE]` placeholders where visuals matter.

See CLAUDE.md for the full writing rules and evidence discipline.
