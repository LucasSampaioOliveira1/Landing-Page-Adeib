import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import HealingIcon from '@mui/icons-material/Healing';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

type Topic = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

function IconCircle({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5C6D7E]/8 transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:bg-[#BE925C] group-hover:shadow-[0_8px_20px_rgba(190,146,92,0.35)]">
      <div className="z-10 flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110 [&>svg]:transition-colors [&>svg]:duration-500 [&>svg]:text-[#BE925C]! group-hover:[&>svg]:text-white!">
        {children}
      </div>
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
        <PsychologyAltIcon sx={{ fontSize: 30 }} className="text-[#BE925C]" />
      </IconCircle>
    ),
  },
  {
    title: "Relacionamentos",
    description:
      "Construir vínculos mais saudáveis começando por você mesmo.",
    icon: (
      <IconCircle>
        <Diversity1Icon sx={{ fontSize: 30 }} className="text-[#BE925C]" />
      </IconCircle>
    ),
  },
  {
    title: "Autoconhecimento",
    description: "Descubra quem você é, seus valores e para onde você deseja ir.",
    icon: (
      <IconCircle>
        <SelfImprovementIcon sx={{ fontSize: 30 }} className="text-[#BE925C]" />
      </IconCircle>
    ),
  },
  {
    title: "Depressão",
    description: "Retomar o sentido da vida, mesmo nos dias mais difíceis.",
    icon: (
      <IconCircle>
        <HealingIcon sx={{ fontSize: 30 }} className="text-[#BE925C]" />
      </IconCircle>
    ),
  },
  {
    title: "Autoestima",
    description:
      "Um caminho para reconhecer sua força interior e se sentir bem sendo quem você é.",
    icon: (
      <IconCircle>
        <AutoAwesomeIcon sx={{ fontSize: 30 }} className="text-[#BE925C]" />
      </IconCircle>
    ),
  },
  {
    title: "Propósito",
    description:
      "Encontre o propósito em tudo o que faz e se sinta realizado ao alcançar seus objetivos.",
    icon: (
      <IconCircle>
        <TrackChangesIcon sx={{ fontSize: 30 }} className="text-[#BE925C]" />
      </IconCircle>
    ),
  },
  {
    title: "Luto",
    description:
      "Cuidar da dor da ausência, respeitar o tempo de cada processo e abrir espaço para reconstruir a vida.",
    icon: (
      <IconCircle>
        <VolunteerActivismIcon sx={{ fontSize: 30 }} className="text-[#BE925C]" />
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
              className="group w-full max-w-65 rounded-3xl bg-white px-7 py-8 text-center shadow-[0_8px_18px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.16)] text-black"
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
