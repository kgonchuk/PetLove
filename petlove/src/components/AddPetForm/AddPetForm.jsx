// // // import React, { useEffect, useState } from "react";
// // // import {
// // //   AddInputWrap,
// // //   AddLabelFemale,
// // //   AddLabelMale,
// // //   AddLabelUni,
// // //   AddPetFormContainer,
// // //   AddPetPhotoWrap,
// // //   AddTitle,
// // //   BtnBack,
// // //   BtnSubmit,
// // //   BtnWrap,
// // //   customDropDownStyle,
// // //   customDropDownType,
// // //   DataLabel,
// // //   DataTypeWrap,
// // //   DateInput,
// // //   FormField,
// // //   FormFieldPet,
// // //   IconCalendar,
// // //   IconFemale,
// // //   ImageWrap,
// // //   InputPetField,
// // //   InputPetFieldUpload,
// // //   PetUploadBtn,
// // //   SelectDropDown,
// // //   TypeLabel,
// // //   UploadInputWrap,
// // // } from "./AddPetForm.styled";
// // // import toast from "react-hot-toast";
// // // import * as yup from "yup";
// // // import icon from "../../images/sprite.svg";
// // // import { FormProvider, useForm } from "react-hook-form";
// // // import { yupResolver } from "@hookform/resolvers/yup";
// // // import { useNavigate } from "react-router-dom";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import { uploadImageToCloudinary } from "../../hooks/saveFileToCloudinary";
// // // import { addMyPet } from "../../redux/auth/authOperation";
// // // import { CalendarContainer } from "react-datepicker";
// // // import CalendarDrop from "./CalendarDrop";
// // // import SexRadioInput from "../SexRadioInput/SexRadioInput";
// // // import { SelectGetSpecies } from "../../redux/notices/noticesSelector";
// // // import { fetchSpecies } from "../../redux/notices/noticesOperation";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addMyPet } from "../../redux/auth/authOperation";
import Notiflix from "notiflix";
import { SelectGetSpecies } from "../../redux/notices/noticesSelector";

// // // const petSchema = yup.object().shape({
// // //   title: yup.string().required("Title is required"),
// // //   name: yup.string().required("Name is required"),
// // //   imgURL: yup
// // //     .string()
// // //     .matches(
// // //       /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
// // //       "Invalid URL format"
// // //     )
// // //     .required("Image URL is required"),
// // //   species: yup.string().required("Species is required"),
// // //   birthday: yup
// // //     .string()
// // //     .required("Birthday is required")
// // //     .matches(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),

// // //   sex: yup.string().required("Sex is required"),
// // // });

// // // const AddPetForm = () => {
// // //   const dispatch = useDispatch();
// // //   const navigate = useNavigate();
// // //   const [selectedSex, setSelectedSex] = useState("");
// // //   const [selectedSpecies, setSelectedSpecies] = useState("");
// // //   const [formData, setFormData] = useState({
// // //     name: "",
// // //     sex: "",
// // //     species: "",
// // //     birthday: "",
// // //     title: "",
// // //     imgURL: "",
// // //   });
// // //   const species = useSelector(SelectGetSpecies);

// // //   const methods = useForm({
// // //     resolver: yupResolver(petSchema),
// // //     defaultValues: formData,
// // //   });

// // //   useEffect(() => {
// // //     dispatch(fetchSpecies());
// // //   }, [dispatch]);

// // //   const onSubmit = async (data) => {
// // //     const petData = {
// // //       ...data,
// // //     };

// // //     try {
// // //       await dispatch(addMyPet(petData)).unwrap();
// // //       toast.success("Pet added successfully");
// // //       navigate("/profile");
// // //     } catch (error) {
// // //       toast.error("Failed to add pet");
// // //     }
// // //   };

