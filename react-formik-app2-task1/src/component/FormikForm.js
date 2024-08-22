import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  text: Yup.string().required("Text is required"),
  number: Yup.number()
    .required("Number is required")
    .typeError("Must be a number"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  picture: Yup.mixed()
    .required("Picture is required")
    .test("fileType", "Unsupported File Format", (value) => {
      return (
        value && ["image/jpg", "image/jpeg", "image/png"].includes(value.type)
      );
    })
    .test("fileSize", "File Size is too large", (value) => {
      return value && value.size <= 1024 * 1024;
    }),
  radioOption: Yup.string().required("Please select an option"),
});
const errorMessageStyle = {
  color: "red",
  fontSize: "0.875rem", // Smaller font size
  marginTop: "0.25rem", // Spacing between the field and the error message
};
const FormikForm = () => (
  <Formik
    initialValues={{
      text: "",
      number: "",
      email: "",
      password: "",
      confirmPassword: "",
      picture: null,
      radioOption: "",
    }}
    validationSchema={validationSchema}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        console.log(JSON.stringify(values));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({ setFieldValue, isSubmitting }) => (
      <Form>
        {/* Text Input */}
        <div>
          <label htmlFor="text">Text</label>
          <div className="container">
            <Field type="text" name="text" />
            <ErrorMessage
              style={errorMessageStyle}
              name="text"
              component="div"
            />
          </div>
        </div>

        {/* Number Input */}
        <div>
          <label htmlFor="number">Number</label>
          <div className="container">
            <Field type="number" name="number" />
            <ErrorMessage
              style={errorMessageStyle}
              name="number"
              component="div"
            />
          </div>
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email">Email</label>
          <div className="container">
            <Field type="email" name="email" />
            <ErrorMessage
              style={errorMessageStyle}
              name="email"
              component="div"
            />
          </div>
        </div>

        {/* Password Input */}
        <div>
          <label htmlFor="password">Password</label>
          <div className="container">
            <Field type="password" name="password" />
            <ErrorMessage
              style={errorMessageStyle}
              name="password"
              component="div"
            />
          </div>
        </div>

        {/* Confirm Password Input */}
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="container">
            <Field type="password" name="confirmPassword" />
            <ErrorMessage
              style={errorMessageStyle}
              name="confirmPassword"
              component="div"
            />
          </div>
        </div>

        {/* Picture Input */}
        <div>
          <label htmlFor="picture">Picture</label>
          <div className="container">
            <input
              type="file"
              name="picture"
              accept="image/jpeg, image/png"
              onChange={(event) => {
                setFieldValue("picture", event.currentTarget.files[0]);
              }}
            />
            <ErrorMessage
              style={errorMessageStyle}
              name="picture"
              component="div"
            />
          </div>
        </div>

        {/* Radio Input */}
        <div>
          <label>Radio Option</label>
          <div className="container">
            <label>
              <Field type="radio" name="radioOption" value="option1" />
              Option 1
            </label>
            <label>
              <Field type="radio" name="radioOption" value="option2" />
              Option 2
            </label>
          </div>
          <ErrorMessage
            style={errorMessageStyle}
            name="radioOption"
            component="div"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </Form>
    )}
  </Formik>
);

export default FormikForm;
