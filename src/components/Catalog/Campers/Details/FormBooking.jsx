// import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./FormBooking.module.css";
import React from "react";

export const FormBooking = () => {
  return (
    <div className={css.f_wrap}>
      <h2 className={css.f_title}>Book your campervan now</h2>
      <p className={css.f_text}>
        Stay connected! We are always ready to help you.
      </p>

      <div>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
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
            <Form className={css.f_form}>
              <Field
                type='name'
                name='name'
                placeholder='Name*'
                className={css.f_input}
              />
              <ErrorMessage name='name' component='div' />

              <Field
                type='email'
                name='email'
                className={css.f_input}
                placeholder='Email*'
              />
              <ErrorMessage name='email' component='div' />

              <Field
                type='date'
                name='date'
                className={css.f_input}
                placeholder='Booking Date*'
              />
              <ErrorMessage name='date' component='div' />

              <Field
                as='textarea'
                name='comment'
                // rows='10'
                // cols='30'
                placeholder='Comment'
                className={css.f_textarea}
              />
              <ErrorMessage name='comment' component='div' />

              <button
                type='submit'
                disabled={isSubmitting}
                className={css.f_btn}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