// // //   return (
// // //     <AddPetFormContainer>
// // //       {" "}
// // //       <AddTitle>
// // //         Add my pet /<span>Personal details</span>
// // //       </AddTitle>
// // //       <FormProvider {...methods}>
// // //         <form onSubmit={methods.handleSubmit(onSubmit)}>
// // //           {/* <SexRadioInput
// // //             selectedSex={selectedSex}
// // //             setSelectedSex={setSelectedSex}
// // //           /> */}
// // //           {/* <AddInputWrap>
// // //           <AddLabelFemale>
// // //             {" "}
// // //             <input type="radio" value="female" {...register("sex")} />
// // //             {selectedSex === "female" ? (
// // //               <svg width="32" height="32">
// // //                 <use xlinkHref={`${icon}#female`} />
// // //               </svg>
// // //             ) : (
// // //               <svg width="32" height="32">
// // //                 <use xlinkHref={`${icon}#femalenoactive`} />
// // //               </svg>
// // //             )}
// // //           </AddLabelFemale>
// // //           <AddLabelMale>
// // //             <input type="radio" value="male" {...register("sex")} />
// // //             {selectedSex === "male" ? (
// // //               <svg width="32" height="32">
// // //                 <use xlinkHref={`${icon}#male`} />
// // //               </svg>
// // //             ) : (
// // //               <svg width="32" height="32">
// // //                 <use xlinkHref={`${icon}#malenoactive`} />
// // //               </svg>
// // //             )}
// // //           </AddLabelMale>
// // //           <AddLabelUni>
// // //             {" "}
// // //             <input type="radio" value="unisex" {...register("sex")} />
// // //             {selectedSex === "unisex" ? (
// // //               <svg width="32" height="32">
// // //                 <use xlinkHref={`${icon}#multiple`} />
// // //               </svg>
// // //             ) : (
// // //               <svg width="32" height="32">
// // //                 <use xlinkHref={`${icon}#multiplenoactive`} />
// // //               </svg>
// // //             )}
// // //           </AddLabelUni>
// // //         </AddInputWrap>{" "} */}
// // //           <AddPetPhotoWrap>
// // //             {/* <ImageWrap>
// // //             {imgURL ? (
// // //               <img src={imgURL} alt="pet" />
// // //             ) : (
// // //               <svg width="34px" height="34px">
// // //                 {" "}
// // //                 <use href={`${icon}#icon-icons8_cat-footprint`} />
// // //               </svg>
// // //             )}
// // //           </ImageWrap> */}
// // //             {/* <UploadInputWrap>
// // //               <FormField>
// // //                 <InputPetFieldUpload
// // //                   type="text"
// // //                   placeholder="Enter URL"
// // //                   readOnly
// // //                 />
// // //               </FormField>
// // //               <PetUploadBtn>
// // //                 <input
// // //                   type="file"
// // //                   accept="image/*"
// // //                   style={{ display: "none" }}
// // //                   id="fileInput"
// // //                   // onChange={handleFileChange}
// // //                 />
// // //                 <label htmlFor="fileInput">
// // //                   Upload photo
// // //                   <svg width="18px" height="18px">
// // //                     <use href={`${icon}#icon-upload-cloud`} />
// // //                   </svg>
// // //                 </label>
// // //               </PetUploadBtn>
// // //             </UploadInputWrap> */}
// // //             <FormField>
// // //               <InputPetField {...methods.register("title")} />
// // //             </FormField>
// // //             <FormField>
// // //               <InputPetField {...methods.register("name")} />
// // //             </FormField>
// // //             {/* <DataTypeWrap>
// // //               <DataLabel>
// // //                 <DateInput
// // //                   type="number"
// // //                   placeholder="00.00.00"
// // //                   value={""}
// // //                 />
// // //               </DataLabel>
// // //               <TypeLabel>
// // //                 <SelectDropDown
// // //                   options={typeOptions}
// // //                   name="type"
// // //                   placeholder="Type of pet"
// // //                   styles={customDropDownStyle}
// // //                 />
// // //               </TypeLabel>
// // //             </DataTypeWrap> */}
// // //             {/* <CalendarDrop formData={formData} setFormData={setFormData} />           */}
// // //             <BtnWrap>
// // //               <BtnBack type="button" onClick={() => navigate("/profile")}>
// // //                 Back
// // //               </BtnBack>
// // //               <BtnSubmit type="submit">Submit</BtnSubmit>
// // //             </BtnWrap>
// // //           </AddPetPhotoWrap>
// // //         </form>
// // //       </FormProvider>
// // //     </AddPetFormContainer>
// // //   );
// // // };

// // // export default AddPetForm;

// // import React, { useState } from "react";
// // import {
// //   AddInputWrap,
// //   AddLabelFemale,
// //   AddLabelMale,
// //   AddLabelUni,
// //   AddPetFormContainer,
// //   AddPetPhotoWrap,
// //   AddTitle,
// //   BtnBack,
// //   BtnSubmit,
// //   BtnWrap,
// //   FormField,
// //   ImageWrap,
// // } from "./AddPetForm.styled";
// // import { useForm, FormProvider, Controller } from "react-hook-form";
// // import { yupResolver } from "@hookform/resolvers/yup";
// // import * as yup from "yup";
// // import { useNavigate } from "react-router-dom";
// // import { useDispatch, useSelector } from "react-redux";
// // import { addPet } from "../../redux/auth/authOperation";
// // import { uploadImageToCloudinary } from "../../hooks/saveFileToCloudinary";
// // import icon from "../../images/sprite.svg";
// // import { selectUserAvatar } from "../../redux/auth/authSelector";

