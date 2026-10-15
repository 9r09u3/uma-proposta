import { describe, expect, it } from "vitest";
import { toggleProfile } from "@/lib/profiles";

describe("Expansão dos três perfis", () => {
  it("expande cada perfil a partir do estado recolhido", () => {
    expect(toggleProfile(null, "usuarios")).toBe("usuarios");
    expect(toggleProfile(null, "diretos")).toBe("diretos");
    expect(toggleProfile(null, "terceirizados")).toBe("terceirizados");
  });
  it("recolhe o perfil ao selecionar o mesmo novamente", () => {
    expect(toggleProfile("usuarios", "usuarios")).toBeNull();
    expect(toggleProfile("diretos", "diretos")).toBeNull();
    expect(toggleProfile("terceirizados", "terceirizados")).toBeNull();
  });
  it("alterna entre perfis mantendo apenas um selecionado", () => {
    const first = toggleProfile(null, "usuarios");
    const second = toggleProfile(first, "diretos");
    const third = toggleProfile(second, "terceirizados");
    expect(first).toBe("usuarios");
    expect(second).toBe("diretos");
    expect(third).toBe("terceirizados");
  });
});