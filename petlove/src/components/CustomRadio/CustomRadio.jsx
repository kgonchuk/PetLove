import React from "react";
import { CustomWrap } from "./CustomRadio.styled";

const CustomRadio = ({
  selected,
  value,
  color,
  iconColor,
  icon,
  onChange,
  ...props
}) => {
  const handleClick = () => {
    onChange(value);
  };

  return (
    <CustomWrap onClick={handleClick} {...props}>
      <input
        type="radio"
        value={value}
        {...props}
        style={{
          display: "none",
        }}
      />
    </CustomWrap>
  );
};

export default CustomRadio;
