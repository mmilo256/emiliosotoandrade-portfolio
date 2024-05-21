import Socials from "./Socials";
import Button from "./Button";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

function AboutGrid({ description, resume }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col md:flex-row mt-10 items-center gap-10 lg:gap-20"
    >
      <div className="relative flex-shrink-0 mx-auto border-cyan-300 border-opacity-10 shadow-md w-72 md:w-64 lg:w-80 lg:h-80 h-72 md:h-64 rounded-full overflow-hidden border-8">
        <img src="/profile.jpg" alt="avatar" />
      </div>

      <div className="">
        <p className="text-xl font-light text-center md:text-left text-slate-300">
          {description}
        </p>
        <div className="my-8 flex justify-center md:justify-start">
          <Socials size="large" />
        </div>
        <div className="flex md:w-48">
          <Button
            target
            icon={<FaExternalLinkAlt />}
            href={resume}
            size="normal"
            variant="primary"
          >
            Ver CV
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

AboutGrid.propTypes = {
  description: PropTypes.string,
  resume: PropTypes.string,
};

export default AboutGrid;
