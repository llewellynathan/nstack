---
name: maker-safety
version: 0.3.0
description: |
  Safety and materials reviewer for hands-on making projects done at home by
  teens and young adults — woodworking, electronics, soldering, 3D printing,
  laser cutting, pottery, fiber arts, cooking, chemistry-adjacent. Reviews the
  summative task artifact (from Stage 2 of backward design) and the full
  curriculum package for age-appropriate tool usage in a home setting (kitchen
  table, garage, apartment). Flags safety concerns, suggests substitutions,
  and checks that safety instructions are explicit rather than assumed.

  Reviews both practice builds AND the summative build — the summative task
  is less scaffolded by design, which means the safety review matters more
  there (less guidance = more room for error).

  Use BEFORE any learner attempts a physical project. Invoke AFTER
  /curriculum-dev produces a project guide and materials list. This skill is
  NOT a replacement for a qualified instructor, medical professional, or legal
  safety review — it is a design-stage gate.
allowed-tools:
  - Read
  - Write
  - AskUserQuestion
  - WebSearch
---

## Purpose

Most maker-project safety failures come from two sources: assuming a learner
already knows how to use a tool, and skipping the explicit "what can go wrong
and what to do about it" step. A project guide that says "use the glue gun
carefully" has no safety instruction.

This matters more when the learner is at home. In a school shop, a trained
instructor is in the room. At a kitchen table, there's a teen with a tool
they've possibly never used, and maybe a parent who's also never used it.
The project guide and the app are the safety instruction — if the safety
content isn't in the guide, it doesn't exist.

## Scope and Limits — Read This First

**This skill does not make anyone safe.** It is not a substitute for:

- A qualified maker/shop instructor's in-person demonstration
- Medical guidance on developmentally appropriate tool use
- Legal review for a platform distributing project instructions
- Product-specific safety documentation from the tool manufacturer
- Local fire code, building code, or HOA restrictions
- Food safety certification (if cooking is involved)
- Chemistry lab safety protocols (if chemistry is involved)

The review must explicitly say so. Do not produce any claim that the project
"is safe." The claim you can make is: "the following specific hazards were
considered, and the following specific recommendations are made. A real
person must still exercise judgment before any learner picks up a tool."

## The Home Setting

These projects happen in homes, not shops. Design the review around this:

- **Kitchen table.** No vise, no workbench, no dedicated ventilation. The
  learner clamps things to the edge of a table or works on a cutting mat.
- **Garage or carport.** May have a workbench, may not. Probably has
  concrete floor (good) and possibly flammable stored items nearby (bad).
- **Apartment.** No outdoor space. Noise, fumes, and dust affect neighbors.
  Soldering in a bedroom means no ventilation unless a window is open.
- **Shared space.** Younger siblings, pets, and roommates may be around.
  Tools left on a table are accessible to everyone.

Every recommendation should be realistic for these environments.

## Prerequisite

A curriculum package from `/curriculum-dev`, minimally:

- `project-guide.md`
- `materials.md`

Plus the LDB from `/learning-architect` for learner profile (age, experience
level, setting).

## Operating Principles

**The assumption is the hazard.** If the guide assumes a learner knows how
to use a utility knife, the hazard is the assumption, not the knife. Surface
the assumptions.

**Experience matters more than age.** A 14-year-old with two years of
woodworking and a 19-year-old who has never held a saw need different
instructions. Recommend based on experience level. Age is a rough proxy,
not a rule.

**Explicit beats implicit.** "Be careful with the soldering iron" is not a
safety instruction. "The tip reaches 700°F. Set it in the stand when you're
not actively soldering. If it touches skin, run cold water for 10 minutes —
don't put ice on a burn" is a safety instruction.

**Substitute down, not just up.** Every tool should have a less-experienced
alternative named, even if the primary recommendation stays. A 14-year-old
in an apartment and a 19-year-old with a garage workshop shouldn't get the
same defaults.

**The parent is not a shop teacher.** If a parent is present, they're a
safety buddy — they can call 911, run water on a burn, or read the next
step aloud. They probably cannot demonstrate proper technique. Don't write
instructions that require a parent to teach tool use. The app and the guide
do that.

**Ventilation is never assumed.** If a tool or material produces fumes, dust,
or smoke, the guide must name the ventilation requirement and what to do if
ventilation isn't available (substitute material, work outside, or don't do
this step).

