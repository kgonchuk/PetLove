import React, { useState } from "react";
import * as Yup from "yup";
import {
  AuthContainer,
  AuthText,
  AuthTitle,
  BtnContainer,
  ContainerForm,
  FeedbackMessage,
  FormField,
  FormStyle,
  FormWrap,
  Icon,
  InputField,
  InputGroup,
  LinkText,
  LinkWrap,
  LogInBtn,
  RegisterLink,
} from "./Auth.styled";
import { Formik } from "formik";
import { useLocation } from "react-router-dom";
import icon from "../../images/sprite.svg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../redux/auth/authOperation";

const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

const initialValues = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

const schema = Yup.object().shape({
  name: Yup.string().required("Name is a required field").trim(),
  email: Yup.string()
    .matches(emailRegex, "Enter a valid Email")
    .required("Email is a required field")
    .trim(),
  password: Yup.string()
    .min(7, "Password must be at least 7 characters long.")
    .required("Password is a required field")
    .trim(),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .min(7, "Password must be at least 7 characters long.")
    .required("Password confirm is a required field")
    .trim(),
});

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isregisterpage = (location.pathname === "/registration").toString();

  const toogleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = (values, { resetForm }) => {
    const userData = {
      name: values.name.trim(),
      email: values.email.trim(),
      password: values.password.trim(),
    };

    dispatch(register(userData));
    navigate("/profile");
    resetForm();
  };

  return (
    <AuthContainer isregisterpage={isregisterpage}>
      <FormWrap>
        <AuthTitle>Registration</AuthTitle>
        <AuthText isregisterpage={isregisterpage}>
          Thank you for your interest in our platform.
        </AuthText>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <FormStyle>
              <ContainerForm>
                <InputGroup>
                  <FormField>
                    <InputField
                      name="name"
                      type="name"
                      placeholder="Name"
                      style={{
                        borderColor:
                          touched.email && errors.email
                            ? "red"
                            : touched.email && !errors.email
                            ? "green"
                            : "defaultColor",
                      }}
                    />
                  </FormField>
                  <FormField>
                    <InputField
                      name="email"
                      type="email"
                      placeholder="Email"
                      style={{
                        borderColor:
                          touched.email && errors.email
                            ? "red"
                            : touched.email && !errors.email
                            ? "green"
                            : "defaultColor",
                      }}
                    />
                    {touched.email && errors.email ? (
                      <Icon>
                        <use href={`${icon}#red-false`} />
                      </Icon>
                    ) : (
                      <Icon>
                        <use href={`${icon}#green-success`} />
                      </Icon>
                    )}
                    {touched.email && errors.email && (
                      <FeedbackMessage>Enter a valid Email</FeedbackMessage>
                    )}
                  </FormField>
                  <FormField>
                    <InputField
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      style={{
                        borderColor:
                          touched.email && errors.email
                            ? "red"
                            : touched.email && !errors.email
                            ? "green"
                            : "defaultColor",
                      }}
                    />
                    {touched.password && errors.password ? (
                      <Icon>
                        <use href={`${icon}#red-false`} />
                      </Icon>
                    ) : !errors.password && touched.password ? (
                      <Icon>
                        <use href={`${icon}#green-success`} />
                      </Icon>
                    ) : showPassword ? (
                      <Icon
                        onMouseDown={(e) => {
                          e.preventDefault();
                          toogleShowPassword();
                        }}
                      >
                        <use href={`${icon}#open-eye`} />
                      </Icon>
                    ) : (
                      <Icon
                        onMouseDown={(e) => {
                          e.preventDefault();
                          toogleShowPassword();
                        }}
                      >
                        <use href={`${icon}#close-eye`} />
                      </Icon>
                    )}
                    {touched.password && !errors.password && (
                      <FeedbackMessage>Password is secure</FeedbackMessage>
                    )}
                  </FormField>
                  <FormField>
                    <InputField
                      name="passwordConfirm"
                      placeholder={"Confirm password"}
                      type={showPassword ? "text" : "password"}
                      style={{
                        borderColor:
                          touched.email && errors.email
                            ? "red"
                            : touched.email && !errors.email
                            ? "green"
                            : "defaultColor",
                      }}
                    />
                    {touched.password && errors.password ? (
                      <Icon>
                        <use href={`${icon}#red-false`} />
                      </Icon>
                    ) : !errors.password && touched.password ? (
                      <Icon>
                        <use href={`${icon}#green-success`} />
                      </Icon>
                    ) : showPassword ? (
                      <Icon
                        onMouseDown={(e) => {
                          e.preventDefault();
                          toogleShowPassword();
                        }}
                      >
                        <use href={`${icon}#open-eye`} />
                      </Icon>
                    ) : (
                      <Icon
                        onMouseDown={(e) => {
                          e.preventDefault();
                          toogleShowPassword();
                        }}
                      >
                        <use href={`${icon}#close-eye`} />
                      </Icon>
                    )}
                    {touched.password && !errors.password && (
                      <FeedbackMessage>Password is secure</FeedbackMessage>
                    )}
                  </FormField>
                </InputGroup>
                <BtnContainer>
                  <LogInBtn isregisterpage={isregisterpage} type="submit">
                    Registration
                  </LogInBtn>
                  <LinkWrap>
                    <LinkText>
                      Already have an account?
                      <RegisterLink to="/login">Login</RegisterLink>
                    </LinkText>
                  </LinkWrap>
                </BtnContainer>
              </ContainerForm>
            </FormStyle>
          )}
        </Formik>
      </FormWrap>
    </AuthContainer>
  );
}
