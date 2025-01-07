import styled from "styled-components";
import color from "../../global/globalColors";
import Select from "react-select";

export const AddPetFormContainer = styled.section`
  border-radius: 30px;
  background-color: ${color.white};
  padding: 28px 20px 20px 20px;
`;
export const AddTitle = styled.h2``;
export const AddInputWrap = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 24px;
`;
export const AddLabelFemale = styled.label`
  display: inline-flex;
  input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
  }
  /* display: inline-flex;
  align-items: center;
  align-items: center;
  cursor: pointer;
  position: relative;

  padding: 6px;

  border-radius: 50%;
  border: "none";
  background-color: rgba(244, 63, 94, 0.1);
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background: ${color.yellowPrimary};
    color: ${color.white};
  }

  .radio-input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  } */
`;

export const AddLabelMale = styled.label`
  display: inline-flex;
  input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
  }
`;

export const AddLabelUni = styled.label`
  display: inline-flex;

  input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
  }
  /* align-items: center;
  align-items: center;
  cursor: pointer;
  position: relative;

  padding: 6px;

  border-radius: 50%;
  border: "none";
  background-color: rgba(255, 244, 223, 1);
  transition: background-color 0.3s, color 0.3s; */
`;
export const AddPetPhotoWrap = styled.div``;
export const ImageWrap = styled.div`
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background-color: rgba(255, 244, 223, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px auto;
`;
export const UploadInputWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 15px;
`;
export const FormField = styled.div`
  position: relative;
`;

export const InputPetFieldUpload = styled.input`
  border: 1px solid ${color.grey};
  color: ${color.grey};
  outline: none;
  border-radius: 30px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: ${color.black};
  width: 156px;
  padding-top: 9px;
  padding-left: 10px;
  padding-bottom: 9px;
`;
export const PetUploadBtn = styled.button`
  border: none;
  border-radius: 30px;
  background-color: ${color.yellowSecondary};
  color: ${color.black};
  padding: 10px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: -0.02em;
  display: flex;
  justify-content: center;
  gap: 5px;
  width: 117px;

  label {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;
export const InputPetField = styled.input`
  border: 1px solid ${color.grey};
  color: ${color.grey};
  outline: none;
  border-radius: 30px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: ${color.black};
  width: 281px;
  padding-top: 9px;
  padding-left: 10px;
  padding-bottom: 9px;
  margin-top: 10px;
`;
export const DataTypeWrap = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const DataLabel = styled.div`
  position: relative;
`;

export const IconCalendar = styled.svg`
  position: absolute;
  top: 12px;
  left: 120px;
`;
export const TypeLabel = styled.label`
  width: 143px;
`;
export const SelectDropDown = styled(Select)`
  border-radius: 30px;
  flex-grow: 1;
`;
export const DateInput = styled.input`
  border-radius: 30px;
  flex-grow: 1;
  padding: 12px;
  border: 1px solid ${color.grey};
  width: 120px;
  overflow: "hidden";
`;
export const customDropDownStyle = {
  control: (provided, state) => ({
    ...provided,
    display: "flex",
    alignItems: "center",

    fontSize: "14px",
    lineHeight: "1.25",
    letterSpacing: "-0.03em",
    borderRadius: "30px",
    outline: "none",
    borderColor: "rgba(38, 38, 38, 0.15)",
    height: "42px",
    boxShadow: "none",
    paddingRight: "12px",

    "@media (min-width: 768px)": {
      height: "48px",
      fontSize: "16px",
    },
  }),

  valueContainer: (provided) => ({
    ...provided,
    padding: "0px",
    paddingLeft: "12px",

    "@media (min-width: 768px)": {
      paddingLeft: "14px",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    textTransform: "capitalize",
    color: state.isFocused
      ? `${color.yellowPrimary};
   `
      : "rgba(38, 38, 38, 1)",
    backgroundColor: state.isFocused ? "transparent" : "transparent",
  }),
  placeholder: (provided, state) => ({
    ...provided,
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "1.29",
    letterSpacing: "-0.03em",
    color: "rgba(38, 38, 38, 0.5)",

    "@media (min-width: 768px)": {
      fontSize: "16px",
      lineHeight: "1.25",
    },
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "15px",
    border: "1px solid rgba(38, 38, 38, 0.15)",
    height: "100px",
    overflow: "auto",
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),

  dropdownIndicator: (base, state) => ({
    ...base,
    color: "rgba(38, 38, 38, 1)",
    padding: "0",
    transition: "all .2s ease",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
  }),
  singleValue: (provided) => ({
    ...provided,
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "1.29",
    textTransform: "capitalize",
    color: "rgba(38, 38, 38, 0.5)",

    "@media (min-width: 768px)": {
      fontSize: "16px",
      lineHeight: "1.25",
    },
  }),
  input: (provided) => ({
    ...provided,
  }),
  indicatorContainer: (provided) => ({
    ...provided,
    display: "none",
  }),
  container: (provided) => ({
    ...provided,
    width: "100%",
  }),
  menuList: (provided) => ({
    ...provided,
    maxHeight: "216px !important",
    "::-webkit-scrollbar": {
      width: "8px",
      height: "100px",
      paddingTop: "10px",
    },
    "::-webkit-scrollbar-thumb": {
      background: "rgba(0,0,0,0.2)",
      borderRadius: "10px",
    },
  }),
};

export const BtnWrap = styled.div`
  margin-top: 31px;
  display: flex;
  align-items: center;
  justify-content: end;
`;
export const BtnBack = styled.button`
  width: 100px;
  border-radius: 30px;
  background-color: "rgba(38, 38, 38, 0.05)";
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: -0.03em;
  color: ${color.black};
  border: none;
`;
export const BtnSubmit = styled.button`
  width: 100px;
  border-radius: 30px;
  background-color: ${color.yellowPrimary};
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: -0.03em;
  color: ${color.white};
  border: none;
`;
