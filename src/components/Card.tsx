import { useState, type FormEvent } from "react";
import { Box, Input } from "@chakra-ui/react";
import { ArrowRight, Eye, EyeOff, LockKeyhole, Check } from "lucide-react";
import { ActionButton } from "./ActionButton";
import { welcome } from "../services/welcome";
export function Card() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [entered, setEntered] = useState(false);
  const [error, setError] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (email.trim() !== "demo@aurora.app" || password !== "Aurora2026!") {
      setError(
        "Use os dados de demonstração abaixo para explorar a interface.",
      );
      return;
    }
    setError("");
    welcome();
    setEntered(true);
    setPassword("");
  }
  return (
    <Box className="login-card" id="acesso">
      <div className="card-eyebrow">
        <span className="live-dot" /> SEU ESPAÇO AURORA{" "}
        <LockKeyhole size={15} />
      </div>
      {entered ? (
        <div className="success-state">
          <span className="success-icon">
            <Check size={25} />
          </span>
          <h2>Um novo começo.</h2>
          <p>
            Você entrou na demonstração. Tudo aqui é fictício, feito para
            explorar a experiência Aurora.
          </p>
          <div className="session-summary">
            <span>Ambiente</span>
            <strong>Demonstração local</strong>
            <span>Dados enviados</span>
            <strong>Nenhum</strong>
          </div>
          <ActionButton
            onClick={() => {
              setEntered(false);
              setEmail("");
            }}
          >
            Voltar ao acesso <ArrowRight size={17} />
          </ActionButton>
        </div>
      ) : (
        <>
          <h2>Bom ter você aqui.</h2>
          <p className="card-description">
            Acesse sua conta e dê o próximo passo.
          </p>
          <form onSubmit={submit}>
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="off"
                placeholder="voce@exemplo.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                required
                aria-describedby={error ? "login-error" : undefined}
              />
            </div>
            <div className="field">
              <label htmlFor="password">Senha</label>
              <div className="password-wrap">
                <Input
                  id="password"
                  name="password"
                  type={visible ? "text" : "password"}
                  autoComplete="off"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  required
                  aria-describedby={error ? "login-error" : undefined}
                />
                <button
                  type="button"
                  className="reveal"
                  onClick={() => setVisible((v) => !v)}
                  aria-label={visible ? "Ocultar senha" : "Mostrar senha"}
                >
                  {visible ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            {error && (
              <p className="form-error" id="login-error" role="alert">
                {error}
              </p>
            )}
            <ActionButton type="submit">
              Entrar na Aurora <ArrowRight size={18} />
            </ActionButton>
          </form>
          <div className="demo-box">
            <span>EXPERIMENTE SEM CADASTRO</span>
            <p>Uma conta fictícia, pronta para conhecer.</p>
            <button
              type="button"
              onClick={() => {
                setEmail("demo@aurora.app");
                setPassword("Aurora2026!");
                setError("");
              }}
            >
              Preencher acesso de demonstração <ArrowUpSmall />
            </button>
            <small>demo@aurora.app · Aurora2026!</small>
          </div>
          <p className="privacy-note">
            <LockKeyhole size={13} /> Use apenas os dados fictícios acima.
          </p>
        </>
      )}
    </Box>
  );
}
function ArrowUpSmall() {
  return <ArrowRight size={15} />;
}
