import React, { Fragment, useState, Component, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { randomIntFromInterval } from "../../../util/randomNumber";
import { useDispatch, useSelector } from "react-redux";
import { AllTransaction } from "../../../Redux/action/transaction";


const InfluencerSearch = () => {
  const dispatch = useDispatch();
  const allTransaction = useSelector(
    (state) => state.Transaction.AllTransaction
  );

  const [page, setPage] = useState(1);

  const pageLimit = [];
  var i;
  for (i = 1; i <= allTransaction.total; i++) {
    pageLimit.push(i);
  }

  const handleTransaction = async () => {
    await dispatch(AllTransaction(page));
  };

  useEffect(() => {
    handleTransaction();
  }, [page]);
  return (
    <>
      <main className="bg-main-bg px-4 sm:px-6 lg:px-[60px]">
        <div className="py-6">
          <div className="mt-6 bg-white shadow-dark20 pt-[18px] px-[30px] pb-[22px] rounded-[15px]">
            <div className="md:flex justify-between">
              <div className="flex items-center">
                <h2 className="text-black500  font-semibold text-[17px] leading-[26px]">
                  Transaction List
                </h2>
              </div>
              <div></div>
            </div>

            <div className="mt-2 flex flex-col">
              <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className=" inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden ">
                    <table className="min-w-full ">
                      <thead className="bg-white">
                        <tr>
                          <th
                            scope="col"
                            className="px-3 py-[9px]  text-left text-[15px] font-semibold text-violet600"
                          >
                            Vender Name
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-[9px]  text-left text-[15px] font-semibold text-violet600"
                          >
                            Currency
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-[9px]   text-left text-[15px] font-semibold text-violet600"
                          >
                            Rate(Quantity)
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-[9px]   text-left text-[15px] font-semibold text-violet600"
                          >
                            Amount(Price)
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-[9px]   text-left text-[15px] font-semibold text-violet600"
                          >
                            Total Amount
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-[9px]   text-center text-[15px] font-semibold text-violet600"
                          >
                            Status
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-[9px]   text-end text-[15px] font-semibold text-violet600"
                          >
                            Date
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-[9px]   text-end text-[15px] font-semibold text-violet600"
                          >
                            Details
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {allTransaction.data &&
                          allTransaction.data.map((person, personIdx) => (
                            <tr
                              key={person.email}
                              className={`${
                                personIdx % 2 === 1
                                  ? undefined
                                  : "bg-[#D9D9D9] bg-opacity-[0.2]"
                              } influencertable`}
                            >
                              <td className="whitespace-nowrap py-3 px-3 cursor-pointer text-sm ">
                                <div className="flex items-center">
                                  <div className="h-10 w-10 flex-shrink-0">
                                    <div
                                      className="text-[20px] rounded-full text-center border border-transparent grid items-center h-full w-full"
                                      style={{
                                        background: randomIntFromInterval(0, 9),
                                        color: "white",
                                      }}
                                    >
                                      {person?.vender?.fullName
                                        .match(/\b(\w)/g)
                                        .slice(0, 2)}
                                    </div>
                                  </div>
                                  <div className="ml-2">
                                    <div className="font-semibold text-[13px] leading-5  text-black500">
                                      {person.vender?.fullName}
                                    </div>
                                    <div className="text-black400 text-[10px] leading-[15px] flex items-center font-medium">
                                      <img
                                        src="/assets/icons/location.svg"
                                        className="mr-1"
                                      />{" "}
                                      <span>{person?.vender?.phoneNumber}</span>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="whitespace-nowrap py-3 px-3 text-sm  font-medium text-gray-900 ">
                                <div className="flex space-x-[7px]">
                                  <div className="">{person.currency}</div>
                                </div>
                              </td>
                              <td className="whitespace-nowrap px-3 py-3 leading-5 font-medium  text-sm font-medium text-gray-900">
                                <div className=" ">{person.rate}</div>
                              </td>
                              <td className="whitespace-nowrap px-3 py-3 leading-5 font-medium  text-xs font-medium text-gray-900">
                                {person.amount}
                              </td>
                              <td className="relative min-w-[190px] whitespace-wordwrap py-3 px-3 text-left text-[13px] leading-5 font-medium text-sm text-gray-900 ">
                                <span className="">
                                  {person.rate * person.amount}
                                </span>
                              </td>
                              <td className="whitespace-nowrap min-w-[210px] text-center px-3 py-3 text-sm text-gray-500">
                                <span
                                  className={`${
                                    person.transactionType === "Credit"
                                      ? " bg-green100 text-green600"
                                      : person.transactionType === "Debit"
                                      ? " bg-[#FFEFDB] text-[#FF8B00]"
                                      : ""
                                  } text-black400 px-[5px] py-[3px] rounded font-medium leading-[15px] text-[13px] text-center`}
                                >
                                  {person.transactionType}
                                </span>
                              </td>
                              <td className="whitespace-nowrap text-sm text-gray-500">
                                <div className="flex justify-center text-center">
                                  {person.transactionDate}
                                </div>
                              </td>
                              <td></td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* Pagination */}
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
                            item === allTransaction.current
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
            {/* <div className="flex justify-end items-center pt-5">
              <div className="flex items-center space-x-[19px]">
                <button className="bg-[#CECDD066] flex items-center justify-center rounded-[6px] w-[28.38px] h-[28.38px]">
                  <img src="/assets/icons/left-gray.svg" />
                </button>
                <button className="bg-violet600 rounded-[6px] flex items-center justify-center text-white ring-1 ring-purple100 w-[24.75px] h-[24.75px]  text-[13px] font-semibold leading-5">
                  1
                </button>
                <button className="bg-white text-violet600 hover:bg-violet600 rounded-[6px] flex items-center justify-center hover:text-white ring-1 ring-purple100 w-[24.75px] h-[24.75px]  text-[13px] font-semibold leading-5">
                  2
                </button>
                <button className="bg-white flex text-violet600 hover:bg-violet600 rounded-[6px] flex items-center relative justify-center hover:text-white ring-1 ring-purple100 w-[24.75px] h-[24.75px]  text-[13px] font-semibold leading-5">
                  <span className="flex items-center absolute top-[7px] tracking-[1px]">
                    ...
                  </span>
                  <img
                    src="/assets/icons/select.svg"
                    className="absolute bottom-0 right-0"
                  />
                </button>
                <button className="bg-white text-violet600 hover:bg-violet600 rounded-[6px] flex items-center justify-center hover:text-white ring-1 ring-purple100 w-[24.75px] h-[24.75px]  text-[13px] font-semibold leading-5">
                  6
                </button>

                <button className="bg-[#CECDD066] flex items-center justify-center rounded-[6px] w-[28.38px] h-[28.38px]">
                  <img src="/assets/icons/right-gray.svg" />
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default InfluencerSearch;
