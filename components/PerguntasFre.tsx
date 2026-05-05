"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Como funciona a primeira sessão?",
    answer:
      "A primeira sessão é um momento de acolhimento e escuta, em que você pode falar sobre sua história, suas dificuldades e suas expectativas em relação ao processo terapêutico.",
  },
  {
    question: "Preciso ter um problema grave para fazer terapia?",
    answer:
      "Não. A terapia também ajuda no autoconhecimento, na organização emocional e no desenvolvimento de estratégias para lidar melhor com o dia a dia.",
  },
  {
    question: "Atende online ou presencial?",
    answer:
      "Os atendimentos podem ser realizados online ou presencialmente, conforme a disponibilidade e a necessidade de cada pessoa.",
  },
  {
    question: "Aceita algum convênio?",
    answer:
      "Os atendimentos são particulares, mas em alguns casos é possível emitir recibo para solicitação de reembolso junto ao convênio.",
  },
  {
    question: "Quanto custa?",
    answer:
      "O valor pode variar conforme a modalidade de atendimento. Entre em contato para receber as informações atualizadas.",
  },
  {
    question: "É sigiloso?",
    answer:
      "Sim. Todo o processo é conduzido com ética profissional e sigilo, respeitando integralmente a privacidade das informações compartilhadas.",
  },
];

function Chevron({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 text-[#5C7D95] transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
      aria-hidden="true"
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PerguntasFre() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="perguntas-frequentes" className="bg-[#FFFFFF] font-(family-name:--font-geist-sans) antialiased">
      <div className="mx-auto w-full max-w-7xl px-6 py-18 sm:px-10 sm:py-22 lg:px-16 lg:py-24">
        <h2 className="text-center text-4xl font-semibold tracking-tight text-[#5C6D7E] sm:text-5xl">
          Perguntas frequentes
        </h2>

        <div className="mx-auto mt-14 flex w-full max-w-6xl flex-col gap-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-[14px] bg-[#FFFFFF] shadow-[0_6px_14px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(0,0,0,0.16)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex min-h-21 w-full items-center justify-between gap-5 px-6 py-5 text-left transition-colors duration-300 hover:bg-[#f7f7f7] sm:px-8"
                >
                  <span className="text-[clamp(1.2rem,1.5vw,1.7rem)] font-medium leading-tight text-[#5C6D7E]">
                    {faq.question}
                  </span>
                  <Chevron isOpen={isOpen} />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 font-(family-name:--font-inter) text-[0.98rem] leading-7 text-[#5C6D7F] sm:px-8">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
