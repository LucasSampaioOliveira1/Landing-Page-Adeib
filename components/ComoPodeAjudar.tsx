type Topic = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

function IconCircle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#5C6D7E]/10">
      {children}
    </div>
  );
}

const topics: Topic[] = [
  {
    title: "Ansiedade e Estresse",
    description:
      "Encontrar novas formas de lidar com pensamentos acelerados e emoções intensas.",
    icon: (
      <IconCircle>
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#BE925C]"
        >
          <path
            d="M20 15a4 4 0 0 1-4 4H9l-5 3V7a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      </IconCircle>
    ),
  },
  {
    title: "Relacionamentos",
    description:
      "Construir vínculos mais saudáveis — começando por você mesma.",
    icon: (
      <IconCircle>
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#BE925C]"
        >
          <path
            d="M12 21s-7-4.6-9.2-8.8C1.2 9 2.7 6.2 5.7 5.4c1.7-.4 3.4.2 4.3 1.5.9-1.3 2.6-1.9 4.3-1.5 3 .8 4.5 3.6 2.9 6.8C19 16.4 12 21 12 21Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      </IconCircle>
    ),
  },
  {
    title: "Autoconhecimento",
    description: "Descubra quem você é, seus valores e para onde você deseja ir.",
    icon: (
      <IconCircle>
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#BE925C]"
        >
          <path
            d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M20 21a8 8 0 1 0-16 0"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </IconCircle>
    ),
  },
  {
    title: "Depressão",
    description: "Retomar o sentido da vida, mesmo nos dias mais difíceis.",
    icon: (
      <IconCircle>
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#BE925C]"
        >
          <path
            d="M12 21s-7-4.6-9.2-8.8C1.2 9 2.7 6.2 5.7 5.4c1.7-.4 3.4.2 4.3 1.5.9-1.3 2.6-1.9 4.3-1.5 3 .8 4.5 3.6 2.9 6.8C19 16.4 12 21 12 21Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M12 10v4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M10.5 12H13.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </IconCircle>
    ),
  },
  {
    title: "Autoestima",
    description:
      "Um caminho para reconhecer sua força interior e se sentir bem sendo quem você é.",
    icon: (
      <IconCircle>
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#BE925C]"
        >
          <path
            d="M12 2v2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M12 20v2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M4 12H2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M22 12h-2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M18.4 5.6 17 7"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M7 17 5.6 18.4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M18.4 18.4 17 17"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M7 7 5.6 5.6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M12 16a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      </IconCircle>
    ),
  },
  {
    title: "Propósito",
    description:
      "Encontre o propósito em tudo o que faz e se sinta realizado ao alcançar seus objetivos.",
    icon: (
      <IconCircle>
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#BE925C]"
        >
          <path
            d="M12 21a9 9 0 1 0-9-9 9 9 0 0 0 9 9Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M12 7v5l3 2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </IconCircle>
    ),
  },
  {
    title: "Luto",
    description:
      "Cuidar da dor da ausência, respeitar o tempo de cada processo e abrir espaço para reconstruir a vida.",
    icon: (
      <IconCircle>
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#BE925C]"
        >
          <path
            d="M12 22s-7-4.6-9.2-8.8C1.2 10 2.7 7.2 5.7 6.4c1.7-.4 3.4.2 4.3 1.5.9-1.3 2.6-1.9 4.3-1.5 3 .8 4.5 3.6 2.9 6.8C19 17.4 12 22 12 22Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M8.8 12.6 10.7 14.5 15.2 10"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </IconCircle>
    ),
  },
];

export default function ComoPodeAjudar() {
  return (
    <section id="como-pode-ajudar" className="bg-[#5C6D7E]">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Como a terapia pode te ajudar
        </h2>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="w-full max-w-65 rounded-3xl bg-white px-7 py-8 text-center shadow-[0_8px_18px_rgba(0,0,0,0.12)] transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_26px_rgba(0,0,0,0.16)]"
            >
              {topic.icon}
              <div className="mt-5 text-lg font-semibold text-black">
                {topic.title}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#022E4A]/75">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
