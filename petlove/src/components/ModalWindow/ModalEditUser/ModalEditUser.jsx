// import React, { useEffect, useRef, useState } from "react";
// import ModalPortal from "../ModalPortal/ModalPortal";
// import {
//   EditBtn,
//   FormField,
//   FormFieldWrap,
//   ImageWrap,
//   InputField,
//   InputFieldUpload,
//   ModalContainer,
//   ModalEditContainer,
//   ModalEditText,
//   ModalEditUploadWrap,
//   ModalForm,
//   stylesEditUser,
//   UploadBtn,
//   UploadIcon,
// } from "./ModalEditUser.styled";

// import icon from "../../../images/sprite.svg";
// import userImg from "../../../images/user.jpg";
// import { useDispatch, useSelector } from "react-redux";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";

// import * as yup from "yup";
// import { editUserInfo } from "../../../redux/auth/authOperation";
// import { uploadImageToCloudinary } from "../../../hooks/saveFileToCloudinary";
// import { selectUserAvatar } from "../../../redux/auth/authSelector";
// import { setAvatar } from "../../../redux/auth/authSlice";

// const regex = {
//   urlRegex: /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
//   emailRegex: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
//   phoneRegex: /^\+38\d{10}$/,
// };

// const editUserSchema = yup.object().shape({
//   name: yup.string().min(2),
//   email: yup
//     .string()
//     .matches(
//       /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
//       "Enter a valid Email"
//     ),
//   // avatar: yup
//   //   .string()
//   //   .matches(/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/, {
//   //     excludeEmptyString: true,
//   //     message: "Enter a valid URL",
//   //   }),
//   phone: yup.string().matches(/^\+38\d{10}$/, {
//     excludeEmptyString: true,
//     message: "Phone number must be in format +380123456789",
//   }),
// });

// const ModalEditUser = ({ onClose, open, userData }) => {
//   const dispatch = useDispatch();
//   const [urlFieldValue, setUrlFieldValue] = useState();
//   const avatar = useSelector(selectUserAvatar);

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     reset,
//     formState: { errors },
//   } = useForm({ resolver: yupResolver(editUserSchema) });

//   useEffect(() => {
//     if (urlFieldValue) setValue("avatar", urlFieldValue);
//     else if (userData.avatar) setValue("avatar", userData.avatar);
//     else setValue("avatar", "");
//     return () => {
//       if (!open) {
//         reset();
//         setUrlFieldValue("");
//       }
//     };
//   }, [urlFieldValue, setValue, reset, open, setUrlFieldValue, userData.avatar]);

//   const onSubmit = async (data) => {
//     try {
//       if (!data.avatar && data.file) {
//         const url = await uploadImageToCloudinary(data.file);
//         data.avatar = url;
//       }

//       await dispatch(editUserInfo(data));
//       onClose();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleFileChange = async (e) => {
//     const { type, files } = e.target;

//     if (type === "file") {
//       const fileReader = new FileReader();
//       fileReader.onload = () => {
//         if (fileReader.readyState === 2) {
//           dispatch(setAvatar(fileReader.result));
//         }
//       };
//       if (files[0]) {
//         fileReader.readAsDataURL(files[0]);
//       }
//     }
//   };

//   if (!open) return null;
//   return (
//     <ModalPortal onClose={onClose} open={open} $styles={stylesEditUser}>
//       <ModalContainer>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <ModalForm>
//             <ModalEditText>Edit information</ModalEditText>
//             <ImageWrap>
//               {urlFieldValue || userData.avatar ? (
//                 <img src={urlFieldValue || userData.avatar} alt="avatar" />
//               ) : (
//                 <img src={userImg} alt="avatar" />
//               )}
//             </ImageWrap>
//             <ModalEditContainer>
//               <ModalEditUploadWrap>
//                 <FormField>
//                   <InputFieldUpload
//                     type="text"
//                     {...register("avatar")}
//                     placeholder={avatar ? avatar : "https://"}
//                     readOnly
//                   />
//                   {errors.avatar && <p>{errors.avatar.message}</p>}
//                 </FormField>
//                 <UploadBtn>
//                   <input
//                     type="file"
//                     accept="image/*"
//                     style={{ display: "none" }}
//                     id="fileInput"
//                     onChange={handleFileChange}
//                   />
//                   <label htmlFor="fileInput">
//                     Upload photo
//                     <svg width="18px" height="18px">
//                       <use href={`${icon}#icon-upload-cloud`} />
//                     </svg>
//                   </label>
//                 </UploadBtn>
//               </ModalEditUploadWrap>
//               <FormFieldWrap>
//                 <FormField>
//                   <InputField
//                     type="text"
//                     defaultValue={userData.name || "Name"}
//                     {...register("name")}
//                   />
//                   {errors.name && <p>{errors.name.message}</p>}
//                 </FormField>
//                 <FormField>
//                   <InputField
//                     type="text"
//                     defaultValue={userData.email || "Email"}
//                     {...register("email")}
//                   />
//                   {errors.email && <p>{errors.email.message}</p>}
//                 </FormField>
//                 <FormField>
//                   <InputField
//                     type="phone"
//                     defaultValue={userData.phone}
//                     placeholder="+380"
//                     {...register("phone")}
//                   />
//                   {errors.phone && <p>{errors.phone.message}</p>}
//                 </FormField>
//               </FormFieldWrap>
//             </ModalEditContainer>
//             <EditBtn type="submit">Go to profile</EditBtn>
//           </ModalForm>
//         </form>
//       </ModalContainer>
//     </ModalPortal>
//   );
// };

// export default ModalEditUser;

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
} from "../ModalEditUser/ModalEditUser.styled";
import { useDispatch, useSelector } from "react-redux";

import { ErrorMessage, Formik } from "formik";

import {
  selectFullUserInfo,
  selectUserAvatar,
} from "../../../redux/users/usersSelector";
import { setAvatar } from "../../../redux/users/usersSlice";
import { editUserInfo } from "../../../redux/users/usersOperation";

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

const ModalEditUser = ({ onClose, open }) => {
  const userAvatar = useSelector(selectUserAvatar);
  const userInfo = useSelector(selectFullUserInfo);

  const dispatch = useDispatch();

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

  const handleSubmit = (values) => {
    const userData = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      avatar:
        "https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331258_1280.pnghttps://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    };

    dispatch(editUserInfo(userData));
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
            <img src={userAvatar || userImg} alt="" />
          </ImageWrap>
          <Formik
            initialValues={{
              avatar: userInfo.avatar,
              name: userInfo.name,
              email: userInfo.email,
              phone: userInfo.phone,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <ModalForm>
                <ModalEditContainer>
                  <ModalEditUploadWrap>
                    <button type="button" onClick={triggerFileInput}>
                      Upload photo
                    </button>
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
                      name="name"
                      placeholder={"Name"}
                      hasError={errors.name && touched.name}
                    />
                    <ErrorMessage name="name" />
                  </FormField>
                  <FormField>
                    <InputField
                      type="email"
                      name="email"
                      placeholder={"Email"}
                      hasError={errors.email && touched.email}
                    />
                    <ErrorMessage name="email" />
                  </FormField>
                  <FormField>
                    <InputField
                      type="text"
                      name="phone"
                      placeholder={"+380XXXXXXXXX"}
                      hasError={errors.phone && touched.phone}
                    />
                    <ErrorMessage name="phone" />
                  </FormField>
                </ModalEditContainer>
                <EditBtn type="submit">Go to profile</EditBtn>
              </ModalForm>
            )}
          </Formik>
        </ModalForm>
      </ModalContainer>
    </ModalPortal>
  );
};

export default ModalEditUser;