// // const petSchema = yup.object().shape({
// //   title: yup.string(),
// //   name: yup.string(),
// //   imgURL: yup
// //     .string()
// //     .matches(
// //       /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
// //       "Invalid URL format"
// //     ),
// //   species: yup.string(),
// //   birthday: yup
// //     .string()

// //     .matches(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),

// //   sex: yup.string(),
// // });

// // const AddPetForm = () => {
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();
// //   const avatar = useSelector(selectUserAvatar);
// //   const [isUploading, setIsUploading] = useState(false);
// //   const [isFocused, setIsFocused] = useState(false);

// //   const {
// //     register,
// //     handleSubmit,
// //     control,
// //     watch,
// //     setValue,
// //     formState: { errors },
// //   } = useForm({
// //     resolver: yupResolver(petSchema),
// //     defaultValues: {
// //       sex: "",
// //       imgURL: "",
// //       title: "",
// //       name: "",
// //       birthday: "",
// //       species: "",
// //     },
// //   });
// //   const selectedSex = watch("sex");
// //   const titleValue = watch("title");

// //   const onSubmit = async (data) => {
// //     try {
// //       if (!data.imgURL && data.file) {
// //         const url = await uploadImageToCloudinary(data.file);
// //         data.imgURL = url;
// //       }

// //       await dispatch(addPet(data));
// //       navigate("/profile");
// //       alert("Add succefull ");
// //     } catch (error) {
// //       alert("Error: " + error.response.data.message);
// //     }
// //   };

// //   const handleFileChange = async (event) => {
// //     const file = event.target.files[0];
// //     if (file) {
// //       setIsUploading(true);
// //       try {
// //         const url = await uploadImageToCloudinary(file);
// //         setValue("imgURL", url);
// //       } catch (error) {
// //         console.error("Error uploading image:", error);
// //       } finally {
// //         setIsUploading(false);
// //       }
// //     }
// //   };

