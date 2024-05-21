import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import PropTypes from "prop-types";

function MenuToggler({ onClick, isOpen }) {
  return (
    <button onClick={onClick} className="text-mainwhite text-5xl z-50">
      {isOpen ? <IoClose /> : <IoMenu />}
    </button>
  );
}

MenuToggler.propTypes = {
  onClick: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default MenuToggler;
