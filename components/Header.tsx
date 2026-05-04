import Image from "next/image";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Meu trabalho", href: "#meu-trabalho" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Sobre mim", href: "#sobre-mim" },
  { label: "Dúvidas frequentes", href: "#duvidas-frequentes" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#022E4A] text-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-8 px-5 py-6">
        <a href="#home" className="flex items-center gap-3">
          <Image
            src="/img/logo.svg"
            alt="Logo Adeibson Araújo"
            width={100}
            height={100}
            priority
            className="h-100px w-100px shrink-0"
          />
          <div className="leading-tight">
            <div className="text-lg font-semibold tracking-wide text-[#CCAE89]">
              Adeibson Araújo
            </div>
            <div className="text-sm font-medium tracking-[0.18em] text-[#CCAE89]">
              psicologo
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-base font-medium md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative pb-1 transition-opacity hover:opacity-95 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:w-0 after:rounded-full after:bg-[#BF8E7A] after:transition-[width] after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#"
          className="inline-flex h-11 items-center justify-center rounded-full bg-white px-7 text-base font-semibold text-[#022E4A] transition-opacity hover:opacity-90"
        >
          Fale comigo
        </a>
      </div>
      <div className="h-px w-full bg-white/10" />
    </header>
  );
}