// //   const handleBack = () => {
// //     navigate("/profile");
// //   };
// //   const triggerFileInput = () => {
// //     document.getElementById("fileInput").click();
// //   };
// //   return (
// //     <AddPetFormContainer>
// //       <AddTitle>
// //         {" "}
// //         Add my pet /<span>Personal details</span>
// //       </AddTitle>
// //       <form onSubmit={handleSubmit(onSubmit)}>
// //         <AddInputWrap>
// //           <AddLabelFemale>
// //             <input type="radio" value="female" {...register("sex")} />
// //             {selectedSex === "female" ? (
// //               <svg width="32" height="32">
// //                 <use xlinkHref={`${icon}#female`} />
// //               </svg>
// //             ) : (
// //               <svg width="32" height="32">
// //                 <use xlinkHref={`${icon}#femalenoactive`} />
// //               </svg>
// //             )}
// //           </AddLabelFemale>
// //           <AddLabelFemale>
// //             <input type="radio" value="male" {...register("sex")} />
// //             {selectedSex === "male" ? (
// //               <svg width="32" height="32">
// //                 <use xlinkHref={`${icon}#male`} />
// //               </svg>
// //             ) : (
// //               <svg width="32" height="32">
// //                 <use xlinkHref={`${icon}#malenoactive`} />
// //               </svg>
// //             )}
// //           </AddLabelFemale>
// //           <AddLabelFemale>
// //             <input type="radio" value="other" {...register("sex")} />
// //             {selectedSex === "other" ? (
// //               <svg width="32" height="32">
// //                 <use xlinkHref={`${icon}#multiple`} />
// //               </svg>
// //             ) : (
// //               <svg width="32" height="32">
// //                 <use xlinkHref={`${icon}#multiplenoactive`} />
// //               </svg>
// //             )}
// //           </AddLabelFemale>
// //         </AddInputWrap>
// //         <AddPetPhotoWrap>
// //           <ImageWrap>
// //             {avatar ? (
// //               <img src={avatar} alt="pet" />
// //             ) : (
// //               <svg width="34px" height="34px">
// //                 {" "}
// //                 <use href={`${icon}#icon-icons8_cat-footprint`} />
// //               </svg>
// //             )}
// //           </ImageWrap>
// //           <div>
// //             <Controller
// //               name="imgURL"
// //               control={control}
// //               render={({ field }) => (
// //                 <input type="text" {...field} placeholder="Enter URL" />
// //               )}
// //             />
// //             <div>
// //               <input
// //                 type="file"
// //                 accept="image/*"
// //                 style={{ display: "none" }}
// //                 id="imgUrl"
// //                 onChange={handleFileChange}
// //               />
// //               <label htmlFor="imgUrl">
// //                 Upload photo
// //                 <svg width="18px" height="18px">
// //                   <use xlinkHref={`${icon}#upload-cloud`} />
// //                 </svg>
// //               </label>
// //             </div>
// //             {errors.imgURL && <p>{errors.imgURL.message}</p>}
// //           </div>
// //         </AddPetPhotoWrap>
// //         <FormField>
// //           {" "}
// //           <Controller
// //             name="title"
// //             control={control}
// //             render={({ field }) => (
// //               <input id="title" type="text" placeholder="Title" {...field} />
// //             )}
// //           />
// //           {errors.title && <p>{errors.title.message}</p>}
// //         </FormField>
// //         <FormField>
// //           {" "}
// //           <Controller
// //             name="name"
// //             control={control}
// //             render={({ field }) => (
// //               <input
// //                 type="text"
// //                 id="name"
// //                 placeholder="Pet's Name"
// //                 {...field}
// //               />
// //             )}
// //           />
// //           {errors.name && <p>{errors.name.message}</p>}
// //         </FormField>
// //         <FormField>
// //           {" "}
// //           <Controller
// //             name="birthday"
// //             control={control}
// //             render={({ field }) => (
// //               <input
// //                 type="text"
// //                 id="birthday"
// //                 placeholder="0000.00.00"
// //                 {...field}
// //               />
// //             )}
// //           />
// //           <svg width="18px" height="18px">
// //             <use href={`${icon}#icon-calendar`} />
// //           </svg>
// //           {errors.birthday && <div>{errors.birthday.message}</div>}
// //         </FormField>
// //         <FormField>
// //           <Controller
// //             name="species"
// //             control={control}
// //             render={({ field }) => (
// //               <div>
// //                 <select
// //                   {...field}
// //                   name="select"
// //                   onFocus={() => setIsFocused(true)}
// //                   onBlur={() => setIsFocused(false)}
// //                 >
// //                   <option value="" disabled hidden>
// //                     Type of pet
// //                   </option>
// //                   <option value="dog">Dog</option>
// //                   <option value="cat">Cat</option>
// //                   <option value="monkey">Monkey</option>
// //                 </select>
// //                 {/* <svg className={css.iconCalendar} width="18px" height="18px">
// //                   <use xlinkHref={`${sprite}#${isFocused ? "up" : "down"}`} />
// //                 </svg> */}
// //               </div>
// //             )}
// //           />
// //           {errors.species && <p>{errors.species.message}</p>}
// //         </FormField>

// //         <BtnWrap>
// //           <BtnBack type="button" onClick={handleBack}>
// //             Back
// //           </BtnBack>
// //           <BtnSubmit type="submit">Submit</BtnSubmit>
// //         </BtnWrap>
// //       </form>
// //     </AddPetFormContainer>
// //   );
// // };

// // export default AddPetForm;

// // import React, { useEffect, useState } from "react";
// // import {
// //   AddInputWrap,
// //   AddLabelFemale,
// //   AddLabelMale,
// //   AddLabelUni,
// //   AddPetFormContainer,
// //   AddPetPhotoWrap,
// //   AddTitle,
// //   BtnBack,
// //   BtnSubmit,
// //   BtnWrap,
// //   customDropDownStyle,
// //   customDropDownType,
// //   DataLabel,
// //   DataTypeWrap,
// //   DateInput,
// //   FormField,
// //   FormFieldPet,
// //   IconCalendar,
// //   IconFemale,
// //   ImageWrap,
// //   InputPetField,
// //   InputPetFieldUpload,
// //   PetUploadBtn,
// //   SelectDropDown,
// //   TypeLabel,
// //   UploadInputWrap,
// // } from "./AddPetForm.styled";
// // import toast from "react-hot-toast";
// // import * as yup from "yup";
// // import icon from "../../images/sprite.svg";
// // import { FormProvider, useForm } from "react-hook-form";
// // import { yupResolver } from "@hookform/resolvers/yup";
// // import { useNavigate } from "react-router-dom";
// // import { useDispatch, useSelector } from "react-redux";
// // import { uploadImageToCloudinary } from "../../hooks/saveFileToCloudinary";
// // import { addMyPet } from "../../redux/auth/authOperation";
// // import { CalendarContainer } from "react-datepicker";
// // import CalendarDrop from "./CalendarDrop";
// // import SexRadioInput from "../SexRadioInput/SexRadioInput";
// // import { SelectGetSpecies } from "../../redux/notices/noticesSelector";
// // import { fetchSpecies } from "../../redux/notices/noticesOperation";

