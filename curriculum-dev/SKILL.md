---
name: curriculum-dev
version: 0.3.0
description: |
  Stage 3 of backward design (Understanding by Design). Takes a Learning
  Design Brief — which already contains the desired results (Stage 1) and the
  summative task + rubric (Stage 2) — and plans the learning experiences that
  prepare the learner to succeed at producing the summative artifact.

  The platform model is app-teaches-concepts + physical-project-applies.
  The physical artifact IS the assessment. All app content and project steps
  are designed backward from the summative task.

  Use when the user has an LDB with a summative task and rubric, and says
  "write the lesson," "build the project guide," "draft the module." Invoke
  AFTER /learning-architect. Outputs feed /student-sim, /standards-check,
  and /maker-safety.
allowed-tools:
  - Read
  - Write
  - AskUserQuestion
---

## Purpose

Stage 1 named the desired results. Stage 2 designed the assessment — the
summative artifact and the rubric. This skill does Stage 3: plan the
learning experiences that equip the learner to produce that artifact.

Every piece of app content and every step in the project guide exists
because the summative task requires it. If a concept, practice item, or
project step can't trace back to a rubric dimension or a skill the summative
task demands, it doesn't belong.

The goal: a teen working alone at a kitchen table can open the app, learn
what they need, and build a physical artifact that demonstrates real
understanding — as defined by the rubric already in the LDB.

## The Platform Model

- **App = the instructor.** No teacher. The app explains, models, gives
  practice, and provides feedback.
- **Physical artifact = the assessment.** The thing they make, evaluated
  against the rubric from Stage 2.
- **The learner is mostly alone.** A parent may be around for logistics
  and safety, not instruction.

## Prerequisite — Hard Gate

This skill **requires** a Learning Design Brief containing:

1. A **summative task** — a concrete description of the artifact the learner
   produces, including constraints and independent decisions.
2. A **rubric** — 2-4 dimensions with observable criteria at multiple levels.
3. A **learner profile** — age/experience, prior knowledge, expected
   misconceptions.

If any of these is missing, stop:

> This skill is Stage 3 of backward design — it plans learning experiences
> backward from an assessment that already exists. The LDB is missing
> {summative task / rubric / learner profile}. Run /learning-architect to
> complete Stages 1 and 2 first.

Do not proceed without all three. Do not generate them here — that's
`/learning-architect`'s job. The whole discipline of backward design depends
on the assessment being designed independently before the learning plan.

## Operating Principles

**Everything traces to the summative task.** Every app concept, practice
item, and project step must answer: "What rubric dimension or summative-task
skill does this prepare the learner for?" If the answer is "general
enrichment" or "nice to know," cut it.

**The LDB is the source of truth.** If this skill wants to change the
performance, the assessment, or the audience, stop and route back to
`/learning-architect`. Don't drift.

**Write for the learner, not the designer.** The reader is a 14-to-20-year-
old working alone. Short sentences. Concrete verbs. Define every domain term
the first time. No "simply," "just," or "easy." No condescension — these are
capable people choosing to learn hard things.

**Scaffolds fade.** Early reps are supported. Later reps pull support. The
summative task is the least-supported rep — the learner makes independent
decisions. The learning plan must bridge from "fully guided" to "here's the
challenge, go."

**The app closes the feedback loop.** No teacher spots confusion. The app
must do it — or the learner gets stuck alone.

**The project guide stands alone.** Printable. Works in a garage without a
screen. References app concepts but doesn't require simultaneous app use.

## Response Posture

Execute, don't redesign. If an LDB decision feels wrong, name the concern
and ask whether to loop back to `/learning-architect`. Don't silently change
the assessment.

## Phase Transition Discipline

These rules apply to every phase boundary in this skill. Violations produce
the #1 failure mode observed in practice: writing content before the
backward map is locked or before scope is confirmed, which produces a
package that drifts from the summative task.

**Rules:**

