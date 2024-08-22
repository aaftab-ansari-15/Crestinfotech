import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const SignUp = () => {
  return (
    <div>
      <center>
        <h2>Register here..</h2>
        {/* <Formik
          initialValues={{ fullname: "", email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.fullname) {
              errors.fullname = "Required";
            }

            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.password) {
              errors.password = "Required";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                type="text"
                name="fullname"
                placeholder="Enter your fullname"
              />
              <ErrorMessage name="fullname" component="div" />

              <Field
                type="email"
                name="email"
                placeholder="Enter email address"
              />
              <ErrorMessage name="email" component="div" />

              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />

              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik> */}
        <Formik
          initialValues={{ fullname: "", email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.fullname) {
              errors.fullname = "Required";
            }
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.password) {
              errors.password = "Required";
            } else if (values.password.length < 5) {
              errors.password = "Must be 5 characters or more";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              console.log(JSON.stringify(values));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                type="text"
                name="fullname"
                placeholder="Enter your fullname"
              />
              <ErrorMessage name="fullname" component="div" />
              <Field type="email" name="email" placeholder="Enter your email" />
              <ErrorMessage name="email" component="div" />
              <Field
                type="password"
                name="password"
                placeholder="Enter your password"
              />
              <ErrorMessage name="password" component="div" />

              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </center>
    </div>
  );
};

export default SignUp;
