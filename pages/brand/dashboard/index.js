import React, { useState, Fragment, useRef, useEffect } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import {
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AllVender } from "../../../Redux/action/vender";
import { randomIntFromInterval } from "../../../util/randomNumber";
import { AllTransaction } from "../../../Redux/action/transaction";
const people = [
  {
    id: 1,
    img: "/assets/images/tableimg-1.png",
    name: "Pepsi Q4 Awareness",
    bar: "50",
    spent: "₦134,000",
  },
  {
    id: 2,
    img: "/assets/images/tableimg-2.png",
    name: "Rubicon New Flavour",
    bar: "75",
    spent: "₦247,430",
  },
  {
    id: 3,
    img: "/assets/images/tableimg-3.png",
    name: "Fanta - Back to School",
    bar: "25",
    spent: "₦81,300",
  },
  {
    id: 4,
    img: "/assets/images/tableimg-4.png",
    name: "Fan Love Q3 2022",
    bar: "40",
    spent: "₦145,392",
  },

  // More people...
];
const stats = [
  {
    id: 1,
    name: "Budget Spent",
    stat: "₦250,827",
    icon: "/assets/icons/spent.svg",
    change: "+5.50%",
    count: "",
    color: "#5B26CF",
  },
  {
    id: 2,
    name: "Impressions",
    stat: "67,293",
    icon: "/assets/icons/see.svg",
    change: "+5.50%",
    count: "",
    color: "#DE7C32",
  },
  {
    id: 3,
    name: "Engagements",
    stat: "14.5% ",
    icon: "/assets/icons/like.svg",
    change: "+5.50%",
    count: "346",
    color: "#D82594",
  },
  {
    id: 3,
    name: "Conversions",
    stat: "32%",
    icon: "/assets/icons/transfer.svg",
    change: "+5.50%",
    count: "346",
    color: "#4FB6F0",
  },
];
const data = {
  labels: ["test", "test", "test", "test", "test", "test", "test"],
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Dashboard = () => {
  const dispatch = useDispatch();
  const vender = useSelector((state) => state.vender.vender);
  const allTransaction = useSelector(
    (state) => state.Transaction.AllTransaction
  );
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  const Handle = async () => {
    await dispatch(AllVender());
    await dispatch(AllTransaction(1));
  };

  useEffect(() => {
    Handle();
  }, []);
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
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
                <Dialog.Panel className="relative transform  rounded-lg bg-white p-4 md:pt-[69px] md:pb-[82px] text-left shadow-xl transition-all sm:w-full sm:max-w-[676px] sm:p-6">
                  <div className="max-w-[426px] mx-auto">
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
                      <div className="mx-auto flex  items-center justify-center ">
                        <img src="/assets/icons/Leader-amico 1.svg" />
                      </div>
                      <div className="mt-3 text-center sm:mt-[50px]">
                        <h2 className="text-[17px] font-semibold leading-[26px] text-dark900">
                          Congratulation, Patrick!
                        </h2>
                        <div className="mt-4">
                          <p className="text-[15px] text-medium text-gray800">
                            You have completed your onboarding and are now ready
                            to start earning an income from your social media.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-9 flex ">
                      <button
                        type="button"
                        className="flex w-full justify-center rounded border border-transparent bg-violet600 py-3 px-[30px] text-[15px] font-semibold text-white shadow-sm  focus:outline-none focus:ring-0 "
                        onClick={() => setOpen(false)}
                      >
                        Get Started{" "}
                        <img
                          src="/assets/icons/arrow-right-white.svg"
                          className="ml-2.5"
                        />
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <main className="bg-main-bg px-4 sm:px-6 lg:px-[60px]">
        <div className="py-6">
          <div className="mx-auto flex  justify-between ">
            <div>
              <h1 className="text-xl mb-1 font-semibold text-gray200">
                Dashboard
              </h1>
              <span className="font-medium text-[15px] text-black400 leading-[22px]">
                Here is what’s happening with your campaigns today.
              </span>
            </div>
          </div>
          <div className="mx-auto mt-[17px]   ">
            <div className="mb-[27px]">
              <dl className="mt-5 grid grid-cols-1 gap-[23px] sm:grid-cols-4">
                {stats.map((item) => (
                  <div
                    key={item.name}
                    className="overflow-hidden rounded-[15px] bg-white px-4 py-5 shadow-dark80 sm:px-5 sm:pt-[18px] sm:pb-[16px]"
                  >
                    <div className="flex items-center mb-3">
                      <img src={item.icon} />
                      <h4 className="truncate text-[15px] ml-3  font-semibold text-black400">
                        {item.name}
                      </h4>
                    </div>
                    <span
                      className={`text-xl font-semibold tracking-tight`}
                      style={{ color: item.color }}
                    >
                      {item.stat}
                    </span>
                    <div className="mt-[7px] flex items-center">
                      <span
                        style={{ color: item.color }}
                        className="text-medium text-[10px]"
                      >
                        {item.count}
                      </span>
                      <div className="flex items-center ml-[17px]">
                        <img
                          src="/assets/icons/graph.svg"
                          className="mr-[3px]"
                        />
                        <span
                          className={classNames(
                            item.count ? "text-[10px]" : "  text-xs",
                            "text-green600 font-medium"
                          )}
                        >
                          {item.change}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </dl>
            </div>

            {/* <Line data={data} /> */}
          </div>
          <div>
            <div className="mb-[27px] grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
              <div className="grid grid-cols-1 gap-4 lg:col-span-2">
                <div className="bg-white shadow-dark20 py-5 px-[31px] rounded-[15px]">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="text-black500 font-semibold text-xl leading-[30px]">
                        Overall Statistics
                      </h2>
                    </div>
                    <div>
                      <button className="text-[15px] flex font-medium shadow-dark10 leading-[22px] text-violet600 rounded-[6px] bg-white px-[15px] py-[3px]">
                        <img
                          src="/assets/icons/directbox-receive.svg"
                          className="mr-3"
                        />{" "}
                        Export
                      </button>
                    </div>
                  </div>
                  <div>
                    <Line data={data} />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white shadow-dark20 py-5 px-[31px] rounded-[15px]">
                  <div>
                    <h2 className="text-black500 font-semibold text-xl leading-[30px]">
                      Review Content
                    </h2>
                  </div>
                </div>
                {/* Vender */}
                <div className="bg-white shadow-dark20 py-5 px-[31px] rounded-[15px]">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="text-black500 font-semibold text-xl leading-[30px]">
                        Influencers Request
                      </h2>
                    </div>
                    <div>
                      <Link href="/brand/user">
                        <button className="text-[17px]  font-medium leading-[26px] text-violet600">
                          View All
                        </button>
                      </Link>
                    </div>
                  </div>
                  {vender &&
                    vender.slice(0, 5).map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="flex justify-between mt-[13px]"
                        >
                          <div className="flex">
                            <div className="bg-white w-[42px] h-[42px] rounded-full flex items-center justify-center border border-[#F2EDFF]">
                              <div
                                className="text-[20px] rounded-full text-center border border-transparent grid items-center h-full w-full"
                                style={{
                                  background: randomIntFromInterval(0, 9),
                                  color: "white",
                                }}
                              >
                                {item?.fullName.match(/\b(\w)/g).slice(0, 2)}
                              </div>
                            </div>
                            <div className="ml-2.5">
                              <h4 className="text-black500 font-semibold text-[17px] leading-[26px]">
                                {item.fullName}.
                              </h4>
                              <span className="text-black300 text-[13px] leading-[20px] font-medium">
                                {item.companyName}
                              </span>
                            </div>
                          </div>
                          <Link href={`/brand/user?id=${item.id}`}>
                            <button className="text-[13px] text-medium leading-[20px] text-violet600">
                              View
                            </button>
                          </Link>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className="bg-white shadow-dark20 py-5 px-[31px] rounded-[15px]">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-black500 font-semibold text-xl leading-[30px]">
                    Active Campaigns
                  </h2>
                </div>
                <div>
                  <Link href="/brand/transaction">
                    <button className="text-[17px]  font-medium leading-[26px] text-violet600">
                      View All
                    </button>
                  </Link>
                </div>
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
                          </tr>
                        </thead>
                        <tbody>
                          {allTransaction.data &&
                            allTransaction.data
                              .slice(0, 5)
                              .map((person, personIdx) => (
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
                                            background: randomIntFromInterval(
                                              0,
                                              9
                                            ),
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
                                          <span>
                                            {person?.vender?.phoneNumbe}
                                          </span>
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
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
