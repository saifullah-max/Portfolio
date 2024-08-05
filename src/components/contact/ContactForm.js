import React from "react";
import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";

function ContactForm() {
  const initialValues = {
    username: "",
    email: "",
    message: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required!"),
    username: Yup.string().required('Required!'),
    message: Yup.string().required('Required!')
  });
  const onSubmit = (values, {resetForm}) => {
    console.log("Form data", values);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form className="form">
            <h3 className="aboutText">Connect with me: </h3>
            <FormikControl
              control="input"
              type="text"
              label="Username"
              name="username"
            />
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />
            <FormikControl
              control="input"
              type="textarea"
              as="textarea"
              label="Write your message"
              name="message"
              maxLength="200"
              minLength="10"
            />
            <div className="d-flex justify-content-start mt-4 ms-4">
            <Button
              type="submit"
              variant="secondary"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Submit
            </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
export default ContactForm;
