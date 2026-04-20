# nstack-app-design (Cowork plugin)

Three app design skills packaged as a Cowork plugin. These are
Cowork-compatible adaptations of the same skills in the main `nstack` repo —
simplified frontmatter, no Bash, Read/Write/AskUserQuestion/WebSearch only.

Companion to `nstack-education`. Where `nstack-education` designs the
learning content (what the app teaches), `nstack-app-design` designs the
app itself — flows, screens, interactions, motivational architecture.

Pure knowledge work. Good fit for mobile dispatch: queue an `/app-critique`
run from a phone after a build ships, review results later.

## Skills

| Skill | Purpose |
|-------|---------|
| `/ux-architect` | Product design thinking partner. Forcing questions → flow maps, edge states, UX spec. Not a visual design tool — this is about how the app works, not how it looks. |
| `/app-critique` | Persona-based UX review (6 personas: Mia, Deshawn, Tomoko, Ray, Sara, Jordan). Finds design problems, not bugs. Different from /qa and /plan-design-review. |
| `/goal-design` | Motivation and progress system design. Audits gamification mechanics, designs feedback loops, stall recovery, and autonomy architecture — without replacing intrinsic motivation with points. |

## When to use what

- **Starting a new flow or screen** → `/ux-architect`
- **UX spec or prototype exists, want to pressure-test** → `/app-critique`
- **Flow exists, need to design motivation/progress around it** → `/goal-design`

## Pipeline with education skills

The two plugins compose naturally:

```
/learning-architect   →   /ux-architect     (design the learning flow
                                              for a new unit)
         │                       │
         ▼                       ▼
/curriculum-dev       →   /goal-design      (wrap the curriculum in
                                              motivation + progress)
         │                       │
         ▼                       ▼
/student-sim          +   /app-critique     (pressure-test both the
                                              curriculum and the app UX)
```

## Install

Package this directory as a Cowork plugin and install it through Cowork's
plugin system. The plugin name is `nstack-app-design`.

## Source

Maintained in the [nstack](https://github.com/llewellynathan/nstack) repo at
`cowork-plugins/nstack-app-design/`. The same skills in their Claude Code
form live at the repo root.

If you update a skill in one place, update it in both. The Cowork versions
are intentionally simpler — they exist so the skill runs in Cowork's
pure-knowledge environment.