1. **Every app content block and every project step traces to a
   summative-task requirement.** If a concept, practice item, or build
   step can't cite a rubric dimension or a skill the summative task
   demands, it doesn't belong. Enforce this at every phase boundary, not
   just in Phase 4's self-check.

2. **Finish the current phase before starting the next.** Do not draft
   app content while the backward map still has gaps. Do not write the
   project guide while scope questions are unanswered.

3. **Every phase transition is explicit.** When moving from phase to
   phase, state it out loud: "Phase N complete. Here's what I have:
   [summary]. Moving to Phase N+1: [what that phase does]." Never
   silently shift gears.

4. **Audit before advancing.** At the end of each phase, summarize back
   to the user what was captured. If anything is 🟡 (partial) or ❌
   (missing), ask only about those gaps — not the whole phase again.

5. **The LDB is the source of truth, not a suggestion.** If a phase
   uncovers something that would require changing the summative task,
   rubric, or learner profile, stop and route back to
   `/learning-architect`. Do not silently patch the assessment here.

6. **If the user feels lost, stop and re-state where you are.** "We're
   in Phase 1 (backward mapping). I have the decomposition and sequence;
   we still need the app/project split." Orientation is cheap; a drifted
   package is expensive.

## Phase 0: Prerequisites Gate

Do NOT run any phase until the Learning Design Brief is confirmed to
exist and to contain the Stage 2 artifacts this skill depends on. A
curriculum package built on an absent or incomplete LDB is forward
design in disguise.

### Step 0.1: Verify the LDB file exists

Ask the user for the LDB path (typically
`design-docs/learning-brief-*.md`) and read it. If the file does not
exist, **stop immediately**:

> The LDB is missing. This skill is Stage 3 of backward design — it
> plans learning experiences backward from an assessment that already
> exists. Run `/learning-architect` to produce Stages 1 and 2 first,
> then come back.

### Step 0.2: Verify the LDB contains a concrete summative task

Open the LDB and locate the Stage 2 summative task. It must be a
concrete artifact description — what the learner is told, what
constraints apply, what independent decisions they must make — not
just a topic ("circuits") or a task type ("a build project").

If the summative task is missing, a topic, or a generic description
without constraints and independent decisions, **stop**:

> The LDB names a topic/area but does not contain a concrete summative
> task with constraints and independent decisions. Run
> `/learning-architect` to design the Stage 2 artifact before Stage 3
> can begin.

### Step 0.3: Verify the LDB contains a rubric with named dimensions

Locate the rubric. It must have 2–4 named dimensions with observable
criteria at multiple levels (e.g., Strong / Developing / Not Yet).

If the rubric is missing, unnamed ("they'll be graded on quality"), or
has fewer than two dimensions, **stop**:

> The LDB does not contain a rubric with named dimensions and
> observable criteria. Without a rubric, there is nothing for app
> content and project steps to trace back to. Run
> `/learning-architect` to design the rubric before Stage 3 can begin.

### Step 0.4: Confirm and transition

Once the LDB file, summative task, and rubric are all present, state
it explicitly:

> **Phase 0 complete.** LDB verified:
> - Path: [path]
> - Summative task: [one-line restatement]
> - Rubric dimensions: [list the dimension names]
> - Learner profile: [age, experience, setting]
>
> Moving to Phase 1: Backward Mapping.

Note: the learner profile is also required (per the original hard
gate). If it is missing, stop and route back to `/learning-architect`
just like the summative task and rubric.

## Phase 1: Backward Mapping

Before writing anything, produce a backward map: start from the summative
task and rubric, and work backward to identify what the learner must know
and be able to do.

### Step 1.1: Build the backward map

Work through these four sub-steps in order:

**1.1a. Decompose the summative task.** For each rubric dimension, list
the specific knowledge and skills the learner needs to score "strong."
These are the learning targets.

**1.1b. Identify the gap.** Compare the learning targets to the learner
profile's prior knowledge. The gap is what the app must teach and the
project must let them practice.

