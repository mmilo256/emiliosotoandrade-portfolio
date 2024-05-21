import PropTypes from "prop-types";

function Input({ label, type, id, placeholder }) {
  let input;
  const inputStyles =
    "w-full py-2 bg-transparent border-b font-light border-primary focus:outline-none";

  switch (type) {
    case "textarea":
      input = (
        <textarea
          className={`h-28 md:h-48 resize-none ${inputStyles}`}
          placeholder={placeholder}
          id={id}
        />
      );
      break;
    default:
      input = (
        <input
          id={id}
          className={`${inputStyles}`}
          type={type}
          placeholder={placeholder}
        />
      );
  }

  return (
    <label htmlFor="name">
      <p className="font-semibold">{label}</p>
      {input}
    </label>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
