---
name: student-sim
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

## Phase Transition Discipline

Simulation is different from review in one specific way: a persona silently
dropped is invisible in the final report — the reader sees five summaries
and assumes five personas were actually walked. Missed passes produce the
same failure mode: the report looks complete but isn't.

**Rules, applied to every phase boundary:**

1. **No persona skipped silently.** If a selected persona doesn't get
   walked, the Phase 3 report must name them in "Personas not run" with a
   specific reason. "Ran out of context" counts as a reason; "forgot"
   doesn't — go back and run them.

2. **Every persona gets both Pass A and Pass B, or has an explicit reason
   not to.** A legitimate reason: the persona would quit during Pass A
   (note the quit point). Not a reason: "already got the idea from Pass A"
   — Pass B surfaces different issues (materials, setting, tool access)
   that Pass A can't.

3. **Finish the current phase before starting the next.** Do not draft the
   cross-persona report while a persona's walkthrough is still partial. Do
   not start a new persona while the previous one's summary is unwritten.

4. **Every phase transition is explicit.** State it out loud: "Phase N
   complete. [counts]. Moving to Phase N+1." No silent shifts — including
   between Pass A and Pass B within a single persona.

5. **The cross-persona report counts must match persona count.** Selected
   personas = walked personas + explicitly-skipped personas. If the
   arithmetic doesn't work, a persona fell through the cracks.

6. **If the user feels lost, re-state where you are.** "We're in Phase 2,
   walking Kai through Pass B (project guide). 3 of 5 personas complete,
   next up is Noor." Orientation is cheap; a missed persona in a
   simulation report is invisible until a real learner hits the same wall.

## Phase 0: Prerequisites Gate

Do NOT run any phase until inputs are confirmed to exist. A simulation
against missing or partial inputs produces a report that looks thorough
but evaluates against the wrong target — worse than no simulation.

### Step 0.1: Verify curriculum package exists

Check the three required curriculum artifacts:

1. **App content spec** at `curriculum/{unit-slug}/app-content.md`.
   Required for Pass A.
2. **Project guide** at `curriculum/{unit-slug}/project-guide.md`.
   Required for Pass B.
3. **Materials list** at `curriculum/{unit-slug}/materials.md`. Required
   for the access check (can this persona get these materials?).

If any are missing, **stop immediately**. Tell the user which file is
missing and route back to `/curriculum-dev`. Do not proceed with a partial
package — the walkthrough needs all three to produce an honest report.

### Step 0.2: Verify the Learning Design Brief

Check the LDB at `design-docs/learning-brief-*.md` (or wherever
`/learning-architect` wrote it). The LDB is the evaluation anchor — every
persona is scored against it. Confirm specifically:

- **Summative task** is present and concrete (a drafted artifact, not a
  description of what evidence might look like).
- **Rubric** is present with named dimensions and observable criteria
  (strong / developing / not yet).
- **Learner profile** is present (age range, experience level, setting) —
  needed to know whether the default persona roster is a fit.

If the LDB is missing or the summative task + rubric are not locked down,
**stop** and route back to `/learning-architect`. A simulation without a
rubric to score against can only report "did they finish?" — which is the
wrong question.

### Step 0.3: Confirm and transition

Once all inputs are present, state it:

> **Phase 0 complete.** Inputs verified:
> - App content: [path]
> - Project guide: [path]
> - Materials: [path]
> - LDB: [path] (summative task + rubric confirmed)
> - Learner profile from LDB: [age, experience, setting]
>
> Moving to Phase 1: Ingest.

## Phase 1: Ingest

Read the curriculum package. Read the LDB — specifically the summative task
and rubric from Stage 2. These are the evaluation anchor: the question for
every persona is not "did they finish?" but "would their artifact meet the
rubric?" The LDB also tells you what the content is supposed to teach, which
helps distinguish "the learner was confused" from "the learner missed the
point."

### Step 1.1: Gather run parameters

Confirm via AskUserQuestion:

- Which personas to run (default: all six)
- Any persona to edit (e.g., change age, adjust setting)
- Any additional persona specific to the user's audience
- Run depth: "quick read" (scan for top issues) or "full walkthrough"
  (simulate step by step through both app content and project guide)

### Step 1.2: Ingest audit

Before advancing to Phase 2, classify each input with ✅/🟡/❌ and show the
audit back to the user:

- ✅ **Clear** — locked in, ready to run
- 🟡 **Partial** — some signal, but a detail is ambiguous
- ❌ **Missing** — not answered, or "whatever you think"

