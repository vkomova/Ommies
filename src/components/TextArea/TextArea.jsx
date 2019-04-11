import React from "react";

const TextArea = ({ name, placeholder, value, onChange }) => {
  return (
    <div>
      <textarea
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

// TextArea.propTypes = {
//   name: PropTypes.string.isRequired,
//   placeholder: PropTypes.string,
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired
// };

export default TextArea;
