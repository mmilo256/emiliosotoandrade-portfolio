import PropTypes from "prop-types";

function Tag({ children }) {
  return (
    <span className="text-sm rounded-full text-green-300  bg-cyan-400 bg-opacity-10 px-2 py-1">
      {" "}
      {children}{" "}
    </span>
  );
}

Tag.propTypes = {
  children: PropTypes.any,
};

export default Tag;
