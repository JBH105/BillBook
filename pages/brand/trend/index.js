import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import dynamic from "next/dynamic";
// const ReactApexChart =dynamic()
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
const people = [
  {
    name: "Ahmed Samad",
    facebook: "https://facebook.com/ahmed s._",
    followers: "250K",
    engage: "24,896",
    imprassion: "75%",
    locat: "Ibadan",
    data: "18|| ●God is good all the",
    seconddata: " time❤😊 ●C Eng student👷..."
  },
  {
    name: "Ahmed Samad",
    facebook: "https://facebook.com/ahmed s._",
    followers: "250K",
    engage: "24,896",
    imprassion: "75%",
    locat: "Ibadan",
    data: "18|| ●God is good all the",
    seconddata: " time❤😊 ●C Eng student👷..."
  },
  {
    name: "Ahmed Samad",
    facebook: "https://facebook.com/ahmed s._",
    followers: "250K",
    engage: "24,896",
    imprassion: "75%",
    locat: "Ibadan",
    data: "18|| ●God is good all the",
    seconddata: " time❤😊 ●C Eng student👷..."
  },
  {
    name: "Ahmed Samad",
    facebook: "https://facebook.com/ahmed s._",
    followers: "250K",
    engage: "24,896",
    imprassion: "75%",
    locat: "Ibadan",
    data: "18|| ●God is good all the",
    seconddata: " time❤😊 ●C Eng student👷..."
  },
  {
    name: "Ahmed Samad",
    facebook: "https://facebook.com/ahmed s._",
    followers: "250K",
    engage: "24,896",
    imprassion: "75%",
    locat: "Ibadan",
    data: "18|| ●God is good all the",
    seconddata: " time❤😊 ●C Eng student👷..."
  },
  {
    name: "Ahmed Samad",
    facebook: "https://facebook.com/ahmed s._",
    followers: "250K",
    engage: "24,896",
    imprassion: "75%",
    locat: "Ibadan",
    data: "18|| ●God is good all the",
    seconddata: " time❤😊 ●C Eng student👷..."
  },
  {
    name: "Ahmed Samad",
    facebook: "https://facebook.com/ahmed s._",
    followers: "250K",
    engage: "24,896",
    imprassion: "75%",
    locat: "Ibadan",
    data: "18|| ●God is good all the",
    seconddata: " time❤😊 ●C Eng student👷..."
  },

  // More people...
];
const publishingOptions = [
  {
    title: "Today",
    current: true,
  },
  {
    title: "Yesterday",
    current: true,
  },
  {
    title: "Last 7 days",
    current: true,
  },
  {
    title: "Last 30 days",
    current: false,
  },
  // {
  //   title: "Last month",
  //   current: true,
  // },
  // {
  //   title: "Monthly",
  //   current: true,
  // },
  // {
  //   title: "Last year",
  //   current: true,
  // },
  // {
  //   title: "Yearly",
  //   current: true,
  // },
];
const followersOption = [
  {
    title: "Followers",
    current: true,
  },
  {
    title: "Engagements",
    current: false,
  },
  {
    title: "Impressions",
    current: true,
  }
];



