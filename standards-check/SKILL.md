---
name: standards-check
version: 0.3.0
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
allowed-tools:
  - Read
  - Write
  - AskUserQuestion
  - WebSearch
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

Confirm via AskUserQuestion:

- **Why do you need this map?** (state reporting, transcript/portfolio,
  parent confidence, platform credibility — each shapes how formal the
  output should be)
- Which standards sets to check (default: NGSS + ISTE; add Common Core
  ELA/Math if the project involves significant reading, writing, or
  quantitative work)
- If state reporting: which state (so we can check state-specific
  requirements)
- Grade/age band to anchor on

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

## Phase 5: Low-Effort Additions (Optional)

Look at standards the project could plausibly address but doesn't yet. For
each:

- What's missing (usually evidence, not content)
- A small addition that would make the alignment legitimate (e.g., "add a
  data table to Step 4 and this fully addresses CCSS.MATH.CONTENT.5.MD.B.2")
- Whether the addition would change the project's character — if it would,
  flag it as "non-trivial, not recommended without revisiting the LDB"

These are suggestions, not mandates. The user decides.

## Phase 6: Over-Claim Check

Before writing the report, run an adversarial pass:

- For every "full match," can a skeptical reviewer point to a specific
  artifact or rubric dimension that produces the standard's evidence? If
  not, demote to partial.
- For every "partial match," is the partiality explicit?

Do not skip this step.

## Phase 7: Standards Map

Write `{project-root}/reviews/standards-map-{slug}-{YYYYMMDD}.md` with:

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
