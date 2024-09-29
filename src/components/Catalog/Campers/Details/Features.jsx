import React, { useState } from "react";
import css from "./Features.module.css";
import { useParams } from "react-router-dom";
import { selectCurrentCamper } from "../../../redux/catalogs/selectors";
import { useSelector } from "react-redux";

import { ImTv } from "react-icons/im";

import { Formik, Form, Field, ErrorMessage } from "formik";

import { FaWind } from "react-icons/fa";
import { BsCupHot } from "react-icons/bs";
import { BsDiagram3 } from "react-icons/bs";
import { BsFuelPump } from "react-icons/bs";
import { BsUiRadios } from "react-icons/bs";

export const Features = () => {
  const item = useSelector(selectCurrentCamper);

  return (
    <div className={css.wrap_details}>
      <div className={css.wrap_info_1}>
        <div className={css.wrap_info_filter}>
          <div className={css.filter_content}>
            <BsDiagram3 />
            <p className={css.filter_p_content}>{item.transmission}</p>{" "}
          </div>

          <div className={css.filter_content}>
            <BsFuelPump />

            <p className={css.filter_p_content}> {item.engine}</p>
          </div>

          <div className={css.filter_content}>
            <FaWind className={css.filter_icon} />
            {item.AC === true ? "AC" : "No AC"}
          </div>
          <div className={css.filter_content}>
            <BsCupHot className={css.filter_icon} />
            {item.kitchen === true ? (
              <span style={{ textDecoration: "line-through" }}>Kitchen</span>
            ) : (
              "Kitchen"
            )}
          </div>

          <div className={css.filter_content}>
            <BsUiRadios />
            {item.radio === true ? (
              <span style={{ textDecoration: "line-through" }}>Radio</span>
            ) : (
              "Radio"
            )}
          </div>

          <div className={css.filter_content}>
            <ImTv />
            {item.TV === true ? (
              <span style={{ textDecoration: "line-through" }}>TV</span>
            ) : (
              "TV"
            )}
          </div>
        </div>
        <div>
          <h2 className={css.title}>Vehicle details</h2>
          <div className={css.line}></div>
          <div className={css.w_details}>
            {" "}
            <p className={css.details}>
              <span className={css.span}>Form</span> {item.form}
            </p>
            <p className={css.details}>
              <span className={css.span}>Length</span> {item.length}
            </p>
            <p className={css.details}>
              <span className={css.span}>Width</span> {item.width}
            </p>
            <p className={css.details}>
              <span className={css.span}>Height</span> {item.height}
            </p>
            <p className={css.details}>
              <span className={css.span}>Tank</span> {item.tank}
            </p>
            <p className={css.details}>
              <span className={css.span}>Consumption</span> {item.consumption}
            </p>
          </div>
        </div>
      </div>

      <div className={css.wrap_info_1}>
        <h2>Form</h2>
        <>
          <div>
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
                <Form className={css.form}>
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
          </div>
          ;
        </>
      </div>
    </div>
  );
};
