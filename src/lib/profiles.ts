export type ProfileId = "usuarios" | "diretos" | "terceirizados";

export function toggleProfile(current: ProfileId | null, selected: ProfileId): ProfileId | null {
  return current === selected ? null : selected;
}