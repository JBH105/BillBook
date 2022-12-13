import React, { useState } from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
export default function RecentHistory({ openTab }) {
  const [audience, setAudience] = useState(true);
  const [pieseries, setPieSeries] = useState({
    series: [60, 40],
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
                Debit Balance
              </span>
            </div>
            <div className="flex space-x-5 items-center mt-2">
              <h1 className="text-black500 font-bold text-[31px] leading-[46px] flex">
                <img src="/assets/icons/n.svg" />
                100,000
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
                series={pieseries.series}
                type="pie"
              />
            </div>
          </div>

          <div className="flex gap-8 flex-col lg:flex-row">
            <div className="bg-white flex-none lg:max-w-[388px] shadow-dark20 rounded-[15px]  pt-5 pl-8 pr-9 pb-8">
              <div className="flex items-center justify-between">
                <h2 className="text-black500 text-[17px] leading-[26px] font-semibold ">
                  Audience Gender Distribution
                </h2>
              </div>
            </div>
            <div className="bg-white w-full shadow-dark20 rounded-[15px]  pt-5 pl-8 pr-9 pb-8">
              <div className="flex items-center justify-between">
                <h2 className="text-black500 text-[17px] leading-[26px] font-semibold ">
                  Audience by Country
                </h2>
                <button>
                  <img src="/assets/icons/quationmark.svg" />
                </button>
              </div>
              <div className="mt-4">
                <div className="grid grid-cols-2  border border-violet600 rounded w-full">
                  <span
                    onClick={() => setAudience(true)}
                    className={`${
                      audience
                        ? "bg-violet600 text-white"
                        : "text-violet600 bg-white"
                    } cursor-pointer py-[11.5px] flex items-center text-xs font-medium leading-[18px] justify-center `}
                  >
                    By Country
                  </span>
                  <span
                    onClick={() => setAudience(false)}
                    className={`${
                      audience
                        ? "text-violet600 bg-white"
                        : "bg-violet600 text-white"
                    } cursor-pointer py-[11.5px] flex items-center text-xs font-medium leading-[18px] justify-center `}
                  >
                    By City
                  </span>
                </div>
                {/* {audience ? (
                <div className="mt-5 space-y-2.5">
                  {aduienceprogress.map((item) => (
                    <div>
                      <div className="flex justify-between items-center mb-2 ">
                        <h3 className="text-black400 font-medium text-[15px] leading-[22px]">
                          {item?.name}
                        </h3>
                        <span className="text-black400 font-medium text-[15px] leading-[22px]">
                          {item?.process}
                        </span>
                      </div>
                      <div className="bg-[#0904151F] rounded-full h-[10px] w-full ">
                        <div
                          className={`  bg-violet600 rounded-full h-full`}
                          style={{ width: `${item?.process}` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-5 space-y-2.5">
                  {aduienceprogress.map((item) => (
                    <div>
                      <div className="flex justify-between items-center mb-2 ">
                        <h3 className="text-black400 font-medium text-[15px] leading-[22px]">
                          {item?.name}
                        </h3>
                        <span className="text-black400 font-medium text-[15px] leading-[22px]">
                          {item?.process}
                        </span>
                      </div>
                      <div className="bg-[#0904151F] rounded-full h-[10px] w-full ">
                        <div
                          className={`  bg-violet600 rounded-full h-full`}
                          style={{ width: `${item?.process}` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