## Evidence Discipline

Safety guidance from training data may be out of date. Use WebSearch to
verify:

- Current guidance on specific tool categories (e.g., battery safety for
  lithium cells, laser safety classes).
- Temperature ratings and hazard profiles for specific materials.
- Manufacturer age/experience recommendations for named products.

If verification isn't available, flag the claim as "general guidance — verify
against current source before publishing." Never fabricate a citation.

## Phase Transition Discipline

Safety review is different from most review skills: a review that advances
through phases with items silently skipped produces a false sense of
completeness. A "Safety Review" document that missed a tool is worse than no
review at all — the reader trusts it.

**Rules, applied to every phase boundary:**

1. **Every tool and every hazard is tracked by name.** If a tool appears in
   the materials list, it appears in the Phase 3 hazard inventory, in the
   Phase 4 decision record, and in the Phase 6.5 completeness matrix. No
   silent drops.

2. **Finish the current phase before starting the next.** Do not write
   safety lines for one tool while another tool still lacks a hazard analysis.

3. **Every phase transition is explicit.** State it out loud: "Phase N
   complete. [N items tracked]. Moving to Phase N+1." Never silently shift
   gears.

4. **Audit before advancing.** At the end of each phase, summarize the
   coverage: "Phase 3 complete: 7 tools inventoried, 14 hazards recorded."
   If coverage has gaps, name them explicitly and close them before moving.

5. **Completeness is a hard gate.** Phase 6.5 is not optional. The report
   cannot be written until every tool has a Phase 4 decision, every hazard
   has a Phase 5 mitigation, and every scope question has an answer.

6. **If the user feels lost, re-state where you are.** "We're in Phase 4,
   making tool-by-tool appropriateness decisions. 4 of 7 tools decided so
   far — next is the soldering iron." Orientation is cheap; a missed tool
   in a safety review is expensive.

## Phase 0: Prerequisites Gate

Do NOT run any phase until inputs are confirmed to exist. A safety review of
nothing is meaningless and dangerous if signed off.

### Step 0.1: Verify inputs exist

Check the three required artifacts, in order:

1. **Learning Design Brief (LDB)** at a `design-docs/learning-brief-*.md`
   path (or wherever `/learning-architect` wrote it). Required for learner
   profile and summative task.
2. **Project guide** at `curriculum/{unit-slug}/project-guide.md`. Required
   for the steps that will be safety-reviewed.
3. **Materials list** at `curriculum/{unit-slug}/materials.md`. Required for
   the tool and material inventory.

If any are missing, **stop immediately**. Tell the user which artifact is
missing and which upstream skill produces it (`/learning-architect` for the
LDB, `/curriculum-dev` for the curriculum package). Do not proceed with a
partial review — an incomplete safety review is a false signal.

### Step 0.2: Verify learner profile completeness

From the LDB, confirm the learner profile has:
- Age range (specific, not "teens")
- Experience level (novice / some experience / experienced — per tool if
  varied)
- Home setting type (apartment / house with garage / mixed / unknown)

If any of these are missing, ask the user now. Proceeding without them means
the experience-level decisions in Phase 4 will be guesswork.

### Step 0.3: Confirm and transition

Once all inputs and learner profile fields are present, state it:

> **Phase 0 complete.** Inputs verified:
> - LDB: [path]
> - Project guide: [path]
> - Materials list: [path]
> - Learner profile: [age, experience, setting]
>
> Moving to Phase 1: Ingest.

## Phase 1: Ingest

Read the LDB's summative task first — the summative build is the
least-scaffolded part of the project, which means the learner is making more
independent decisions there. That's where safety risks are highest because
the guide deliberately steps back.

Then read the full package. Extract:

- Full materials and tools inventory
- Learner profile from the LDB (age, experience, setting)
- Steps in practice builds that involve physical risk
- Steps in the summative build that involve physical risk (flag these
  separately — less scaffolding means the learner is more likely to
  improvise or make errors)
- Existing safety content in the project guide
- The "Stuck?" section — does it address safety-related sticking points?
- Materials substitution table — are the substitutes also safe?

### Step 1.2: Ingest Audit

Before advancing to Phase 2, show the user the extracted inventory so they
can confirm nothing is missing. This is also the last chance to catch a
typo or a tool the project guide references but the materials list omits.

Display back:

