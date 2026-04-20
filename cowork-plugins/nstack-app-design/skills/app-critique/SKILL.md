---
name: app-critique
description: |
  Persona-based UX review for app flows and screens. Runs a UX spec, prototype,
  or live flow through user personas and returns a structured report of
  confusion points, drop-off moments, trust issues, and accessibility gaps.

  This is /student-sim for app design — it finds design problems, not bugs.
  Different from /qa (which tests for broken functionality) and
  /plan-design-review (which audits visual design).

  Use when a UX spec or prototype exists and the user wants to pressure-test
  it before building or shipping. Invoke AFTER /ux-architect or when reviewing
  an existing flow.
---

## Purpose

Designers know what they meant. Users only see what's on the screen. The gap
is where apps fail silently — users quit, get confused, or find workarounds
instead of using the feature as intended.

This skill simulates that gap. It runs personas through a flow and reports
where they'd get stuck, annoyed, confused, or give up. The output is a
design bug report, not a redesign — `/ux-architect` or the designer decides
what to change.

It's a *simulation*, not a replacement for real user testing. A simulated
frustrated teen is a useful fiction. An actual frustrated teen is the only
ground truth. Flag this honestly in the report.

## Prerequisite

A flow to evaluate. At minimum one of:

- A UX spec from `/ux-architect`
- A set of screens or a prototype
- A description of an existing flow in the live app

If nothing exists, route to `/ux-architect` first.

## Operating Principles

**Personas are characters, not segments.** Each persona has a name, a
context, a goal, a patience level, and a phone. Play them as people.

**Stay in character.** A persona uses the app as that person would — with
their attention, their context, their expectations from other apps. Don't
steelman the design in character.

**Surface problems, don't solve them.** The output is a bug report. The
designer decides what to change. Name what went wrong and why.

**Test the edge states.** The happy path is what designers test. The first-
time experience, the error state, the return visit, the slow connection —
that's what personas hit.

**Be honest about simulation limits.** Real user testing must still happen.

## The Personas

Default roster — adjust per user request. These cover different contexts,
not just demographics.

1. **Mia — Busy parent, phone-first.** 38, manages two kids' homeschool
   schedules. Uses the app in 3-minute bursts between tasks. On her phone,
   usually one-handed. Low tolerance for anything that takes more than two
   taps. Goal: figure out what her kid should work on next. Frustration
   threshold: very low — she'll close the app and text a friend instead.

2. **Deshawn — 16-year-old learner, self-directed.** Uses the app on his
   own. Comfortable with technology but has strong opinions about apps that
   "feel like school." Skims text, taps fast, expects immediate feedback.
   Goal: find something interesting to build. Frustration threshold: medium
   for content, low for anything that feels slow or patronizing.

3. **Tomoko — 19-year-old, new to the platform.** First session. Doesn't
   know the app's vocabulary or navigation yet. Cautious — reads everything
   before tapping. On a laptop. Goal: understand what this app does and
   whether it's worth her time. Frustration threshold: medium, but if the
   onboarding is confusing, she won't come back.

4. **Ray — 45, maker hobbyist.** Uses the app for himself, not his kids.
   Experienced with tools but not with learning apps. On a tablet in his
   workshop. Hands may be dirty. Goal: learn a new technique and apply it
   to a project he's already working on. Frustration threshold: high for
   content, low for fussy UI.

5. **Sara — 15-year-old with low vision.** Uses a screen reader or large
   text settings. Tests accessibility: can the flow be completed with
   assistive technology? Are touch targets large enough? Is color the only
   way information is conveyed? Goal: same as any other learner.
   Frustration threshold: medium, but inaccessible UI is a hard stop.

6. **Jordan — Returning user, been away 3 weeks.** Used the app actively,
   then life happened. Coming back — where were they? What changed? Do they
   have to start over? Tests the resume/return experience. Goal: pick up
   where they left off. Frustration threshold: low — if it's not obvious
   where to resume, they might not.

## Phase 1: Ingest

Read the flow being tested. Identify:

- The screens or states in the flow
- The happy path (what the designer intends)
- The edge states (first-time, error, return, offline)
- The platform (iOS, web, both)
- What data or state the user brings (new user vs. returning, empty vs.
  populated)

Confirm via AskUserQuestion:

- Which personas to run (default: all six)
- Any persona to edit or add
- Which flow to test (if multiple exist)
- Run depth: "quick scan" (top issues) or "full walkthrough" (state by state)

## Phase 2: Walkthrough Per Persona

For each selected persona, walk through the flow in character.

### State-by-state friction log

For each state in the flow:

- **Status:** fine / pauses / confused / frustrated / abandons
- **Trigger:** what specifically caused friction (unclear label, too many
  options, missing feedback, unexpected behavior, accessibility barrier,
  context mismatch)
- **What they do:** the persona's likely behavior (tap the wrong thing,
  re-read, go back, close the app, Google it, ask someone)
- **Context check:** does this work in their context? (phone vs. desktop,
  one-handed, screen reader, dirty hands, 3-minute window)

### Edge state check

For each edge state (first-time, error, return, offline):

- Does this persona encounter it?
- What do they see?
- Can they recover?
- If not: where do they get stuck?

### Per-Persona Summary

- **Voice check** — one paragraph in character. First-person, present tense.
- **Completion:** would they finish the flow? If not, where do they drop?
- **Trust check:** does anything make them trust the app less? (broken
  promises, confusing language, lost data, unexpected behavior)
- **Delight check:** does anything make them think "oh, nice"?
- **Accessibility check:** (Sara specifically, but flag for all) any
  barriers for assistive tech, motor differences, or visual needs.

## Phase 3: Cross-Persona Report

Write `{project-root}/reviews/app-critique-{slug}-{YYYYMMDD}.md`:

```markdown
# App Critique: {feature/flow name}

Generated by /app-critique on {date}
Personas run: {list}
Flow tested: {description or spec reference}
Platform: {iOS / web / both}

## Top Issues (ranked by severity × breadth)

### Issue 1: {short name}
Severity: {low / medium / high}
Personas affected: {names}
Where in flow: {state or transition}
What happens: {specific description}
Why: {root cause — design problem, not user error}
Type: {confusion / friction / drop-off / trust / accessibility}

### Issue 2: ...

## Per-Persona Summaries
### Mia (busy parent, phone-first)
- Completes flow? {yes / no — where she drops}
- Biggest friction: {one line}
- Context issues: {phone, one-handed, time pressure}
- Trust: {any concerns}

### Deshawn (16, self-directed)
...

(repeat for each persona)

## Edge State Assessment
### First-time experience
{which personas hit it, what they see, whether it works}
### Error states
{which personas encounter errors, whether recovery is clear}
### Return / resume
{Jordan's experience specifically, plus any others}
### Offline / slow
{any persona in a low-connectivity context}

## What's Working
{specific parts of the flow that land well — name the state and why}

## Accessibility Findings
{Sara's report plus anything flagged for other personas — touch targets,
color contrast, screen reader, motor access}

## Simulation Caveats
- This is a model of users, not users.
- {specific assumptions that might be wrong}
- Recommend: test with {specific user profile} before shipping.

## Suggested Handoffs
- /ux-architect: {design-level changes — flow restructuring, state additions}
- /plan-design-review: {visual/UI changes — labels, layout, contrast}
- /qa: {anything that's actually a bug, not a design problem}
```

## Phase 4: Honesty Check

Before delivering:

- Did you test edge states, not just the happy path?
- Did you flag at least one accessibility issue (even if Sara's the only
  persona who hits it — accessibility is never zero-issue)?
- Did you name at least one thing that works?
- Did you stay in character, or did you steelman the design?

## Handoff

Tell the user:

- The report is at `{path}`.
- Top 3 issues, one sentence each.
- Whether any persona abandoned the flow entirely.
- Reminder: simulation is not a substitute for real user testing.

## What This Skill Is NOT

- It does not redesign the flow. That's `/ux-architect` or the designer.
- It does not audit visual design. That's `/plan-design-review`.
- It does not find bugs. That's `/qa`.
- It does not replace real user testing. Real users must still be observed.
