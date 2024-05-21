import Button from "./Button";
import Tag from "./Tag";
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

function ProjectCard({ data }) {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className=" shadow-md rounded-md overflow-hidden flex flex-col md:grid grid-cols-2 min-h-72 w-full"
    >
      <div className="relative h-52 transition-opacity md:h-full">
        <img className="object-cover w-full h-full" src={data.img} />
      </div>
      <div className="flex flex-col justify-between bg-gradient-to-br from-slate-900 to-cyan-900 p-5 z-10 w-full">
        <span className="text-sm text-green-500">{data.category}</span>
        <h4 className="text-2xl py-3 font-bold"> {data.title} </h4>
        <p className="mb-2 md:mb-0 md:h-24 font-light text-slate-300">
          {" "}
          {data.description}{" "}
        </p>
        <div className="flex mb-4 md:mb-2 flex-wrap my-2 items-start gap-2 md:h-16">
          {data.techs.map((tech) => (
            <Tag key={tech}> {tech} </Tag>
          ))}
        </div>
        <div className="flex gap-2 flex-col md:flex-row md:w-80">
          <Button
            href={data.links.repo}
            size="small"
            target
            icon={<FaGithub />}
            variant="primary"
          >
            Código
          </Button>
          <Button
            icon={<FaExternalLinkAlt />}
            href={data.links.preview}
            target
            size="small"
            variant="tertiary"
          >
            Vista previa
          </Button>
        </div>
      </div>
    </motion.article>
  );
}

ProjectCard.propTypes = {
  data: PropTypes.object,
};

export default ProjectCard;