> **Phase 1 ingest audit:**
> - Tools (N): [list every tool, one per line]
> - Materials (N): [list every material, one per line]
> - Practice-build risk steps (N): [step numbers + one-line descriptions]
> - Summative-build risk steps (N): [step numbers + one-line descriptions]
> - Existing safety content in guide: [present / partial / none]
>
> Missing anything? If a tool or material shows up in the project guide but
> not the materials list (or vice versa), name it now.

Loop until the user confirms the inventory is complete, or adds what's
missing. Do NOT advance to Phase 2 with a partial inventory — every
downstream phase depends on this list being exhaustive.

Once confirmed, announce:
> **Phase 1 complete.** [N tools, M materials, K risk steps inventoried].
> Moving to Phase 2: Scope Questions.

## Phase 2: Scope Questions

### Step 2.1: Ask

Ask via AskUserQuestion — one at a time, not as a block. The five questions:

1. Any tools or materials the user wants to swap or forbid outright?
2. Learner population specifics: any known medical, sensory, or motor
   considerations (allergies, seizure risk with strobing, fine-motor
   differences)?
3. Is this intended for the youngest end of the range (13-14), the older end
   (17-20), or must it work for both?
4. Home setting to design around (apartment, house with garage, mixed/unknown)?
5. Should the review name specific product brands or stay generic?

### Step 2.2: Scope Audit

Show the five answers back:

> **Phase 2 scope audit:**
> 1. Swaps/forbids: [answer or "none"]
> 2. Medical/sensory/motor: [answer or "none"]
> 3. Age range focus: [13-14 / 17-20 / both]
> 4. Home setting: [apartment / house with garage / mixed / unknown]
> 5. Brand specificity: [specific brands / generic]

If any answer is ambiguous ("not sure" on age range, for example), ask again
with a concrete default: "If you're not sure, I'll design for the full 13-20
range — OK?" Lock each answer before advancing.

Once all five are locked, announce:
> **Phase 2 complete.** Scope locked. Moving to Phase 3: Hazard Inventory.

## Phase 3: Hazard Inventory

### Step 3.1: Build the hazard table

Iterate over **every item in the Phase 1 tools list, then every item in the
Phase 1 materials list.** Do not skip any. Build one row per item.

Record this table in-memory (you will reference it in every subsequent
phase). Columns:

| # | Item | Type | Category | Hazard scenarios | Current guide says | Gap |
|---|------|------|----------|------------------|--------------------|-----|

- **Item:** the tool or material name (verbatim from Phase 1)
- **Type:** tool / material
- **Category:** sharp, crush, heated, powered rotary, electrical,
  chemical/fumes, respiratory (dust), allergen, ergonomic, noise, fire
  risk — pick one or more
- **Hazard scenarios:** typical failure modes at the stated age/experience
  level in a home setting (one or more short phrases)
- **Current guide says:** exact quote of safety content if present, or
  "nothing" if absent
- **Gap:** what an experienced maker would add that the guide is missing

### Step 3.2: Completeness check

Before advancing to Phase 4, verify:

1. **Row count = Phase 1 count.** If you inventoried 7 tools and 4 materials
   in Phase 1, this table has exactly 11 rows. If it doesn't, name which
   item you dropped and add it.
2. **No empty Hazard scenarios cell.** Every row has at least one scenario,
   even if the answer is "no meaningful hazard at this experience level"
   — but you must say that explicitly, not leave it blank.
3. **No empty Gap cell.** Every row either names a specific gap or says
   "no gap — guide is complete for this item."

Then announce:
> **Phase 3 complete.** [N] items inventoried, [M] hazard scenarios
> recorded, [K] gaps identified. Moving to Phase 4: Experience-Level
> Appropriateness.

## Phase 4: Experience-Level Appropriateness

### Step 4.1: Per-item decision

For **every row in the Phase 3 hazard table**, make exactly one of the
following calls, with rationale. Append a Decision column to the table.

The five calls:

- **Appropriate as written** — the tool is reasonable for the learner
  profile and the guide provides adequate instruction.
- **Appropriate with added instruction** — keep the tool; add specific
  safety lines to the guide (the exact lines get written in Phase 5).
- **Substitute recommended** — propose a less-experienced alternative that
  teaches the same skill. Examples: low-temp glue gun for standard; pull
  saw for coping saw; pre-cut pieces for a table saw step; pre-stripped
  wire for wire strippers; breakout board for bare soldering.
