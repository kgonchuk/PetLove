import React from "react";
import { useFormContext } from "react-hook-form";
import { RadioInput, RadioLabel, RadioWrap } from "./SexRadioInput.styled";
import icon from "../../images/sprite.svg";
import CustomRadio from "../CustomRadio/CustomRadio";

const SexRadioInput = ({ selectedSex, setSelectedSex }) => {
  const {
    setValue,
    formState: { errors },
  } = useFormContext();

  const handleRadioChange = (value) => {
    setSelectedSex(value);
    setValue("sex", value);
  };
  return (
    <RadioWrap>
      <RadioLabel>
        <RadioInput
          selected={selectedSex === "female"}
          onChange={() => handleRadioChange("female")}
          value="female"
          type="radio"
        />
        {selectedSex === "female" ? (
          <svg width="32" height="32">
            <use xlinkHref={`${icon}#female`} />
          </svg>
        ) : (
          <svg width="32" height="32">
            <use xlinkHref={`${icon}#femalenoactive`} />
          </svg>
        )}
      </RadioLabel>
      <CustomRadio
        selected={selectedSex === "female"}
        onChange={() => handleRadioChange("female")}
        value="female"
        color={"rgba(244, 63, 94, 0.1)"}
        iconColor={"rgba(244, 63, 94, 1)"}
        icon={
          <svg width={20} height={20}>
            <use href={`${sprite}#icon-female`} />
          </svg>
        }
      />
      {/* <RadioLabel>
        <RadioInput
          selected={selectedSex === "male"}
          onChange={() => handleRadioChange("male")}
          value="male"
          type="radio"
        />
        {selectedSex === "male" ? (
          <svg width="32" height="32">
            <use xlinkHref={`${icon}#male`} />
          </svg>
        ) : (
          <svg width="32" height="32">
            <use xlinkHref={`${icon}#malenoactive`} />
          </svg>
        )}
      </RadioLabel> */}
      {/* <RadioLabel>
        <RadioInput
          selected={selectedSex === "other"}
          onChange={() => handleRadioChange("other")}
          value="other"
          type="radio"
        />
        {selectedSex === "other" ? (
          <svg width="32" height="32">
            <use xlinkHref={`${icon}#multiple`} />
          </svg>
        ) : (
          <svg width="32" height="32">
            <use xlinkHref={`${icon}#multiplenoactive`} />
          </svg>
        )}
      </RadioLabel> */}
      {errors.sex && <p color="error">{errors.sex.message}</p>}
    </RadioWrap>
  );
};

export default SexRadioInput;
