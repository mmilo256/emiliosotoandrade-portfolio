import PropTypes from "prop-types";

function Card({ icon, title, description }) {
  return (
    <div className="bg-cyan-300 rounded-md p-4 overflow-hidden bg-opacity-10">
      <div className="flex justify-center text-primaryLight text-6xl">
        {" "}
        {icon}{" "}
      </div>
      <h4 className="font-light text-3xl py-4 text-center"> {title} </h4>
      <p className="text-xl leading-8 text-center font-light text-slate-300">
        {description}
      </p>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.object,
};

export default Card;
