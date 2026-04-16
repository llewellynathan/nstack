# nstack

**Build system for a hybrid learning platform.**

The platform teaches design, problem-solving, and engineering/maker skills to
self-directed teens and young adults (13-20) who are homeschooled or learning on
their own. The app teaches concepts (video, interactive, embedded practice).
Physical making projects are the application and assessment layer. There is no
classroom, no trained teacher — the app is the instructor.

nstack turns Claude Code into a team of specialists for building this kind of
product: a learning architect who designs backward from the summative task,
a curriculum developer who traces every piece of app content to the rubric,
a student-sim who pressure-tests the flow with six personas, a standards mapper
for transcripts and portfolios, a maker-safety reviewer for home settings, plus
all the usual product-building roles (CEO, designer, engineer, QA, reviewer,
release engineer).

## Philosophy

- **Backward design (Understanding by Design).** Stage 1 (desired results) +
  Stage 2 (assessment — the physical artifact IS the assessment) come from
  `/learning-architect`. Stage 3 (learning plan) comes from `/curriculum-dev`.
  All content traces backward from the summative task.
- **The artifact is the assessment.** No separate app-based test. The learner
  makes something, and that something is evaluated against a rubric.
- **The learner is on their own.** Design for independence, not dependence.
  Parents handle logistics and safety, not instruction.
- **Home setting is the default.** Kitchen table, apartment, garage — not a
  school shop.

See `ETHOS.md` for the full principles.

## Education skills

| Skill | UbD stage | Purpose |
|-------|-----------|---------|
| `/learning-architect` | Stage 1 + 2 | Desired results + summative task & rubric. Produces a Learning Design Brief. |
| `/curriculum-dev` | Stage 3 | App content spec + project guide + materials list, backward from the summative task. |
| `/student-sim` | Post-Stage 3 | Persona walkthrough (Javi, Elise, Marcus, Priya, Kai, Noor). Predicts artifact quality per rubric dimension. |
| `/standards-check` | Post-Stage 3 | Maps rubric dimensions to NGSS / ISTE / CCSS for transcripts and portfolios. |
| `/maker-safety` | Post-Stage 3 | Safety review for home settings. Flags the summative build as the highest-risk step. |

## Product skills (app building)

All the usual workflow: `/office-hours`, `/plan-ceo-review`, `/plan-eng-review`,
`/plan-design-review`, `/design-consultation`, `/design-shotgun`, `/design-html`,
`/design-review`, `/review`, `/qa`, `/qa-only`, `/ship`, `/land-and-deploy`,
`/canary`, `/investigate`, `/cso`, `/autoplan`, `/retro`, `/browse`,
`/connect-chrome`, `/setup-browser-cookies`, `/setup-deploy`, `/document-release`,
`/careful`, `/freeze`, `/guard`, `/unfreeze`, `/checkpoint`, `/health`, `/learn`,
`/benchmark`, `/nstack-upgrade`.

See `SKILL.md` for the routing table.

## Pipeline

```
/learning-architect (Stage 1: Desired Results + Stage 2: Assessment Design)
         │
         │  produces: Learning Design Brief with summative task + rubric
         ▼
/curriculum-dev (Stage 3: Learning Plan)
         │
         │  produces: app-content.md, project-guide.md, materials.md
         │  (all traced backward from the summative task)
         ▼
    ┌────┴─────┬──────────────┐
    ▼          ▼              ▼
/student-sim  /standards-check  /maker-safety
(personas)    (alignment map)   (safety review)
```

## Install

**Requirements:** [Claude Code](https://docs.anthropic.com/en/docs/claude-code),
[Git](https://git-scm.com/), [Bun](https://bun.sh/) v1.0+.

nstack is a Claude Code-only skill system. Other hosts are not supported.

```bash
git clone https://github.com/llewellynathan/nstack.git ~/.claude/skills/nstack
cd ~/.claude/skills/nstack
./setup
```

## Origins

nstack is a fork of [gstack](https://github.com/garrytan/gstack) by Garry Tan,
adapted for education content design instead of general product building. The
core philosophy — backward design, evidence-based claims, explicit over implicit —
carries over; the specialist roles and pipelines are tuned for a learning
platform.

MIT license, same as the original.
