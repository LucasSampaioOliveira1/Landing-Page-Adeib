"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Sobre() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [showUnderline, setShowUnderline] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowUnderline(true);
          observer.unobserve(section);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} id="sobre" className="overflow-hidden bg-[#FFFFFF]">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-stretch gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:min-h-[82vh] lg:grid-cols-2 lg:gap-14 lg:px-16 lg:py-24">
        <div className="flex flex-col justify-center text-[#5C6D7F]">
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.3em] text-black sm:text-base">
            Sobre o profissional
          </span>

          <h2 className="max-w-xl text-3xl font-light leading-tight sm:text-4xl lg:text-5xl">
            Cuidado humano, escuta qualificada e foco no seu{" "}
            <span className="relative inline-block">
              bem-estar
              <span
                className={`absolute -bottom-1 left-0 h-[3px] rounded-full bg-[#BE915B] transition-[width,opacity] duration-[1400ms] ease-out ${
                  showUnderline ? "w-full opacity-100" : "w-0 opacity-0"
                }`}
              />
            </span>{" "}
            emocional.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 sm:text-lg">
            Com atendimento ético e acolhedor, o acompanhamento é conduzido para
            ajudar você a compreender suas emoções, enfrentar desafios com mais
            equilíbrio e fortalecer sua saúde mental no dia a dia.
          </p>

          <p className="mt-4 max-w-xl text-base leading-8 sm:text-lg">
            Cada processo é individualizado, respeitando sua história e seu
            tempo, para que você desenvolva mais clareza, autonomia e segurança
            nas suas escolhas.
          </p>
        </div>

        <div className="relative min-h-[360px] w-full rounded-3xl shadow-xl transition-transform duration-500 hover:scale-[1.02] sm:min-h-[520px] lg:min-h-full">
          <Image
            src="/img/Fotosobre.svg"
            alt="Profissional"
            fill
            className="rounded-3xl object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}