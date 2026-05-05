import Image from "next/image";

function FooterIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-[#BE925C]">
      {children}
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#5C6D7E] text-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:pr-6">
            <div className="flex items-center gap-3">
              <Image
                src="/img/logo.svg"
                alt="Logo"
                width={44}
                height={44}
                className="h-11 w-11"
              />
              <div className="leading-tight">
                <div className="text-base font-semibold tracking-wide text-white">
                  Adeibson Araújo
                </div>
                <div className="text-xs font-medium tracking-[0.18em] text-[#BE925C]">
                  PSICOLOGIA • ABA
                </div>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/80">
              Um espaço de acolhimento, escuta e cuidado emocional. Atendimento
              pensado para você se sentir seguro(a) e construir mudanças com
              leveza.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">Contato</div>
            <div className="mt-5 grid gap-3">
              <a
                href="mailto:contato@exemplo.com"
                className="flex items-center gap-3 text-sm text-white/85 transition-opacity hover:opacity-95"
              >
                <FooterIcon>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6h16v12H4V6Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                    <path
                      d="m4 7 8 6 8-6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                  </svg>
                </FooterIcon>
                adeibson-silva@hotmail.com
              </a>

              <a
                href="https://wa.me/+559884085515"
                className="flex items-center gap-3 text-sm text-white/85 transition-opacity hover:opacity-95"
              >
                <FooterIcon>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 3.5h.7c.6 0 1.1.4 1.3 1l.9 3c.2.6 0 1.3-.6 1.7l-1.3.9c1.1 2.1 2.8 3.7 4.9 4.9l.9-1.3c.4-.6 1.1-.8 1.7-.6l3 .9c.6.2 1 0.7 1 1.3v.7c0 1.1-.8 2-1.9 2.1-8.2.6-14.8-6-14.2-14.2.1-1.1 1-1.9 2.1-1.9Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                  </svg>
                </FooterIcon>
                (98) 8408-5515
              </a>

              <a
                href="https://www.instagram.com/psiadeibson/"
                className="flex items-center gap-3 text-sm text-white/85 transition-opacity hover:opacity-95"
              >
                <FooterIcon>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M16.5 11.8a4 4 0 1 1-3.7-3.7 4 4 0 0 1 3.7 3.7Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M17.8 6.2h.01"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </FooterIcon>
                @psiadeibson
              </a>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">Localização</div>
            <div className="mt-5 grid gap-3 text-sm text-white/85">
              <div className="flex items-start gap-3">
                <FooterIcon>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22s7-5.1 7-12a7 7 0 1 0-14 0c0 6.9 7 12 7 12Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 11.2a2.2 2.2 0 1 0-2.2-2.2 2.2 2.2 0 0 0 2.2 2.2Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                  </svg>
                </FooterIcon>
                <div>
                  <div className="font-semibold text-white">
                    Atendimento online e presencial
                  </div>
                  <div className="mt-1 text-white/75">
                    Avenida Minas Gerais, 304 Belo Horizonte
                    <p>Edifício Matizze Office, 3° andar.</p>
                  </div>
                  <div className="text-white/75">Marabá - PA</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">
              Informações profissionais
            </div>
            <div className="mt-5 grid gap-3 text-sm text-white/85">
              <div>
                <span className="font-semibold text-[#BE925C]">CRP:</span>{" "}
                10/12125
              </div>
              <div>
                <span className="font-semibold text-[#BE925C]">
                  Especialidade:
                </span>{" "}
                Psicologia Aba
              </div>
              <div>
                <span className="font-semibold text-[#BE925C]">Atendimento:</span>{" "}
                Online e presencial
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 h-px w-full bg-[#BE925C]/25" />

        <div className="mt-6 flex flex-col gap-3 text-xs text-white/75 sm:flex-row sm:items-center sm:justify-between">
          <div>© {year} Adeibson Araújo. Todos os direitos reservados.</div>
          {/* <div className="text-white/70">
            Desenvolvido com cuidado e privacidade.
          </div> */}
        </div>
      </div>
    </footer>
  );
}
