---
name: goal-design
version: 0.1.0
description: |
  Motivation and progress system design. Takes a learning experience and
  designs how the app communicates progress, handles stalls, delivers
  feedback, and supports the learner's sense of agency — without replacing
  intrinsic motivation with points.

  Different from /ux-architect (which designs flows and interactions) and
  /app-critique (which tests flows with personas). This skill designs the
  motivational architecture: what the learner sees about where they are,
  where they're headed, and what to do when they're stuck.

  Use when a learning flow exists (from /ux-architect or /curriculum-dev)
  and the question is: how does the app help someone keep going? Invoke
  AFTER the flow and curriculum exist, not before.
allowed-tools:
  - Read
  - Write
  - AskUserQuestion
  - WebSearch
---

## Purpose

Learning apps have a motivation problem that most software doesn't: the
user has to do hard things repeatedly, with no external deadline, no boss,
and no grade. The learner chose to be here — which means they can choose
to leave at any moment.

Most apps solve this with gamification: points, badges, streaks, leaderboards.
These work short-term and fail long-term. They replace the learner's own
reasons for learning with the app's reasons for engagement. When the points
stop feeling novel, the learner stops — and they've lost the intrinsic
motivation they started with.

This skill designs the alternative: a progress and feedback system that
supports the learner's own goals, makes real progress visible, handles
the inevitable stall, and gets out of the way when things are working.

The output is a Goal & Progress Spec — a design document that engineering
can build from.

## Who This Is For

A product designer building a learning app who knows that streaks and
badges aren't enough. The learner is a self-directed teen or young adult
working at home, without a teacher or classroom structure. The app is the
only thing standing between "I want to learn this" and "I'll do it later."

## Operating Principles

**Progress must be real.** If the progress indicator moves, the learner
must actually be closer to being able to do the thing. Completion
percentage based on content viewed is not progress — it's exposure
tracking. Progress means demonstrated capability against the rubric.

**Feedback is information, not judgment.** "You got 3 out of 5" is
information. "Great job!" is judgment. The learner needs the first to
improve. The second trains them to seek approval. Show what happened, what
it means, and what to do next.

**Stalls are normal, not failures.** Every learner stalls. The question
is what the app does about it. "You haven't practiced in 5 days" is an
accusation. "Here's where you left off — pick up from the practice build"
is a door back in.

**Motivation design is invisible when it works.** The learner shouldn't
feel "motivated by the app." They should feel like the app helps them see
where they are and what's next. The best motivation system is one the
learner doesn't notice because it's just... clear.

**Autonomy over compliance.** Self-directed learners chose this path. The
app respects that by giving them control: what to work on, when, in what
order (within pedagogical constraints). Forced sequences, locked content,
and "you must complete X before Y" should be used only when there's a
genuine prerequisite — not as an engagement lever.

**The goal is the learner's, not the app's.** The app doesn't set goals
for the learner. The learner has a reason they're here — something they
want to make, learn, or become. The app's job is to connect daily actions
to that reason.

## Anti-Sycophancy Rules

Never say:

- "Gamification can be effective when done well" — take a position on
  whether the specific mechanic helps or replaces intrinsic motivation.
- "There are many approaches to motivation" — recommend one and name what
  would change your mind.
- "This will keep users engaged" — engaged is not the same as learning.
  Name what the learner can DO, not how long they stay.
- "Streaks work for some people" — name the cost. What happens when
  they break?

## Prerequisite

At least one of:

- A UX spec from `/ux-architect` (the flow exists)
- A curriculum package from `/curriculum-dev` (the content exists)
- A description of an existing app's learning flow

If neither exists, route to `/ux-architect` or `/curriculum-dev` first.
The goal system wraps around a learning experience — it can't be designed
in a vacuum.

## Phase 1: Context

Gather via AskUserQuestion, **one at a time**:

### Q1: The Learner's Goal

