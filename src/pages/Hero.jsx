import Button from "../components/Button";
import { FaBriefcase } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { motion } from "framer-motion";
import useDataStore from "../stores/useDataStore";

function Hero() {
  const data = useDataStore((state) => state.data);

  return (
    <header
      id="home"
      className="relative pt-16 z-40 text-mainwhite"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      <div className="inset-0 -z-50 bg-gradient-to-b from-violet-950 from-70% opacity-80 absolute"></div>
      <div className="inset-0 -z-50 bg-gradient-to-t from-gray-950 from-10% to-90% absolute"></div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-2 md:px-0 flex flex-col gap-4 items-center justify-center h-[45rem]"
      >
        <h1 className="text-6xl md:text-8xl max-w-[40rem] font-bold text-center">
          {data.name}{" "}
          <span className="bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text text-transparent">
            {data.lastName}
          </span>
        </h1>

        <p className=" text-2xl md:text-3xl text-center font-light text-opacity-80 text-green-200">
          {data.career}
        </p>
        <div className="py-8 w-full md:w-[30rem] flex flex-col md:flex-row gap-6">
          <Button
            size="large"
            href="#projects"
            icon={<FaBriefcase />}
            width={30}
            variant="primary"
          >
            Proyectos
          </Button>
          <Button
            size="large"
            icon={<IoIosSend />}
            href="#contact"
            width={30}
            variant="secondary"
          >
            Contacto
          </Button>
        </div>
      </motion.div>
    </header>
  );
}

export default Hero;
