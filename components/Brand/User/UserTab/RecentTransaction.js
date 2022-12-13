import React, { Fragment, useRef, useState } from "react";
import { Dialog, Listbox, Transition } from "@headlessui/react";
import CurrencyInput from "react-currency-input-field";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const publishingOptions = [
  {
    title: "October, 2022",
    current: true,
  },
  {
    title: "September, 2022",
    current: true,
  },
  {
    title: "August, 2022",
    current: true,
  },
  {
    title: "July, 2022",
    current: false,
  },
  {
    title: "June, 2022",
    current: false,
  },
  {
    title: "May, 2022",
    current: false,
  },
  {
    title: "April, 2022",
    current: false,
  },
  {
    title: "March, 2022",
    current: false,
  },
  {
    title: "February, 2022",
    current: false,
  },
  {
    title: "January, 2022",
    current: false,
  },
  {
    title: "Previous Years",
    current: false,
  },
];
const people = [
  {
    date: "June 30, 2022",
    type: "Wallet Top up",
    amount: "340,029",
    id: "340,029",
    reference: "340,029",
    status: "Paid",
  },
  {
    date: "June 29, 2022",
    type: "Influencer Payment",
    amount: "340,029",
    id: "340,029",
    reference: "340,029",
    status: "Pending",
  },
  {
    date: "June 28, 2022",
    type: "Influencer Payment",
    amount: "340,029",
    id: "340,029",
    reference: "340,029",
    status: "Paid",
  },
  {
    date: "June 27, 2022",
    type: "Influencer Payment",
    amount: "340,029",
    id: "340,029",
    reference: "340,029",
    status: "Paid",
  },
  {
    date: "June 26, 2022",
    type: "Wallet  Top up",
    amount: "340,029",
    id: "340,029",
    reference: "340,029",
    status: "Paid",
  },
  {
    date: "June 25, 2022",
    type: "Wallet Refund",
    amount: "340,029",
    id: "340,029",
    reference: "340,029",
    status: "Paid",
  },
  {
    date: "June 24, 2022",
    type: "Wallet Top up",
    amount: "340,029",
    id: "340,029",
    reference: "340,029",
    status: "Paid",
  },
  {
    date: "June 23, 2022",
    type: "Wallet Top up",
    amount: "340,029",
    id: "340,029",
    reference: "340,029",
    status: "Paid",
  },
  {
    date: "June 22, 2022",
    type: "Wallet Refund",
    amount: "340,029",
    id: "340,029",
    reference: "340,029",
    status: "Paid",
  },
  {
    date: "June 21, 2022",
    type: "Influencer Payment",
    amount: "340,029",
    id: "340,029",
    reference: "340,029",
    status: "Paid",
  },

  // More people...
];
const topup = [
  { money: "100000", offer: "Get 5% Extra marketing units" },
  { money: "300000", offer: "Get 5% Extra marketing units" },
  { money: "500000", offer: "Get 5% Extra marketing units" },
  { money: "700000", offer: "Get 5% Extra marketing units" },
  { money: "1000000", offer: "Get 5% Extra marketing units" },
  { money: "Other" },
];
const RecentTransaction = () => {
  // const [topup , setTopup] = useState([
  //     { money: "100,000", offer: "Get 5% Extra marketing units" },
  //     { money: "300,000", offer: "Get 5% Extra marketing units" },
  //     { money: "500,000", offer: "Get 5% Extra marketing units" },
  //     { money: "700,000", offer: "Get 5% Extra marketing units" },
  //     { money: "1,000,000", offer: "Get 5% Extra marketing units" },
  //     { money: "Other" },
  // ])
  // const [amount , setAmount] = useState();
  // const[charges ,  setCharges] = useState("2000");
  const [selected, setSelected] = useState(publishingOptions[0]);
  const [open, setOpen] = useState(false);
  const [selectTopup, setSelectTopup] = useState();
  //   const [inputvalue, setInputValue] = useState();

  //   const [order, setOrder] = useState(false);
  //   const [topupsuccess, setTopupSuccess] = useState(false);
  //   const cancelButtonRef = useRef(null);
  //   const total =inputvalue ? parseFloat(inputvalue) + parseFloat(charges) : parseFloat(amount) + parseFloat(charges);

  const [inputvalue, setInputValue] = useState();
  const totalInputValue = parseInt(inputvalue).toLocaleString();

  const [order, setOrder] = useState(false);
  const [topupsuccess, setTopupSuccess] = useState(false);
  const cancelButtonRef = useRef(null);

  const [amount, setAmount] = useState();
  const totalAmount = parseInt(amount).toLocaleString();

  const [charges, setCharges] = useState(2000);
  const totalCharge = parseInt(charges).toLocaleString();

  const total = inputvalue
    ? parseFloat(inputvalue) + parseFloat(charges)
    : parseFloat(amount) + parseFloat(charges);
  const finalTotal = total.toLocaleString();
  return (
    <>
      <main className="bg-main-bg px-4 sm:px-6 lg:px-[60px] custom-scroll overflow-y-auto">
        <div className="py-6">
          <div className="mt-6 bg-white shadow-dark20 pt-[18px] px-[30px] pb-[22px] rounded-[15px]">
            <h2 className="text-black600 text-[20px] leading-[30px] font-semibold ntialiased ">
              Recent Transaction History
            </h2>
            <div className="sm:flex block gap-[20px] my-[28px]">
              <div className="flex w-full bg-white">
                <input
                  placeholder="Search here"
                  className="w-full py-[8px] bg-white text-black500 rounded-[4px_0px_0px_4px] focus:outline-none border-black200/[0.5] border text-[13px] font-normal leading-5  pl-[16px] placeholde:text-black200 placeholder:text-[13px]"
                />
                <button className="bg-violet600 sm:text-[15px] text-[12px] text-white rounded-[0px_4px_4px_0px]  pl-4 pr-[15px] flex items-center justify-center font-medium">
                  <img
                    className="sm:mr-[10px] mr-[6px]"
                    src="/assets/icons/search_icon.svg"
                    alt="search_icon"
                  />{" "}
                  Search
                </button>
              </div>
              <div className="">
                <Listbox value={selected} onChange={setSelected}>
                  {({ open }) => (
                    <>
                      <div className="relative text-end sm:text-start whitespace-nowrap sm:mt-0 mt-[20px]">
                        <Listbox.Button className="inline-flex border-[1.7px] border-violet600  rounded bg-white shadow-dark10">
                          <div className="inline-flex py-[6.5px] px-[16px] w-full justify-between">
                            <div className="inline-flex items-center rounded-l-md border border-transparent bg-white">
                              <span className="text-black200 text-[15px] leading-[22px] font-medium">
                                Date:
                              </span>
                              <p className="ml-1  text-[15px] leading-[22px] font-medium text-violet600">
                                {selected.title}
                              </p>
                            </div>
                            <div className=" pl-2 flex items-center rounded-r-md text-sm font-medium text-white focus:outline-none ">
                              <img
                                src="/assets/icons/Arrow - Down 2.svg"
                                className=" text-white W-[38px] max-w-[7px]"
                                aria-hidden="true"
                                alt="arrow"
                              />
                            </div>
                          </div>
                        </Listbox.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute space-y-2.5 right-0 px-[9px] py-3 z-10 mt-1.5 w-[180px] origin-top-right overflow-hidden rounded-md bg-white shadow-dark150 focus:outline-none">
                            {publishingOptions.map((option) => (
                              <Listbox.Option
                                key={option.title}
                                className={({ active }) =>
                                  classNames(
                                    active
                                      ? "text-white bg-violet600"
                                      : "text-black500",
                                    "cursor-default font-medium select-none rounded-lg px-5 py-1.5 text-sm"
                                  )
                                }
                                value={option}
                              >
                                {({ selected, active }) => (
                                  <div className="flex flex-col">
                                    <div className="flex justify-between">
                                      <p
                                        className={
                                          selected
                                            ? "font-semibold"
                                            : "font-normal"
                                        }
                                      >
                                        {option.title}
                                      </p>
                                      {selected ? (
                                        <span
                                          className={
                                            active
                                              ? "text-white"
                                              : "text-indigo-500"
                                          }
                                        ></span>
                                      ) : null}
                                    </div>
                                  </div>
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
            </div>
            <div>
              <div className="flex flex-col">
                <div className="overflow-x-auto">
                  <div className="inline-block min-w-full  align-middle ">
                    <div className="overflow-hidden ">
                      <table className="min-w-full ">
                        <thead>
                          <tr>
                            <th
                              scope="col"
                              className="py-4 pl-7 whitespace-nowrap pr-3 text-left text-[15px] font-semibold text-violet600 sm:pl-6"
                            >
                              Date
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 whitespace-nowrap text-left text-[15px] font-semibold text-violet600"
                            >
                              Transaction Type
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 whitespace-nowrap text-left text-[15px] font-semibold text-violet600"
                            >
                              Amount
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 whitespace-nowrap text-left text-[15px] font-semibold text-violet600"
                            >
                              Campaign ID
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 whitespace-nowrap text-left text-[15px] font-semibold text-violet600"
                            >
                              Reference
                            </th>
                            <th
                              scope="col"
                              className="px-3 text-end whitespace-nowrap py-3.5 text-left text-[15px] font-semibold text-violet600"
                            >
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          {people.map((person, personIdx) => (
                            <tr
                              key={personIdx}
                              className={
                                personIdx % 2 === 1
                                  ? undefined
                                  : "bg-[#D9D9D9]/[0.2]"
                              }
                            >
                              <td className="whitespace-nowrap py-3.5 pl-7 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                <p className="text-black400 font-medium leading-5 text-[13px]">
                                  {person.date}
                                </p>
                              </td>
                              <td className="whitespace-nowrap px-3 py-3.5 text-sm text-gray-500">
                                <p className="text-black400 font-medium leading-5 text-[13px]">
                                  {person.type}
                                </p>
                              </td>
                              <td className="whitespace-nowrap px-3 py-3.5 text-sm text-gray-500">
                                <p className="text-black400 font-medium leading-5 text-[13px]">
                                  {person.amount}
                                </p>
                              </td>
                              <td className="whitespace-nowrap px-3 py-3.5 text-sm text-gray-500">
                                <p className="text-black400 font-medium leading-5 text-[13px]">
                                  {person.id}
                                </p>
                              </td>
                              <td className="relative whitespace-nowrap py-3.5 pl-3 pr-4 text-sm font-medium sm:pr-6">
                                <p className="text-black400 font-medium leading-5 text-[13px]">
                                  {person.reference}
                                </p>
                              </td>
                              <td className="relative text-end whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-6 ">
                                <span
                                  className={`${
                                    person.status === "Paid"
                                      ? " bg-green100 text-green600"
                                      : person.status === "Pending"
                                      ? " bg-[#FFEFDB] text-[#FF8B00]"
                                      : ""
                                  } text-black400 px-[5px] py-[3px] rounded font-medium leading-[15px] text-[10px]`}
                                >
                                  {person.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
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
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center lg:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform  rounded-lg bg-white px-4 md:pt-10 md:pb-[35px] text-left shadow-xl transition-all sm:w-full sm:max-w-[676px] sm:p-7 sm:pb-[35px]">
                  <button
                    onClick={() => setOpen(false)}
                    className="absolute -top-[22px] outline-none ring-0 -right-[22px]"
                  >
                    <img
                      src="/assets/icons/closebtn.svg"
                      className="w-[47px] h-[47px]"
                    />
                  </button>

                  <div>
                    <h2 className="text-black500 leading-[26px] text-[17px] font-semibold">
                      Billing
                    </h2>
                    <div className="mt-6">
                      <h3 className="text-black400 leading-[26px] text-[17px] font-semibold">
                        Account Top Up
                      </h3>
                      <div className="grid gap-5 sm:grid-cols-2 mt-3">
                        {topup.map((item, index) => (
                          <div
                            onClick={() => {
                              setSelectTopup(index);
                              setAmount(item.money);
                            }}
                            className={`${
                              selectTopup === index
                                ? "bg-blue100 border-violet600"
                                : "bg-white border-[#eeeeee]"
                            }  grid border rounded border  shadow-dark300 pt-3 pb-[9px] px-5`}
                          >
                            <div className="mb-1 flex justify-between">
                              <h2 className="text-black400 text-[15px] font-semibold leading-[22px]">
                                {index === 5
                                  ? `${item.money}`
                                  : `₦${
                                      item.money !== "Other"
                                        ? parseInt(item.money).toLocaleString()
                                        : item.money
                                    }`}
                              </h2>

                              <input
                                checked={selectTopup === index}
                                type="checkbox"
                                className="relative custom-checkbox h-[7px] w-[7px] bg-white text-[#090415] custom_checked rounded-[1.8px] accent-violet600 border-gray-300 text-violet600 focus:outline-none focus:ring-0 "
                              />
                            </div>
                            {item.offer ? (
                              <span className="text-black400 text-medium text-[10px] leading-[15px]">
                                {item.offer}
                              </span>
                            ) : (
                              <></>
                            )}
                          </div>
                        ))}
                      </div>
                      {selectTopup === 5 ? (
                        <div className="mt-6 border-t border-[#0904151F] ">
                          <div className="mt-5">
                            <lable className="text-gray700 text-[15px] font-medium leading-[22px] ">
                              Custom Amount
                            </lable>
                            <CurrencyInput
                              prefix="₦"
                              className="px-4 py-[15px] mt-1 focus:outline-none border rounded-lg border-gray250 placeholder:text-xs placeholder:text-gray250 placeholder:font-normal text-xs text-black500 w-full"
                              id="input-example"
                              name="input-name"
                              placeholder="Enter your amount"
                              decimalsLimit={2}
                              onValueChange={(value, name) =>
                                setInputValue(value)
                              }
                            />
                            <span className="text-[13px] font-medium leading-5 text-violet600">
                              Minimum custom amount is{" "}
                              <span className="font-bold">₦100,000</span>
                            </span>
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>

                    <div className="mt-5 sm:mt-9 flex justify-center ">
                      <button
                        type="button"
                        className="disabled:opacity-50 rounded-lg border border-transparent bg-violet600 py-3 px-[46px] text-[15px] font-semibold text-white shadow-sm focus:outline-none focus:ring-0 "
                        onClick={() => {
                          setOrder(true);
                          setOpen(false);
                        }}
                        disabled={selectTopup === undefined}
                        //   disabled={!selectTopup }
                      >
                        Proceed
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <Transition.Root show={order} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOrder}
        >
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
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center lg:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform  rounded-lg bg-white px-4 md:pt-10 md:pb-[35px] text-left shadow-xl transition-all sm:w-full sm:max-w-[676px] sm:p-7 sm:pb-[35px]">
                  <button
                    onClick={() => setOrder(false)}
                    className="absolute -top-[22px] outline-none ring-0 -right-[22px]"
                  >
                    <img
                      src="/assets/icons/closebtn.svg"
                      className="w-[47px] h-[47px]"
                    />
                  </button>
                  <div>
                    <h2 className="text-black500 text-[17px] leading-[26px] font-semibold">
                      Order Summary
                    </h2>
                    <div className="flex items-center justify-between mt-[35px]">
                      <span className="text-black400 text-[15px] leading-[22px] font-medium">
                        Subtotal
                      </span>
                      <span className="text-black400 text-[20px] font-semibold leading-[30px]">
                       ₦
                        {inputvalue ? totalInputValue : totalAmount}
                      </span>
                    </div>
                    <div className="flex items-center justify-between my-5 ">
                      <span className="text-black400 text-[15px] leading-[22px] font-medium">
                        Charges
                      </span>
                      <span className="text-black400 text-[20px] font-semibold leading-[30px]">
                        ₦{totalCharge}
                      </span>
                    </div>
                    <div className="border-t flex items-center justify-between  border-[#0904151F] pt-5">
                      <span className="text-black400 text-[20px] font-medium leading-[30px]">
                        Total
                      </span>
                      <span className="text-black500 font-semibold leading-[30px] text-[24px]">
                        ₦{finalTotal}
                      </span>
                    </div>
                    <div className="text-end">
                      <span className="text-black400 text-[13px] leading-5 font-medium">
                        No additional fees and taxes may apply
                      </span>
                    </div>
                    <div className="mt-8">
                      <span className="block text-[17px] text-black400 font-semibold leading-[26px] ">
                        Accepted Payment Methods
                      </span>
                      <div className="flex items-center space-x-4 mt-2.5">
                        <div>
                          <img src="/assets/icons/paypal.svg" />
                        </div>
                        <div>
                          <img src="/assets/icons/visa.svg" />
                        </div>

                        <div>
                          <img src="/assets/icons/mastercard.svg" />
                        </div>
                        <div>
                          <img src="/assets/icons/logos_jcb.svg" />
                        </div>
                        <div>
                          <img src="/assets/icons/discover.svg" />
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-12 flex justify-center ">
                      <button
                        type="button"
                        className=" rounded-lg border border-transparent bg-violet600 py-3 px-[46px] text-[15px] font-semibold text-white shadow-sm focus:outline-none focus:ring-0 "
                        onClick={() => {
                          setOrder(false);
                          setTopupSuccess(true);
                        }}
                      >
                        Pay Now
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <Transition.Root show={topupsuccess} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setTopupSuccess}
        >
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
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center lg:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform  rounded-lg bg-white px-4 md:pt-10 md:pb-[35px] text-left shadow-xl transition-all sm:w-full sm:max-w-[521px] sm:p-7 sm:pb-[35px]">
                  <div className="text-center ">
                    <img
                      src="/assets/icons/Coins-pana 1.svg"
                      className="mx-auto"
                    />
                    <h2 className="text-gray850 text-[17px] leading-[26px] mt-3 mb-4 font-semibold">
                      Top Up Success
                    </h2>
                    <span className="text-[#090415A6] text-[15px] leading-[22px] font-medium">
                      Your top up has been successfully done.
                    </span>
                    <span className="block mt-3 text-green600 text-[20px] font-semibold leading-[30px]">
                      ₦{total}
                    </span>
                    <div className="flex flex-col justify-center">
                      <div>
                        <button
                          type="button"
                          className="block mx-auto rounded-lg mt-4 border border-transparent bg-violet600 py-3 px-[46px] text-[15px] font-semibold text-white shadow-sm focus:outline-none focus:ring-0 "
                          onClick={() => setTopupSuccess(false)}
                        >
                          Continue
                        </button>
                      </div>
                      <div>
                        <button
                          onClick={() => {
                            setOpen(true);
                            setTopupSuccess(false);
                          }}
                          className="block mx-auto mt-3 text-violet600 text-[15px] leading-[22px] font-medium focus:outline-none focus:ring-0 "
                        >
                          Top up more money
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root> */}
    </>
  );
};

export default RecentTransaction;
