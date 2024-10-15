import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "../ContactForm/ContactForm.module.css";

const LoginForm = () => {
  const loginSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <Formik
        initialValues={{ name: "", email: "" }}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
      >
        <Form className={css.form}>
          <div className={css.fieldWrapper}>
            <label htmlFor="email" className={css.label}>
              Email
            </label>
            <Field
              className={css.field}
              type="email"
              name="email"
              id="email"
              autoComplete="off"
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
              autoComplete="off"
            ></Field>
            <ErrorMessage name="password" component="p" className={css.error} />
          </div>
          <button type="submit" className={css.btn}>
            Register
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default LoginForm;
