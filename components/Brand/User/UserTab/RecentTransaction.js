import React, { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Listbox, Transition } from "@headlessui/react";
import CurrencyInput from "react-currency-input-field";
import { useDispatch, useSelector } from "react-redux";
import { VenderTransaction } from "../../../../Redux/action/transaction";

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

const RecentTransaction = ({ vender, page, setPage }) => {
  const transaction = useSelector(
    (state) => state.Transaction.VenderTransaction
  );
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(publishingOptions[0]);
  const [inputvalue, setInputValue] = useState();

  const [amount, setAmount] = useState();
  const [charges, setCharges] = useState(2000);
  const totalCharge = parseInt(charges).toLocaleString();
  const total = inputvalue
    ? parseFloat(inputvalue) + parseFloat(charges)
    : parseFloat(amount) + parseFloat(charges);
  const finalTotal = total.toLocaleString();

  // useEffect(() => {
  //   dispatch(VenderTransaction({ id: vender.id, page: page }));
  // }, [page]);

  const pageLimit = [];
  var i;
  for (i = 1; i <= transaction.total; i++) {
    pageLimit.push(i);
  }

  return (
    <>
      <main className="bg-main-bg h-full px-4 sm:px-6 lg:px-[60px] custom-scroll overflow-y-auto">
        {transaction.data.length ? (
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
                                Transaction currency
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 whitespace-nowrap text-left text-[15px] font-semibold text-violet600"
                              >
                                Quantity
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 whitespace-nowrap text-left text-[15px] font-semibold text-violet600"
                              >
                                Rate
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 whitespace-nowrap text-left text-[15px] font-semibold text-violet600"
                              >
                                Amount
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
                            {transaction.data &&
                              transaction?.data.map((person, personIdx) => (
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
                                      {person.transactionDate}
                                    </p>
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-3.5 text-sm text-gray-500">
                                    <p className="text-black400 font-medium leading-5 text-[13px]">
                                      {person.currency}
                                    </p>
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-3.5 text-sm text-gray-500">
                                    <p className="text-black400 font-medium leading-5 text-[13px]">
                                      {person.amount}
                                    </p>
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-3.5 text-sm text-gray-500">
                                    <p className="text-black400 font-medium leading-5 text-[13px]">
                                      {person.rate}
                                    </p>
                                  </td>
                                  <td className="relative whitespace-nowrap py-3.5 pl-3 pr-4 text-sm font-medium sm:pr-6">
                                    <p className="text-black400 font-medium leading-5 text-[13px]">
                                      {person.rate * person.amount}
                                    </p>
                                  </td>
                                  <td className="relative text-end whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-6 ">
                                    <span
                                      className={`${
                                        person.transactionType === "Credit"
                                          ? " bg-green100 text-green600"
                                          : person.transactionType === "Debit"
                                          ? " bg-[#FFEFDB] text-[#FF8B00]"
                                          : ""
                                      } text-black400 px-[5px] py-[3px] rounded font-medium leading-[15px] text-[10px]`}
                                    >
                                      {person.transactionType}
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
              <div className="flex justify-end items-center pt-5">
                <div className="flex items-center space-x-[19px]">
                  <button className="bg-[#CECDD066] flex items-center justify-center rounded-[6px] w-[28.38px] h-[28.38px]">
                    <img src="/assets/icons/left-gray.svg" />
                  </button>
                  {pageLimit &&
                    pageLimit.map((item, index) => {
                      return (
                        <div>
                          <button
                            // className="bg-violet600 rounded-[6px] flex items-center justify-center text-white ring-1 ring-purple100 w-[24.75px] h-[24.75px]  text-[13px] font-semibold leading-5"
                            // bg-white text-violet600 hover:bg-violet600   hover:text-white ring-1

                            className={
                              item === transaction.current
                                ? "bg-violet600 rounded-[6px] flex items-center justify-center text-white ring-1 ring-purple100 w-[24.75px] h-[24.75px]  text-[13px] font-semibold leading-5"
                                : "bg-white text-violet600 hover:bg-violet600 rounded-[6px] flex items-center justify-center hover:text-white ring-1 ring-purple100 w-[24.75px] h-[24.75px]  text-[13px] font-semibold leading-5"
                            }
                            onClick={() => setPage(item)}
                          >
                            {item}
                          </button>
                        </div>
                      );
                    })}
                  <button className="bg-[#CECDD066] flex items-center justify-center rounded-[6px] w-[28.38px] h-[28.38px]">
                    <img src="/assets/icons/right-gray.svg" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex h-full justify-center ">
            <img src="/assets/datanotfound.svg" />
          </div>
        )}
      </main>
    </>
  );
};

export default RecentTransaction;
