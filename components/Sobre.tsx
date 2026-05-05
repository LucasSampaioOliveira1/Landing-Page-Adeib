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
                className={`absolute -bottom-1 left-0 h-0.75 rounded-full bg-linear-to-r from-[#9E7F60] to-[#CBAC87] transition-[width,opacity] duration-1400 ease-out ${
                  showUnderline ? "w-full opacity-100" : "w-0 opacity-0"
                }`}
              />
            </span>{" "}
            emocional.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 sm:text-lg">
            Sou psicólogo formado pela Universidade Federal do Maranhão (UFMA), com pós-graduação em Análise do Comportamento Aplicada e Neuropsicologia. Atuo com base em conhecimento científico, sempre buscando oferecer um atendimento ético, cuidadoso e adaptado às necessidades de cada pessoa.
          </p>

          <p className="mt-4 max-w-xl text-base leading-8 sm:text-lg">
            Valorizo muito a escuta ativa e o acolhimento, porque acredito que cada história é única e merece ser compreendida com atenção e respeito. Meu objetivo é construir, junto com você, um processo terapêutico que faça sentido e contribua de forma real para o seu desenvolvimento, bem-estar e qualidade de vida.
          </p>
        </div>

        <div className="relative min-h-90 w-full rounded-3xl shadow-xl transition-transform duration-500 hover:scale-[1.02] sm:min-h-130 lg:min-h-full">
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