// // const petSchema = yup.object().shape({
// //   title: yup.string().required("Title is required"),
// //   name: yup.string().required("Name is required"),
// //   imgURL: yup
// //     .string()
// //     .matches(
// //       /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
// //       "Invalid URL format"
// //     )
// //     .required("Image URL is required"),
// //   species: yup.string().required("Species is required"),
// //   birthday: yup
// //     .string()
// //     .required("Birthday is required")
// //     .matches(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),

// //   sex: yup.string().required("Sex is required"),
// // });

// // const AddPetForm = () => {
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();
// //   const [selectedSex, setSelectedSex] = useState("");
// //   const [selectedSpecies, setSelectedSpecies] = useState("");
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     sex: "",
// //     species: "",
// //     birthday: "",
// //     title: "",
// //     imgURL: "",
// //   });
// //   const species = useSelector(SelectGetSpecies);

// //   const methods = useForm({
// //     resolver: yupResolver(petSchema),
// //     defaultValues: formData,
// //   });

// //   useEffect(() => {
// //     dispatch(fetchSpecies());
// //   }, [dispatch]);

// //   const onSubmit = async (data) => {
// //     const petData = {
// //       ...data,
// //     };

// //     try {
// //       await dispatch(addMyPet(petData)).unwrap();
// //       toast.success("Pet added successfully");
// //       navigate("/profile");
// //     } catch (error) {
// //       toast.error("Failed to add pet");
// //     }
// //   };

// //   return (
// //     <AddPetFormContainer>
// //       {" "}
// //       <AddTitle>
// //         Add my pet /<span>Personal details</span>
// //       </AddTitle>
// //       <FormProvider {...methods}>
// //         <form onSubmit={methods.handleSubmit(onSubmit)}>
// //           {/* <SexRadioInput
// //             selectedSex={selectedSex}
// //             setSelectedSex={setSelectedSex}
// //           /> */}
// //           {/* <AddInputWrap>
// //           <AddLabelFemale>
// //             {" "}
// //             <input type="radio" value="female" {...register("sex")} />
// //             {selectedSex === "female" ? (
// //               <svg width="32" height="32">
// //                 <use xlinkHref={`${icon}#female`} />
// //               </svg>
// //             ) : (
// //               <svg width="32" height="32">
// //                 <use xlinkHref={`${icon}#femalenoactive`} />
// //               </svg>
// //             )}
// //           </AddLabelFemale>
// //           <AddLabelMale>
// //             <input type="radio" value="male" {...register("sex")} />
// //             {selectedSex === "male" ? (
// //               <svg width="32" height="32">
// //                 <use xlinkHref={`${icon}#male`} />
// //               </svg>
// //             ) : (
// //               <svg width="32" height="32">
// //                 <use xlinkHref={`${icon}#malenoactive`} />
// //               </svg>
// //             )}
// //           </AddLabelMale>
// //           <AddLabelUni>
// //             {" "}
// //             <input type="radio" value="unisex" {...register("sex")} />
// //             {selectedSex === "unisex" ? (
// //               <svg width="32" height="32">
// //                 <use xlinkHref={`${icon}#multiple`} />
// //               </svg>
// //             ) : (
// //               <svg width="32" height="32">
// //                 <use xlinkHref={`${icon}#multiplenoactive`} />
// //               </svg>
// //             )}
// //           </AddLabelUni>
// //         </AddInputWrap>{" "} */}
// //           <AddPetPhotoWrap>
// //             {/* <ImageWrap>
// //             {imgURL ? (
// //               <img src={imgURL} alt="pet" />
// //             ) : (
// //               <svg width="34px" height="34px">
// //                 {" "}
// //                 <use href={`${icon}#icon-icons8_cat-footprint`} />
// //               </svg>
// //             )}
// //           </ImageWrap> */}
// //             {/* <UploadInputWrap>
// //               <FormField>
// //                 <InputPetFieldUpload
// //                   type="text"
// //                   placeholder="Enter URL"
// //                   readOnly
// //                 />
// //               </FormField>
// //               <PetUploadBtn>
// //                 <input
// //                   type="file"
// //                   accept="image/*"
// //                   style={{ display: "none" }}
// //                   id="fileInput"
// //                   // onChange={handleFileChange}
// //                 />
// //                 <label htmlFor="fileInput">
// //                   Upload photo
// //                   <svg width="18px" height="18px">
// //                     <use href={`${icon}#icon-upload-cloud`} />
// //                   </svg>
// //                 </label>
// //               </PetUploadBtn>
// //             </UploadInputWrap> */}
// //             <FormField>
// //               <InputPetField {...methods.register("title")} />
// //             </FormField>
// //             <FormField>
// //               <InputPetField {...methods.register("name")} />
// //             </FormField>
// //             {/* <DataTypeWrap>
// //               <DataLabel>
// //                 <DateInput
// //                   type="number"
// //                   placeholder="00.00.00"
// //                   value={""}
// //                 />
// //               </DataLabel>
// //               <TypeLabel>
// //                 <SelectDropDown
// //                   options={typeOptions}
// //                   name="type"
// //                   placeholder="Type of pet"
// //                   styles={customDropDownStyle}
// //                 />
// //               </TypeLabel>
// //             </DataTypeWrap> */}
// //             {/* <CalendarDrop formData={formData} setFormData={setFormData} />           */}
// //             <BtnWrap>
// //               <BtnBack type="button" onClick={() => navigate("/profile")}>
// //                 Back
// //               </BtnBack>
// //               <BtnSubmit type="submit">Submit</BtnSubmit>
// //             </BtnWrap>
// //           </AddPetPhotoWrap>
// //         </form>
// //       </FormProvider>
// //     </AddPetFormContainer>
// //   );
// // };

