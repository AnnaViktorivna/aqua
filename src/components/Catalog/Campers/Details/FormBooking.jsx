import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const FormBooking = () => {
  <div>
    <h1>FormBooking</h1>
    <Formik
      initialValues={{
        name: "",
        email: "",
        bookingDate: "",
        comment: "",
      }}
      validate={(values) => {
        const errors = {};

        // Validate name
        if (!values.name) {
          errors.name = "Required";
        }

        // Validate email
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }

        // Validate booking date
        if (!values.bookingDate) {
          errors.bookingDate = "Required";
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
          <div>
            <label htmlFor='name'>Name</label>
            <Field type='text' name='name' />
            <ErrorMessage name='name' component='div' />
          </div>

          <div>
            <label htmlFor='email'>Email</label>
            <Field type='email' name='email' />
            <ErrorMessage name='email' component='div' />
          </div>

          <div>
            <label htmlFor='bookingDate'>Booking Date</label>
            <Field type='date' name='bookingDate' />
            <ErrorMessage name='bookingDate' component='div' />
          </div>

          <div>
            <label htmlFor='comment'>Comment</label>
            <Field as='textarea' name='comment' />
            <ErrorMessage name='comment' component='div' />
          </div>

          <button type='submit' disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>;
};

export default FormBooking;