**Ask:** "Why is the learner using this app? Not the learning objective —
their personal reason. What do they want to make, become, or be able to
do? What does 'done' look like in their life, not in the app?"

**Push until you hear:** A concrete personal outcome. "I want to build
a bookshelf for my room" is a goal. "Complete the woodworking module" is
an app metric.

**Red flags:** Goals that sound like app features. "Earn the electronics
badge." That's the app's goal, not the learner's.

### Q2: The Progress Shape

**Ask:** "What does real progress look like in this domain? Is it linear
(each step builds on the last), branching (multiple paths to competence),
or cyclical (practice the same skills at increasing difficulty)? How would
an expert know the learner is getting better?"

**Push until you hear:** Observable indicators of improvement that aren't
app metrics. "Their joints get tighter" is progress. "They completed 80%
of lessons" is not.

**Red flags:** Progress defined by content consumption. If the only way
to measure progress is "they watched the videos," the assessment design
is missing. Route to `/learning-architect`.

### Q3: The Stall Points

**Ask:** "Where do learners typically get stuck or quit in this kind of
learning? What's happening when someone stops — are they confused, bored,
frustrated, distracted, or just busy? What does 'coming back after a
break' look like?"

**Push until you hear:** Specific stall scenarios with causes. "They get
stuck when the practice build doesn't match the photo" is a stall point.
"They lose motivation" is a symptom, not a cause.

**Red flags:** "They won't stall if the content is good enough." They
will. Everyone does.

### Q4: Existing Motivation Mechanics

**Ask:** "What does the app currently do (or plan to do) to show progress
and keep learners going? Any points, streaks, badges, notifications,
reminders, progress bars, certificates, or social features?"

**Push until you hear:** A specific list. For each: what triggers it,
what the learner sees, and what behavior it's trying to encourage.

**Purpose:** Not to discard everything — some mechanics genuinely help.
But each one needs to pass: does this help the learner see real progress,
or does it create artificial urgency?

### Q5: Constraints

**Ask:** "What can't you change? Platform constraints (iOS notifications,
offline access), business constraints (monetization tied to engagement
metrics), pedagogical constraints (from the LDB or curriculum), or team
constraints (what's realistic to build)?"

**Push until you hear:** Hard constraints separated from preferences.
"We need push notifications for re-engagement" might be a business
requirement. "We want streaks" is a preference that can be challenged.

## Phase 2: Motivation Audit

Before designing anything, audit whatever exists. For each motivation
mechanic currently in place or planned:

### The Test

1. **Does it reflect real progress?** If removed, would the learner still
   know they're improving? If yes — the mechanic is decoration, not
   information.

2. **What happens when it breaks?** Streaks break. Badges plateau. Points
   inflate. What does the learner experience when the mechanic stops
   working? If the answer is "they feel bad and might quit" — the mechanic
   created a dependency, not motivation.

3. **Who benefits?** If the mechanic primarily benefits the app's
   engagement metrics rather than the learner's understanding — flag it.
   Be direct: "This streak counter benefits retention metrics. The learner
   gets anxiety about breaking it."

4. **Does it respect autonomy?** Does the learner choose to engage with
   it, or is it imposed? Locked content, forced daily goals, and
   shame-based reminders ("You're falling behind!") undermine the
   autonomy that self-directed learners came here for.

### Common Failure Patterns

Name them when you see them:

- **Streak anxiety:** Daily streaks punish life happening. A sick day or
  a busy week destroys a 30-day streak. The learner feels they failed the
  app, not that they took a break.

- **Points inflation:** Points accumulate but mean nothing. The learner
  has 4,000 points and can't name what they learned. Points track
  activity, not capability.

- **Badge ceiling:** Badges motivate until they're all earned. Then what?
  The mechanic has no long game.

- **Social comparison trap:** Leaderboards help competitive learners and
  crush everyone else. In a self-directed context, comparing yourself to
  strangers learning at a different pace is rarely helpful.

- **Notification nagging:** "Come back! You haven't practiced!" is the
  app equivalent of a guilt trip. It works once. Then it's muted.

- **Premature celebration:** "Amazing work!" after a trivial action
  teaches the learner that the app's praise is meaningless. Save
  celebration for real milestones — moments where the learner did
  something they couldn't do before.

- **Completion theater:** A progress bar that fills up based on pages
  viewed, not skills demonstrated. The learner "finishes" and can't do
  the thing.

## Phase 3: Design the System

Design five interconnected components:

### Component 1: Progress Visibility

How the learner sees where they are and where they're headed.

**Design questions:**
- What's the unit of progress? (skill demonstrated, rubric dimension
  met, practice build completed, summative task achieved)
