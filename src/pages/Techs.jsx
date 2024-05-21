import Heading from "../components/Heading";
import TechsCard from "../components/TechsCard";

import useDataStore from "../stores/useDataStore";

function Techs() {
  const data = useDataStore((state) => state.data);

  return (
    <section id="techs" className="bg-gradient-to-b from-slate-950 to-gray-900">
      <div className="container mx-auto px-2 md:px-0">
        <Heading>Tecnologías</Heading>
        <p className="text-center text-slate-400 font-light text-xl">
          Tecnologías con las que tengo experiencia trabajando
        </p>
        <div className="mt-10 grid lg:grid-cols-3 gap-2">
          <TechsCard data={data.techs.frontend} title="Frontend" />
          <TechsCard data={data.techs.backend} title="Backend" />
          <TechsCard data={data.techs.tools} title="Herramientas" />
        </div>
      </div>
    </section>
  );
}

export default Techs;
