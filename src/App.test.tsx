import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import App from "./App";
import { ActionButton } from "./components/ActionButton";
function setup() {
  return render(
    <ChakraProvider value={defaultSystem}>
      <App />
    </ChakraProvider>,
  );
}
describe("acesso Aurora", () => {
  it("alterna os temas sem perder os campos", async () => {
    setup();
    const user = userEvent.setup();
    await user.type(screen.getByLabelText("E-mail"), "teste@exemplo.com");
    await user.click(screen.getByRole("button", { name: "Ativar tema claro" }));
    expect(document.querySelector(".app")).toHaveAttribute(
      "data-theme",
      "light",
    );
    expect(screen.getByLabelText("E-mail")).toHaveValue("teste@exemplo.com");
    await user.click(
      screen.getByRole("button", { name: "Ativar tema escuro" }),
    );
    expect(document.querySelector(".app")).toHaveAttribute(
      "data-theme",
      "dark",
    );
  });
  it("permite mostrar e ocultar a senha", async () => {
    setup();
    const user = userEvent.setup();
    expect(screen.getByLabelText("Senha")).toHaveAttribute("type", "password");
    await user.click(screen.getByRole("button", { name: "Mostrar senha" }));
    expect(screen.getByLabelText("Senha")).toHaveAttribute("type", "text");
    await user.click(screen.getByRole("button", { name: "Ocultar senha" }));
    expect(screen.getByLabelText("Senha")).toHaveAttribute("type", "password");
  });
  it("recusa dados diferentes da conta fictícia sem mostrar boas-vindas", async () => {
    const alert = vi.spyOn(window, "alert").mockImplementation(() => {});
    setup();
    const user = userEvent.setup();
    await user.type(screen.getByLabelText("E-mail"), "teste@exemplo.com");
    await user.type(screen.getByLabelText("Senha"), "invalida");
    await user.click(screen.getByRole("button", { name: "Entrar na Aurora" }));
    expect(screen.getByRole("alert")).toHaveTextContent(
      "dados de demonstração",
    );
    expect(alert).not.toHaveBeenCalled();
  });
  it("preenche a demonstração, apresenta boas-vindas e permite voltar", async () => {
    const alert = vi.spyOn(window, "alert").mockImplementation(() => {});
    setup();
    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: /Preencher acesso/ }));
    expect(screen.getByLabelText("E-mail")).toHaveValue("demo@aurora.app");
    await user.click(screen.getByRole("button", { name: "Entrar na Aurora" }));
    expect(alert).toHaveBeenCalledTimes(1);
    expect(
      screen.getByRole("heading", { name: "Um novo começo." }),
    ).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Voltar ao acesso" }));
    expect(screen.getByLabelText("E-mail")).toHaveValue("");
    expect(screen.getByLabelText("Senha")).toHaveValue("");
  });
  it("encaminha onClick no componente de botão", async () => {
    const onClick = vi.fn();
    render(
      <ChakraProvider value={defaultSystem}>
        <ActionButton onClick={onClick}>Ação</ActionButton>
      </ChakraProvider>,
    );
    await userEvent.click(screen.getByRole("button", { name: "Ação" }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
