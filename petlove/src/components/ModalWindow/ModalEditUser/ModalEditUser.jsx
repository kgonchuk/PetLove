import React from "react";
import ModalPortal from "../ModalPortal/ModalPortal";
import userImg from "../../../images/user.jpg";
import * as Yup from "yup";
import {
  ModalForm,
  ModalContainer,
  stylesEditUser,
  ModalEditText,
  ImageWrap,
  ModalEditContainer,
  ModalEditUploadWrap,
  FormField,
  InputField,
  EditBtn,
  Img,
  UploadBtn,
  UploadIcon,
  InputFieldUpload,
} from "../ModalEditUser/ModalEditUser.styled";
import icon from "../../../images/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { selectUserAvatar } from "../../../redux/users/usersSelector";
import { setAvatar } from "../../../redux/users/usersSlice";
import { editUserInfo } from "../../../redux/auth/authOperation";

const regex = {
  urlRegex: /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
  emailRegex: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
  phoneRegex: /^\+38\d{10}$/,
};

const validationSchema = Yup.object().shape({
  avatar: Yup.string().matches(regex.urlRegex, "Invalid url format"),
  name: Yup.string().required("Name is a required field"),
  email: Yup.string()
    .matches(regex.emailRegex, "Invalid email format")
    .required("Email is a required field"),
  phone: Yup.string()
    .matches(regex.phoneRegex, "Invalid phone number format")
    .required("Phone is a required field"),
});

const ModalEditUser = ({ onClose, open, userData }) => {
  const userAvatar = useSelector(selectUserAvatar);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = (data) => {
    const editInfo = {};
    for (let key in data) {
      if (data[key] !== userData[key]) editInfo[key] = data[key];
    }
    dispatch(editUserInfo(editInfo));
    onClose();
  };

  const handleFileChange = async (e) => {
    const { type, files } = e.target;

    if (type === "file") {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        if (fileReader.readyState === 2) {
          dispatch(setAvatar(fileReader.result));
        }
      };
      if (files[0]) {
        fileReader.readAsDataURL(files[0]);
      }
    }
  };

  const triggerFileInput = () => {
    document.getElementById("fileInput").click();
  };
  if (!open) return null;
  return (
    <ModalPortal onClose={onClose} open={open} $styles={stylesEditUser}>
      <ModalContainer>
        <ModalForm>
          <ModalEditText>Edit information</ModalEditText>
          <ImageWrap>
            <Img src={userAvatar || userImg} alt="" />
          </ImageWrap>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalForm>
              <ModalEditContainer>
                <ModalEditUploadWrap>
                  <InputFieldUpload
                    type="text"
                    placeholder={userAvatar ? userAvatar : "https://"}
                    readOnly
                  />

                  <UploadBtn type="button" onClick={triggerFileInput}>
                    Upload photo{" "}
                    <UploadIcon>
                      {" "}
                      <use href={`${icon}#icon-upload-cloud`} />
                    </UploadIcon>
                  </UploadBtn>
                  <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </ModalEditUploadWrap>
                <FormField>
                  <InputField
                    type="text"
                    defaultValue={userData.name || "Name"}
                    {...register("name")}
                  />
                </FormField>
                <FormField>
                  <InputField
                    type="email"
                    defaultValue={userData.email}
                    placeholder="Email"
                    {...register("email")}
                  />
                </FormField>
                <FormField>
                  <InputField
                    type="phone"
                    defaultValue={userData.phone}
                    placeholder="+380"
                    {...register("phone")}
                  />
                </FormField>
              </ModalEditContainer>
              <EditBtn type="submit">Go to profile</EditBtn>
            </ModalForm>
          </form>
        </ModalForm>
      </ModalContainer>
    </ModalPortal>
  );
};

export default ModalEditUser;
