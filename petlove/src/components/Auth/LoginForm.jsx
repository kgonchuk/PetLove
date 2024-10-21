import React from "react";
import {
  AuthContainer,
  AuthText,
  AuthTitle,
  BtnContainer,
  ContainerForm,
  FormField,
  FormWrap,
  InputField,
  InputGroup,
  LinkText,
  LinkWrap,
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
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <ContainerForm>
                <InputGroup>
                  <FormField>
                    <InputField
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                    />
                  </FormField>
                  <FormField>
                    <InputField
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Password"
                    />
                  </FormField>
                </InputGroup>
                {/* <BtnContainer>
                  <LoginForm>Log In</LoginForm>
                  <LinkWrap>
                    <LinkText>Don’t have an account? </LinkText>{" "}
                    <RegisterLink to="/registartion">Register</RegisterLink>
                  </LinkWrap>
                </BtnContainer> */}
              </ContainerForm>
            </Form>
          )}
        </Formik>
      </FormWrap>
    </AuthContainer>
  );
}
