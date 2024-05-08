import React from "react";

export default function InputField({
  inputCSS,
  type,
  value,
  onChange,
  placeholder,
}) {
  return (
    <div>
      <input
        type={type}
        className={inputCSS}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
