import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import PropTypes from "prop-types";
import useDataStore from "../stores/useDataStore";

function Socials(props) {
  const data = useDataStore((state) => state.data);

  let iconSize;
  let iconStyles = `hover:text-primary active:text-primary active:scale-125 transition-all hover:scale-125`;

  switch (props.size) {
    case "large":
      iconSize = "text-4xl";
      break;
    default:
      iconSize = "text-2xl";
  }

  return (
    <ul className="text-mainwhite flex gap-6">
      <li className={`${iconStyles} ${iconSize}`}>
        <a target="_blank" href={data.socials[0].url}>
          <FaLinkedin />
        </a>
      </li>
      <li className={`${iconStyles} ${iconSize}`}>
        <a target="_blank" href={data.socials[1].url}>
          <FaGithub />
        </a>
      </li>
      <li className={`${iconStyles} ${iconSize}`}>
        <a target="_blank" href={data.socials[2].url}>
          <FaYoutube />
        </a>
      </li>
    </ul>
  );
}

Socials.propTypes = {
  size: PropTypes.string,
};

export default Socials;
