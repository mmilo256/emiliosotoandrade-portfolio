import Heading from "../components/Heading";
import AboutGrid from "../components/AboutGrid";
import useDataStore from "../stores/useDataStore";

function About() {
  const data = useDataStore((state) => state.data);

  return (
    <section id="about" className="bg-gradient-to-b from-gray-950 to-slate-950">
      <div className="container mx-auto px-2">
        <Heading>Sobre mi</Heading>
        <AboutGrid description={data.description} resume={data.resume} />
      </div>
    </section>
  );
}

export default About;
