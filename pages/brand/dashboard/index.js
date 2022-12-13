import React, { useState, Fragment, useRef } from "react";
// import {Chart} from 'react-apexcharts'
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

import {
  CursorArrowRaysIcon,
  EnvelopeOpenIcon,
  StarIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { Dialog, Transition } from "@headlessui/react";
const tabs = [
  { name: "Overview", href: "#", current: true },
  { name: "Influencers", href: "#", current: false },
  { name: "messaging", href: "#", current: false },
  { name: "Content", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];
const tabs1 = [
  { name: "Instructions", href: "#", current: true },
  { name: "Details", href: "#", current: false },
  { name: "Requirements", href: "#", current: false },
  { name: "Compensation", href: "#", current: false },
];
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
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};
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
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);

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
            <div>
              <button className="bg-white shadow-dark10 text-white w-full flex justify-center px-5 py-2 text-sm font-medium rounded-md">
                End Campaign
              </button>
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
            <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
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
                <div className="bg-white shadow-dark20 py-5 px-[31px] rounded-[15px]">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="text-black500 font-semibold text-xl leading-[30px]">
                        Active Campaigns
                      </h2>
                    </div>
                    <div>
                      <button className="text-[17px]  font-medium leading-[26px] text-violet600">
                        View All
                      </button>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="mt-8 flex flex-col">
                        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden ">
                              <table className="min-w-full ">
                                <thead className="bg-gray-50">
                                  <tr>
                                    <th
                                      scope="col"
                                      className="py-3.5 pl-4 pr-3 text-left text-[15px] font-semibold text-violet600 sm:pl-6"
                                    >
                                      #
                                    </th>
                                    <th
                                      scope="col"
                                      className="px-3 py-3.5  text-left text-[15px] font-semibold text-violet600"
                                    ></th>
                                    <th
                                      scope="col"
                                      className="px-3 py-3.5  text-left text-[15px] font-semibold text-violet600"
                                    >
                                      Campaign
                                    </th>
                                    <th
                                      scope="col"
                                      className="px-3 py-3.5  text-left text-[15px] font-semibold text-violet600"
                                    >
                                      Budget
                                    </th>
                                    <th
                                      scope="col"
                                      className="px-3 py-3.5  text-left text-[15px] font-semibold text-violet600"
                                    >
                                      Spent
                                    </th>
                                  </tr>
                                </thead>
                                <tbody className="bg-white">
                                  {people.map((person, personIdx) => (
                                    <tr
                                      key={person.email}
                                      className={
                                        personIdx % 2 === 0
                                          ? undefined
                                          : "bg-gray-50"
                                      }
                                    >
                                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                        {person.id}
                                      </td>
                                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        <img
                                          className="w-[52px] h-[43px] rounded-[4px]"
                                          src={person.img}
                                        />
                                      </td>
                                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        {person.name}
                                      </td>
                                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        {person.bar}
                                      </td>
                                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                        <span className="">{person.spent}</span>
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
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white shadow-dark20 py-5 px-[31px] rounded-[15px]">
                  <div>
                    <h2 className="text-black500 font-semibold text-xl leading-[30px]">
                      Review Content
                    </h2>
                  </div>
                </div>
                <div className="bg-white shadow-dark20 py-5 px-[31px] rounded-[15px]">
                  <div>
                    <h2 className="text-black500 font-semibold text-xl leading-[30px]">
                      Influencers Request
                    </h2>
                  </div>
                  <div className="flex justify-between mt-[13px]">
                    <div className="flex">
                      <div className="bg-white w-[42px] h-[42px] rounded-full flex items-center justify-center border border-[#F2EDFF]">
                        <img
                          src="/assets/images/img-1.png"
                          className="  rounded-full h-[35px] w-[35px]"
                        />
                      </div>
                      <div className="ml-2.5">
                        <h4 className="text-black500 font-semibold text-[17px] leading-[26px]">
                          Bennie H.
                        </h4>
                        <span className="text-black300 text-[13px] leading-[20px] font-medium">
                          Pepsi Q2 Awareness
                        </span>
                      </div>
                    </div>
                    <button className="text-[13px] text-medium leading-[20px] text-violet600">
                      View
                    </button>
                  </div>
                  <div className="flex justify-between mt-5">
                    <div className="flex">
                      <div className="bg-white w-[42px] h-[42px] rounded-full flex items-center justify-center border border-[#F2EDFF]">
                        <img
                          src="/assets/images/img-2.png"
                          className="  rounded-full h-[35px] w-[35px]"
                        />
                      </div>
                      <div className="ml-2.5">
                        <h4 className="text-black500 font-semibold text-[17px] leading-[26px]">
                          Lucia I.
                        </h4>
                        <span className="text-black300 text-[13px] leading-[20px] font-medium">
                          Pepsi Q2 Awareness
                        </span>
                      </div>
                    </div>
                    <button className="text-[13px] text-medium leading-[20px] text-violet600">
                      View
                    </button>
                  </div>
                  <div className="flex justify-between mt-5">
                    <div className="flex">
                      <div className="bg-white w-[42px] h-[42px] rounded-full flex items-center justify-center border border-[#F2EDFF]">
                        <img
                          src="/assets/images/img-3.png"
                          className="  rounded-full h-[35px] w-[35px]"
                        />
                      </div>
                      <div className="ml-2.5">
                        <h4 className="text-black500 font-semibold text-[17px] leading-[26px]">
                          Joseph Y.
                        </h4>
                        <span className="text-black300 text-[13px] leading-[20px] font-medium">
                          Pepsi Q2 Awareness
                        </span>
                      </div>
                    </div>
                    <button className="text-[13px] text-medium leading-[20px] text-violet600">
                      View
                    </button>
                  </div>
                  <div className="flex justify-between mt-5">
                    <div className="flex">
                      <div className="bg-white w-[42px] h-[42px] rounded-full flex items-center justify-center border border-[#F2EDFF]">
                        <img
                          src="/assets/images/img-4.png"
                          className="  rounded-full h-[35px] w-[35px]"
                        />
                      </div>
                      <div className="ml-2.5">
                        <h4 className="text-black500 font-semibold text-[17px] leading-[26px]">
                          Esther B.
                        </h4>
                        <span className="text-black300 text-[13px] leading-[20px] font-medium">
                          Pepsi Q2 Awareness
                        </span>
                      </div>
                    </div>
                    <button className="text-[13px] text-medium leading-[20px] text-violet600">
                      View
                    </button>
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