**1.1c. Sequence the gap.** Order the learning targets so each builds
on the last. Name dependencies ("you need to understand X before Y
makes sense").

**1.1d. Split app vs. project.** For each learning target, decide:
does the app teach this concept, or does the learner discover it
through the physical build? The app handles declarative knowledge
and initial skill modeling. The project handles application and
transfer.

### Step 1.2: Backward Map Audit

Show the backward map to the user and classify each element:

- ✅ **Clear** — specific enough to design content against
- 🟡 **Partial** — some signal, but a key element is vague or hedged
- ❌ **Missing** — not addressed

Display back explicitly:

> **Phase 1 backward map audit:**
> - Summative task decomposition (per rubric dimension): [status + one-line restatement]
> - App/project split (which targets go where): [status + restatement]
> - Practice rep plan (how many reps, what feedback, per target): [status + restatement]
> - Sequence and dependencies: [status + restatement]

### Step 1.3: Close the gaps

If ANY element is 🟡 or ❌, ask **only about the missing/partial ones**.
Do NOT re-run the whole decomposition. Do NOT advance to Phase 2 while
gaps remain.

Loop until all elements are ✅.

### Step 1.4: Confirm and transition

Once the backward map is fully ✅, announce:

> **Phase 1 complete.** Backward map locked:
> - [N] learning targets decomposed from [M] rubric dimensions
> - App teaches: [list]
> - Project applies: [list]
> - Practice reps: [count and feedback source]
>
> Moving to Phase 2: Scope Check.

## Phase 2: Scope Check

### Step 2.1: Ask

Ask via AskUserQuestion — **one at a time**, not as a block. The five
questions:

1. How many app sessions and approximate length each?
2. Is video in scope, or text/interactive only?
3. What's the materials budget per learner?
4. Any materials, tools, or vendors to prefer or exclude?
5. Delivery format for the project guide (in-app, printable PDF, both)?

If the LDB already answered a question, restate the LDB answer and ask
the user to confirm rather than re-asking cold.

### Step 2.2: Scope Audit

Show the five answers back:

> **Phase 2 scope audit:**
> 1. Sessions and length: [answer]
> 2. Video: [in scope / out]
> 3. Materials budget: [$X per learner]
> 4. Materials/tools/vendor constraints: [answer or "none"]
> 5. Delivery format: [in-app / PDF / both]

If any answer is ambiguous ("not sure" on budget, for example), ask
again with a concrete default: "If you're not sure, I'll design to a
$25/learner cap — OK?" Lock each answer before advancing.

Once all five are locked, announce:

> **Phase 2 complete.** Scope locked. Moving to Phase 3: Write the
> Package.

## Phase 3: Write the Package

Produce three artifacts in `{project-root}/curriculum/{slug}/`.

### 3a. App Content Spec — `app-content.md`

Structure:

- **Module overview** — one paragraph linking to the summative task: "This
  module prepares you to [summative task summary]. By the end, you'll have
  the knowledge and practice to [artifact description]."
- **Concept sequence** — ordered per the backward map. For each concept:
  - Concept name
  - **Why you need this** — explicit link to summative task ("In your
    [artifact], you'll need to [specific application of this concept]")
  - Explanation (plain language, second-person)
  - Worked example or visual model (`[VISUAL: description]`)
  - Common misconception from the LDB + how to address it
  - Embedded practice — 2-3 items with feedback logic. Each item should
    approximate a piece of the summative task at reduced scale.
- **Mastery gate** — the check before the learner moves to the project.
  Designed to catch the specific misconceptions and gaps that would cause
  the summative artifact to fail. Not a general quiz — targeted at the
  rubric dimensions.
- **Feedback logic notes** — for the developer: how the app knows the
  learner is ready for the project, what triggers re-explanation, what the
  mastery gate thresholds are.

Writing rules:
- Second person, present tense.
- One new term per concept block, bolded and defined.
- Every explanation: concrete example first, abstract principle second.
- Mark branching points for the developer.
- Every concept block must cite which rubric dimension it serves.

### 3b. Project Guide — `project-guide.md`

Audience: the learner, working in a physical space, possibly offline.

Structure:

- **What you'll make** — one or two sentences + `[IMAGE: finished artifact]`.
- **What you'll prove you can do** — the performance from Stage 1, plain
  language. Explicitly: "This project is how you show what you learned."
- **How you'll know you nailed it** — the rubric in learner-friendly
  language. Show this BEFORE the build starts. The learner should know what
  "strong" looks like before they pick up a tool.
- **What you'll need** — essentials from the materials list.
- **Before you start** — key concepts from the app module, summarized in
  one sentence each so the guide works offline. Link back to the app for
  detail.
- **Practice builds** — if the recommended approach uses iterative
  artifacts, these are the scaffolded builds that lead to the summative
  task. Each one:
  - Is simpler than the summative task
  - Targets specific rubric dimensions
  - Has a self-check tied to those dimensions
  - Fades scaffolding from the previous practice build
- **The summative build** — the summative task from Stage 2, presented as
  a challenge. Include the constraints and independent decisions. This is
  NOT a step-by-step walkthrough — the learner applies what they learned.
  Provide:
  - The task description (from the LDB)
  - The constraints
  - The rubric (again, in learner-friendly form — they self-assess)
  - "Stuck?" hints that point back to concepts, NOT answers
- **Make it yours** — the near-transfer and far-transfer tasks from
  Stage 1, phrased as invitations.

Writing rules:
- One new term per page equivalent, bolded and defined.
- No more than three sub-actions per numbered step.
- Every practice build step has a learner-observable check.
- Never use "simply," "just," or "easy."
- `[IMAGE]` placeholders where visuals matter.
- The summative build section is deliberately less scaffolded than the
  practice builds — that's the design working.

### 3c. Materials and Tools List — `materials.md`

- **Consumables** — per learner, with cost and sourcing placeholder.
- **Tools** — flag anything a household is unlikely to have.
- **Substitution table** — cheaper/safer/more-available alternatives.
- **Total estimated cost** per learner.
- **Prep notes** — what to do before Session 1.

Separate materials for practice builds vs. the summative build if they
differ.

Once all three artifacts are written and saved, announce:

> **Phase 3 complete.** Three artifacts written:
> - `app-content.md` — [N] concept blocks, mastery gate defined
> - `project-guide.md` — [M] practice builds + summative build
> - `materials.md` — [K] items, total estimated cost $[X]/learner
>
> Moving to Phase 4: Self-Check.

## Phase 4: Self-Check

Before handing off, run this checklist and report pass/fail:

- Every rubric dimension from Stage 2 maps to at least one concept in the
  app content spec.
- Every rubric dimension has at least one practice build step that produces
  evidence for it.
- The summative build section requires independent decisions (is not fully
  prescribed).
- The cut list from the LDB is not snuck back in.
- The app content spec's concept sequence matches the backward map.
- No step requires a skill or tool not introduced earlier.
- The project guide works offline.
- The feedback logic covers the LDB's predicted misconceptions.
- Scaffolding visibly fades from practice builds to the summative build.
- The rubric appears in the project guide before any building starts.
- Reading level check on the project guide.

If any check fails, fix it before claiming the package is done.

## Handoff

Tell the user:

- The three files are at `{paths}`.
- Self-check results.
- How the package traces to the summative task: "{N} concepts in the app
  serve {M} rubric dimensions; {P} practice builds scaffold toward the
  summative task."
- Recommended next:
  - `/student-sim` — run personas through the guide.
  - `/standards-check` — map the summative task's rubric to standards.
  - `/maker-safety` — review before anyone builds.

## What This Skill Is NOT

- It does not decide what to teach or how to assess it. That's
  `/learning-architect` (Stages 1 and 2).
- It does not guarantee standards alignment. That's `/standards-check`.
- It does not certify safety. That's `/maker-safety`.
- It does not play-test. That's `/student-sim`.
- It does not design forward. Everything traces back to the summative task.
