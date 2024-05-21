import PropTypes from "prop-types";

function Input({ label, type, id, placeholder, register }) {
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
          {...register}
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
          {...register}
        />
      );
  }

  return (
    <label className="mb-4" htmlFor="name">
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
  register: PropTypes.any,
};

export default Input;
