import { motion } from "framer-motion";
import PropTypes from "prop-types";

function TechsCard({ title, data }) {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-gradient-to-br from-slate-900 to-cyan-900 rounded-md overflow-hidden bg-opacity-10"
    >
      <h4 className="font-light text-3xl pt-5 text-center">{title}</h4>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-5 content-center">
        {data.map((tech) => (
          <div key={tech.name}>
            <div className="flex flex-col items-center mx-auto">
              <div className="relative h-10 w-10 hover:scale-110 duration-200 transition-transform flex items-center justify-center">
                <img className="h-10 w-10 object-contain" src={tech.img} />
              </div>
              <p className="opacity-70"> {tech.name} </p>
            </div>
          </div>
        ))}
      </div>
    </motion.article>
  );
}

TechsCard.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};

export default TechsCard;
