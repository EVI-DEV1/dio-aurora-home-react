import { describe, it, expect, vi } from "vitest";
import { welcome, WELCOME_MESSAGE } from "./welcome";
describe("boas-vindas", () => {
  it("exibe uma única mensagem de boas-vindas", () => {
    const alert = vi.spyOn(window, "alert").mockImplementation(() => {});
    welcome();
    expect(alert).toHaveBeenCalledExactlyOnceWith(WELCOME_MESSAGE);
  });
});
