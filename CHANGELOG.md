# Changelog

All notable changes to nstack.

## [0.1.0] — 2026-04

Initial fork from [garrytan/gstack](https://github.com/garrytan/gstack),
adapted into a build system for a hybrid learning platform for self-directed
teens and young adults.

### Added
- 5 education skills built on backward design (UbD): `/learning-architect`,
  `/curriculum-dev`, `/student-sim`, `/standards-check`, `/maker-safety`
- 3 app design skills: `/ux-architect`, `/app-critique`, `/goal-design`
- Two Cowork plugin bundles: `nstack-education` and `nstack-app-design`
- Phase-transition discipline + per-item completion tracking across all
  discovery-style skills
- COPPA compliance check in `/cso`
- Education-specific dimensions in `/plan-design-review` (cognitive load,
  gamification ethics, reading level, home safety)
- Learner persona test scenarios in `/qa` and `/qa-only`
- Education review phase in `/autoplan`

### Changed
- Stripped YC branding from `/office-hours`
- Customized `/plan-ceo-review` "10-star product" framing for education
- Renamed `gstack` → `nstack` throughout

### Removed
- Multi-host support (Codex, Kiro, Factory, OpenCode, Slate, Cursor, OpenClaw)
- `supabase/` telemetry stack
- Multi-tool `/retro global` mode
- Dead bin/ telemetry clients + scripts/ host-config exporters
- Docs for removed features (OpenClaw, ADDING_A_HOST)