function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Trend = () => {
  const [selected, setSelected] = useState(publishingOptions[0]);
  const [followers, setFollowers] = useState(followersOption[0]);
  const [items, setItems] = useState(1);
  const [mentionsOverview, setMentionsOverview] = useState({
    series: [
      {
        name: "Mentions",
        data: [1000, 1454, 7024, 1400, 1000, 4500, 8000, 3000, 7000, 25000, 10510, 14000, 1800, 1402, 1203, 1403, 1869, 5698, 1000, 17000, 11006, 4000, 2614, 20000, 8000, 17001, 148, 25000, 10510, 14000,],
      },
    ],
    options: {
      colors: ["#DE7C32"],

      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },

        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        lineCap: 'butt',
        colors: undefined,
        width: 2,
        dashArray: 0,

      },

      grid: {
        row: {
          colors: ["transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        labels: {
          format: "dd/MM",
        },
        tooltip: {
          enabled: false,
          offsetX: 0,
        },
      },
      yaxis: {
        title: {
          text: "Mentions",
          align: "left",
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: "12px",
            fontWeight: "500",
            fontFamily: undefined,
            color: "#09041580",
          },
        },


        logBase: 1000,
        tickAmount: 4,
        min: 0,
        max: 40000,

        forceNiceScale: false,
        floating: false,
        decimalsInFloat: undefined,
        labels: {
          show: true,
          align: "right",
          minWidth: 0,
          maxWidth: 160,
          formatter: (value) => value.toFixed(0) + "k",
        },
        crosshairs: {
          show: false,
          position: "back",
          stroke: {
            color: "#b6b6b6",
            width: 1,
            dashArray: 2,
          },
        },

        tooltip: {
          enabled: false,
          offsetX: 0,
        },
      },
      tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          return (
            '<div class="arrow_box grid px-[13px] py-[7px] rounded-[6px]">' +
            '<span class="block text-[10px] mb-0.5 font-medium leading-[15px]">' +
            w.globals.labels[dataPointIndex] +
            "</span>" + '<span class="block text-[15px] font-semibold leading-[22px]">' +
            series[seriesIndex][dataPointIndex] +
            "</span>" +
            "</div>"
          );
        }
      }
    },
  });

  return (
    <main className="bg-main-bg px-4 sm:px-6 xl:px-[60px] py-6">
      <div className="flex justify-between">
        <div>

        <h2 className="text-black600 sm:text-[20px] text-[17px] font-semibold leading-[30px]">
          Trend Analysis
        </h2>
        <span className="font-medium text-[15px] text-black400 leading-[22px]">
                See how hashtags and keywords are trending.  
              </span>
        </div>
        <div>

        <button className="flex items-center justify-center bg-white focus:outline-none text-[15px] font-medium rounded shadow-dark10 leading-[22px] text-violet600 py-[3.3px] px-[15px]">
          <img src="/assets/icons/directbox-receive.svg" alt="directbox-receive" className="mr-2" />
          Export Report
        </button>
        </div>
      </div>
      <div className="sm:flex block gap-[20px] my-[28px]">
        <div className="flex w-full bg-white">
          <input placeholder="Enter a #hashtag, keyword or @mention" className="w-full py-[8px] bg-white text-black500 rounded-[4px_0px_0px_4px] focus:outline-none border-[#ADABB1] border-[1px] text-[13px] font-normal leading-5  pl-[16px] placeholder:text-[13px]" />
          <button className="bg-violet600 sm:text-[15px] text-[12px] text-white rounded-[0px_4px_4px_0px]  w-[107px] flex items-center justify-center font-medium"><img className="sm:mr-[10px] mr-[6px]" src="/assets/icons/search_icon.svg" alt="search_icon" /> Search</button>
        </div>
        <div className="min-w-[190px]">
          <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
              <>
                <div className="relative text-end sm:text-start sm:mt-0 mt-[20px]">
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
                                    selected ? "font-semibold" : "font-normal"
                                  }
                                >
                                  {option.title}
                                </p>
                                {selected ? (
                                  <span
                                    className={
                                      active ? "text-white" : "text-indigo-500"
                                    }
                                  >
                                    
                                  </span>
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
      {/* <div className="bg-white rounded-lg py-[18px] lg:px-[30px] px-[18px] shadow-dark300 mb-7">
        <p className="text-black500 text-[17px] font-semibold">Tags</p>
        <h1 className="text-violet600 font-semibold lg:text-2xl sm:text-xl text-base text-center md:mt-[-14px] mt-[10px]  md:pb-3">#BuzzBite, #Happy, #influence</h1>
      </div> */}
      <div className="bg-white rounded-lg py-[18px] lg:px-[30px] px-[18px] shadow-dark300">
        <div className="flex justify-between">
          <h2 className="text-black500 font-semibold text-[17px] leading-[26px]">
            Mentions Overview
          </h2>
          <button>
            <img src="/assets/icons/quationmark.svg" alt="quationmark" />
          </button>
        </div>
        <div id="chart" className="mentionsoverview">
          <ReactApexChart
            options={mentionsOverview.options}
            series={mentionsOverview.series}
            type="line"
            height={350}
          />
        </div>
      </div>
      <div className="2xl:gap-7 my-7 grid xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-4">
      <div onClick={() => setItems(1)} className={` ${items === 1 ? "bg-blue100 border-violet600 border-[1px] rounded-[4px] px-[13px] flex items-center h-[61px] relative w-full shadow-dark300": "bg-[#FFFFFF] border-[#EEEEEE] border-[1px] rounded-[4px] px-[13px] flex items-center h-[61px] relative w-full shadow-dark300"}`}>
          <div className="flex items-center">
            <img src="/assets/icons/global.svg" alt="global" className="mr-[9px]" />
            <div>
              <h1 className="text-black500 text-[17px] font-semibold">34,785</h1>
              <p className="text-black300 text-[10px] font-semibold">ALL PLATFORMS</p>
            </div>
          </div>
          <input
            type="checkbox"
            onChange={() => setItems(1)}
            checked={ items === 1 }
            className="absolute custom-checkbox custom_checked right-[13px] top-[22px] rounded-sm -mt-2 h-[8px] w-[8px] bg-white accent-violet600 border-gray-300 text-violet600 focus:ring-0 "
          />
        </div>
        <div onClick={() => setItems(2)} className={` ${items === 2 ? "bg-blue100 border-violet600 border-[1px] rounded-[4px] px-[13px] flex items-center h-[61px] relative w-full shadow-dark300": "bg-[#FFFFFF] border-[#EEEEEE] border-[1px] rounded-[4px] px-[13px] flex items-center h-[61px] relative w-full shadow-dark300"}`}>
          <div className="flex items-center">
            <img src="/assets/icons/instagram.svg" alt="instagram" className="mr-[9px]" />
            <div>
              <h1 className="text-black500 text-[17px] font-semibold">345</h1>
              <p className="text-black300 text-[10px] font-semibold">INSTAGRAM</p>
            </div>
          </div>
          <input
            type="checkbox"
            onChange={() => setItems(2)}
            checked={ items === 2 }
            className="absolute custom-checkbox custom_checked right-[13px] top-[22px] rounded-sm -mt-2 h-[8px] w-[8px] bg-white accent-violet600 border-gray-300 text-violet600 focus:ring-0 "
          />
        </div>
        <div onClick={() => setItems(3)} className={` ${items === 3 ? "bg-blue100 border-violet600 border-[1px] rounded-[4px] px-[13px] flex items-center h-[61px] relative w-full shadow-dark300": "bg-[#FFFFFF] border-[#EEEEEE] border-[1px] rounded-[4px] px-[13px] flex items-center h-[61px] relative w-full shadow-dark300"}`}>
          <div className="flex items-center">
            <img src="/assets/icons/Twitter.svg" alt="instagram" className="mr-[9px]" />
            <div>
              <h1 className="text-black500 text-[17px] font-semibold">345</h1>
              <p className="text-black300 text-[10px] font-semibold">TWITTER</p>
            </div>
          </div>
          <input
            type="checkbox"
            onChange={() => setItems(3)}
            checked={ items === 3 }
            className="absolute custom-checkbox custom_checked right-[13px] top-[22px] rounded-sm -mt-2 h-[8px] w-[8px] bg-white accent-violet600 border-gray-300 text-violet600 focus:ring-0 "
          />
        </div>
        <div onClick={() => setItems(4)} className={` ${items === 4 ? "bg-blue100 border-violet600 border-[1px] rounded-[4px] px-[13px] flex items-center h-[61px] relative w-full shadow-dark300": "bg-[#FFFFFF] border-[#EEEEEE] border-[1px] rounded-[4px] px-[13px] flex items-center h-[61px] relative w-full shadow-dark300"}`}>
          <div className="flex items-center">
            <img src="/assets/icons/Tiktok.svg" alt="Tiktok" className="mr-[9px]" />
            <div>
              <h1 className="text-black500 text-[17px] font-semibold">345</h1>
              <p className="text-black300 text-[10px] font-semibold">TIKTOK</p>
            </div>
          </div>
          <input
            type="checkbox"
            onChange={() => setItems(4)}
            checked={ items === 4 }
            className="absolute custom-checkbox custom_checked right-[13px] top-[22px] rounded-sm -mt-2 h-[8px] w-[8px] bg-white accent-violet600 border-gray-300 text-violet600 focus:ring-0 "
          />
        </div>
        <div onClick={() => setItems(5)} className={` ${items === 5 ? "bg-blue100 border-violet600 border-[1px] rounded-[4px] px-[13px] flex items-center h-[61px] relative w-full shadow-dark300": "bg-[#FFFFFF] border-[#EEEEEE] border-[1px] rounded-[4px] px-[13px] flex items-center h-[61px] relative w-full shadow-dark300"}`}>
          <div className="flex items-center">
            <img src="/assets/icons/facebook-rounded.svg" alt="facebook-rounded" className="mr-[9px] w-[30px]" />
            <div>
              <h1 className="text-black500 text-[17px] font-semibold">345</h1>
              <p className="text-black300 text-[10px] font-semibold">FACEBOOK</p>
            </div>
          </div>
          <input
            type="checkbox"
            onChange={() => setItems(5)}
            checked={ items === 5 }
            className="absolute custom-checkbox custom_checked right-[13px] top-[22px] rounded-sm -mt-2 h-[8px] w-[8px] bg-white accent-violet600 border-gray-300 text-violet600 focus:ring-0 "
          />
        </div>
      </div>
      <div className="bg-white rounded-lg  py-[18px] lg:px-[30px] px-[18px] shadow-dark300">
        <h2 className="text-black500 font-semibold text-[17px] leading-[26px]">
          Mentions
        </h2>
        <div className="lg:max-h-[675px] custom-scroll overflow-y-auto">
        <div className="bg-[#D9D9D9]/[0.2] shadow-dark10 lg:p-[11px_24px_11px_24px] p-[11px_16px_11px_16px] rounded mt-[20px] mb-4">
          <div className="flex sm:items-center items-start">
            <img src="/assets/images/avatar3.png" alt="avatar3" className="sm:w-auto w-[30px]" />
            <div className="sm:ml-3 ml-2 w-full">
              <div className="sm:flex block justify-between items-center w-full">
                <div className="flex items-center">
                  <img src="/assets/icons/facebook-rounded.svg" alt="facebook-rounded" />
                  <h1 className="text-black500 sm:text-[15px] text-xs font-medium ml-[6px]">Ahmed Samad</h1>
                  <span className="bg-[#5B5863] w-[3px] h-[3px] mx-[6px] rounded-md"></span>
                  <p className="text-[#84828A] sm:text-[12px] text-[8px] font-medium">234 followers</p>
                </div>
                <div>
                  <p className="text-black300 text-xs font-medium">Today 10:23am</p>
                </div>
              </div>
              <div className="sm:flex items-center">
                <a href="/" className="text-violet600 text-[10px] font-medium lg:mr-[53px] sm:mr-4">https://facebook.com/ahmed s._</a>
                <div className="flex items-center sm:mt-0 mt-[6px]">
                  <div className="flex mr-[30px]">
                    <img src="/assets/icons/heart.svg" alt="heart" />
                    <p className="text-black300 text-xs font-medium ml-1">235k</p>
                  </div>
                  <div className="flex">
                    <img src="/assets/icons/messages.svg" alt="messages" />
                    <p className="text-black300 text-xs font-medium ml-1">100</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-[#5B5863] mt-3 sm:text-[13px] text-xs font-medium">Within 3 months time, #BuzzBite have helped over 500 Nigerians 🥰 make money from their social media😍💃. Within 3 months. Within 3 months time, <span className="text-violet600">#BuzzBite</span> have helped over 500 Nigerians 🥰 make money from their social media😍💃. Within 3 months. </p>
        </div>
        <div className="bg-[#D9D9D9]/[0.2] shadow-dark10 lg:p-[11px_24px_11px_24px] p-[11px_16px_11px_16px] rounded mt-[20px] mb-4">
          <div className="flex sm:items-center items-start">
            <img src="/assets/images/avatar3.png" alt="avatar3" className="sm:w-auto w-[30px]" />
            <div className="sm:ml-3 ml-2 w-full">
              <div className="sm:flex block justify-between items-center w-full">
                <div className="flex items-center">
                  <img src="/assets/icons/facebook-rounded.svg" alt="facebook-rounded" />
                  <h1 className="text-black500 sm:text-[15px] text-xs font-medium ml-[6px]">Ahmed Samad</h1>
                  <span className="bg-[#5B5863] w-[3px] h-[3px] mx-[6px] rounded-md"></span>
                  <p className="text-gray110 sm:text-[12px] text-[8px] font-medium">234 followers</p>
                </div>
                <div>
                  <p className="text-black300 text-xs font-medium">Today 10:23am</p>
                </div>
              </div>
              <div className="sm:flex items-center">
                <a href="/" className="text-violet600 text-[10px] font-medium lg:mr-[53px] sm:mr-4">https://facebook.com/ahmed s._</a>
                <div className="flex items-center sm:mt-0 mt-[6px]">
                  <div className="flex mr-[30px]">
                    <img src="/assets/icons/heart.svg" alt="heart" />
                    <p className="text-black300 text-xs font-medium ml-1">235k</p>
                  </div>
                  <div className="flex">
                    <img src="/assets/icons/messages.svg" alt="messages" />
                    <p className="text-black300 text-xs font-medium ml-1">100</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:flex block mt-3">
            <div>
              <img src="/assets/images/grand_city.png" alt="grand_city" className="min-w-[141px]" />
            </div>
            <p className="sm:ml-3 sm:mt-0 mt-3 text-[#5B5863] text-[13px] font-medium">Within 3 months time, #BuzzBite have helped over 500 Nigerians 🥰 make money from their social media😍💃. Within 3 months. Within 3 months time, <span className="text-violet600">#BuzzBite</span> have helped over 500 Nigerians 🥰 make money from their social media😍💃. Within 3 months. With in 3 months time, <span className="text-violet600">#BuzzBite</span> have helped over 500 Nigerians 🥰😍💃.  </p>
          </div>
        </div>
        <div className="bg-[#D9D9D9]/[0.2] shadow-dark10 lg:p-[11px_24px_11px_24px] p-[11px_16px_11px_16px] rounded mt-[20px] mb-4">
          <div className="flex sm:items-center items-start">
            <img src="/assets/images/avatar3.png" alt="avatar3" className="sm:w-auto w-[30px]" />
            <div className="sm:ml-3 ml-2 w-full">
              <div className="sm:flex block justify-between items-center w-full">
                <div className="flex items-center">
                  <img src="/assets/icons/facebook-rounded.svg" alt="facebook-rounded" />
                  <h1 className="text-black500 sm:text-[15px] text-xs font-medium ml-[6px]">Ahmed Samad</h1>
                  <span className="bg-[#5B5863] w-[3px] h-[3px] mx-[6px] rounded-md"></span>
                  <p className="text-gray110 sm:text-[12px] text-[8px] font-medium">234 followers</p>
                </div>
                <div>
                  <p className="text-black300 text-xs font-medium">Today 10:23am</p>
                </div>
              </div>
              <div className="sm:flex items-center">
                <a href="/" className="text-violet600 text-[10px] font-medium lg:mr-[53px] sm:mr-4">https://facebook.com/ahmed s._</a>
                <div className="flex items-center sm:mt-0 mt-[6px]">
                  <div className="flex mr-[30px]">
                    <img src="/assets/icons/heart.svg" alt="heart" />
                    <p className="text-black300 text-xs font-medium ml-1">235k</p>
                  </div>
                  <div className="flex">
                    <img src="/assets/icons/messages.svg" alt="messages" />
                    <p className="text-black300 text-xs font-medium ml-1">100</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-[#5B5863] mt-3 text-[13px] font-medium">Within 3 months time, #BuzzBite have helped over 500 Nigerians 🥰 make money from their social media😍💃. Within 3 months. Within 3 months time, <span className="text-violet600">#BuzzBite</span> have helped over 500 Nigerians 🥰 make money from their social media😍💃. Within 3 months. </p>
        </div>
        <div className="bg-[#D9D9D9]/[0.2] shadow-dark10 lg:p-[11px_24px_11px_24px] p-[11px_16px_11px_16px] rounded mt-[20px] mb-4">
          <div className="flex sm:items-center items-start">
            <img src="/assets/images/avatar3.png" alt="avatar3" className="sm:w-auto w-[30px]" />
            <div className="sm:ml-3 ml-2 w-full">
              <div className="sm:flex block justify-between items-center w-full">
                <div className="flex items-center">
                  <img src="/assets/icons/instagram.svg" alt="instagram" className="w-[16px]" />
                  <h1 className="text-black500 sm:text-[15px] text-xs font-medium ml-[6px]">Ahmed Samad</h1>
                  <span className="bg-[#5B5863] w-[3px] h-[3px] mx-[6px] rounded-md"></span>
                  <p className="text-gray110 sm:text-[12px] text-[8px] font-medium">234 followers</p>
                </div>
                <div>
                  <p className="text-black300 text-xs font-medium">Today 10:23am</p>
                </div>
              </div>
              <div className="sm:flex items-center">
                <a href="/" className="text-violet600 text-[10px] font-medium lg:mr-[53px] sm:mr-4">https://instagram.com/ahmed s._</a>
                <div className="flex items-center sm:mt-0 mt-[6px]">
                  <div className="flex mr-[30px]">
                    <img src="/assets/icons/heart.svg" alt="heart" />
                    <p className="text-black300 text-xs font-medium ml-1">235k</p>
                  </div>
                  <div className="flex">
                    <img src="/assets/icons/messages.svg" alt="messages" />
                    <p className="text-black300 text-xs font-medium ml-1">100</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:flex block mt-3">
            <div>
              <img src="/assets/images/grand_city.png" alt="grand_city" className="min-w-[141px]" />
              <div className="flex gap-[5px] mt-1">
                <img src="/assets/images/grand_city.png" alt="grand_city" className="w-[44px]" />
                <img src="/assets/images/grand_city.png" alt="grand_city" className="w-[44px]" />
                <img src="/assets/images/grand_city.png" alt="grand_city" className="w-[44px]" />
              </div>
            </div>
            <p className="sm:ml-3 sm:mt-0 mt-3 text-[#5B5863] text-[13px] font-medium w-[fit-content]">Within 3 months time, #BuzzBite have helped over 500 Nigerians 🥰 make money from their social media😍💃. Within 3 months. Within 3 months time, <span className="text-violet600">#BuzzBite</span> have helped over 500 Nigerians 🥰 make money from their social media😍💃. Within 3 months. With in 3 months time, <span className="text-violet600">#BuzzBite</span> have helped over 500 Nigerians 🥰😍💃.  </p>
          </div>
        </div>
        <div className="bg-[#D9D9D9]/[0.2] shadow-dark10 lg:p-[11px_24px_11px_24px] p-[11px_16px_11px_16px] rounded mt-[20px] mb-4">
          <div className="flex sm:items-center items-start">
            <img src="/assets/images/avatar3.png" alt="avatar3" className="sm:w-auto w-[30px]" />
            <div className="sm:ml-3 ml-2 w-full">
              <div className="sm:flex block justify-between items-center w-full">
                <div className="flex items-center">
                  <img src="/assets/icons/facebook-rounded.svg" alt="facebook-rounded" />
                  <h1 className="text-black500 sm:text-[15px] text-xs font-medium ml-[6px]">Ahmed Samad</h1>
                  <span className="bg-[#5B5863] w-[3px] h-[3px] mx-[6px] rounded-md"></span>
                  <p className="text-gray110 sm:text-[12px] text-[8px] font-medium">234 followers</p>
                </div>
                <div>
                  <p className="text-black300 text-xs font-medium">Today 10:23am</p>
                </div>
              </div>
              <div className="sm:flex items-center">
                <a href="/" className="text-violet600 text-[10px] font-medium lg:mr-[53px] sm:mr-4">https://facebook.com/ahmed s._</a>
                <div className="flex items-center sm:mt-0 mt-[6px]">
                  <div className="flex mr-[30px]">
                    <img src="/assets/icons/heart.svg" alt="heart" />
                    <p className="text-black300 text-xs font-medium ml-1">235k</p>
                  </div>
                  <div className="flex">
                    <img src="/assets/icons/messages.svg" alt="messages" />
                    <p className="text-black300 text-xs font-medium ml-1">100</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-[#5B5863] mt-3 text-[13px] font-medium">Within 3 months time, #BuzzBite have helped over 500 Nigerians 🥰 make money from their social media😍💃. Within 3 months. Within 3 months time, <span className="text-violet600">#BuzzBite</span> have helped over 500 Nigerians 🥰 make money from their social media😍💃. Within 3 months. </p>
        </div>
        </div>
      </div>
      <div className="bg-white rounded-lg py-[18px] lg:px-[30px] px-[18px] shadow-dark300 mt-7">
        <div className="sm:flex justify-between">
          <div>
            <h2 className="text-black500 font-semibold sm:text-[17px] leading-[30px]">
              Public Profiles
            </h2>
          </div>
          <div>
            <Listbox value={followers} onChange={setFollowers}>
              {({ open }) => (
                <>
                  <div className="relative sm:mt-0 mt-5">
                    <Listbox.Button className="inline-flex border-[1.7px] border-violet600 h-[36px] rounded bg-white shadow-dark10">
                      <div className="inline-flex py-[6.5px] px-[16px] w-full justify-between">
                        <div className="inline-flex items-center rounded-l-md border border-transparent bg-white">
                          <span className="text-black200 text-[15px] leading-[22px] font-medium">
                            Sort by:
                          </span>
                          <p className="ml-1 text-[15px] leading-[22px] font-medium text-violet600">
                            {followers.title}
                          </p>
                        </div>
                        <div className=" pl-2 flex items-center rounded-r-md text-sm font-medium text-white focus:outline-none ">
                          <img
                            src="/assets/icons/Arrow - Down 2.svg"
                            className=" text-white"
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
                        {followersOption.map((option) => (
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
                            {({ followers, active }) => (
                              <div className="flex flex-col">
                                <div className="flex justify-between">
                                  <p
                                    className={
                                      followers ? "font-semibold" : "font-normal"
                                    }
                                  >
                                    {option.title}
                                  </p>
                                  {followers ? (
                                    <span
                                      className={
                                        active ? "text-white" : "text-indigo-500"
                                      }
                                    >
                                      <CheckIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
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
          <div>
            <div className="flex flex-col">
              <div className="overflow-x-auto">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden ">
                    <table className="min-w-full ">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="py-3.5 pl-4 pr-3 text-left text-[15px] font-semibold text-violet600 sm:pl-6"
                          >
                            User
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5  text-left text-[15px] font-semibold text-violet600"
                          >Followers</th>
                          <th
                            scope="col"
                            className="px-3 py-3.5  text-left text-[15px] font-semibold text-violet600"
                          >
                            Engagement
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5  text-left text-[15px] font-semibold text-violet600"
                          >
                            Impressions
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5  text-left text-[15px] font-semibold text-violet600"
                          >
                            Location
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5  text-left text-[15px] font-semibold text-violet600"
                          >
                            Bio
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        {people.map((person, personIdx) => (
                          <tr
                            key={person.email}
                            className={
                              personIdx % 2 === 1
                                ? undefined
                                : "bg-gray-50"
                            }
                          >
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                              <div className="flex items-center">
                                <img src="/assets/images/avatar3.png" alt="avatar3" />
                                <div className=" ml-3 w-full">
                                  <div className="flex justify-between items-center w-full">
                                    <div className="flex items-center">
                                      <h1 className="text-black500 text-[15px] font-medium">{person.name}</h1>
                                    </div>
                                  </div>
                                  <div className="flex items-center">
                                    <a href="/" className="text-violet600 text-[10px] font-medium lg:mr-[53px] mr-8">{person.facebook}</a>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              <p className="text-[#5B5863] text-[13px]">{person.followers}</p>
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              <p className="text-[#5B5863] text-[13px]">{person.engage}</p>
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              <p className="text-[#5B5863] text-[13px]">{person.imprassion}</p>
                            </td>
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-sm font-medium sm:pr-6">
                              <p className="text-[#5B5863] text-[13px]">{person.locat}</p>
                            </td>
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-sm font-medium sm:pr-6 w-[240px]">
                              <p className="text-[#5B5863] text-[13px] grid"><span>{person.data}</span><span> {person.seconddata}</span></p>
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
  );
};

export default Trend;
