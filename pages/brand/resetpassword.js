import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";

const Resetpassword = () => {
  const router = useRouter();
  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    password: Yup.string().required("Must be at least 8 characters.").min(8),
    confirmPassword: Yup.string()
      .required("Confirm Password is required!")
      .min(8)
      .oneOf([Yup.ref("password"), null], "Password don't match."),
  });
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  return (
    <div className=" min-h-screen grid bg-white lg:grid-cols-2 lg:col-rows-1">
      <div className="relative hidden     lg:flex items-center after:top-0 after:bottom-0 after:opacity-60 after:left-0 after:right-0  after:absolute after:content-[' ']  after:bg-violet600">
        <div className="p-[60px] pt-[190px]  relative z-[8] ">
          <h1 className="text-[32px] leading-[50px]  mb-10 font-semibold text-white">
            Turn Your Impressions And Engagements Into Earnings
          </h1>
          <p className="text-[#E2D7F9] text-[15px] font-medium leanding-[22px]">
            Create a free account and get full access hundreds of influecer
            jobs. Trusted by 5000+ Influencers.
          </p>
        </div>
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="/assets/images/Branding&Lifestyle.png"
          alt="Branding&Lifestyle"
        />
        <img
          src="/assets/images/Logo.svg"
          alt="logo"
          className="absolute z-[1] top-[55px] left-[60px]"
        />
      </div>
      <div className="flex  flex-col justify-center items-center px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-[134px]">
        <div className="mx-auto w-full ">
          <div>
            <h2 className="mt-6 text-xl font-semibold tracking-tight text-dark900 text-center">
              Reset Password
            </h2>
            <p className="mt-4 text-[15px] font-medium text-gray800">
              Your new password must be different from previous used passwords.
            </p>
          </div>
          <div className="mt-14">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              enableReinitialize={true}
              onSubmit={(values) => {
                router.push("/brand/login");
              }}
            >
              {(formik) => {
                return (
                  <Form className="" action="#" method="POST">
                    <div className="">
                      <label
                        htmlFor="password"
                        className="block text-[13px] font-medium text-gray-700"
                      >
                        New Password
                      </label>
                      <div className="mt-1 relative">
                        <Field
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a password"
                          className="block bg-white text-[#090415] w-full h-[48px] appearance-none rounded border border-slate-300 px-3 pr-10 py-2 placeholder-gray-400 placeholder:italic focus:border-slate-300 focus:outline-none focus:ring-slate-300 sm:text-[15px] font-medium"
                        />

                        <button
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-0  top-0 h-[48px]  px-3 py-2"
                        >
                          <img
                            className=""
                            src={
                              showPassword
                                ? "/assets/icons/eye.svg"
                                : "/assets/icons/view-off.svg"
                            }
                          />
                        </button>
                        <div style={{ color: "red" }}>
                          <ErrorMessage
                            name="password"
                            component="span"
                            className="error text-[13px] font-medium leanding-[20px] text-red500"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-5">
                      <label
                        htmlFor="password"
                        className="block text-[13px] font-medium text-gray-700"
                      >
                        Confirm New Password
                      </label>
                      <div className="mt-1 relative">
                        <Field
                          id="confirmPassword"
                          name="confirmPassword"
                          type={confirmPassword ? "text" : "password"}
                          placeholder="Create a password"
                          className="block bg-white w-full text-[#090415] h-[48px] appearance-none rounded border border-slate-300 px-3 pr-10 py-2 placeholder-gray-400 placeholder:italic focus:border-slate-300 focus:outline-none focus:ring-slate-300 sm:text-[15px] font-medium"
                        />

                        <button
                          onClick={() => setConfirmPassword(!confirmPassword)}
                          className="absolute right-0  top-0 h-[48px]  px-3 py-2"
                        >
                          <img
                            className=""
                            src={
                              confirmPassword
                                ? "/assets/icons/eye.svg"
                                : "/assets/icons/view-off.svg"
                            }
                          />
                        </button>
                        <div style={{ color: "red" }}>
                          <ErrorMessage
                            name="confirmPassword"
                            component="span"
                            className="error text-[13px] font-medium leanding-[20px] text-red500"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-[60px]">
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded border border-transparent bg-violet600 py-3 px-4 text-[15px] font-semibold text-white shadow-sm  focus:outline-none focus:ring-0 "
                      >
                        Reset Password
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
  );
};

export default Resetpassword;