import { useId } from "react";

import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import css from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

function ContactForm({onSubmit}) {

  const handleSubmit = (values, actions) => {
    onSubmit({id: nanoid(), ...values})
    console.log(values);
    actions.resetForm();
  };

  const fieldId = useId();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <label htmlFor={`${fieldId}-name`} className={css.label}>
          Name
        </label>
        <Field
          type="text"
          name="name"
          id={`${fieldId}-name`}
          className={css.field}
        ></Field>
        <ErrorMessage name="name" component="span" className={css.error} />
        <label htmlFor={`${fieldId}-number`} className={css.label}>
          Number
        </label>
        <Field
          type="text"
          name="number"
          id={`${fieldId}-number`}
          className={css.field}
        ></Field>
        <ErrorMessage name="number" component="span" className={css.error}/>
        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
