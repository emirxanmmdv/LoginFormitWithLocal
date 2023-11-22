import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { object, string } from "yup";
import "./login.scss";

const SignUpSchema = object().shape({
  firstname: string().required("Adınızı daxil edin."),
  lastname: string().required("Soyadınızı daxil edin."),
  email: string()
    .email("@ işarəsi mütləqdir")
    .required("mail addresinizi daxil edin."),
  password: string().required("şifrənizi daxil edin."),
});

const Login = () => {
  const [local, setLocal] = useState(
    localStorage.getItem("local") ? JSON.parse(localStorage.getItem("local")) : []
  );
  useEffect(() => {
    localStorage.setItem("local", JSON.stringify(local));
  }, [local]);

  function handleSubmit(value) {
    setLocal(value);
  }
  return (
    <div className="loginPage">
      <div className="loginCard">
        <div className="title">
          <h1>Sign Up</h1>
        </div>
        <div className="inputs">
          <Formik
            initialValues={{
              firstname: "",
              lastname: "",
              email: "",
              password: "",
            }}
            validationSchema={SignUpSchema}
            onSubmit={(value) => handleSubmit(value)}
          >
            <Form className="form">
              <p>First Name</p>
              <Field
                className="input"
                type="text"
                name="firstname"
                placeholder="Adınızı daxil edin..."
              />
              <ErrorMessage name="firstname" />
              <p>Last Name</p>
              <Field
                className="input"
                type="text"
                name="lastname"
                placeholder="Soyadınızı daxil edin..."
              />
              <ErrorMessage name="lastname" />
              <p>Email address</p>
              <Field
                className="input"
                type="text"
                name="email"
                placeholder="Email addresinizi daxil edin..."
              />
              <ErrorMessage name="email" />
              <p>Password</p>
              <Field
                className="input"
                type="password"
                name="password"
                placeholder="Şifrənizi daxil edin..."
              />
              <ErrorMessage name="password" />
              <button type="submit" className="submitbtn">
                Sign Up
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
