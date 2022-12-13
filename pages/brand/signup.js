import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import Link from "next/link";

function Signup() {
  const router = useRouter();
  const initialValues = {
    name: "",
    email: "",
    password: "",
    remember: "",
  };

  const handleSubmit = async (values) => {
  } 

  const reg = /^[\w.+\-]+@(?!(gmail|hotmail|yahoo|aol)).*\.com$/;
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required!"),
    email: Yup.string()
      .required("Email Id is required!")
      .matches(reg, "Please enter a business email address"),
    password: Yup.string().required("Must be at least 8 characters.").min(8),
    remember: Yup.string().required("Terms of service is required!"),
  });
  const [showPassword, setShowPassword] = useState(false);
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
            <h2 className="mt-6 text-xl font-semibold tracking-tight text-dark900">
              Create a Brand Account
            </h2>
            <p className="mt-2 text-[15px] font-medium text-gray800">
              Let’s get started to earn the benefits with basic plan!
            </p>
          </div>
          <div className="mt-14">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              enableReinitialize={true}
              onSubmit={async(values) => {
                await handleSubmit(values)
                router.push("/brand/onboarding/personaldetail");
              }}
            >
              {(formik) => {
                return (
                  <Form className="space-y-6" action="#" method="POST">
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
                        htmlFor="password"
                        className="block text-[13px] font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <div className="mt-1 relative">
                        <Field
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          className="block w-full text-[#090415] bg-white h-[48px] appearance-none rounded border border-slate-300 px-3 pr-10 py-2 placeholder-gray-400 placeholder:italic focus:border-slate-300 focus:outline-none focus:ring-slate-300 sm:text-[15px] font-medium"
                        />

                        <button
                          className="absolute right-0  top-0 h-[48px]  px-3 py-2"
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          <img className="" src={showPassword ? '/assets/icons/eye.svg' : "/assets/icons/view-off.svg"} />
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
                    <div className=" items-center justify-between">
                      <div className="flex items-center">
                        <Field
                          id="remember"
                          name="remember"
                          type="checkbox"
                          className="h-4 w-4 bg-white text-[#090415] rounded-[2.8px] accent-violet600 border-gray-300 text-violet600 focus:ring-0"
                        />
                        <label
                          htmlFor="remember-me"
                          className="ml-2 block font-medium text-sm text-gray800"
                        >
                          By signing up, I agree to the{" "}
                          <a
                            href="#"
                            className="font-medium text-violet600 hover:text-indigo-500"
                          >
                            Terms of service
                          </a>
                        </label>
                      </div>
                      <div style={{ color: "red" }}>
                        <ErrorMessage
                          name="remember"
                          component="span"
                          className="error text-[13px] font-medium leanding-[20px] text-red500"
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded border border-transparent bg-violet600 py-3 px-4 text-[15px] font-medium text-white shadow-sm  focus:outline-none focus:ring-0 "
                      >
                        Create Account
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
          <div className="flex justify-center items-center mt-9">
            <div className="mr-7">
              <img src="/assets/icons/google.svg" />
            </div>
            <div>
              <img src="/assets/icons/facebook.svg" />
            </div>
          </div>
          <div className="mt-8 text-center">
            <span className="text-[15px] font-medium text-gray800">
              Already have an account?
              <Link
                href="login"
                className="text-[15px] font-medium text-violet600"
              >
                {" "}
                Login
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
