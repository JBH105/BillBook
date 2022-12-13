import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";

export default function Index() {
  const initialValues = {
    name: "",
    email: "",
    company: "",
    phone: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required!"),
    email: Yup.string().required("Email Id is required!"),
    company: Yup.string().required("Company Name is required!"),
    phone: Yup.string().required("Phone Number is required!").min(10).max(10),
  });
  return (
    <main className="bg-main-bg px-4 sm:px-6 lg:px-[60px]">
      <div className="py-6">
        <div className="mt-6 bg-white shadow-dark20 pt-[18px] px-[30px] pb-[22px] rounded-[15px]">
          <div className="md:flex justify-between">
            <div className="flex items-center">
              <h2 className="text-black500  font-semibold text-[17px] leading-[26px]">
                Add New Transaction
              </h2>
            </div>
            <div></div>
          </div>
          <div className="mt-4">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              enableReinitialize={true}
              // onSubmit={async (values) => {
              //   await handleSubmit(values);
              //   router.push("/brand/onboarding/personaldetail");
              // }}
            >
              {(formik) => {
                return (
                  <Form className="space-y-6" action="#" method="POST">
                    <div className=" grid gap-7 lg:grid-cols-2 mt-6">
                      <div>
                        <label
                          htmlFor="vender"
                          className="block text-[13px] font-medium text-gray-700"
                        >
                          Vender
                        </label>
                        <div className="mt-1">
                          <Field
                            id="Vender"
                            name="Vender"
                            placeholder="Select Your Vender"
                            type="select"
                            className="block bg-white text-[#090415] w-full h-[48px] appearance-none rounded border border-slate-300 px-3 py-2 placeholder-gray-400 placeholder:italic focus:border-slate-300 focus:outline-none focus:ring-slate-300 sm:text-[15px] font-medium"
                          />
                          <div style={{ color: "red" }}>
                            <ErrorMessage
                              name="name"
                              component="span"
                              className="error text-[13px] font-medium leanding-[20px] text-red500"
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-[13px] font-medium text-gray-700"
                        >
                          Full Name
                        </label>
                        <div className="mt-1">
                          <Field
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            type="text"
                            className="block bg-white text-[#090415] w-full h-[48px] appearance-none rounded border border-slate-300 px-3 py-2 placeholder-gray-400 placeholder:italic focus:border-slate-300 focus:outline-none focus:ring-slate-300 sm:text-[15px] font-medium"
                          />
                          <div style={{ color: "red" }}>
                            <ErrorMessage
                              name="name"
                              component="span"
                              className="error text-[13px] font-medium leanding-[20px] text-red500"
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-[13px] font-medium text-gray-700"
                        >
                          Full Name
                        </label>
                        <div className="mt-1">
                          <Field
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            type="text"
                            className="block bg-white text-[#090415] w-full h-[48px] appearance-none rounded border border-slate-300 px-3 py-2 placeholder-gray-400 placeholder:italic focus:border-slate-300 focus:outline-none focus:ring-slate-300 sm:text-[15px] font-medium"
                          />
                          <div style={{ color: "red" }}>
                            <ErrorMessage
                              name="name"
                              component="span"
                              className="error text-[13px] font-medium leanding-[20px] text-red500"
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-[13px] font-medium text-gray-700"
                        >
                          Full Name
                        </label>
                        <div className="mt-1">
                          <Field
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            type="text"
                            className="block bg-white text-[#090415] w-full h-[48px] appearance-none rounded border border-slate-300 px-3 py-2 placeholder-gray-400 placeholder:italic focus:border-slate-300 focus:outline-none focus:ring-slate-300 sm:text-[15px] font-medium"
                          />
                          <div style={{ color: "red" }}>
                            <ErrorMessage
                              name="name"
                              component="span"
                              className="error text-[13px] font-medium leanding-[20px] text-red500"
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-[13px] font-medium text-gray-700"
                        >
                          Full Name
                        </label>
                        <div className="mt-1">
                          <Field
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            type="text"
                            className="block bg-white text-[#090415] w-full h-[48px] appearance-none rounded border border-slate-300 px-3 py-2 placeholder-gray-400 placeholder:italic focus:border-slate-300 focus:outline-none focus:ring-slate-300 sm:text-[15px] font-medium"
                          />
                          <div style={{ color: "red" }}>
                            <ErrorMessage
                              name="name"
                              component="span"
                              className="error text-[13px] font-medium leanding-[20px] text-red500"
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-[13px] font-medium text-gray-700"
                        >
                          Full Name
                        </label>
                        <div className="mt-1">
                          <Field
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            type="text"
                            className="block bg-white text-[#090415] w-full h-[48px] appearance-none rounded border border-slate-300 px-3 py-2 placeholder-gray-400 placeholder:italic focus:border-slate-300 focus:outline-none focus:ring-slate-300 sm:text-[15px] font-medium"
                          />
                          <div style={{ color: "red" }}>
                            <ErrorMessage
                              name="name"
                              component="span"
                              className="error text-[13px] font-medium leanding-[20px] text-red500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[13px] font-medium text-gray-700"
                      >
                        Business Email
                      </label>
                      <div className="mt-1">
                        <FieldArray
                          cols={10}
                          rows={10}
                          id="email"
                          name="email"
                          type="textarea"
                          placeholder="Enter your email"
                          className="block bg-white text-[#090415] w-full h-[48px] appearance-none rounded border border-slate-300 px-3 py-2 placeholder-gray-400 placeholder:italic focus:border-slate-300 focus:outline-none focus:ring-slate-300 sm:text-[15px] font-medium"
                        />
                        <div style={{ color: "red" }}>
                          <ErrorMessage
                            name="email"
                            component="span"
                            className="error text-[13px] font-medium leanding-[20px] text-red500"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-[13px] font-medium text-gray-700"
                      >
                        Company Name
                      </label>
                      <div className="mt-1">
                        <Field
                          id="company"
                          name="company"
                          type="text"
                          placeholder="Company your name"
                          className="block bg-white text-[#090415] w-full h-[48px] appearance-none rounded border border-slate-300 px-3 py-2 placeholder-gray-400 placeholder:italic focus:border-slate-300 focus:outline-none focus:ring-slate-300 sm:text-[15px] font-medium"
                        />
                        <div style={{ color: "red" }}>
                          <ErrorMessage
                            name="company"
                            component="span"
                            className="error text-[13px] font-medium leanding-[20px] text-red500"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-[13px] font-medium text-gray-700"
                      >
                        Phone number
                      </label>
                      <div className="mt-1">
                        <Field
                          id="phone"
                          name="phone"
                          type="number"
                          placeholder="Enter your email"
                          className="block bg-white text-[#090415] w-full h-[48px] appearance-none rounded border border-slate-300 px-3 py-2 placeholder-gray-400 placeholder:italic focus:border-slate-300 focus:outline-none focus:ring-slate-300 sm:text-[15px] font-medium"
                        />
                        <div style={{ color: "red" }}>
                          <ErrorMessage
                            name="phone"
                            component="span"
                            className="error text-[13px] font-medium leanding-[20px] text-red500"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded border border-transparent bg-violet600 py-3 px-4 text-[15px] font-medium text-white shadow-sm  focus:outline-none focus:ring-0 "
                      >
                        Create user
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </main>
  );
}
