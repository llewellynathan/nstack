---
name: standards-check
description: |
  Standards alignment mapper for homeschool and self-directed learning. Takes
  the summative task and rubric from the Learning Design Brief (Stage 2 of
  backward design) as the primary alignment source — because the assessment IS
  the evidence of what was learned. Then cross-references the curriculum
  package for supporting detail.

  Maps to NGSS, ISTE, Common Core, and state-specific requirements. The
  audience is a homeschool parent building a transcript or portfolio, a learner
  documenting skills, or a platform that wants credible learning claims.

  Use when the user needs to articulate what a project teaches in terms an
  outsider would recognize. Invoke AFTER /curriculum-dev. Does not generate
  standards claims from scratch — it verifies and maps.
---

## Purpose

Homeschool families and self-directed learners don't usually need standards
alignment for the same reasons schools do. They need it for three practical
situations:

1. **State reporting.** Many states require homeschool families to
   demonstrate that instruction covers certain subjects or meets certain
   standards. The requirements vary widely by state.
2. **Transcripts and portfolios.** When a learner applies to college, a job,
   or a program, being able to say "this project addressed NGSS HS-ETS1-2"
   is more credible than "we did engineering."
3. **Parent confidence.** A parent managing a homeschool curriculum wants to
   know their kid is learning things that are recognized by the broader
   world, even if they don't care about compliance per se.

This skill serves those needs. It does not serve district adoption,
accreditation review, or grant applications — those require a different
level of formality and a different audience.

## Prerequisite

A curriculum package from `/curriculum-dev`, plus the LDB from
`/learning-architect`. Without both, stop: you can't align what you can't
see, and the LDB is where the actual learning target lives.

## Operating Principles

**Alignment is a claim about evidence, not topic overlap.** A project that
mentions electricity is not aligned to an electricity standard. A project in
which the learner *produces evidence* described by the standard is aligned.
Topic and performance are different.

**Under-claim rather than over-claim.** A parent who tells a reviewer "this
project addresses three standards and here's the evidence" is more credible
than one who lists twelve codes pulled from topic keywords. Trust matters
more than coverage.

**Partial alignment is a useful claim — but label it.** Many standards are
multi-part. A project can legitimately address part of a standard. Say so
explicitly.

**Standards are a lens, not a goal.** The learning design came first. This
skill maps what already exists to standards — it does not suggest redesigning
the project to hit more codes. If low-effort additions are available, name
them, but the project's integrity comes first.

**State requirements vary enormously.** Some states have detailed standards;
others require almost nothing. Always ask which state before producing a
state-specific section.

## Evidence Discipline

Standards documents change. Use WebSearch to verify current wording of any
specific standard code before citing it. If WebSearch is unavailable or
uncertain, quote with a disclaimer: "Paraphrased from training knowledge;
verify against the current source before citing in any official document."

Never invent a standard code. If you can't confirm the code exists, say so.

## Phase Transition Discipline

These rules apply to every phase boundary in this skill. Violations produce
the #1 failure mode for standards mapping: advancing to the output document
before the classifications are grounded in the rubric, which produces a map
that looks thorough but can't survive a skeptical reviewer.

**Rules:**

1. **Every rubric dimension gets a Phase 3 classification.** Each observable
   evidence dimension from the LDB rubric must be mapped to at least one
   candidate standard and classified as Full / Partial / Adjacent / Rejected.
   No dimension silently drops out of the analysis.

2. **Finish the current phase before starting the next.** Do not begin
   classifying candidate standards (Phase 3) while the scope questions
   (Phase 2) are still partially answered. Do not begin writing the
   standards map (Phase 7) while the over-claim check (Phase 6) has items
   pending.

3. **Every phase transition is explicit.** State it out loud: "Phase N
   complete. [summary of what was produced]. Moving to Phase N+1: [what
   that phase does]." Never silently shift gears — the user should know
   when scope is locked, when classifications are done, and when a draft
   is ready for review.

4. **Audit before advancing.** At the end of each phase, summarize back to
   the user what was captured. If any input is 🟡 (partial) or ❌ (missing),
   ask only about those gaps — not the whole phase again.

