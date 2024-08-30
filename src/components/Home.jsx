"use client";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { BackgroundBeams } from "./Beams";
import Address from "./Address";

// Validation Schema using Yup
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Required'),
  phone: Yup.string()
    .matches(/^[0-9]+$/, 'Phone number is not valid')
    .min(10, 'Phone number must be at least 10 digits')
    .required('Required'),
});

export function BackgroundBeamsDemo() {
  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 -mt-20">
        <h1 className="relative z-10 text-lg md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold mb-8">
          Welcome to WeZake
        </h1>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            phone: ''
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <label htmlFor="name" className="text-neutral-500 lg:text-lg md:text-lg text-sm lg:mr-5">
                Enter Name
              </label>
              <Field
                name="name"
                type="text"
                placeholder="Your Name"
                className="w-auto lg:w-9/12 md:w-9/12 rounded-lg border border-neutral-800 h-max p-1.5 focus:ring-teal-500 text-neutral-600 w-100 relative z-10 mt-4 lg:mr-5 bg-neutral-950 placeholder:text-neutral-700"
              />
              {errors.name && touched.name ? (
                <div className="text-red-500 text-sm">{errors.name}</div>
              ) : null}

              <label htmlFor="email" className="text-neutral-500 lg:text-lg md:text-lg text-sm mr-5">
                Enter Email
              </label>
              <Field
                name="email"
                type="email"
                placeholder="xyz@gmail.com"
                className="rounded-lg border border-neutral-800 focus:ring-2 ml-1 focus:ring-teal-500 w-auto lg:w-9/12 md:w-9/12 relative z-10 h-max p-1.5 mt-4 text-neutral-600 bg-neutral-950 placeholder:text-neutral-700 lg:mr-5"
              />
              {errors.email && touched.email ? (
                <div className="text-red-500 text-sm">{errors.email}</div>
              ) : null}

              <div className="flex gap-12 mt-2">
                <label htmlFor="password" className="text-neutral-500 w-4/12 lg:text-lg md:text-lg text-sm mr-5">
                  Password
                </label>
                <label htmlFor="phone" className="text-neutral-500 pl-14 lg:text-lg md:text-lg text-sm">
                  Phone
                </label>
              </div>

              <div className="flex flex-grow -mt-2">
                <Field
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="rounded-lg border text-neutral-600 border-neutral-800 focus:ring-2 focus:ring-teal-500 w-auto lg:w-5/12 h-max p-1.5 md:w-9/12 relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700 mr-11"
                />
                {errors.password && touched.password ? (
                  <div className="text-red-500 text-sm">{errors.password}</div>
                ) : null}

                <Field
                  name="phone"
                  type="text"
                  placeholder="+91-XXXX"
                  className="lg:ml-3 rounded-lg border text-neutral-600 border-neutral-800 focus:ring-2 focus:ring-teal-500 w-auto lg:w-5/12 h-max p-1.5 md:w-9/12 relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700"
                />
                {errors.phone && touched.phone ? (
                  <div className="text-red-500 text-sm">{errors.phone}</div>
                ) : null}
              </div>

              <div className="flex items-center space-x-2 mt-1">
                <div className="flex-grow">
                  <label htmlFor="address" className="text-neutral-500 w-4/12 lg:text-lg md:text-lg text-sm mr-5">
                    Enter Complete Address:
                  </label>
                  <Address />
                </div>
              </div>
              
              <button type="submit" className="mt-6 px-4 py-2 bg-teal-500 text-white rounded-lg">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <BackgroundBeams />
    </div>
  );
}
