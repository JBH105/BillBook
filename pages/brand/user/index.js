import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { randomIntFromInterval } from "../../../util/randomNumber";
import CreateUser from "../../../components/Brand/User/Create-User";
import Details from "../../../components/Brand/User/Details";
export default function Index() {
  const [open, setOpen] = useState(false);
  const [profileView, setProfileView] = useState(false);
  const data = {
    dataLabels: {
      enabled: true,
    },
    labels: ["Active", "Paused"],
    datasets: [
      {
        label: "# of Votes",
        data: "10",
        backgroundColor: [
          "rgb(80, 205, 137)",
          "rgb(0, 178, 255)",
          // "rgb(228, 230, 239)",
        ],
        display: "right",
      },
    ],
    options: {
      plugins: {
        legend: {
          position: "right",
        },
      },
    },
  };

  const options = {
    plugins: {
      legend: {
        position: "right",
      },
      // tooltip: {
      //   position: "custom",
      // },
    },
    maintainAspectRatio: false,
    responsive: true,
  };
  return (
    <main className="bg-main-bg px-4 sm:px-6 lg:px-[60px]">
      <div className="py-6">
        <CreateUser open={open} setopen={setOpen} />

        {/* User Details */}
        <Details profileView={profileView} setProfileView={setProfileView} />
        <div className="max-w-[938px] grid gap-7 lg:grid-cols-2 mt-6">
          <div className="bg-white rounded-[15px] shadow-dark80 py-[21px] px-6">
            <div className="flex justify-between items-center">
              <span className="text-[30px] font-semibold leading-[22px] text-black400">
                2
              </span>
              <button
                className="rounded border border-transparent bg-violet600 py-3 px-4 text-[15px] font-semibold text-white shadow-sm  focus:outline-none focus:ring-0 "
                onClick={() => setOpen(true)}
              >
                Create User
              </button>
            </div>
            <span className="text-[15px] font-semibold text-black300">
              Total User
            </span>

            <div className="flex space-x-5 items-center mt-2">
              <h1 className="text-black500 font-bold text-[31px] leading-[46px] flex">
                <img src="/assets/icons/n.svg" />
                100,000
              </h1>
            </div>
            <div className="mt-[15px]">
              <span className="text-black300 text-[13px] leading-5 font-medium">
                Available marketing funds
              </span>
            </div>
          </div>
          <div className="bg-white rounded-[15px] shadow-dark80 py-[21px] px-6">
            <div className="flex justify-between">
              <span className="text-[15px] font-semibold leading-[22px] text-black400">
                Escrow
              </span>
            </div>
            <div className="flex space-x-5 items-center mt-2">
              <h1 className="text-black500 font-bold text-[31px] leading-[46px] flex">
                <img src="/assets/icons/n.svg" />
                100,000
              </h1>
              <div>
                <span className="px-2.5 py-0.5 bg-purple100 rounded-[28px] text-violet600 text-[13px] font-medium leading-5">
                  Commited
                </span>
              </div>
            </div>
            <div className="mt-[15px]">
              <span className="text-black300 text-[13px] leading-5 font-medium">
                Commited to Ongoing Jobs
              </span>
            </div>
          </div>
        </div>

        {/* All User */}
        <div className="flex justify-between mt-10">
          <span className="text-[20px] font-semibold leading-[22px]">
            All User
          </span>
        </div>

        <div className=" grid gap-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mt-6">
          <div
            className="bg-white rounded-[15px] shadow-dark80 py-[21px] px-6"
            onClick={() => setProfileView(true)}
          >
            <div className="flex justify-between items-center	">
              <span
                className="max-w-[55px]font-bold	 text-[30px] font-semibold items-center text-black400"
                style={{
                  background: randomIntFromInterval(0, 9),
                  color: "white",
                  padding: "4px 8px",
                  borderRadius: "10px",
                  textTransform: "uppercase",
                }}
              >
                AB
              </span>
              <div>
                <span className="px-2.5 py-0.5 bg-green100 rounded-[28px] text-green600 text-[13px] font-medium leading-5">
                  Available
                </span>
              </div>
            </div>
            <div className="flex space-x-5 items-center mt-2">
              <h1 className="text-black500 font-bold text-[31px] leading-[46px] flex">
                {/* <img src="/assets/icons/n.svg" /> */}
                Bhavin
              </h1>
            </div>
            <div className="mt-[15px]">
              <span className="text-black300 text-[13px] leading-5 font-medium">
                Available marketing funds
              </span>
            </div>
          </div>

          <div className="bg-white rounded-[15px] shadow-dark80 py-[21px] px-6">
            <div className="flex justify-between items-center	">
              <span
                className="max-w-[55px]font-bold	 text-[30px] font-semibold items-center text-black400"
                style={{
                  background: randomIntFromInterval(0, 9),
                  color: "white",
                  padding: "4px 8px !important",
                  borderRadius: "10px",
                  textTransform: "uppercase",
                }}
              >
                AB
              </span>
              <div>
                <span className="px-2.5 py-0.5 bg-green100 rounded-[28px] text-green600 text-[13px] font-medium leading-5">
                  Available
                </span>
              </div>
            </div>
            <div className="flex space-x-5 items-center mt-2">
              <h1 className="text-black500 font-bold text-[31px] leading-[46px] flex">
                {/* <img src="/assets/icons/n.svg" /> */}
                Bhavin
              </h1>
            </div>
            <div className="mt-[15px]">
              <span className="text-black300 text-[13px] leading-5 font-medium">
                Available marketing funds
              </span>
            </div>
          </div>

          <div className="bg-white rounded-[15px] shadow-dark80 py-[21px] px-6">
            <div className="flex justify-between items-center	">
              <span
                className="max-w-[55px]font-bold text-[30px] font-semibold items-center text-black400"
                style={{
                  background: randomIntFromInterval(0, 9),
                  color: "white",
                  padding: "4px 8px !important",
                  borderRadius: "10px",
                  textTransform: "uppercase",
                }}
              >
                AB
              </span>
              <div>
                <span className="px-2.5 py-0.5 bg-green100 rounded-[28px] text-green600 text-[13px] font-medium leading-5">
                  Available
                </span>
              </div>
            </div>
            <div className="flex space-x-5 items-center mt-2">
              <h1 className="text-black500 font-bold text-[31px] leading-[46px] flex">
                {/* <img src="/assets/icons/n.svg" /> */}
                Bhavin
              </h1>
            </div>
            <div className="mt-[15px]">
              <span className="text-black300 text-[13px] leading-5 font-medium">
                Available marketing funds
              </span>
            </div>
          </div>
          <div className="bg-white rounded-[15px] shadow-dark80 py-[21px] px-6">
            <div className="flex justify-between items-center	">
              <span
                className="max-w-[55px]font-bold	 text-[30px] font-semibold items-center text-black400"
                style={{
                  background: randomIntFromInterval(0, 9),
                  color: "white",
                  padding: "4px 8px !important",
                  borderRadius: "10px",
                  textTransform: "uppercase",
                }}
              >
                AB
              </span>
              <div>
                <span className="px-2.5 py-0.5 bg-green100 rounded-[28px] text-green600 text-[13px] font-medium leading-5">
                  Available
                </span>
              </div>
            </div>
            <div className="flex space-x-5 items-center mt-2">
              <h1 className="text-black500 font-bold text-[31px] leading-[46px] flex">
                {/* <img src="/assets/icons/n.svg" /> */}
                Bhavin
              </h1>
            </div>
            <div className="mt-[15px]">
              <span className="text-black300 text-[13px] leading-5 font-medium">
                Available marketing funds
              </span>
            </div>
          </div>
          <div className="bg-white rounded-[15px] shadow-dark80 py-[21px] px-6">
            <div className="flex justify-between items-center	">
              <span
                className="max-w-[55px]font-bold	 text-[30px] font-semibold items-center text-black400"
                style={{
                  background: randomIntFromInterval(0, 9),
                  color: "white",
                  padding: "4px 8px !important",
                  borderRadius: "10px",
                  textTransform: "uppercase",
                }}
              >
                AB
              </span>
              <div>
                <span className="px-2.5 py-0.5 bg-green100 rounded-[28px] text-green600 text-[13px] font-medium leading-5">
                  Available
                </span>
              </div>
            </div>
            <div className="flex space-x-5 items-center mt-2">
              <h1 className="text-black500 font-bold text-[31px] leading-[46px] flex">
                {/* <img src="/assets/icons/n.svg" /> */}
                Bhavin
              </h1>
            </div>
            <div className="mt-[15px]">
              <span className="text-black300 text-[13px] leading-5 font-medium">
                Available marketing funds
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