5. **Never advance to Phase 7 with standards ungrounded in the rubric.**
   Any "Full match" that a skeptical reviewer could not trace back to a
   specific rubric dimension or artifact has not survived the Phase 6
   over-claim check. Demote it or cut it. The output document is only as
   trustworthy as the evidence trail behind it.

6. **Conditional phases are surfaced, not buried.** The decision to run or
   skip Phase 4 (state-specific) and Phase 5 (low-effort additions) is
   made explicit to the user at the phase boundary, not silently inside
   the skill's logic.

## Phase 0: Prerequisites Gate

Do NOT run any phase until inputs are confirmed to exist. A standards map
generated from missing or partial inputs is worse than no map — it fabricates
credibility that the evidence can't support.

### Step 0.1: Verify inputs exist

Check the two required artifacts:

1. **Learning Design Brief (LDB)** at `design-docs/learning-brief-*.md` (or
   wherever `/learning-architect` wrote it). Must contain Stage 2: the
   summative task AND the rubric. The rubric is the primary alignment
   source — a standards map without a rubric is topic-matching, not
   evidence-matching.
2. **Curriculum package** from `/curriculum-dev`, minimally the app content
   spec and project guide, for supporting detail beyond the rubric.

If either is missing, **stop immediately**. Tell the user which artifact is
missing and which upstream skill produces it (`/learning-architect` for the
LDB, `/curriculum-dev` for the curriculum package). Do not proceed. A
standards map built on a missing rubric is an over-claim by construction.

### Step 0.2: Verify the LDB contains a usable rubric

Open the LDB and confirm Stage 2 has:
- A summative task (the artifact the learner produces)
- A rubric with named dimensions and strong/developing/not-yet descriptors

If the LDB exists but Stage 2 is a stub, stop and route back to
`/learning-architect` — there's nothing to map against.

### Step 0.3: Confirm and transition

Once both inputs are present and the rubric is usable, state it:

> **Phase 0 complete.** Inputs verified:
> - LDB: [path] (rubric has [N] dimensions)
> - Curriculum package: [path]
>
> Moving to Phase 1: Ingest.

## Phase 1: Ingest

Read the LDB first — specifically the summative task and rubric from Stage 2.
The rubric dimensions are the primary alignment source, because backward
design means the assessment defines what was learned. Then read the app
content spec and project guide for supporting detail.

Extract:

- Summative task (what the learner produces)
- Rubric dimensions (observable evidence — these map to standards)
- Performance (the verb from Stage 1)
- Domain (science, math, literacy, technology, engineering — likely multiple)
- Age/grade range
- Whether the project is hands-on making, design challenge, inquiry, or a mix

## Phase 2: Scope Question

### Step 2.1: Ask (one at a time)

Ask via AskUserQuestion — one question at a time, not as a block. Wait for
each answer before asking the next. The four questions:

1. **Why do you need this map?** (state reporting, transcript/portfolio,
   parent confidence, platform credibility — each shapes how formal the
   output should be and whether Phase 4 is needed)
2. **Which standards sets to check?** (default: NGSS + ISTE; add Common Core
   ELA/Math if the project involves significant reading, writing, or
   quantitative work)
3. **If state reporting: which state?** (so Phase 4 can check state-specific
   requirements — skip if Q1 was not "state reporting")
4. **Grade/age band to anchor on?** (e.g., 9-10, 11-12, MS, HS — needed to
   select the right NGSS performance expectations and CCSS grade strand)

### Step 2.2: Scope Audit

Show the four answers back:

> **Phase 2 scope audit:**
> 1. Why: [restatement]
> 2. Standards sets: [restatement]
> 3. State: [name or "N/A — not state reporting"]
> 4. Grade/age band: [restatement]

If any answer is ambiguous ("not sure" on the grade band, for example), or
missing, loop back and ask only about the ambiguous or missing item — not
the whole phase again. If the user gives "not sure," propose a concrete
default and confirm (e.g., "I'll anchor on HS (9-12) NGSS — OK?").

Once all four are locked, announce:
> **Phase 2 complete.** Scope locked: [why] / [sets] / [state or N/A] /
> [grade band]. Moving to Phase 3: Candidate Standards.