// // export default AddPetForm;

// import React, { useState } from "react";
// import {
//   AddInputWrap,
//   AddLabelFemale,
//   AddLabelMale,
//   AddLabelUni,
//   AddPetFormContainer,
//   AddPetPhotoWrap,
//   AddTitle,
//   BtnBack,
//   BtnSubmit,
//   BtnWrap,
//   FormField,
//   ImageWrap,
// } from "./AddPetForm.styled";
// import { useForm, FormProvider, Controller } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { addMyPet, addPet } from "../../redux/auth/authOperation";
// import { uploadImageToCloudinary } from "../../hooks/saveFileToCloudinary";
// import icon from "../../images/sprite.svg";
// import { selectUserAvatar } from "../../redux/auth/authSelector";
// import Notiflix from "notiflix";

// const petSchema = yup.object().shape({
//   title: yup.string(),
//   name: yup.string(),
//   imgURL: yup
//     .string()
//     .matches(
//       /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
//       "Invalid URL format"
//     ),
//   species: yup.string(),
//   birthday: yup
//     .string()

//     .matches(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),

//   sex: yup.string(),
// });

// const AddPetForm = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const avatar = useSelector(selectUserAvatar);
//   const [isUploading, setIsUploading] = useState(false);
//   const [isFocused, setIsFocused] = useState(false);
//   const [selectedSpecies, setSelectedSpecies] = useState("");

//   const {
//     register,
//     handleSubmit,
//     control,
//     watch,
//     setValue,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(petSchema),
//     defaultValues: {
//       sex: "",
//       imgURL: "",
//       title: "",
//       name: "",
//       birthday: "",
//       species: "",
//     },
//   });

//   const selectedSex = watch("sex");
//   const titleValue = watch("title");

//   const onSubmit = async (data) => {
//     const petData = {
//       ...data,
//       sex: selectedSex,
//       species: selectedSpecies,
//     };

//     try {
//       await dispatch(addMyPet(petData)).unwrap();
//       Notiflix.Notify.success("Pet added successfully");
//       navigate("/profile");
//     } catch (error) {
//       Notiflix.Notify.error("Failed to add pet");
//     }
//   };

//   const handleFileChange = async (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setIsUploading(true);
//       try {
//         const url = await uploadImageToCloudinary(file);
//         setValue("imgURL", url);
//       } catch (error) {
//         console.error("Error uploading image:", error);
//       } finally {
//         setIsUploading(false);
//       }
//     }
//   };

