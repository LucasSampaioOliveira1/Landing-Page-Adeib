"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Desafios", href: "#como-pode-ajudar" },
  { label: "Sobre mim", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Perguntas frequentes", href: "#perguntas-frequentes" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function scrollToTarget(href: string) {
    if (typeof window === "undefined") {
      return;
    }

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (href.startsWith("#")) {
      const el = document.querySelector(href) as HTMLElement | null;
      if (el) {
        const headerOffset = 96;
        const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
  }

  function onNavClick(
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    event.preventDefault();
    scrollToTarget(href);
    setMenuOpen(false);
  }

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header
      id="site-header"
      className="fixed left-0 right-0 top-0 z-50 w-full bg-[#5C6D7E] text-[#ffffff]"
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-5 py-5 sm:py-6">
        <a href="#" onClick={(e) => onNavClick(e, "#")} className="flex items-center gap-3">
          <Image
            src="/img/logo.svg"
            alt="Logo Adeibson Araújo"
            width={64}
            height={64}
            priority
            className="h-14 w-14 shrink-0 sm:h-16 sm:w-16"
          />
          <div className="leading-tight">
            <div className="text-lg font-semibold tracking-wide text-[#ffffff]">
              Adeibson Araújo
            </div>
            <div className="text-sm font-medium tracking-[0.18em] text-[#CCAE89]">
              PSICOLOGIA • ABA
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-base font-medium md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => onNavClick(e, item.href)}
              className="relative pb-1 transition-opacity hover:opacity-95 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:w-0 after:rounded-full after:bg-[#CCAE89] after:transition-[width] after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden h-11 items-center justify-center rounded-full bg-[#C99658] px-7 text-base font-semibold text-[#ffffff] transition-opacity hover:opacity-90 md:inline-flex"
        >
          Fale comigo
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-opacity hover:opacity-95 md:hidden"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                d="M6 6l12 12M18 6 6 18"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>
      <div className="h-px w-full bg-white/10" />

      {menuOpen ? (
        <div className="md:hidden">
          <div className="mx-auto w-full max-w-6xl px-5 py-5">
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => onNavClick(e, item.href)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-white transition-colors hover:bg-white/10"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-[#C99658] px-7 text-base font-semibold text-white transition-opacity hover:opacity-90"
              >
                Fale comigo
              </a>
            </nav>
          </div>
          <div className="h-px w-full bg-white/10" />
        </div>
      ) : null}
    </header>
  );
}
