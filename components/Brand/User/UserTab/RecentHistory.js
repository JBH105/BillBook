import React, { useState } from "react";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
// const ReactApexChart = dynamic(() => import("react-apexcharts"));
const ReactApexChart = dynamic(
  () => {
    return import("react-apexcharts");
  },
  { ssr: false }
);
export default function RecentHistory({ openTab, setProfileView }) {
  const transaction = useSelector(
    (state) => state.Transaction.VenderTransaction
  );

  const [pieseries, setPieSeries] = useState({
    options: {
      chart: {
        type: "pie",
      },
      plotOptions: {
        pie: {
          dataLabels: {
            offset: -25,
          },
        },
      },
      dataLabels: {
        enabled: true,
        position: "center",

        style: {
          fontSize: "20px",
          fontWeight: 500,
        },
      },
      stroke: {
        show: false,
      },
      colors: ["#5B26CF", "#DED4F5"],
      legend: {
        show: true,
        position: "top",
        horizontalAlign: "left",
        fontSize: "13px",
        fontFamily: "Poppins",
        fontWeight: 500,
        formatter: undefined,
        labels: {
          colors: "#5B5863",
          useSeriesColors: false,
        },
      },
      labels: ["Credit", "Debit"],
      responsive: [
        {
          breakpoint: 991,
          options: {
            chart: {
              width: 500,
            },
            legend: {
              position: "top",
            },
            dataLabels: {
              enabled: true,
              position: "center",
              style: {
                fontSize: "16px",
                fontWeight: 500,
              },
            },
          },
        },
        {
          breakpoint: 545,
          options: {
            chart: {
              width: 250,
            },
            legend: {
              position: "top",
            },
            dataLabels: {
              enabled: true,
              position: "center",
              style: {
                fontSize: "12px",
                fontWeight: 500,
              },
            },
          },
        },
      ],
    },
  });

  return (
    <div className="h-0 flex-1 pt-[17px] px-2.5  md:pl-[49px] md:pr-[47px] custom-scroll overflow-y-auto bg-main-bg  px-[30px] pb-4">
      {transaction.data?.length ? (
        <div className={`${openTab === 0 ? "block" : "hidden"}  `}>
          <div className="sm:flex justify-between"></div>
          <div className="max-w-[938px] grid gap-7 lg:grid-cols-2 mt-6">
            <div className="bg-white rounded-[15px] shadow-dark80 py-[21px] px-6">
              <div className="flex justify-between">
                <span className="text-[15px] font-semibold leading-[22px] text-black400">
                  Credit Balance
                </span>
              </div>
              <div className="flex space-x-5 items-center mt-2">
                <h1 className="text-black500 font-bold text-[31px] leading-[46px] flex">
                  <img src="/assets/icons/n.svg" />
                  {transaction.TotalCredit}
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
                  Debit Balance
                </span>
              </div>
              <div className="flex space-x-5 items-center mt-2">
                <h1 className="text-black500 font-bold text-[31px] leading-[46px] flex">
                  <img src="/assets/icons/n.svg" />
                  {transaction.TotalDebit}
                </h1>
              </div>
              <div className="mt-[15px]">
                <span className="text-black300 text-[13px] leading-5 font-medium">
                  Commited to Ongoing Jobs
                </span>
              </div>
            </div>
          </div>
          <div className="grid gap-8 mt-[15px]">
            <div className="bg-white shadow-dark20 rounded-[15px] pt-5 pl-8 pr-9 pb-8 overflow-auto">
              <div className="flex items-center justify-between">
                <h2 className="text-black500 text-[17px] leading-[26px] font-semibold ">
                  Recent history
                </h2>
                <button>
                  <img src="/assets/icons/quationmark.svg" />
                </button>
              </div>
              <div className="mt-4"></div>
              <div id="chart" className="flex justify-center">
                <ReactApexChart
                  options={pieseries.options}
                  series={[
                    transaction?.TotalCredit
                      ? parseInt(transaction?.TotalCredit)
                      : 0,
                    transaction?.TotalDebit
                      ? parseInt(transaction?.TotalDebit)
                      : 0,
                  ]}
                  type="pie"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-full justify-center ">
          <img src="/assets/datanotfound.svg" />
        </div>
      )}
    </div>
  );
}