## Phase 3: Candidate Standards

For each standards set:

1. Generate candidate codes likely to match, based on the rubric dimensions
   from Stage 2 and the performance from Stage 1 — not topic overlap alone.
2. WebSearch for the current wording of each candidate code.
3. For each candidate, classify the match:
   - **Full match** — the summative task's rubric dimensions directly
     satisfy the standard's performance expectation as written.
   - **Partial match** — the rubric/task addresses part of the standard;
     name which part and which part it doesn't.
   - **Adjacent** — in the neighborhood but the performance doesn't line up.
   - **Rejected** — looked like a match on topic, but isn't.

Only full and partial go in the main map. Adjacent and rejected go in an
appendix with rationale, so a reviewer can see the work.

### Step 3.1: Rubric-dimension coverage check

Before announcing Phase 3 complete, verify that **every rubric dimension
from the LDB** has been considered against at least one candidate standard
in at least one standards set. If a rubric dimension produced no candidates
in any set, name it explicitly — that is a finding for the standards map
(the project produces evidence for something no external standard names).

### Step 3.2: Transition with explicit Phase 4 decision

Announce Phase 3 complete and surface the Phase 4 routing decision to the
user:

> **Phase 3 complete.** [N] standards classified: [X] Full, [Y] Partial,
> [Z] Adjacent, [W] Rejected. Every rubric dimension accounted for.
>
> Based on your Phase 2 answer (purpose = [X], state = [Y or N/A]):
> - [If state named:] **Running Phase 4 (state-specific check)** for
>   [state]. Ready?
> - [If no state:] **Skipping Phase 4** — no state was named. If you want
>   state-specific guidance, say which state now. Otherwise, moving to
>   Phase 5.

Wait for the user's confirmation before running or skipping Phase 4.

## Phase 4: State-Specific Check (if requested)

If the user named a state:

1. WebSearch for that state's current homeschool requirements (subjects,
   standards, reporting format).
2. Map the project's content to the state's requirements.
3. Note whether the state requires standards alignment at all, or just
   subject coverage.
4. If the state has its own standards (not NGSS/CCSS), map to those
   specifically.

Flag clearly if the state's requirements are unclear or if WebSearch
returned outdated information.