> **Phase 1 audit:**
> - Personas to run: [status + list, e.g. "✅ 5 of 6 — Marcus skipped"]
> - Persona edits: [status + what changed, or "✅ none"]
> - Additional personas: [status + name/profile, or "✅ none"]
> - Run depth: [status + "quick read" or "full walkthrough"]

### Step 1.3: Close the gaps

If ANY row is 🟡 or ❌, ask only about the missing/partial ones. Do NOT
re-request the whole set. Example follow-ups:

- Ambiguous persona edit: "You said 'make Elise a bit younger' — specific
  age? 13? 12?"
- Missing depth: "Quick read (I scan and flag top issues) or full
  walkthrough (I simulate every step for every persona)? Full is slower
  but catches more."
- Vague additional persona: "You mentioned 'a kid who gives up fast' —
  need a name, age, setting, and one driving trait to play them."

Loop until all four rows are ✅.

### Step 1.4: Confirm and transition

Once all four rows are ✅, state the transition explicitly:

> **Phase 1 complete.** Running [N] personas at [depth] against summative
> task from the LDB. Moving to Phase 2: Walkthrough Per Persona.

## Phase 2: Walkthrough Per Persona

For each selected persona, simulate two passes (Pass A then Pass B), then
write the per-persona summary before moving to the next persona. Do not
interleave personas — finish one before starting the next.

Before starting each persona, announce:
> **Starting [persona name] ([age, setting]).** Pass A (app content) first.

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

Before moving on, announce:
> **Pass A complete for [persona].** [one-line summary: e.g. "made it
> through, 2 confusion points" or "would close the app at concept block 3"].
> Moving to Pass B (project guide)...

If the persona would close the app during Pass A and never open the guide,
say so explicitly and skip Pass B with a reason:
> **Pass A complete for [persona]. Would quit before reaching the project
> guide.** Skipping Pass B — quit point noted. Moving to per-persona
> summary.

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

### Per-Persona Completion Check

After writing the summary for each persona, verify before moving to the
next:

- Pass A walked (or explicit skip reason recorded)? [✓/✗]
- Pass B walked (or explicit skip reason recorded — e.g. quit during Pass
  A)? [✓/✗]
- Per-persona summary written (all six bullets: voice, motivation,
  vocabulary, summative prediction, transfer, access)? [✓/✗]

If any row is ✗, close the gap before announcing the persona done. Then
announce:
> **[Persona] complete.** [walked / stopped at Pass A quit-point / stopped
> at step N of Pass B]. [K of N personas done.] Moving to [next persona]
> / [Phase 3 if last].

### Phase 2 → Phase 3 Gate

Before writing the cross-persona report, verify the walkthrough is
complete for every selected persona. Build the roster check:

| Persona | Walked | Stopped at quit-point | Skipped (reason) |
|---------|--------|-----------------------|-------------------|

Every selected persona from Phase 1 must appear in exactly one column.
The arithmetic must close: `selected = walked + stopped + skipped`. If a
persona is missing, go back and run them (or record an explicit skip
reason — "forgot" doesn't count).

Once the roster is complete, announce:
> **Phase 2 complete.** [N] personas walked, [M] stopped at quit-point,
> [K] skipped (with reasons). Moving to Phase 3: Cross-Persona Report.

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

## Phase 4: Anti-Sycophancy Gate (Pre-Handoff)

This is a pre-handoff gate, not a self-audit after the fact. **Before
finalizing the report and handing it off to the user, verify each of the
criteria below. If ANY fail, revise the report before handoff — do not
ship a report that misses these.**

Run the check explicitly and show the result to the user:

> **Phase 4 anti-sycophancy gate:**
> - Findings not softened to be kind (severity = learning impact, not
>   tone): [✓/✗]
> - At least one "what's likely working" item named (report is balanced
>   and actionable): [✓/✗]
> - Persona behavior grounded in trait descriptions — nothing invented
>   for drama: [✓/✗]
> - Access, materials, and workspace constraints checked — not just
>   comprehension: [✓/✗]
> - Every persona predicted to fail the rubric has a specific dimension
>   named (not "wouldn't pass overall"): [✓/✗]
> - Simulation caveats section is honest about what a persona walkthrough
>   cannot see: [✓/✗]

If any row is ✗, revise the report, re-run the gate, and only then hand
off. Do not announce the report complete until every row is ✓.

Once every row is ✓, announce:
> **Phase 4 gate passed.** Report ready for handoff.

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
