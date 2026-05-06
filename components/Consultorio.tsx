"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const images = [
  { src: "/img/Sala1.png", alt: "Foto do consultório - Sala 1" },
  { src: "/img/Sala2.png", alt: "Foto do consultório - Sala 2" },
  { src: "/img/Sala3.png", alt: "Foto do consultório - Sala 3" },
  { src: "/img/Sala4.png", alt: "Foto do consultório - Sala 4" },
  { src: "/img/Sala5.png", alt: "Foto do consultório - Sala 5" },
];

function ArrowButton({
  direction,
  onClick,
  disabled,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}) {
  const isPrev = direction === "prev";

  return (
    <button
      type="button"
      aria-label={isPrev ? "Imagem anterior" : "Próxima imagem"}
      onClick={onClick}
      disabled={disabled}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#5C6D7E] text-white shadow-[0_10px_22px_rgba(0,0,0,0.22)] transition-opacity hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-40"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {isPrev ? (
          <path
            d="M14.5 5 8 12l6.5 7"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M9.5 5 16 12l-6.5 7"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  );
}

export default function Consultorio() {
  const [visibleCards, setVisibleCards] = useState(1);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    function updateVisibleCards() {
      const nextVisible = window.innerWidth >= 768 ? 3 : 1;
      setVisibleCards(nextVisible);
    }

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const maxIndex = useMemo(() => {
    return Math.max(0, images.length - visibleCards);
  }, [visibleCards]);

  const normalizedIndex = Math.min(index, maxIndex);

  const canPrev = normalizedIndex > 0;
  const canNext = normalizedIndex < maxIndex;

  const dotsCount = maxIndex + 1;

  function goTo(nextIndex: number) {
    setIndex(Math.max(0, Math.min(maxIndex, nextIndex)));
  }

  function goPrev() {
    if (!canPrev) return;
    goTo(normalizedIndex - 1);
  }

  function goNext() {
    if (!canNext) return;
    goTo(normalizedIndex + 1);
  }

  return (
    <section id="consultorio" className="bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[#5C6D7E] sm:text-4xl lg:text-[2.6rem]">
            Consultório
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#5C6D7E]/80 sm:text-base">
            Um ambiente acolhedor, pensado para oferecer conforto e privacidade
            em cada atendimento.
          </p>
          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-[#BE925C]/80" />
        </div>

        <div className="mx-auto mt-12 w-full max-w-6xl">
          <div className="relative">
            <div className="absolute -left-5 top-1/2 z-10 hidden -translate-y-1/2 md:block lg:-left-6">
              <ArrowButton direction="prev" onClick={goPrev} disabled={!canPrev} />
            </div>
            <div className="absolute -right-5 top-1/2 z-10 hidden -translate-y-1/2 md:block lg:-right-6">
              <ArrowButton direction="next" onClick={goNext} disabled={!canNext} />
            </div>

            <div className="overflow-hidden px-1">
              <div
                className="flex transition-transform ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  transform: `translate3d(-${(normalizedIndex * 100) / visibleCards}%, 0, 0)`,
                  transitionDuration: "900ms",
                }}
              >
                {images.map((img) => (
                  <div
                    key={img.src}
                    className="shrink-0 px-2.5 sm:px-3"
                    style={{ width: `${100 / visibleCards}%` }}
                  >
                    <div className="group relative overflow-hidden rounded-3xl bg-[#BE925C]/10 shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
                      <div className="relative aspect-4/3 w-full">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.035]"
                          sizes="(max-width: 768px) 90vw, 33vw"
                        />
                      </div>
                      <div className="h-px w-full bg-[#BE925C]/35" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3 md:hidden">
            <ArrowButton direction="prev" onClick={goPrev} disabled={!canPrev} />
            <ArrowButton direction="next" onClick={goNext} disabled={!canNext} />
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            {Array.from({ length: dotsCount }).map((_, i) => {
              const isActive = i === normalizedIndex;
              return (
                <button
                  key={i}
                  type="button"
                  aria-label={`Ir para a imagem ${i + 1}`}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => goTo(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-[transform,opacity,background-color] duration-200 ${
                    isActive
                      ? "bg-[#BE925C] opacity-100"
                      : "bg-[#5C6D7E] opacity-45 hover:opacity-70"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