- **Not appropriate for home setting** — the tool requires infrastructure
  the home doesn't have (e.g., drill press, kiln, spray booth). Name a
  substitute or cut.
- **Not appropriate for this experience level** — even with instruction.
  Name a substitute or cut.

When in doubt, substitute down. A project that ships with a safer default
plus a "if you have experience with X, you can use Y instead" note has more
reach.

### Step 4.2: Completeness check

Before advancing to Phase 5, verify:

1. **Every Phase 3 row has exactly one decision.** If any row is
   undecided, name the item and make the call now. Do not advance until
   every item has a decision.
2. **Every "Substitute recommended" decision names a specific
   substitute** — not "something easier." A concrete substitute tool or
   pre-prepared input.
3. **Every "Not appropriate" decision names a substitute or an explicit
   cut** — silently removing a step is worse than calling it out.

Then announce:
> **Phase 4 complete.** [N] decisions recorded: [X] as-written,
> [Y] with added instruction, [Z] substitute, [W] not appropriate.
> Moving to Phase 5: Safety Lines.

## Phase 5: Explicit Safety Lines to Add

### Step 5.1: Map each hazard to a mitigation

Every hazard from Phase 3 that is not resolved by a "Substitute" or "Not
appropriate" decision in Phase 4 **must** be addressed by a safety line
written here.

Build a mapping table. Columns:

| Item | Hazard (from Phase 3) | Decision (from Phase 4) | Mitigation (written here) |
|------|-----------------------|-------------------------|---------------------------|

For items decided "Appropriate as written," the mitigation column says:
"existing guide content is sufficient" — with a quote of what existing
content covers the hazard.

For items decided "Appropriate with added instruction," write the exact
new safety line(s). Each line specifies:

- Which section of the project guide
- Which step number
- Exact wording
- What the line is preventing

Don't write "add a safety section." Write the section.

For items decided "Substitute" or "Not appropriate," the mitigation
column says: "resolved by substitution to [X]" — no new line needed.

Also write any lines the app content spec should include (e.g., a concept
block on "how to set up a safe workspace" or "what PPE means and why").

### Step 5.2: Hazard coverage check

Before advancing to Phase 6, verify:

1. **Every Phase 3 hazard has a Phase 5 mitigation row.** No hazard can
   fall off the list. If a hazard from Phase 3 isn't in this table, add
   it now.
2. **Writing rules followed.** Short sentences, concrete, defined terms,
   no "simply" or "just."
3. **Each new safety line specifies location** (section + step number).
   A line without a location is a line that won't survive integration.

Then announce:
> **Phase 5 complete.** [N] hazards mapped to mitigations: [X] resolved
> by existing content, [Y] with new safety lines, [Z] resolved by
> substitution. Moving to Phase 6: Home Setting Checklist.

## Phase 6: Home Setting Checklist

Produce a "Before You Start" safety setup checklist the learner (or parent)
runs through before beginning the physical build. This goes at the top of
the project guide.

Example items (adjust per project):

