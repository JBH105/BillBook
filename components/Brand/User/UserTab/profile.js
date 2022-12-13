import React from "react";
import { Fragment, useRef, useState } from "react";

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
const interest = [
  { name: "Sports" },
  { name: "Foods & Drinks" },
  { name: "Beauty" },
  { name: "Finance" },
  { name: "Health & Fitness" },
  { name: "Sports" },
  { name: "Fashion" },
  { name: "Education" },
  { name: "Fitness" },
  { name: "Sports" },
  { name: "Politics" },
  { name: "Healthcare" },
  { name: "Beauty" },
  { name: "Education" },
  { name: "Sports" },
  { name: "Foods & Drinks" },
  { name: "Entertainments" },
  { name: "Beauty" },
  { name: "Finance" },
  { name: "Health & Fitness" },
  { name: "Sports" },
];
const Country = [
  { id: 1, name: "Country" },
  { id: 2, name: "Palmer " },
  { id: 3, name: "Anniston" },
  { id: 4, name: "Atmore" },
  { id: 5, name: "Andalusia" },
  { id: 6, name: "Prescott" },
  { id: 7, name: "Arkadelphia" },
  { id: 8, name: "Alameda" },
];
const City = [
  { id: 1, name: "City" },
  { id: 2, name: "Andalusia" },
  { id: 3, name: "Anniston" },
  { id: 4, name: "Atmore" },
  { id: 5, name: "Palmer" },
  { id: 6, name: "Prescott" },
  { id: 7, name: "Arkadelphia" },
  { id: 8, name: "Alameda" },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Profile = () => {
  const [image, setImage] = useState();
  const [opnemodal, setOpenmodal] = useState(false);
  const [country, setCountry] = useState(Country[0]);
  const [selectedCity, setSelectedCity] = useState(City[0]);

  const [selectedInterest, setSelectedInterest] = useState([]);
  const handleAddRemoveInterest = (item) => {
    if (selectedInterest.includes(item)) {
      const arr = [...selectedInterest];
      const index = arr.indexOf(item);
      if (index > -1) {
        // only splice array when item is found
        arr.splice(index, 1);
        setSelectedInterest([...arr]); // 2nd parameter means remove one item only
      }
    } else {
      if (selectedInterest.length + 1 <= 2) {
        setSelectedInterest([...selectedInterest, item]);
      } else {
      }
    }
  };

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
  return (
    <>
      <div className=""></div>
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
            <Form className=" max-w-[724px] mt-10 lg:mt-0 flex-auto lg:ml-[75px] pt-10">
              <div>
                <h3 className="text-[14px] md:text-[13px] mb-4 font-semibold leading-5 text-gray500">
                  ACCOUNT DETAILS
                </h3>

                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-2">
                  <div className="">
                    <label className="block md:mb-1 text-[12px] md:text-[13px] font-medium leading-5 text-gray700">
                      Name
                    </label>
                    <Field
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      type="text"
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
                      Email Address
                    </label>
                    <Field
                      id="email"
                      name="email"
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
                  {/* <div className="">
                    <label className="block md:mb-1 text-[13px] font-medium leading-5 text-gray700">
                      City
                    </label>
                    <Field
                      placeholder="City"
                      className="md:max-w-[350px] w-full placeholder:italic placeholder:text-black600/[0.3] placeholder:leading-[22px] placeholder:font-normal placeholder:text-xs  md:placeholder:text-[15px] focus:outline-none text-[15px] font-medium leading-[22px] text-black600 border border-gray250 focus:border-[#2E1368] rounded-lg py-3 bg-white bg-opacity-[0.25] px-4"
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
                      Country
                    </label>
                    <Field
                      placeholder="Nation"
                      className="md:max-w-[350px] w-full placeholder:italic placeholder:text-black600/[0.3] placeholder:leading-[22px] placeholder:font-normal placeholder:text-xs  md:placeholder:text-[15px] focus:outline-none text-[15px] font-medium leading-[22px] text-black600 border border-gray250 focus:border-[#2E1368] rounded-lg py-3 bg-white bg-opacity-[0.25] px-4"
                    />
                    <div style={{ color: "red" }}>
                      <ErrorMessage
                        name="name"
                        component="span"
                        className="error text-[13px] font-medium leanding-[20px] text-red500"
                      />
                    </div>
                  </div> */}
                  <div>
                    <Listbox value={country} onChange={setCountry} className="">
                      {({ open }) => (
                        <>
                          <Listbox.Label
                            htmlFor="email"
                            className="block md:mb-1 text-[13px] font-medium leading-5 text-gray700"
                          >
                            Country
                          </Listbox.Label>
                          <div className="relative mt-1 ">
                            <Listbox.Button className="relative w-full md:max-w-[350px] focus:bg-white/[0.25] text-left focus:outline-none border border-gray250 focus:border-[#2E1368] text-[15px] rounded-lg py-3 bg-white bg-opacity-[0.25] px-4">
                              <span
                                className={`${
                                  country.name === "Country"
                                    ? "italic text-black600/[0.3] leading-[22px] font-normal  "
                                    : " font-medium leading-[22px] text-black600 "
                                }"block truncate "`}
                              >
                                {country.name}
                              </span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronDownIcon
                                  className="h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>

                            <Transition
                              show={open}
                              as={Fragment}
                              leave="transition ease-in duration-100"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Listbox.Options className="absolute selectpalceholde z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {Country.map((person) => (
                                  <Listbox.Option
                                    key={person.id}
                                    className={({ active }) =>
                                      classNames(
                                        active
                                          ? "text-white bg-indigo-600"
                                          : "text-gray-900",
                                        "relative cursor-default select-none py-2 pl-8 pr-4"
                                      )
                                    }
                                    value={person}
                                  >
                                    {({ country, active }) => (
                                      <>
                                        <span
                                          className={classNames(
                                            country
                                              ? "font-semibold"
                                              : "font-normal",
                                            "block truncate"
                                          )}
                                        >
                                          {person.name}
                                        </span>

                                        {country ? (
                                          <span
                                            className={classNames(
                                              active
                                                ? "text-white"
                                                : "text-indigo-600",
                                              "absolute inset-y-0 left-0 flex items-center pl-1.5"
                                            )}
                                          >
                                            <CheckIcon
                                              className="h-5 w-5"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        ) : null}
                                      </>
                                    )}
                                  </Listbox.Option>
                                ))}
                              </Listbox.Options>
                            </Transition>
                          </div>
                        </>
                      )}
                    </Listbox>
                  </div>
                  <div>
                    <Listbox
                      value={selectedCity}
                      onChange={setSelectedCity}
                      className=""
                    >
                      {({ open }) => (
                        <>
                          <Listbox.Label
                            htmlFor="email"
                            className="block md:mb-1 text-[13px] font-medium leading-5 text-gray700"
                          >
                            City
                          </Listbox.Label>
                          <div className="relative mt-1 ">
                            <Listbox.Button className="relative w-full inputbg md:max-w-[350px] focus:bg-white/[0.25] text-left focus:outline-none border border-gray250 focus:border-[#2E1368] text-[15px] rounded-lg py-3 bg-white bg-opacity-[0.25] px-4">
                              <span
                                className={`${
                                  selectedCity.name === "City"
                                    ? "italic text-black600/[0.3] leading-[22px] font-normal  "
                                    : " font-medium leading-[22px] text-black600 "
                                }"block truncate "`}
                              >
                                {selectedCity.name}
                              </span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronDownIcon
                                  className="h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>

                            <Transition
                              show={open}
                              as={Fragment}
                              leave="transition ease-in duration-100"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Listbox.Options className="absolute selectpalceholde z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {City.map((person) => (
                                  <Listbox.Option
                                    key={person.id}
                                    className={({ active }) =>
                                      classNames(
                                        active
                                          ? "text-white bg-indigo-600"
                                          : "text-gray-900",
                                        "relative cursor-default select-none py-2 pl-8 pr-4"
                                      )
                                    }
                                    value={person}
                                  >
                                    {({ selectedCity, active }) => (
                                      <>
                                        <span
                                          className={classNames(
                                            selectedCity
                                              ? "font-semibold"
                                              : "font-normal",
                                            "block truncate"
                                          )}
                                        >
                                          {person.name}
                                        </span>

                                        {selectedCity ? (
                                          <span
                                            className={classNames(
                                              active
                                                ? "text-white"
                                                : "text-indigo-600",
                                              "absolute inset-y-0 left-0 flex items-center pl-1.5"
                                            )}
                                          >
                                            <CheckIcon
                                              className="h-5 w-5"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        ) : null}
                                      </>
                                    )}
                                  </Listbox.Option>
                                ))}
                              </Listbox.Options>
                            </Transition>
                          </div>
                        </>
                      )}
                    </Listbox>
                  </div>
                  <div className="">
                    <label className="block md:mb-1 text-[13px] font-medium leading-5 text-gray700">
                      Date of Birth
                    </label>
                    <div className="relative">
                      <Field
                        id="birth"
                        name="birth"
                        placeholder="DD/MM/YYY"
                        type="date"
                        className="md:max-w-[350px]  dateinput w-full focus:outline-none text-[15px] font-medium leading-[22px] text-black600 border border-gray250 focus:border-[#2E1368] rounded-lg py-3 bg-white bg-opacity-[0.25] px-4"
                      />
                      <div style={{ color: "red" }}>
                        <ErrorMessage
                          name="birth"
                          component="span"
                          className="error text-[13px] font-medium leanding-[20px] text-red500"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <label className="block md:mb-1 text-[13px] font-medium leading-5 text-gray700">
                      Bio
                    </label>
                    <Field
                      id="bio"
                      name="bio"
                      placeholder="Enter your name"
                      type="text"
                      className="md:max-w-[350px] focus:bg-white/[0.25] inputbg w-full placeholder:italic placeholder:text-black600/[0.3] placeholder:leading-[22px] placeholder:font-normal placeholder:text-xs  md:placeholder:text-[15px] focus:outline-none text-[15px] font-medium leading-[22px] text-black600 border border-gray250 focus:border-[#2E1368] rounded-lg py-3 bg-white bg-opacity-[0.25] px-4"
                    />
                    <div style={{ color: "red" }}>
                      <ErrorMessage
                        name="bio"
                        component="span"
                        className="error text-[13px] font-medium leanding-[20px] text-red500"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 sm:mt-8">
                <h3 className="text-[13px] mb-4 font-semibold leading-5 text-gray500">
                  INTERESTS
                </h3>
                <p className="font-medium text-[15px] leading-[22px] text-gray800">
                  BuzzBite will recommend your profile to the Brands based on
                  the interests you have selected. Select multiple interests to
                  get more jobs.
                </p>
                <div className="mt-6 flex flex-wrap gap-3 disable_profile">
                  {interest.map((item, index) => (
                    <button
                      disabled={
                        selectedInterest.length === 2 &&
                        !selectedInterest.includes(item)
                      }
                      key={index}
                      type="button"
                      onClick={() => {
                        handleAddRemoveInterest(item);
                      }}
                      className={`" duration-100 rounded-[6px] border border-black600/[0.35] text-xs md:text-[13px] font-medium leading-[10px] md:leading-5  px-3 py-2.5 md:py-[5px] transition" ${
                        selectedInterest.includes(item)
                          ? "bg-violet600 text-white"
                          : "text-gray200 bg-white "
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
                {selectedInterest.length === 2 ? (
                  <div className="bg-violet150 rounded-lg py-4 px-5 md:py-5 md:px-[33px] mt-3 w-full items-center flex space-x-5 md:space-x-6">
                    <div className="md:w-[41.6px] w-[32px] flex-auto flex-shrink-0">
                      <img
                        src="/assets/icons/alert.svg"
                        className="md:w-[41.6px] md:h-[41.6px] w-[32px] h-[32px]"
                      />
                    </div>
                    <div>
                      <p className=" text-xs leading-[22px] md:text-[15px] font-medium text-gray850 md:leading-[25px]">
                        You have reached your limit on the number of interests
                        you can select. To choose more, please{" "}
                        <Link href="#" className="text-violet600 font-semibold">
                          {" "}
                          upgrade your plan
                        </Link>
                      </p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="mt-6 md:mt-8">
                <h3 className="text-sm md:text-[13px] mb-4 font-semibold leading-5 text-gray500">
                  RESET PASSWORD
                </h3>
                <div className="mt-4">
                  <div className="grid grid-cols-1 gap-x-4 md:gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-2">
                    <div className="">
                      <label className="block md:mb-1 text-[13px] font-medium leading-5 text-gray700">
                        Current Password
                      </label>
                      <Field
                        id="password"
                        name="password"
                        placeholder="Password"
                        type="password"
                        className="md:max-w-[350px] focus:bg-white/[0.25] inputbg w-full placeholder:italic placeholder:text-black600/[0.3] placeholder:leading-[22px] placeholder:font-normal placeholder:text-xs  md:placeholder:text-[15px] focus:outline-none text-[15px] font-medium leading-[22px] text-black600 border border-gray250 focus:border-[#2E1368] rounded-lg py-3 bg-white bg-opacity-[0.25] px-4"
                      />
                      <ErrorMessage
                        name="password"
                        component="span"
                        className="error text-[13px] font-medium leanding-[20px] text-red500"
                      />
                    </div>
                    <div className="">
                      <label className="block md:mb-1 text-[13px] font-medium leading-5 text-gray700">
                        New Password
                      </label>
                      <Field
                        id="NewPassword"
                        name="NewPassword"
                        placeholder="Password"
                        type="password"
                        className="md:max-w-[350px] w-full focus:bg-white/[0.25] placeholder:italic placeholder:text-black600/[0.3] placeholder:leading-[22px] placeholder:font-normal placeholder:text-xs  md:placeholder:text-[15px] focus:outline-none text-[15px] font-medium leading-[22px] text-black600 border border-gray250 focus:border-[#2E1368] rounded-lg py-3 bg-white bg-opacity-[0.25] px-4"
                      />
                      <ErrorMessage
                        name="NewPassword"
                        component="span"
                        className="error text-[13px] font-medium leanding-[20px] text-red500"
                      />
                    </div>
                    <div className="">
                      <label className="block md:mb-1 text-[13px] font-medium leading-5 text-gray700">
                        Confirm New Password
                      </label>
                      <Field
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Password Confirmation"
                        type="password"
                        className="md:max-w-[350px] w-full focus:bg-white/[0.25] placeholder:italic placeholder:text-black600/[0.3] placeholder:leading-[22px] placeholder:font-normal placeholder:text-xs  md:placeholder:text-[15px] focus:outline-none text-[15px] font-medium leading-[22px] text-black600 border border-gray250 focus:border-[#2E1368] rounded-lg py-3 bg-white bg-opacity-[0.25] px-4"
                      />
                      <ErrorMessage
                        name="confirmPassword"
                        component="span"
                        className="error text-[13px] font-medium leanding-[20px] text-red500"
                      />
                    </div>
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
                  onClick={() => setOpenmodal(true)}
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
    </>
  );
};

export default Profile;
