import React, { useState } from "react";
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
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import icon from "../../images/sprite.svg";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/authOperation";
import { useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const schema = Yup.object({
  email: Yup.string()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Invalid email address")
    .required("Required"),
  password: Yup.string()
    .required("Required")
    .min(7, "Password must be at least 7 characters"),
});

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toogleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = (values, { resetForm }) => {
    const userData = {
      email: values.email.trim(),
      password: values.password.trim(),
    };

    dispatch(logIn(userData));
    navigate("/profile");
    resetForm();
  };
  return (
    <AuthContainer>
      <FormWrap>
        <AuthTitle>Log in</AuthTitle>
        <AuthText>
          Welcome! Please enter your credentials to login to the platform:
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

                    {touched.email && !errors.email && (
                      <FeedbackMessage>Enter a valid Email</FeedbackMessage>
                    )}
                  </FormField>
                  <FormField>
                    <InputField
                      name="password"
                      type="password"
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
                </InputGroup>
                <BtnContainer>
                  <LogInBtn type="submit">Log In</LogInBtn>
                  <LinkWrap>
                    <LinkText>
                      Don’t have an account?
                      <RegisterLink to="/registration">Register</RegisterLink>
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
