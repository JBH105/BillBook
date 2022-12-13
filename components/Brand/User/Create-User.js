import { Dialog, Transition } from "@headlessui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React, { Fragment } from "react";
import Link from "next/link";

export default function CreateUser({ open, setopen }) {
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
    <div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setopen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-[#000000] bg-opacity-50 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full justify-center p-4 text-center items-center lg:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform  rounded-lg bg-white p-4 md:pt-[69px] md:pb-[82px] text-left shadow-xl transition-all sm:w-full sm:max-w-[400px] sm:p-6">
                  <div className="max-w-[426px] mx-auto">
                    <button
                      onClick={() => setopen(false)}
                      className="absolute -top-[22px] outline-none ring-0 -right-[22px]"
                    >
                      <img
                        src="/assets/icons/closebtn.svg"
                        className="w-[47px] h-[47px]"
                      />
                    </button>
                    {/* Main */}
                    <div className="flex flex-col justify-center items-center px-4 sm:px-6  ">
                      <div className="mx-auto w-full ">
                        <div className="">
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
                                <Form
                                  className="space-y-6"
                                  action="#"
                                  method="POST"
                                >
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
                                      Business Email
                                    </label>
                                    <div className="mt-1">
                                      <Field
                                        id="email"
                                        name="email"
                                        type="email"
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
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
