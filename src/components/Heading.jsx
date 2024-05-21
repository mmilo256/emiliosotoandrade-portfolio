import PropTypes from "prop-types";

function Heading({ children }) {
  return (
    <h2 className="pt-28 pb-8 text-mainwhite font-light text-4xl md:text-5xl text-center">
      <p className="py-2 border-green-400 border-b inline">{children}</p>
    </h2>
  );
}

Heading.propTypes = {
  children: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.any,
  icon: PropTypes.object,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
  type: PropTypes.string,
};

export default Heading;
