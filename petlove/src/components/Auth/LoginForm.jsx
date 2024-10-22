import React from "react";
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
  InputField,
  InputGroup,
  LinkText,
  LinkWrap,
  LogInBtn,
  RegisterLink,
} from "./Auth.styled";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";

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

const handleSubmit = () => {};
export default function LoginForm() {
  return (
    <AuthContainer>
      <FormWrap>
        <AuthTitle>Log in</AuthTitle>
        <AuthText>
          Welcome! Please enter your credentials to login to the platform:
        </AuthText>
        <Formik initialValues={initialValues} validationSchema={schema}>
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
                        paddingLeft: "12px",
                      }}
                    />
                    {touched.password && !errors.password && (
                      <FeedbackMessage>Password is secure</FeedbackMessage>
                    )}
                  </FormField>
                </InputGroup>
                <BtnContainer>
                  <LogInBtn>Log In</LogInBtn>
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