Once the state mapping is complete, announce:
> **Phase 4 complete.** State-specific mapping recorded for [state]:
> [brief summary — e.g., "subject-coverage only, no standards alignment
> required" or "state uses NGSS — already mapped" or "state has [N] of
> its own standards, [M] matched"]. Moving to Phase 5: Low-Effort
> Additions.

## Phase 5: Low-Effort Additions (Optional)

Look at standards the project could plausibly address but doesn't yet. For
each:

- What's missing (usually evidence, not content)
- A small addition that would make the alignment legitimate (e.g., "add a
  data table to Step 4 and this fully addresses CCSS.MATH.CONTENT.5.MD.B.2")
- Whether the addition would change the project's character — if it would,
  flag it as "non-trivial, not recommended without revisiting the LDB"

These are suggestions, not mandates. The user decides.

Once the additions list is produced (or a positive decision is made to
skip this phase because no low-effort additions apply), announce:
> **Phase 5 complete.** [N] additions proposed (or "no low-effort
> additions identified"). Moving to Phase 6: Over-Claim Check.

## Phase 6: Over-Claim Check

### Step 6.1: Adversarial pass

Before writing the report, run an adversarial pass over every Phase 3
classification:

- For every "full match," can a skeptical reviewer point to a specific
  artifact or rubric dimension that produces the standard's evidence? If
  not, demote to partial.
- For every "partial match," is the partiality explicit? Does the map
  name which part of the standard is covered and which is not?

Do not skip this step. Record every demotion or cut.

### Step 6.2: Show changes to the user before writing

Before advancing to Phase 7, show the user exactly what the over-claim
pass changed, with rationale. The user should be able to push back on
any demotion or cut before it hardens into the output document.

Display:

> **Phase 6 over-claim pass — proposed changes:**
> - Demoted to Partial: [code] — [rationale, pointing to the specific
>   rubric dimension that is and isn't satisfied]
> - Cut entirely: [code] — [rationale]
> - Partial wording sharpened: [code] — [what was tightened]
> - No change: [N] classifications held up.
>
> Any of these you want to push back on before I write the map?

If the user disagrees with a demotion or cut, discuss the specific
evidence and either restore the classification (with a note) or stand by
the demotion. Loop until the user either accepts the changes or the
disagreements are explicitly noted in the Caveats section of the output.

Then announce:
> **Phase 6 complete.** [N] classifications held, [X] demoted, [Y] cut.
> Moving to Phase 7: Standards Map.

## Phase 7: Standards Map

### Step 7.1: Draft the map and show it to the user (DO NOT write to disk yet)

Before writing anything to disk, assemble the full standards map draft
using the template below and show it to the user inline. The user should
be able to read the classifications, evidence, caveats, and plain-language
summary as they will appear in the final document, and push back on
anything that looks wrong.

Ask explicitly:
> Here is the draft standards map. Before I write it to disk, does anything
> look wrong? Specifically check:
> - Are the Full Matches actually grounded in rubric evidence you recognize?
> - Are the Partial Matches honest about what's not covered?
> - Does the Plain-Language Summary state what you'd be comfortable putting
>   on a transcript or portfolio?
> - Any classifications you want moved between Full / Partial / Rejected?

Loop on revisions. Do not advance to Step 7.2 while the user disagrees
with a classification or piece of evidence.

### Step 7.2: Write the map to disk

Once the user confirms the draft, write
`{project-root}/reviews/standards-map-{slug}-{YYYYMMDD}.md` with the
following structure:

```markdown
# Standards Map: {title}

Generated by /standards-check on {date}
Curriculum version: {file mtime or git hash if available}
Purpose: {state reporting / transcript / portfolio / platform credibility}
Standards sources consulted: {list, with "verified via WebSearch {date}"
or "paraphrased — verify before citing officially"}

## Plain-Language Summary
{two or three sentences a parent could put in a portfolio or a learner
could put on a resume: "This project teaches [X] and addresses [N]
recognized standards in [domains]."}

## Full Matches
| Code | Standard (verbatim or paraphrased) | Evidence in Project |
|------|-------------------------------------|---------------------|
| {code} | {wording, with source note} | {what the learner produces that
  demonstrates this} |

## Partial Matches
| Code | What's Covered | What's Not | Evidence in Project |
|------|----------------|------------|---------------------|

## State-Specific Notes
{if a state was named: what the state requires, how this project maps,
any gaps. If no state: "No state specified — add one for targeted
reporting guidance."}

## Available Additions (low-effort)
| Code | What's Missing | Suggested Addition | Changes Project Character? |
|------|---------------|-------------------|---------------------------|

## Rejected Candidates
{list with one-line rationale — the audit trail}

## How to Use This Map
- **For a transcript:** list the full-match codes under the relevant
  course/subject entry, with the plain-language summary as a description.
- **For a portfolio:** include the project artifact alongside this map.
  The "Evidence in Project" column tells a reviewer where to look.
- **For state reporting:** {state-specific guidance, or "check your
  state's requirements for format."}

## Caveats
- {which codes were paraphrased vs. verified}
- {any grade-band stretch}
- {state-specific standards not checked, if applicable}
- This map documents alignment — it does not certify the project for any
  formal review process. A human reviewer (evaluator, admissions officer,
  state reviewer) makes the final call.

## Suggested Handoffs
- /curriculum-dev: {low-effort additions, if the user wants them}
- /learning-architect: {only if alignment reveals the performance is
  under-specified}
```

## Handoff

Tell the user:

- The map is at `{path}`.
- Plain-language summary they can drop into a portfolio or transcript.
- Counts: N full matches, M partial matches.
- Reminder: this map is a tool for documentation, not a certification.

## What This Skill Is NOT

- It is not a compliance certification for any state or institution.
- It does not redesign the project to hit more standards.
- It does not replace a human evaluator's judgment.
- It does not invent standards codes. If a code can't be verified, the map
  says so.
