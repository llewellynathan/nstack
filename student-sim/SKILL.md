---
name: student-sim
version: 0.3.0
description: |
  Learner persona play-tester for self-directed and homeschool teens/young
  adults. Runs a curriculum package (app content spec, project guide,
  materials list) through 4-6 learner personas — with the summative task and
  rubric from the Learning Design Brief as the target. Returns a structured
  report of confusion points, vocabulary gaps, motivation drops, quit moments,
  material/tool access issues, and whether each persona would produce a
  summative artifact that meets the rubric.

  Uses backward design (UbD) Stage 2 as the evaluation anchor: the question
  is not "did the persona finish?" but "would the persona produce an artifact
  that scores 'strong' on the rubric?"

  Use when a curriculum package exists (written by /curriculum-dev) and the
  user wants to pressure-test it before piloting. This skill does not
  rewrite — it surfaces problems for /curriculum-dev to fix.
allowed-tools:
  - Read
  - Write
  - AskUserQuestion
---

## Purpose

Content designers know what they meant; learners only see what's on the
screen or the page. The gap between those two is where learning fails
silently — learners quit, lose confidence, or fake understanding. In a
classroom, a teacher notices and adjusts. At a kitchen table, nobody does.

This skill simulates that gap before real learners hit it.

It is a *dry run*, not a replacement for real learner testing. A simulated
frustrated 16-year-old is a useful fiction; an actual frustrated 16-year-old
is the only ground truth. Flag this honestly in the report.

## Prerequisite

A curriculum package from `/curriculum-dev`. At minimum:

- `app-content.md`
- `project-guide.md`
- `materials.md`

If no package exists, stop and route to `/curriculum-dev`.

## Operating Principles

**Personas are characters, not demographics.** Each persona has a name,
a voice, a motivation, a frustration threshold, a living situation, and a
relationship to self-directed learning. Play them as people, not labels.

**Stay in character.** A persona reads the app content and the project guide
as that learner would — with their attention span, vocabulary, emotional
pattern, and physical setup. Do not steelman the content in character. The
whole point is to find what breaks for this learner.

**Surface problems, don't solve them.** The output is a bug report, not a
patch. `/curriculum-dev` decides what to change. This skill names what went
wrong and why, in the persona's voice.

**Home setting is the default.** These learners work at kitchen tables, in
bedrooms, in garages, in apartments with no garage. They buy materials
online or at a local hardware store. They may not have a workbench. Design
the walkthrough around this reality.

**Be honest about simulation limits.** A simulated learner is a model of a
learner, not a learner. Call out where the persona is likely wrong or where
real field testing is the only way to know.

## The Personas

Default roster — adjust per user request. Each gets a name, age, setting,
and driving traits. The user can add, remove, or edit before the run.

1. **Javi — Self-directed 16-year-old, apartment.** Lives with a single
   parent in a two-bedroom apartment. No garage, no workbench — builds on
   the kitchen table or the floor. Parent works long hours and is supportive
   but not available to help. Has a phone and a laptop. Reads on level.
   Motivation: wants to make real things, not do more school. Frustration
   threshold: medium — will try hard if the outcome feels cool, quits if it
   feels like homework.

2. **Elise — Advanced 14-year-old, homeschool family.** Learns at home with
   a parent who manages the curriculum but isn't a subject expert. Has access
   to a garage workspace and a 3D printer. Reads above level. Finishes fast,
   wants stretch. Frustration threshold: low for boring content, high for
   hard content. Motivation: mastery and showing off what she made.

3. **Marcus — 18-year-old, gap year.** Not in school by choice. Working
   part-time. Exploring what he's good at. Limited budget — every dollar on
   materials matters. Has basic tools but nothing specialized. Reads on
   level but skims. Frustration threshold: medium — but if he feels talked
   down to, he's out. Motivation: building a skill he can use or show.

4. **Priya — 15-year-old, ESL learner.** Moved to the US two years ago.
   Conversational English is solid; academic/technical vocabulary is the
   bottleneck. Reads maybe two grade levels below in English, on-level in
   her home language. Strong conceptual thinker. Frustration threshold:
   medium (specifically: when a key term isn't defined and context doesn't
   help). Motivation: understanding and building confidence.

5. **Kai — 17-year-old with ADHD.** Homeschooled. Struggles with multi-step
   written instructions and long app screens. Hyperfocuses when hands are
   busy, disengages sharply when reading long text. Frustration threshold:
   low on walls of text, high on hands-on work. Has a parent who checks in
   but can't sit through every session. Motivation: the physical build, not
   the app content.

6. **Noor — 13-year-old, first-time maker.** Youngest in the target range.
   Has never used most of the tools in the project. Excited but cautious —
   will hesitate rather than risk breaking something. Parent is nearby and
   nervous too. Frustration threshold: medium — but if a step feels
   dangerous or unclear, both Noor and the parent freeze. Motivation:
   proving she can do grown-up things.

## Phase 1: Ingest

Read the curriculum package. Read the LDB — specifically the summative task
and rubric from Stage 2. These are the evaluation anchor: the question for
every persona is not "did they finish?" but "would their artifact meet the
rubric?" The LDB also tells you what the content is supposed to teach, which
helps distinguish "the learner was confused" from "the learner missed the
point."

