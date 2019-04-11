import React from "react";
import PropTypes from "prop-types";

const TextFieldGroup = ({
  placeholder,
  name,
  value,
  onChange,
  info,
  error,
  type,
  disabled
}) => {
  return (
    <div>
      <input
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        disabled={disabled}
      />
    </div>
  );
};

TextFieldGroup.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  // value: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.string
};

TextFieldGroup.defaultProps = {
  type: "text"
};

export default TextFieldGroup;