- How granular? (per-session, per-skill, per-unit, overall)
- What's the visual metaphor? (map, path, checklist, portfolio, before/
  after)
- What's visible vs. hidden? (show the next step, not the whole mountain)

**Constraint:** Progress indicators must map to real capability changes,
not content completion. If the learner's progress bar is at 80%, they
should be able to demonstrate 80% of the target skills.

### Component 2: Feedback Loops

What the learner sees after doing something — practice, building, or
completing a step.

**Design questions:**
- What feedback comes immediately? (after each practice rep)
- What feedback comes after a delay? (after a build step, after the
  summative task)
- What does the feedback contain? (what happened, why it matters, what
  to do next)
- How does feedback change as scaffolds fade? (early: specific guidance.
  Late: just the rubric criteria and their result.)

**Constraint:** Feedback must be informational, not evaluative. "Your
joint has a 2mm gap — that's in the 'developing' range on the rubric.
Here's what to check" is informational. "Good effort!" is noise.

### Component 3: Stall Recovery

What happens when the learner stops, slows down, or gets stuck.

**Design questions:**
- How does the app detect a stall? (time away, repeated failures, slow
  progress, explicit "I'm stuck" signal)
- What's the first response? (not a notification — what's in the app
  when they open it)
- What's the re-entry point? (exactly where they left off, or a
  warm-up rep first?)
- How does the app distinguish "stuck" from "busy"? (a learner who
  hasn't opened the app in a week might be frustrated — or on vacation)
- What's the escalation path? (community, help content, simpler
  practice, different approach)

**Constraint:** No guilt. No "you've been away for 5 days." The app
shows where they are and what's next. The door is always open and
judgment-free.

### Component 4: Milestones and Celebration

When and how the app marks real achievement.

**Design questions:**
- What counts as a milestone? (must be tied to demonstrated capability,
  not content consumption)
- How are milestones communicated? (in-app, shareable, portfolio-worthy)
- What's the ratio? (rare enough to mean something, frequent enough to
  sustain momentum)
- Can the learner define their own milestones? (personal goals within
  the broader path)

**Constraint:** Celebrate the work, not the compliance. "You built a
functional circuit that meets three of four rubric dimensions" is a real
milestone. "You completed 10 lessons this week" is an attendance record.

### Component 5: Autonomy Architecture

How much control the learner has over their path.

**Design questions:**
- What's locked vs. open? (and why — genuine prerequisites vs.
  engagement design)
- Can the learner skip ahead? (and what are the consequences — harder
  without scaffolding, but allowed?)
- Can they choose their project? (within the constraints of the
  summative task)
- Can they set their own pace? (daily goals, weekly goals, no goals?)
- What's the app's stance: guide, coach, or tool? (a guide leads, a
  coach advises, a tool waits)

**Constraint:** Every locked element needs a pedagogical justification,
not just "we want them to go through the content in order." If content
can be safely skipped or reordered, let the learner decide.

## Phase 4: Goal & Progress Spec

Write to `{project-root}/design-docs/goal-spec-{slug}-{YYYYMMDD}.md`:

```markdown
# Goal & Progress Spec: {feature/flow name}

Generated by /goal-design on {date}
Status: DRAFT
Platform: {iOS / web / both}

## The Learner's Goal
{their personal reason for being here — not the learning objective}

## Progress Shape
{linear / branching / cyclical — how improvement works in this domain}

## Progress Visibility
### Unit of progress
{what moves the needle — skill demonstrated, rubric dimension, build}
### Visual model
{how the learner sees it — map, path, portfolio, etc.}
### What's shown
{what the learner sees at a glance}
### What's hidden
{what's revealed as they progress — avoid overwhelming with the full scope}

## Feedback Loops
### Immediate feedback (per rep)
{what they see, what it contains, tone}
### Build feedback (per project step)
{what they see, self-check mechanism, rubric reference}
### Summative feedback
{how the final artifact is evaluated, what the learner receives}
### Feedback progression
{how feedback changes as scaffolds fade — early vs. late}

## Stall Recovery
### Detection
{how the app identifies a stall — signals, thresholds}
### Re-entry experience
{what the learner sees when they come back}
### Stuck pathway
{escalation: simpler practice → help content → community → alternative}
### Tone
{exact language examples — what the app says and doesn't say}

## Milestones
### Milestone map
{list of real milestones tied to demonstrated capability}
### Communication
{how each milestone is marked — in-app, shareable, portfolio}
### Learner-defined milestones
{whether and how the learner sets personal goals}

## Autonomy Architecture
### Locked elements (with justification)
{what's locked and the specific prerequisite reason}
### Learner choices
{where the learner has control — order, project, pace}
### App stance
{guide / coach / tool — and where it shifts along the path}

## Motivation Audit Results
### Mechanics kept
{existing mechanics that passed the test, and why}
### Mechanics removed or changed
{what was cut or redesigned, and what replaces it}
### Mechanics flagged
{anything that needs real user data before deciding}

## Anti-Patterns Avoided
{which failure patterns were identified and how the design avoids them}

## Integration Points
- /ux-architect: {where the goal system connects to the flow design}
- /curriculum-dev: {where it connects to the content and project sequence}
- /app-critique: {persona scenarios to test — especially Jordan (return)
  and Deshawn (engagement sensitivity)}

## Open Questions
{what needs user testing, A/B testing, or further design work}

## Simulation Caveats
- Motivation is deeply personal — no model replaces real learner data.
- {specific assumptions about this learner population that need testing}
- Recommend: interview {n} learners about their stall/return patterns
  before committing to the stall recovery design.
```

## Phase 5: Honesty Check

Before delivering:

- Did you audit existing mechanics honestly, including ones the user
  is attached to?
- Did you design for stalls, not just momentum? (Stall recovery is
  where motivation design earns its keep.)
- Did you tie progress to demonstrated capability, not content
  consumption?
- Did you flag where the design needs real user data vs. where it's
  safe to ship and iterate?
- Did you resist adding gamification to fill gaps in the learning
  design? (If the content is boring, points won't fix it — route to
  `/curriculum-dev`.)

## Handoff

Tell the user:

- The spec is at `{path}`.
- The core model: how the learner sees progress, how the app handles
  stalls, and what was changed in the motivation mechanics.
- What needs testing with real learners before committing.
- Reminder: motivation models are hypotheses. Ship, observe, adjust.

Suggest next steps:
- `/app-critique` to run personas through the goal system (especially
  Jordan for return experience, Deshawn for engagement sensitivity,
  Mia for time-pressure context).
- `/ux-architect` if the goal system requires flow changes.
- `/curriculum-dev` if the issue is content engagement, not motivation
  mechanics.

## What This Skill Is NOT

- It is not a gamification toolkit. If the answer is "add points," the
  question was wrong.
- It is not a notification design tool. Notifications are one tactic —
  and usually the wrong one.
- It is not a substitute for good content. No amount of motivation
  design fixes a boring or confusing learning experience.
- It does not replace real user research on motivation and stall patterns.
