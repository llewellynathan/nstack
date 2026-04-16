# nstack-education (Cowork plugin)

Five education content design skills packaged as a Cowork plugin. These are
Cowork-compatible adaptations of the same skills in the main `nstack` repo —
simplified frontmatter, no Bash, Read/Write/AskUserQuestion/WebSearch only.

Cowork handles the **education layer**: curriculum development, content review,
research, standards mapping, persona testing, safety review. Pure knowledge
work, no terminal. Claude Code (using the main `nstack` skills) handles the
**product layer**: app building, QA, deploy.

The bridge is a shared project folder. Cowork writes curriculum content and
design docs; Claude Code reads them when building app features.

## Skills

| Skill | UbD stage | Purpose |
|-------|-----------|---------|
| `/learning-architect` | Stage 1 + 2 | Desired results + summative task & rubric. Produces a Learning Design Brief. |
| `/curriculum-dev` | Stage 3 | App content spec + project guide + materials list, backward from the summative task. |
| `/student-sim` | Post-Stage 3 | Persona walkthrough (Javi, Elise, Marcus, Priya, Kai, Noor). Predicts artifact quality per rubric dimension. |
| `/standards-check` | Post-Stage 3 | Maps rubric dimensions to NGSS / ISTE / CCSS for transcripts and portfolios. |
| `/maker-safety` | Post-Stage 3 | Safety review for home settings. Flags the summative build as highest risk. |

## Pipeline

```
/learning-architect   (Stage 1 + Stage 2)
         │
         │  produces: Learning Design Brief
         ▼
/curriculum-dev       (Stage 3)
         │
         │  produces: app-content.md, project-guide.md, materials.md
         ▼
    ┌────┴─────┬──────────────┐
    ▼          ▼              ▼
/student-sim  /standards-check  /maker-safety
(personas)    (alignment map)   (safety review)
```

## Shared project folder

Cowork writes all artifacts to a project folder with this structure:

```
{project-folder}/
├── curriculum/
│   └── {unit-slug}/
│       ├── app-content.md
│       ├── project-guide.md
│       └── materials.md
├── design-docs/
│   └── learning-brief-{slug}-{date}.md
├── reviews/
│   ├── learner-sim-{slug}-{date}.md
│   ├── standards-map-{slug}-{date}.md
│   └── safety-review-{slug}-{date}.md
└── research/
    └── (learning science notes, competitor analysis, etc.)
```

Claude Code reads these when building app features. The two layers stay
synchronized through the filesystem.

## Mobile dispatch

Cowork's mobile dispatch makes the review skills especially useful from a
phone — queue a task like "run /student-sim on the circuits unit" and review
results later. Good fits:

- `/student-sim` — queue persona walks after authoring a new unit
- `/standards-check` — queue the alignment map before a homeschool report cycle
- `/maker-safety` — queue the safety pass before a new project ships

## Install

Package this directory as a Cowork plugin and install it through Cowork's
plugin system. The plugin name is `nstack-education`.

## Source

This plugin is maintained in the [nstack](https://github.com/llewellynathan/nstack)
repo at `cowork-plugins/nstack-education/`. The same skills in their
Claude Code form (with Bash support, template variables, and shared preamble)
live at the repo root.

If you update a skill in one place, update it in both. The Cowork versions are
intentionally simpler — they exist so the skill runs in Cowork's pure-knowledge
environment.
