import React, { useRef } from "react";
import DatePicker from "react-datepicker";
import { CalendarWrap } from "./Calendar.styled";
import { useFormContext } from "react-hook-form";
import { formatDateRevers } from "../../hooks/formatDate";
import { Box, TextField } from "@mui/material";
import icon from "../../images/sprite.svg";
import "react-datepicker/dist/react-datepicker.css";
import { IconCalendar } from "./AddPetForm.styled";
import enGB from "date-fns/locale/en-GB";
import { registerLocale } from "react-datepicker";
registerLocale("en-GB", enGB);

const CalendarDrop = ({ formData, setFormData }) => {
  const datePickerRef = useRef(null);
  const {
    setValue,
    register,
    formState: { errors },
  } = useFormContext();

  const handleBirthdayChange = (date) => {
    const formattedDate = formatDateRevers(date);
    setFormData({ ...formData, birthday: formattedDate });
    setValue("birthday", formattedDate);
  };
  const handleIconClick = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true);
    }
  };
  return (
    <CalendarWrap>
      <DatePicker
        selected={formData.birthday ? new Date(formData.birthday) : null}
        onChange={handleBirthdayChange}
        customInput={
          <TextField
            sx={{
              mt: 0,
              mb: 0,
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",

                "& fieldset": {
                  border: formData.birthday
                    ? "1px solid var(--secondary-color)"
                    : "1px solid rgba(38, 38, 38, 0.15)",
                },
                "&:hover fieldset": {
                  borderColor: "var(--secondary-color)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "var(--secondary-color)",
                },
              },

              "& .MuiFormHelperText-root": {
                height: "12px",
                margin: 0,
                fontSize: "10px",
                color: "#EF2447",
              },
            }}
            placeholder="00.00.0000"
            error={!!errors.birthday}
            helperText={errors.birthday?.message}
            {...register("birthday")}
          />
        }
        locale="en-GB"
        placeholderText="00.00.0000"
        maxDate={new Date()}
        dateFormat="dd/MM/yyyy"
        ref={datePickerRef}
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
      />

      <IconCalendar width="18px" height="18px">
        onClick={handleIconClick} <use href={`${icon}#icon-calendar`} />
      </IconCalendar>
    </CalendarWrap>
  );
};

export default CalendarDrop;