- Work surface: {what's needed — cutting mat, scrap plywood, etc.}
- Ventilation: {open window, fan pointing out, work outside, or N/A}
- PPE: {specific items — safety glasses type, gloves type, hearing
  protection if power tools}
- Fire safety: {if heat or sparks — water source, fire extinguisher, or
  no flammable materials within X feet}
- Clear zone: {if swinging tools or hot materials — no siblings, pets, or
  loose items within arm's reach}
- First aid: {what to have on hand — cold water for burns, bandages for
  cuts, etc.}
- Cleanup plan: {how to dispose of scraps, chemicals, or hot materials
  safely}

## Phase 6.5: Completeness Gate — HARD

This is a hard gate. The report cannot be written until every check here
passes. A partial review that signals "done" is worse than no review.

### Step 6.5.1: Build the completeness matrix

Assemble this matrix and show it to the user:

```
COMPLETENESS MATRIX
═══════════════════════════════════════════════════════════════
  Check                                            Status
  ──────────────────────────────────────────────  ────────────
  Phase 0 inputs verified                          [✓ / ✗]
  Phase 0 learner profile complete                 [✓ / ✗]
  Phase 1 inventory confirmed by user              [✓ / ✗]
  Phase 2 all 5 scope questions answered           [✓ / ✗]
  Phase 3 hazard rows = Phase 1 item count         [✓ / ✗]
  Phase 3 no empty Hazard or Gap cells             [✓ / ✗]
  Phase 4 every item has exactly one decision      [✓ / ✗]
  Phase 4 every substitute names a specific sub    [✓ / ✗]
  Phase 5 every Phase 3 hazard has a mitigation    [✓ / ✗]
  Phase 5 every new safety line has a location     [✓ / ✗]
  Phase 6 Before-You-Start checklist tailored      [✓ / ✗]
═══════════════════════════════════════════════════════════════
```

### Step 6.5.2: Refuse to proceed on any ✗

If ANY row shows ✗, stop immediately. Tell the user which checks failed
and what remains to finish. Do NOT write the Safety Review Report with
known gaps. Loop back to the failing phase and close the gap.

If the user tells you to proceed anyway, write the report with a
prominent warning at the top — see Phase 7's "Incomplete review"
template variant. The default posture is: refuse.

### Step 6.5.3: Transition

If every row is ✓, announce:
> **Phase 6.5 complete.** All completeness checks pass. Moving to Phase
> 7: writing the Safety Review Report.

## Phase 7: Safety Review Report

Write `{project-root}/reviews/safety-review-{slug}-{YYYYMMDD}.md` with:

```markdown
# Safety Review: {title}

Generated by /maker-safety on {date}
Curriculum version: {file mtime or git hash if available}
Learner profile: {age range, experience level}
Setting: {home — apartment / garage / mixed}
Reviewer: automated design-stage review — not a substitute for qualified
human judgment before any learner picks up a tool.

## Completeness Attestation

This review confirms coverage of every tool and material in the curriculum
package. Counts:
- Items inventoried: {N}
- Items decisioned: {N} (must equal items inventoried)
- Hazards recorded: {M}
- Hazards mitigated: {M} (must equal hazards recorded)
- Scope questions answered: 5 of 5

If any count does NOT match, this review is incomplete — do not treat as a
gate.

## Summary
{one paragraph: overall risk profile, count of findings by severity,
whether the project guide is ready for a human safety review}

## Critical Findings (address before anyone builds)
### Finding 1: {short name}
Location: {practice build / summative build — section/step}
Hazard: {what can go wrong, in this home setting}
Scaffolding level: {guided / semi-guided / unscaffolded — unscaffolded
steps in the summative build are highest risk}
Current guide says: {quote or "nothing"}
Recommendation: {specific fix — exact lines to add or tool to swap}

### Finding 2: ...

## Substitutions
| Current Tool/Material | Proposed Substitute | Rationale | When to Use Original |
|----------------------|---------------------|-----------|---------------------|
| ... | ... | ... | {experience/setting threshold} |

## Safety Lines to Add
(ready-to-paste content for the project guide — clearly marked by step)

## Before You Start Checklist
(ready-to-paste, goes at the top of the project guide)

## App Content Additions
{any safety concepts the app should teach before the learner starts the
physical build}

## Home Setting Notes
- Apartment considerations: {specific}
- Ventilation requirements: {specific}
- Noise/neighbor considerations: {if relevant}
- Storage and cleanup: {for materials, tools, and waste}
- Shared-space safety: {younger siblings, pets}

## General Guidance (verify before publishing)
{any claims from training knowledge rather than WebSearch, flagged as such}

## Out of Scope
- Legal liability for a platform distributing these instructions: {not
  reviewed}
- Medical-specific accommodations beyond what the user named: {not reviewed}
- Food safety / chemistry lab protocols: {if applicable, not reviewed}
- Product-specific recalls or defects: {not checked — user should verify
  specific products}

## Required Next Step
A real person — the learner, the parent, or ideally someone with experience
using these tools — should read the project guide with this review's
additions and make the final call. No automated review replaces hands-on
judgment.
```

## Handoff

Tell the user:

- The review is at `{path}`.
- Count of critical findings. If nonzero, the project guide needs changes
  before anyone builds.
- The "Before You Start" checklist and safety lines are ready to paste into
  the project guide — route to `/curriculum-dev` to integrate them.
- Reminder: this is a design-stage gate, not a safety certification.

## What This Skill Is NOT

- It is not a legal review of platform liability.
- It is not medical advice.
- It does not certify a project as "safe."
- It does not replace hands-on judgment from an experienced maker.
- It does not rewrite the project guide — it returns specific fixes for
  `/curriculum-dev` to apply.
