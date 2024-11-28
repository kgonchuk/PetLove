import * as Yup from "yup";

export const validationEditProfileSchema = Yup.object().shape({
  avatar: Yup.string().matches(
    /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
    "Invalid avatar URL"
  ),

  name: Yup.string().min(2, "Name must be at least 2 characters"),

  email: Yup.string().matches(
    /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
    "Invalid email address"
  ),
  phone: Yup.string().matches(
    /^\+38\d{10}$/,
    "Phone number must match +38XXXXXXXXXX format"
  ),
});
