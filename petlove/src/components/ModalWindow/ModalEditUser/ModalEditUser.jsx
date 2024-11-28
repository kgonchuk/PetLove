import React, { useEffect, useRef, useState } from "react";
import ModalPortal from "../ModalPortal/ModalPortal";
import {
  EditBtn,
  FormField,
  FormFieldWrap,
  ImageWrap,
  InputField,
  InputFieldUpload,
  ModalContainer,
  ModalEditContainer,
  ModalEditText,
  ModalEditUploadWrap,
  ModalForm,
  stylesEditUser,
  UploadBtn,
  UploadIcon,
} from "./ModalEditUser.styled";

import icon from "../../../images/sprite.svg";
import userImg from "../../../images/user.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as Yup from "yup";
import { editUserInfo } from "../../../redux/auth/authOperation";
import {
  uploadFile,
  uploadImageToCloudinary,
} from "../../../hooks/saveFileToCloudinary";
import { selectUserAvatar } from "../../../redux/auth/authSelector";

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
  const dispatch = useDispatch();
  //   const user = useSelector(selectUser);
  //   const dispatch = useDispatch();
  //   const fileInputRef = useRef(null);
  //   const [loading, setLoading] = useState(false);

  //   const {
  //     register,
  //     handleSubmit,
  //     setValue,
  //     formState: { errors },
  //   } = useForm({
  //     resolver: yupResolver(validationEditProfileSchema),
  //     defaultValues: {
  //       name: user.name || "",
  //       email: user.email || "",
  //       phone: user.phone || "",
  //       avatar: user.avatar || "",
  //     },
  //   });

  //   const onSubmit = async (data) => {
  //     const filteredData = {};
  //     for (const key in data) {
  //       if (data[key] && data[key].trim() !== "") {
  //         filteredData[key] = data[key];
  //       }
  //     }
  //     setLoading(true);
  //     try {
  //       await dispatch(currentUserEdit(filteredData));
  //       onClose();
  //     } catch (error) {
  //       console.error("Error updating user:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   const handleFileChange = async (event) => {
  //     const file = event.target.files[0];
  //     if (file) {
  //       try {
  //         const imageUrl = await uploadFile(file);

  //         setValue("avatar", imageUrl);
  //       } catch (error) {
  //         console.error("Error uploading file:", error.message);
  //       }
  //     }
  //   };

  const [urlFieldValue, setUrlFieldValue] = useState();
  const avatar = useSelector(selectUserAvatar);
  const [isUploading, setIsUploading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  useEffect(() => {
    if (urlFieldValue) setValue("avatar", urlFieldValue);
    else if (userData.avatar) setValue("avatar", userData.avatar);
    else setValue("avatar", "");
    return () => {
      if (!open) {
        reset();
        setUrlFieldValue("");
      }
    };
  }, [urlFieldValue, setValue, reset, open, setUrlFieldValue, userData.avatar]);

  // const onSubmit = (data) => {
  //   const editInfo = {};
  //   for (let key in data) {
  //     if (data[key] !== userData[key]) editInfo[key] = data[key];
  //   }
  //   dispatch(editUserInfo(editInfo));
  //   onClose();
  // };

  const onSubmit = async (data) => {
    try {
      if (!data.avatar && data.file) {
        const url = await uploadImageToCloudinary(data.file);
        data.avatar = url;
      }

      await dispatch(editUserInfo(data));
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setIsUploading(true);
      try {
        const url = await uploadImageToCloudinary(file);
        setValue("avatar", url);
      } catch (error) {
        console.error("Error uploading image:", error);
      } finally {
        setIsUploading(false);
      }
    }
  };
  if (!open) return null;
  return (
    <ModalPortal onClose={onClose} open={open} $styles={stylesEditUser}>
      <ModalContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalForm>
            <ModalEditText>Edit information</ModalEditText>
            <ImageWrap>
              {urlFieldValue || userData.avatar ? (
                <img src={urlFieldValue || userData.avatar} alt="avatar" />
              ) : (
                <img src={userImg} alt="avatar" />
              )}
            </ImageWrap>
            <ModalEditContainer>
              <ModalEditUploadWrap>
                <FormField>
                  <InputFieldUpload
                    // placeholder="Avatar URL"
                    // {...register("avatar", {
                    //   onChange: (e) => setUrlFieldValue(e.target.value),
                    // })}
                    type="text"
                    {...register("avatar")}
                    placeholder={avatar ? avatar : "https://"}
                    readOnly
                  />
                </FormField>
                <UploadBtn>
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    id="fileInput"
                    onChange={handleFileChange}
                  />
                  <label htmlFor="fileInput">
                    Upload photo
                    <svg width="18px" height="18px">
                      <use href={`${icon}#icon-upload-cloud`} />
                    </svg>
                  </label>
                </UploadBtn>
              </ModalEditUploadWrap>
              <FormFieldWrap>
                <FormField>
                  <InputField
                    type="text"
                    defaultValue={userData.name || "Name"}
                    {...register("name")}
                  />
                </FormField>
                <FormField>
                  <InputField
                    type="text"
                    defaultValue={userData.email || "Email"}
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
              </FormFieldWrap>
            </ModalEditContainer>
            <EditBtn type="submit">Go to profile</EditBtn>
          </ModalForm>
        </form>
      </ModalContainer>
    </ModalPortal>
  );
};

export default ModalEditUser;
