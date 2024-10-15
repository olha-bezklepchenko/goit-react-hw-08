import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "../ContactForm/ContactForm.module.css";

const RegistrationForm = () => {
  const handleSubmit = (values) => {
    console.log("Form data:", values);
  };

  const registrationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name is too short!")
      .max(50, "Name is too long!")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  return (
    <>
      <Formik
        initialValues={{ name: "", email: "" }}
        onSubmit={handleSubmit}
        validationSchema={registrationSchema}
      >
        <Form className={css.form}>
          <div className={css.fieldWrapper}>
            <label htmlFor="name" className={css.label}>
              Name
            </label>
            <Field
              className={css.field}
              type="text"
              name="name"
              id="name"
              autoComplete="name"
            ></Field>
            <ErrorMessage name="name" component="p" className={css.error} />
          </div>
          <div className={css.fieldWrapper}>
            <label htmlFor="email" className={css.label}>
              Email
            </label>
            <Field
              className={css.field}
              type="email"
              name="email"
              id="email"
              autoComplete="email"
            ></Field>
            <ErrorMessage name="email" component="p" className={css.error} />
          </div>
          <div className={css.fieldWrapper}>
            <label htmlFor="password" className={css.label}>
              Password
            </label>
            <Field
              className={css.field}
              type="password"
              name="password"
              id="password"
              autoComplete="password"
            ></Field>
            <ErrorMessage name="password" component="p" className={css.error} />
          </div>
          <button type="submit" className={css.btn}>
            Log in
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default RegistrationForm;