//   const handleBack = () => {
//     navigate("/profile");
//   };
//   const triggerFileInput = () => {
//     document.getElementById("fileInput").click();
//   };
//   return (
//     <AddPetFormContainer>
//       <AddTitle>
//         {" "}
//         Add my pet /<span>Personal details</span>
//       </AddTitle>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <AddInputWrap>
//           <AddLabelFemale>
//             <input type="radio" value="female" {...register("sex")} />
//             {selectedSex === "female" ? (
//               <svg width="32" height="32">
//                 <use xlinkHref={`${icon}#female`} />
//               </svg>
//             ) : (
//               <svg width="32" height="32">
//                 <use xlinkHref={`${icon}#femalenoactive`} />
//               </svg>
//             )}
//           </AddLabelFemale>
//           <AddLabelFemale>
//             <input type="radio" value="male" {...register("sex")} />
//             {selectedSex === "male" ? (
//               <svg width="32" height="32">
//                 <use xlinkHref={`${icon}#male`} />
//               </svg>
//             ) : (
//               <svg width="32" height="32">
//                 <use xlinkHref={`${icon}#malenoactive`} />
//               </svg>
//             )}
//           </AddLabelFemale>
//           <AddLabelFemale>
//             <input type="radio" value="other" {...register("sex")} />
//             {selectedSex === "other" ? (
//               <svg width="32" height="32">
//                 <use xlinkHref={`${icon}#multiple`} />
//               </svg>
//             ) : (
//               <svg width="32" height="32">
//                 <use xlinkHref={`${icon}#multiplenoactive`} />
//               </svg>
//             )}
//           </AddLabelFemale>
//         </AddInputWrap>
//         <AddPetPhotoWrap>
//           <ImageWrap>
//             {avatar ? (
//               <img src={avatar} alt="pet" />
//             ) : (
//               <svg width="34px" height="34px">
//                 {" "}
//                 <use href={`${icon}#icon-icons8_cat-footprint`} />
//               </svg>
//             )}
//           </ImageWrap>
//           <div>
//             <Controller
//               name="imgURL"
//               control={control}
//               render={({ field }) => (
//                 <input type="text" {...field} placeholder="Enter URL" />
//               )}
//             />
//             <div>
//               <input
//                 type="file"
//                 accept="image/*"
//                 style={{ display: "none" }}
//                 id="imgUrl"
//                 onChange={handleFileChange}
//               />
//               <label htmlFor="imgUrl">
//                 Upload photo
//                 <svg width="18px" height="18px">
//                   <use xlinkHref={`${icon}#upload-cloud`} />
//                 </svg>
//               </label>
//             </div>
//             {errors.imgURL && <p>{errors.imgURL.message}</p>}
//           </div>
//         </AddPetPhotoWrap>
//         <FormField>
//           {" "}
//           <Controller
//             name="title"
//             control={control}
//             render={({ field }) => (
//               <input id="title" type="text" placeholder="Title" {...field} />
//             )}
//           />
//           {errors.title && <p>{errors.title.message}</p>}
//         </FormField>
//         <FormField>
//           {" "}
//           <Controller
//             name="name"
//             control={control}
//             render={({ field }) => (
//               <input
//                 type="text"
//                 id="name"
//                 placeholder="Pet's Name"
//                 {...field}
//               />
//             )}
//           />
//           {errors.name && <p>{errors.name.message}</p>}
//         </FormField>
//         <FormField>
//           {" "}
//           <Controller
//             name="birthday"
//             control={control}
//             render={({ field }) => (
//               <input
//                 type="text"
//                 id="birthday"
//                 placeholder="0000.00.00"
//                 {...field}
//               />
//             )}
//           />
//           <svg width="18px" height="18px">
//             <use href={`${icon}#icon-calendar`} />
//           </svg>
//           {errors.birthday && <div>{errors.birthday.message}</div>}
//         </FormField>
//         <FormField>
//           <Controller
//             name="species"
//             control={control}
//             render={({ field }) => (
//               <div>
//                 <select
//                   {...field}
//                   name="select"
//                   onFocus={() => setIsFocused(true)}
//                   onBlur={() => setIsFocused(false)}
//                 >
//                   <option value="" disabled hidden>
//                     Type of pet
//                   </option>
//                   <option value="dog">Dog</option>
//                   <option value="cat">Cat</option>
//                   <option value="monkey">Monkey</option>
//                 </select>
//                 {/* <svg className={css.iconCalendar} width="18px" height="18px">
//                   <use xlinkHref={`${sprite}#${isFocused ? "up" : "down"}`} />
//                 </svg> */}
//               </div>
//             )}
//           />
//           {errors.species && <p>{errors.species.message}</p>}
//         </FormField>

//         <BtnWrap>
//           <BtnBack type="button" onClick={handleBack}>
//             Back
//           </BtnBack>
//           <BtnSubmit type="submit">Submit</BtnSubmit>
//         </BtnWrap>
//       </form>
//     </AddPetFormContainer>
//   );
// };

// export default AddPetForm;
import sprite from "../../images/sprite.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { uploadImageToCloudinary } from "../../hooks/saveFileToCloudinary";
import { selectUserPetsImgURL } from "../../redux/auth/authSelector";

