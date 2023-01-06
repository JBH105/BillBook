import React, { useEffect } from "react";
import { Fragment, useRef, useState } from "react";
import moment from "moment";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/router";
import { Listbox, Transition, Dialog } from "@headlessui/react";
import {
  ArrowDownIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/20/solid";
import * as Yup from "yup";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { AllVender, DeleteVender } from "../../../../Redux/action/vender";

const Profile = ({ ProfileData, setProfileView }) => {
  const dispatch = useDispatch();
  const [opnemodal, setOpenmodal] = useState(false);
  const initialValues = {
    name: "",
    // phone: "",
    email: "",
    birth: "",
    bio: "",
    password: "",
    NewPassword: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    // phone: Yup.string().required("Phone Number is required!").min(10),
    // Country: Yup.string().required("Country is required!"),
    birth: Yup.string().required("Birth Date is required"),
    bio: Yup.string().required("Bio is required"),
    password: Yup.string().required("Password is required"),
    NewPassword: Yup.string().required("Must be at least 8 characters").min(8),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .min(8)
      .oneOf([Yup.ref("NewPassword"), null], "Password don't match"),

    // city: Yup.string().required("City is required!")
  });

  const HandleVender = async () => {
    await dispatch(DeleteVender(ProfileData.id));
    setProfileView(false);
    await dispatch(AllVender());
  };

  return (
    <>
      <div className="custom-scroll overflow-y-auto">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          enableReinitialize={true}
          onSubmit={(values) => {
            console.log(values, "valuesvaluesvalues");
            router.push("/brand/onboarding/companyinformation");
          }}
        >
          {(formik) => {
            console.log(formik, "formikformik");
            return (
              <Form className=" max-w-[724px] mt-10 lg:mt-0 flex-auto  mr-[25px] ml-[25px] sm:mr-[50px] sm:ml-[50px] lg:ml-[75px] pt-10">
                <div>
                  <h3 className="text-[14px] md:text-[13px] mb-4 font-semibold leading-5 text-gray500">
                    ACCOUNT DETAILS
                  </h3>

                  <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-2">
                    <div className="">
                      <label className="block md:mb-1 text-[13px] font-medium leading-5 text-gray700">
                        ID
                      </label>
                      <Field
                        id="create"
                        name="create"
                        type="number"
                        value={ProfileData.id}
                        placeholder="12"
                        className="md:max-w-[350px] inputbg focus:bg-white/[0.25] focus:bg-white/[0.25] w-full placeholder:italic placeholder:text-black600/[0.3] placeholder:leading-[22px] placeholder:font-normal placeholder:text-xs  md:placeholder:text-[15px] focus:outline-none text-[15px] font-medium leading-[22px] text-black600 border border-gray250 focus:border-[#2E1368] rounded-lg py-3 bg-white bg-opacity-[0.25] px-4"
                      />
                    </div>
                    <div className="">
                      <label className="block md:mb-1 text-[12px] md:text-[13px] font-medium leading-5 text-gray700">
                        Name
                      </label>
                      <Field
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        type="text"
                        value={ProfileData?.fullName}
                        className="md:max-w-[350px] inputbg w-full placeholder:italic placeholder:text-black600/[0.3] placeholder:leading-[22px] placeholder:font-normal placeholder:text-xs  md:placeholder:text-[15px] focus:outline-none text-[15px] font-medium leading-[22px] text-black600 border border-gray250 focus:border-[#2E1368] rounded-lg py-3 focus:bg-white/[0.25] bg-white bg-opacity-[0.25] px-4"
                      />
                      <div style={{ color: "red" }}>
                        <ErrorMessage
                          name="name"
                          component="span"
                          className="error text-[13px] font-medium leanding-[20px] text-red500"
                        />
                      </div>
                    </div>
                    <div className="">
                      <label className="block md:mb-1 text-[13px] font-medium leading-5 text-gray700">
                        Business Email
                      </label>
                      <Field
                        id="email"
                        name="email"
                        value={ProfileData.businessEmail}
                        placeholder="example@example.com"
                        className="md:max-w-[350px] inputbg focus:bg-white/[0.25] focus:bg-white/[0.25] w-full placeholder:italic placeholder:text-black600/[0.3] placeholder:leading-[22px] placeholder:font-normal placeholder:text-xs  md:placeholder:text-[15px] focus:outline-none text-[15px] font-medium leading-[22px] text-black600 border border-gray250 focus:border-[#2E1368] rounded-lg py-3 bg-white bg-opacity-[0.25] px-4"
                      />
                      <div style={{ color: "red" }}>
                        <ErrorMessage
                          name="email"
                          component="span"
                          className="error text-[13px] font-medium leanding-[20px] text-red500"
                        />
                      </div>
                    </div>

                    <div className="">
                      <label className="block md:mb-1 text-[13px] font-medium leading-5 text-gray700">
                        Company Name
                      </label>
                      <Field
                        id="email"
                        name="email"
                        value={ProfileData.companyName}
                        placeholder="example@example.com"
                        className="md:max-w-[350px] inputbg focus:bg-white/[0.25] focus:bg-white/[0.25] w-full placeholder:italic placeholder:text-black600/[0.3] placeholder:leading-[22px] placeholder:font-normal placeholder:text-xs  md:placeholder:text-[15px] focus:outline-none text-[15px] font-medium leading-[22px] text-black600 border border-gray250 focus:border-[#2E1368] rounded-lg py-3 bg-white bg-opacity-[0.25] px-4"
                      />
                      <div style={{ color: "red" }}>
                        <ErrorMessage
                          name="email"
                          component="span"
                          className="error text-[13px] font-medium leanding-[20px] text-red500"
                        />
                      </div>
                    </div>
                    <div className="">
                      <label className="block md:mb-1 text-[13px] font-medium leading-5 text-gray700">
                        Phone Number
                      </label>
                      <Field
                        id="email"
                        name="email"
                        value={ProfileData.phoneNumber}
                        placeholder="example@example.com"
                        className="md:max-w-[350px] inputbg focus:bg-white/[0.25] focus:bg-white/[0.25] w-full placeholder:italic placeholder:text-black600/[0.3] placeholder:leading-[22px] placeholder:font-normal placeholder:text-xs  md:placeholder:text-[15px] focus:outline-none text-[15px] font-medium leading-[22px] text-black600 border border-gray250 focus:border-[#2E1368] rounded-lg py-3 bg-white bg-opacity-[0.25] px-4"
                      />
                      <div style={{ color: "red" }}>
                        <ErrorMessage
                          name="email"
                          component="span"
                          className="error text-[13px] font-medium leanding-[20px] text-red500"
                        />
                      </div>
                    </div>

                    <div className="">
                      <label className="block md:mb-1 text-[13px] font-medium leading-5 text-gray700">
                        Created
                      </label>
                      <Field
                        id="create"
                        name="create"
                        type="text"
                        value={moment(ProfileData.createdAt).format(
                          "DD/MMM/YYYY"
                        )}
                        placeholder="DD/MMM/YYYY"
                        className="md:max-w-[350px] inputbg focus:bg-white/[0.25] focus:bg-white/[0.25] w-full placeholder:italic placeholder:text-black600/[0.3] placeholder:leading-[22px] placeholder:font-normal placeholder:text-xs  md:placeholder:text-[15px] focus:outline-none text-[15px] font-medium leading-[22px] text-black600 border border-gray250 focus:border-[#2E1368] rounded-lg py-3 bg-white bg-opacity-[0.25] px-4"
                      />
                    </div>
                    <div className="">
                      <label className="block md:mb-1 text-[13px] font-medium leading-5 text-gray700">
                        Updated
                      </label>
                      <Field
                        id="updated"
                        name="updated"
                        type="text"
                        value={moment(ProfileData.updatedAt).format(
                          "DD/MMM/YYYY"
                        )}
                        className="md:max-w-[350px] inputbg focus:bg-white/[0.25] focus:bg-white/[0.25] w-full placeholder:italic placeholder:text-black600/[0.3] placeholder:leading-[22px] placeholder:font-normal placeholder:text-xs  md:placeholder:text-[15px] focus:outline-none text-[15px] font-medium leading-[22px] text-black600 border border-gray250 focus:border-[#2E1368] rounded-lg py-3 bg-white bg-opacity-[0.25] px-4"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-3 sm:space-x-[30px] mt-9 md:mt-[60px]">
                  <button
                    type="submit"
                    disabled={!(formik.isValid && formik.dirty)}
                    className={`${
                      formik.isValid && formik.dirty ? "" : "opacity-[0.3]"
                    } bg-violet600 shadow-blue100  w-full sm:w-auto block sm:inline-block  focus:outline-none rounded-[4px] sm:rounded-lg py-3 px-[30px] font-semibold text-[15px] leading-[22px] text-white  `}
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    className="text-[15px] w-full sm:w-auto block sm:inline-block border border-violet600 sm:border-none font-semibold text-violet600 sm:text-[#8A8A8A] rounded-[4px]  focus:outline-none py-3 px-[30px] sm:p-0"
                  >
                    Cancel
                  </button>
                </div>
                <div className="mt-14 sm:mt-10">
                  <button
                    type="button"
                    onClick={() => {
                      HandleVender();
                    }}
                    className="text-[15px] w-full sm:w-auto font-semibold sm:border rounded-lg sm:border-[#FF0000] py-3 px-[30px] text-[#FF0000] focus:outline-none"
                  >
                    Deactivate Account
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>

        <Transition.Root show={opnemodal} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setOpenmodal}>
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
              <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-[6px] sm:rounded-[15px] bg-white px-8 pt-8 pb-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[521px] sm:px-[57px] sm:pb-11 sm:pt-12">
                    <div>
                      <div className="mx-auto flex  items-center justify-center ">
                        <img src="/assets/icons/qua.svg" />
                      </div>
                      <div className="mt-5 text-center">
                        <h2 className="text-[14px] md:text-[17px]  font-semibold leading-[26px] text-dark900">
                          Are you sure you want to de-activate account?
                        </h2>
                        <div className="mt-3 md:mt-4">
                          <p className="text-[12px] md:text-[15px] leading-[22px] text-gray700">
                            This action will permanently close your BuzzBite
                            account and end all your active jobs.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 sm:mt-7 flex items-center justify-end">
                      <button
                        type="button"
                        className="flex justify-center rounded border border-transparent bg-white mr-[24px] sm:mr-[30px] text-xs md:text-[15px] font-semibold text-[#8A8A8A]  focus:outline-none focus:ring-0 "
                        onClick={() => setOpenmodal(false)}
                      >
                        No, thanks!
                      </button>
                      <button
                        type="button"
                        className="flex justify-center rounded border border-transparent bg-violet600 py-3 px-[20px] sm:px-[30px] text-xs md:text-[15px] font-semibold text-white shadow-sm  focus:outline-none focus:ring-0 "
                        onClick={() => setOpenmodal(false)}
                      >
                        Yes, proceed
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </>
  );
};

export default Profile;
