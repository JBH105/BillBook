import React, { useState, Fragment } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import { Listbox, Transition, Dialog } from "@headlessui/react";
import {
  ArrowDownIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import { addTransaction } from "../../../Redux/action/transaction";

const Currency = [
  { id: 0, name: "Currency" },
  { id: 1, name: "INR(Cash)" },
  { id: 2, name: "INR(Bank)" },
  { id: 3, name: "USD" },
  { id: 4, name: "RMB/CNY" },
  { id: 5, name: "Sale" },
  { id: 6, name: "GST" },
  { id: 7, name: "Cering" },
  { id: 8, name: "Purchase" },
];
const Transaction = [
  { id: 0, name: "Transaction Type" },
  { id: 1, name: "Credit" },
  { id: 2, name: "Debit" },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Index() {
  const dispatch = useDispatch();
  const vender = useSelector((state) => state.vender.vender);
  const [country, setCountry] = useState(vender[0]);
  const [transactionType, setTransactionType] = useState(Transaction[0]);
  const [currency, setCurrency] = useState(Currency[0]);

  const initialValues = {
    Quantity: "",
    price: "",
    date: "",
  };
  const validationSchema = Yup.object({
    Quantity: Yup.string().required("Quantity is required!"),
    price: Yup.string().required("Price is required!"),
    date: Yup.string().required("Date is required!"),
  });

  const handleButton = (value) => {
    value.venderName = country.id;
    value.transactionType = transactionType.name;
    value.currency = currency.name;
    value.rate = value.Quantity;
    value.amount = value.price;
    value.transactionDate = value.date;
    dispatch(addTransaction(value));
  };
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
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            enableReinitialize={true}
            onSubmit={(values) => {
              handleButton(values);
            }}
          >
            {(formik) => {
              return (
                <Form className=" max-w-[724px] mt-10 lg:mt-0 flex-auto lg:ml-[75px] pt-10">
                  <div>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-2">
                      <div>
                        <Listbox
                          value={country}
                          onChange={setCountry}
                          className=""
                        >
                          {({ open }) => (
                            <>
                              <Listbox.Label
                                htmlFor="email"
                                className="block md:mb-1 text-[13px] font-medium leading-5 text-gray700"
                              >
                                Vender
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
                                    {country.fullName}
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
                                    {vender.map((person) => (
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
                                              {person.fullName}
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
                      {/* Transaction Type   */}
                      <div>
                        <Listbox
                          value={transactionType}
                          onChange={setTransactionType}
                          className=""
                        >
                          {({ open }) => (
                            <>
                              <Listbox.Label
                                htmlFor="email"
                                className="block md:mb-1 text-[13px] font-medium leading-5 text-gray700"
                              >
                                Transaction Type
                              </Listbox.Label>
                              <div className="relative mt-1 ">
                                <Listbox.Button className="relative w-full md:max-w-[350px] focus:bg-white/[0.25] text-left focus:outline-none border border-gray250 focus:border-[#2E1368] text-[15px] rounded-lg py-3 bg-white bg-opacity-[0.25] px-4">
                                  <span
                                    className={`${
                                      transactionType.name ===
                                      "Transaction Type"
                                        ? "italic text-black600/[0.3] leading-[22px] font-normal  "
                                        : " font-medium leading-[22px] text-black600 "
                                    }"block truncate "`}
                                  >
                                    {transactionType.name}
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
                                    {Transaction.map((person) => (
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

                                            {transactionType ? (
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
                      {/* Currency */}
                      <div>
                        <Listbox
                          value={currency}
                          onChange={setCurrency}
                          className=""
                        >
                          {({ open }) => (
                            <>
                              <Listbox.Label
                                htmlFor="email"
                                className="block md:mb-1 text-[13px] font-medium leading-5 text-gray700"
                              >
                                Currency
                              </Listbox.Label>
                              <div className="relative mt-1 ">
                                <Listbox.Button className="relative w-full md:max-w-[350px] focus:bg-white/[0.25] text-left focus:outline-none border border-gray250 focus:border-[#2E1368] text-[15px] rounded-lg py-3 bg-white bg-opacity-[0.25] px-4">
                                  <span
                                    className={`${
                                      currency.name === "Currency"
                                        ? "italic text-black600/[0.3] leading-[22px] font-normal  "
                                        : " font-medium leading-[22px] text-black600 "
                                    }"block truncate "`}
                                  >
                                    {currency.name}
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
                                    {Currency.map((person) => (
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

                                            {currency ? (
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
                      {/*  Rate(Quantity) */}
                      <div className="">
                        <label className="block md:mb-1 text-[13px] font-medium leading-5 text-gray700">
                          Rate(Quantity)
                        </label>
                        <Field
                          id="Quantity"
                          name="Quantity"
                          type="number"
                          placeholder="example 12"
                          className="md:max-w-[350px] inputbg focus:bg-white/[0.25] focus:bg-white/[0.25] w-full placeholder:italic placeholder:text-black600/[0.3] placeholder:leading-[22px] placeholder:font-normal placeholder:text-xs  md:placeholder:text-[15px] focus:outline-none text-[15px] font-medium leading-[22px] text-black600 border border-gray250 focus:border-[#2E1368] rounded-lg py-3 bg-white bg-opacity-[0.25] px-4"
                        />
                        <div style={{ color: "red" }}>
                          <ErrorMessage
                            name="Quantity"
                            component="span"
                            className="error text-[13px] font-medium leanding-[20px] text-red500"
                          />
                        </div>
                      </div>
                      {/* Final Amount(Price) */}
                      <div className="">
                        <label className="block md:mb-1 text-[13px] font-medium leading-5 text-gray700">
                          Final Amount(Price)
                        </label>
                        <Field
                          id="price"
                          name="price"
                          type="number"
                          placeholder="example 10"
                          className="md:max-w-[350px] inputbg focus:bg-white/[0.25] focus:bg-white/[0.25] w-full placeholder:italic placeholder:text-black600/[0.3] placeholder:leading-[22px] placeholder:font-normal placeholder:text-xs  md:placeholder:text-[15px] focus:outline-none text-[15px] font-medium leading-[22px] text-black600 border border-gray250 focus:border-[#2E1368] rounded-lg py-3 bg-white bg-opacity-[0.25] px-4"
                        />
                        <div style={{ color: "red" }}>
                          <ErrorMessage
                            name="price"
                            component="span"
                            className="error text-[13px] font-medium leanding-[20px] text-red500"
                          />
                        </div>
                      </div>
                      {/* Transaction Date */}
                      <div className="">
                        <label className="block md:mb-1 text-[13px] font-medium leading-5 text-gray700">
                          Transaction Date
                        </label>
                        <div className="relative">
                          <Field
                            id="date"
                            name="date"
                            placeholder="DD/MM/YYY"
                            type="date"
                            className="md:max-w-[350px]  dateinput w-full focus:outline-none text-[15px] font-medium leading-[22px] text-black600 border border-gray250 focus:border-[#2E1368] rounded-lg py-3 bg-white bg-opacity-[0.25] px-4"
                          />
                          <div style={{ color: "red" }}>
                            <ErrorMessage
                              name="date"
                              component="span"
                              className="error text-[13px] font-medium leanding-[20px] text-red500"
                            />
                          </div>
                        </div>
                      </div>
                      {/*  Details */}
                      <div className="">
                        <label className="block md:mb-1 text-[13px] font-medium leading-5 text-gray700">
                          Details
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
                  <div className="space-y-3 sm:space-x-[30px] mt-9 md:mt-[60px]">
                    <button
                      type="submit"
                      disabled={!(formik.isValid && formik.dirty)}
                      className={`${
                        formik.isValid && formik.dirty ? "" : "opacity-[0.3]"
                      } bg-violet600 shadow-blue100  w-full sm:w-auto block sm:inline-block  focus:outline-none rounded-[4px] sm:rounded-lg py-3 px-[30px] font-semibold text-[15px] leading-[22px] text-white  `}
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="text-[15px] w-full sm:w-auto block sm:inline-block border border-violet600 sm:border-none font-semibold text-violet600 sm:text-[#8A8A8A] rounded-[4px]  focus:outline-none py-3 px-[30px] sm:p-0"
                    >
                      Cancel
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </main>
  );
}
