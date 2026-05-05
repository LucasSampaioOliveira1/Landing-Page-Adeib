"use client";

import { useEffect, useState } from "react";

type Testimonial = {
  name: string;
  time: string;
  rating: number;
  text: string;
};

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      xmlns="http://www.w3.org/2000/svg"
      className="text-[#C99658]"
    >
      <path
        d="M12 2.6l2.78 5.63 6.22.9-4.5 4.38 1.06 6.2L12 16.97 6.44 19.7l1.06-6.2L3 9.13l6.22-.9L12 2.6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GoogleMark() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 256 262"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M255.86 133.45c0-11.3-.92-19.6-2.92-28.2H130.55v51.54h71.74c-1.45 12.8-9.3 32.08-26.75 45.04l-.24 1.72 38.7 30.02 2.68.27c24.64-22.76 39.18-56.27 39.18-100.4"
        fill="#4285F4"
      />
      <path
        d="M130.55 261.1c35.1 0 64.54-11.6 86.06-31.6l-41.02-31.75c-11 7.68-25.78 13.05-45.04 13.05-34.38 0-63.55-22.76-73.98-54.26l-1.62.14-40.34 31.18-.56 1.55c21.4 42.54 65.34 72.7 116.5 72.7"
        fill="#34A853"
      />
      <path
        d="M56.57 156.54c-2.75-8.3-4.32-17.14-4.32-26.27 0-9.14 1.57-17.98 4.18-26.28l-.08-1.83-40.88-31.68-1.34.64C5.08 89.64 0 109.96 0 130.27c0 20.3 5.08 40.62 14.13 59.17l42.44-32.9"
        fill="#FBBC05"
      />
      <path
        d="M130.55 49.73c24.28 0 40.68 10.44 50.07 19.17l36.55-35.72C194.95 12.08 165.65 0 130.55 0 79.38 0 35.44 30.16 14.13 73.1l42.32 32.9c10.56-31.5 39.73-56.27 74.1-56.27"
        fill="#EA4335"
      />
    </svg>
  );
}

const testimonials: Testimonial[] = [
  {
    name: "Marina Souza",
    time: "2 meses atrás",
    rating: 5,
    text: "Me senti acolhida desde a primeira sessão. As conversas foram leves e, ao mesmo tempo, profundas. Recomendo muito.",
  },
  {
    name: "Rafael Lima",
    time: "4 meses atrás",
    rating: 5,
    text: "Profissional extremamente pontual e atencioso. Me ajudou a organizar meus pensamentos.",
  },
  {
    name: "Camila Ferreira",
    time: "6 meses atrás",
    rating: 5,
    text: "Muito competente e dedicado. O acompanhamento fez diferença na minha autoestima e na forma como me relaciono.",
  },
  {
    name: "Fernanda Almeida",
    time: "7 meses atrás",
    rating: 5,
    text: "Um atendimento muito humano e respeitoso. Senti evolução na forma como lido com conflitos e emoções.",
  },
  {
    name: "Bruno Martins",
    time: "9 meses atrás",
    rating: 5,
    text: "Me ajudou a ter mais clareza sobre escolhas importantes. As sessões foram objetivas e acolhedoras.",
  },
  {
    name: "Juliana Costa",
    time: "1 ano atrás",
    rating: 5,
    text: "Excelente profissional. Me senti segura para falar sobre temas difíceis e fui ganhando confiança com o tempo.",
  },
];

function InitialsAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");

  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C99658]/15 text-sm font-semibold text-[#C99658]">
      {initials}
    </div>
  );
}

export default function Depoimentos() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    function updateVisibleCards() {
      const width = window.innerWidth;
      if (width >= 1024) {
        setVisibleCards(3);
      } else if (width >= 640) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    }

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => {
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCards);
  const normalizedIndex = Math.min(currentIndex, maxIndex);
  const canPrev = normalizedIndex > 0;
  const canNext = normalizedIndex < maxIndex;

  function scrollToNeighbor(direction: -1 | 1) {
    setCurrentIndex((prev) => {
      const base = Math.min(prev, maxIndex);
      return direction === 1
        ? Math.min(base + 1, maxIndex)
        : Math.max(base - 1, 0);
    });
  }

  return (
    <section id="depoimentos" className="bg-[#5C6D7E]">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Sou nota máxima nas avaliações do Google
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/85">
            Se você deseja ver mais avaliações ou quer deixar o seu depoimento,{" "}
            <a
              href="#"
              className="font-semibold text-[#C99658] underline underline-offset-4 decoration-[#C99658]/60 transition-opacity hover:opacity-90"
            >
              clique aqui.
            </a>
          </p>
        </div>

        <div className="mt-12 grid grid-cols-[auto_1fr_auto] items-center gap-5">
          <button
            type="button"
            onClick={() => scrollToNeighbor(-1)}
            disabled={!canPrev}
            aria-label="Depoimentos anteriores"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/90 text-[#C99658] shadow-sm transition-opacity hover:opacity-95 disabled:opacity-40"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5 5 8 11.5 14.5 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="min-w-0">
            <div className="overflow-hidden pb-4">
              <div
                className="flex transition-transform ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  transform: `translate3d(-${(normalizedIndex * 100) / visibleCards}%, 0, 0)`,
                  transitionDuration: "1100ms",
                }}
              >
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="shrink-0 px-3"
                  style={{ width: `${100 / visibleCards}%` }}
                >
                  <article className="rounded-3xl bg-white p-6 shadow-[0_10px_28px_rgba(0,0,0,0.18)]">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <InitialsAvatar name={t.name} />
                        <div className="min-w-0">
                          <div className="truncate text-sm font-semibold text-[#1F2937]">
                            {t.name}
                          </div>
                          <div className="text-xs text-[#1F2937]/60">{t.time}</div>
                        </div>
                      </div>
                      <div className="shrink-0">
                        <GoogleMark />
                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} filled={i < t.rating} />
                      ))}
                      <span className="ml-2 text-xs font-semibold text-[#C99658]">
                        {t.rating.toFixed(1)}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-[#1F2937]/80">
                      {t.text}
                    </p>

                    <div className="mt-6 h-px w-full bg-[#C99658]/20" />
                  </article>
                </div>
              ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => scrollToNeighbor(1)}
            disabled={!canNext}
            aria-label="Próximos depoimentos"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/90 text-[#C99658] shadow-sm transition-opacity hover:opacity-95 disabled:opacity-40"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5 5 16 11.5 9.5 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