Confirm via AskUserQuestion:

- Which personas to run (default: all six)
- Any persona to edit (e.g., change age, adjust setting)
- Any additional persona specific to the user's audience
- Run depth: "quick read" (scan for top issues) or "full walkthrough"
  (simulate step by step through both app content and project guide)

## Phase 2: Walkthrough Per Persona

For each selected persona, simulate two passes:

### Pass A: The App Content

Walk through `app-content.md` as the persona. For each concept block, note:

- **Status:** fine / re-reads / confused / skips / closes the app
- **Trigger:** what specifically caused friction (vocabulary, abstract
  explanation without a concrete example first, a visual they can't parse,
  a practice item that assumes something not yet taught)
- **What they do:** the persona's likely behavior (re-read, guess, skip,
  Google it, ask a parent, give up)
- **Feedback loop check:** when they get a practice item wrong, does the
  app's feedback actually help *this* learner? Or does it repeat the same
  explanation they already didn't understand?

### Pass B: The Project Guide

Walk through `project-guide.md` in order. For each step, note:

- **Status:** fine / slows down / confused / stuck / quits
- **Trigger:** what specifically caused friction (a tool they don't have
  or don't know how to use, a measurement they can't make with what they
  have, a step that assumes a workspace they don't have, vocabulary from
  the app that didn't stick)
- **What they do:** the persona's likely behavior (improvise, skip, ask
  parent, re-open the app, search YouTube, quit)
- **Setting check:** can they physically do this step in their space (e.g.,
  Javi's kitchen table, Noor's living room)?
- **Materials check:** do they have the materials and tools? Can they get
  them? Can they afford them?

Stop the walkthrough for a persona if they would quit. Note the quit point
clearly.

### Per-Persona Summary

After both passes:

- **Voice check** — one paragraph in the persona's voice reacting to the
  whole experience. First-person, present tense.
- **Motivation arc** — where engagement peaks, where it drops, and whether
  the persona would finish.
- **Vocabulary flag list** — terms they wouldn't know, citing the step or
  concept block.
- **Summative task prediction** — based on what this persona learned (and
  didn't) through app content and practice builds, predict what their
  summative artifact would look like. Score it dimension-by-dimension against
  the rubric from Stage 2. Name the specific gap causing each weak dimension.
- **Transfer check** — would this persona produce the far-transfer task from
  the LDB after finishing? If not, where did the generalizable idea get lost?
- **Access check** — any material, tool, or workspace barrier specific to
  this persona's living situation.

## Phase 3: Cross-Persona Report

Write `{project-root}/reviews/learner-sim-{slug}-{YYYYMMDD}.md` with:

```markdown
# Learner Sim Report: {title}

Generated by /student-sim on {date}
Personas run: {list}
Curriculum version: {file mtime or git hash if available}

## Top Issues (ranked by severity × breadth)

### Issue 1: {short name}
Severity: {low/medium/high}
Personas affected: {names}
Where: {app concept block / project guide step}
What happens: {specific description}
Why: {root cause hypothesis}
Suggested owner: /curriculum-dev / /learning-architect / /maker-safety

### Issue 2: ...

## Per-Persona Summaries
### Javi (Self-directed 16, apartment)
- Finishes? {yes/no, where they would quit}
- Biggest friction: {one-line}
- Vocabulary flags: {count, worst offenders}
- Access barriers: {material/tool/space issues}
- Motivation arc: {1-2 sentences}

### Elise (Advanced 14, homeschool)
...

(repeat for each persona run)

## What's Likely Working
{specific strengths — name the concept block or step and why it lands}

## Simulation Caveats
- This is a model of learners, not learners. {specific assumptions that
  might be wrong for the user's actual audience}
- Personas not run: {list, with why if relevant}
- Recommend: field test with {specific learner profile} before shipping.

## Suggested Handoffs
- /curriculum-dev: {specific rewrites, scaffolding changes, or access fixes}
- /learning-architect: {only if a finding implies the underlying design
  is wrong, not just the execution}
- /maker-safety: {only if safety-relevant — especially for Noor and
  younger/less-experienced profiles}
```

## Phase 4: Anti-Sycophancy Check

Before delivering the report, verify:

- You did not soften findings to be kind. Severity is based on learning
  impact, not tone.
- You named at least one "what's working" item so the report is balanced
  and actionable.
- You did not invent persona behavior that isn't grounded in the trait
  descriptions.
- You checked material access and workspace constraints, not just
  comprehension.

## Handoff

Tell the user:

- The report is at `{path}`.
- Top 3 issues in one or two sentences each.
- Recommended next step: route specific findings to `/curriculum-dev` (or
  back to `/learning-architect` if design-level issues surfaced).
- Reminder that simulation is not a substitute for field testing — name
  one specific learner profile to pilot with.

## What This Skill Is NOT

- It does not rewrite curriculum. That's `/curriculum-dev`.
- It does not change the underlying design. That's `/learning-architect`.
- It does not replace real learners. Real pilots must still happen.
- It does not certify accessibility — persona-based simulation surfaces
  likely issues, but formal accessibility review is out of scope.
