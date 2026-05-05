"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Como funciona a psicoterapia?",
    answer:
      "A psicoterapia é um processo de acompanhamento psicológico baseado no diálogo. Durante as sessões, trabalhamos juntos para compreender dificuldades, desenvolver habilidades e promover bem-estar emocional.",
  },
  {
    question: "Para quem a terapia é indicada?",
    answer:
      "A terapia é indicada para qualquer pessoa que esteja enfrentando desafios emocionais, comportamentais ou que deseje se conhecer melhor e melhorar sua qualidade de vida.",
  },
  {
    question: "Como saber se preciso de terapia?",
    answer:
      "Se você sente que algo não vai bem, tem dificuldades emocionais recorrentes ou deseja apoio para lidar com situações específicas, a terapia pode ser um espaço importante de cuidado.",
  },
  {
    question: "Quanto tempo duram as sessões?",
    answer:
      "As sessões têm duração média de 50 minutos, podendo ser ajustadas conforme a necessidade de cada caso.",
  },
  {
    question: "Qual a diferença entre atendimento presencial e online?",
    answer:
      "O presencial acontece no consultório, enquanto o online é realizado por videochamada. Ambos seguem os mesmos princípios éticos e têm eficácia comprovada. No atendimento online é essencial ter uma boa conexão de internet, lugar seguro e silencioso, onde você possa se sentir à vontade para falar livremente sem interrupções.",
  },
  {
    question: "Qual o valor das sessões?",
    answer:
      "Os valores, assim como a disponibilidade, podem ser informados diretamente no contato.",
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
      <div className="mx-auto w-full max-w-7xl px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-18">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-[#5C6D7E] sm:text-4xl">
          Perguntas frequentes
        </h2>

        <div className="mx-auto mt-10 flex w-full max-w-5xl flex-col gap-4 sm:gap-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl bg-[#FFFFFF] shadow-[0_4px_10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_16px_rgba(0,0,0,0.14)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex min-h-16 w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-300 hover:bg-[#f7f7f7] sm:px-6"
                >
                  <span className="text-[1rem] font-medium leading-tight text-[#5C6D7E] sm:text-[1.1rem]">
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
                    <div className="px-5 pb-4 font-(family-name:--font-inter) text-[0.92rem] leading-6 text-[#5C6D7F] sm:px-6 sm:text-[0.95rem]">
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
