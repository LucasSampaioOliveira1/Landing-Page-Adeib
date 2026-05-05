export default function Home() {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden bg-white max-[920px]:bg-none!"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.92) 28%, rgba(255, 255, 255, 0.55) 40%, rgba(255, 255, 255, 0.12) 52%, rgba(255, 255, 255, 0) 62%), url('/img/Foto3.svg')",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "50%",
      }}
    >
      <div className="mx-auto flex w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
        <div className="max-w-xl text-[#5C6D7E]">
          {/* <span className="mb-4 block text-sm font-medium uppercase tracking-[0.3em] sm:text-base text-black">
            Psicólogo Aba
          </span> */}

          <h1 className="text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">
            Retome o controle das suas emoções e reduza a ansiedade
          </h1>

          <p className="mt-8 text-lg font-semibold leading-8 sm:text-xl">
            Atendimento acolhedor para quem deseja viver com mais leveza,
            segurança e clareza emocional.
          </p>

          <p className="mt-5 text-base leading-8 sm:text-lg">
            Com escuta sensível e acompanhamento individualizado, você encontra
            um espaço seguro para compreender suas emoções, fortalecer sua
            autoestima e construir uma rotina mais saudável.
          </p>

          <a
            href="https://wa.me/+559884085515"
            className="mt-10 inline-flex rounded-full bg-[#C99658] px-8 py-4 text-base font-semibold text-white transition hover:opacity-90 sm:text-lg"
          >
            Fale comigo
          </a>
        </div>
      </div>
    </section>
  );
}