const petSchema = yup.object().shape({
  title: yup.string(),
  name: yup.string(),
  imgURL: yup
    .string()
    .matches(
      /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
      "Invalid URL format"
    ),

  species: yup.string(),
  birthday: yup
    .string()

    .matches(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),

  sex: yup.string(),
});
const AddPetForm = () => {
  const [isFocused, setIsFocused] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const avatar = useSelector(selectUserPetsImgURL);
  const [isUploading, setIsUploading] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(petSchema),
    defaultValues: {
      sex: "",
      imgURL: "",
      title: "",
      name: "",
      birthday: "",
      species: "",
    },
  });
  const selectedSex = watch("sex");
  const urlValue = watch("url");
  const titleValue = watch("title");
  const nameValue = watch("name");
  const birthdayValue = watch("birthday");
  const speciesValue = watch("species");

  const onSubmit = async (data) => {
    try {
      if (!data.imgURL && data.file) {
        const url = await uploadImageToCloudinary(data.file);
        data.imgURL = url;
      }

      await dispatch(addMyPet(data));
      navigate("/profile");
    } catch (error) {
      alert("Error: " + error.response.data.message);
    }
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setIsUploading(true);
      try {
        const url = await uploadImageToCloudinary(file);
        setValue("imgURL", url);
      } catch (error) {
        console.error("Error uploading image:", error);
      } finally {
        setIsUploading(false);
      }
    }
  };

  return (
    <div>
      <h2>
        Add my pet /<span>Personal details</span>
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            <input type="radio" value="female" {...register("sex")} />
            {selectedSex === "female" ? (
              <svg width="32" height="32">
                <use xlinkHref={`${sprite}#female`} />
              </svg>
            ) : (
              <svg width="32" height="32">
                <use xlinkHref={`${sprite}#femalenoactive`} />
              </svg>
            )}
          </label>{" "}
          <label>
            <input type="radio" value="male" {...register("sex")} />
            {selectedSex === "male" ? (
              <svg width="32" height="32">
                <use xlinkHref={`${sprite}#male`} />
              </svg>
            ) : (
              <svg width="32" height="32">
                <use xlinkHref={`${sprite}#malenoactive`} />
              </svg>
            )}
          </label>
          <label>
            <input type="radio" value="other" {...register("sex")} />
            {selectedSex === "other" ? (
              <svg width="32" height="32">
                <use xlinkHref={`${sprite}#multiple`} />
              </svg>
            ) : (
              <svg width="32" height="32">
                <use xlinkHref={`${sprite}#multiplenoactive`} />
              </svg>
            )}
          </label>
          {errors.sex && <p>{errors.sex.message}</p>}
        </div>
        {avatar ? (
          <div>
            <img src={avatar} alt="User Avatar" />
          </div>
        ) : (
          <div>
            <div>
              <svg width="34" height="34">
                <use xlinkHref={`${sprite}#footprint`} />
              </svg>
            </div>
          </div>
        )}
        <div>
          <div>
            <Controller
              name="imgURL"
              control={control}
              render={({ field }) => (
                <input type="text" {...field} placeholder="Enter URL" />
              )}
            />
            <div>
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                id="imgUrl"
                onChange={handleFileChange}
              />
              <label htmlFor="imgUrl">
                Upload photo
                <svg width="18px" height="18px">
                  <use xlinkHref={`${sprite}#upload-cloud`} />
                </svg>
              </label>
            </div>
            {errors.imgURL && <p>{errors.imgURL.message}</p>}
          </div>
          <div>
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <input id="title" type="text" placeholder="Title" {...field} />
              )}
            />
            {errors.title && <p>{errors.title.message}</p>}
          </div>

          <div>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  id="name"
                  placeholder="Pet's Name"
                  {...field}
                />
              )}
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
        </div>

        <div>
          <div>
            <Controller
              name="birthday"
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  id="birthday"
                  placeholder="0000.00.00"
                  {...field}
                />
              )}
            />
            <svg width="18px" height="18px">
              <use xlinkHref={`${sprite}#calendar`} />
            </svg>

            {errors.birthday && <div>{errors.birthday.message}</div>}
          </div>

          <div>
            <Controller
              name="species"
              control={control}
              render={({ field }) => (
                <div>
                  <select
                    {...field}
                    name="select"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                  >
                    <option value="" disabled hidden>
                      Type of pet
                    </option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="monkey">Monkey</option>
                  </select>
                  <svg width="18px" height="18px">
                    <use xlinkHref={`${sprite}#${isFocused ? "up" : "down"}`} />
                  </svg>
                </div>
              )}
            />
            {errors.species && <p>{errors.species.message}</p>}
          </div>
        </div>

        <div>
          <button path="/profile">Back</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddPetForm;
