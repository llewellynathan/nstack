/**
 * Host config registry.
 *
 * nstack is Claude Code-only. This module exists to preserve the host-config
 * interface that the skill generator expects — without the upstream multi-host
 * machinery (Codex, Kiro, Factory, OpenCode, Slate, Cursor, OpenClaw) that was
 * removed when the fork narrowed to a single host.
 */

import type { HostConfig } from '../scripts/host-config';
import claude from './claude';

/** All registered host configs. nstack only supports Claude. */
export const ALL_HOST_CONFIGS: HostConfig[] = [claude];

/** Map from host name to config. */
export const HOST_CONFIG_MAP: Record<string, HostConfig> = Object.fromEntries(
  ALL_HOST_CONFIGS.map(c => [c.name, c])
);

/** Union type of all host names, derived from configs. */
export type Host = (typeof ALL_HOST_CONFIGS)[number]['name'];

/** All host names as a string array (for CLI arg validation, etc.). */
export const ALL_HOST_NAMES: string[] = ALL_HOST_CONFIGS.map(c => c.name);

/** Get a host config by name. Throws if not found. */
export function getHostConfig(name: string): HostConfig {
  const config = HOST_CONFIG_MAP[name];
  if (!config) {
    throw new Error(`Unknown host '${name}'. Valid hosts: ${ALL_HOST_NAMES.join(', ')}`);
  }
  return config;
}

/**
 * Resolve a host name from a CLI argument, handling aliases.
 * nstack only supports 'claude'; the function is kept for API compatibility.
 */
export function resolveHostArg(arg: string): string {
  if (HOST_CONFIG_MAP[arg]) return arg;

  for (const config of ALL_HOST_CONFIGS) {
    if (config.cliAliases?.includes(arg)) return config.name;
  }

  throw new Error(`Unknown host '${arg}'. Valid hosts: ${ALL_HOST_NAMES.join(', ')}`);
}

/**
 * Get hosts that are NOT the primary host (Claude).
 * In nstack, this is always empty — Claude is the only supported host.
 */
export function getExternalHosts(): HostConfig[] {
  return ALL_HOST_CONFIGS.filter(c => c.name !== 'claude');
}

// Re-export individual configs for direct import
export { claude };
