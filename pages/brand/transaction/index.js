import React, { Fragment, useState, Component } from "react";
import {
  Disclosure,
  Dialog,
  Transition,
  Listbox,
  Menu,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  CheckIcon,
  ChevronDownIcon,
  StarIcon,
} from "@heroicons/react/20/solid";
// import ReactApexChart from "react-apexcharts";
import dynamic from "next/dynamic";
import { randomIntFromInterval } from "../../../util/randomNumber";
// const ReactApexChart =dynamic()
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
const people = [
  {
    id: 1,
    img: "/assets/images/avatar2.png",
    p1: "/assets/icons/instagram.svg",
    p2: "/assets/icons/facebook-rounded.svg",
    p3: "/assets/icons/Twitter.svg",
    p4: "/assets/icons/Tiktok.svg",
    name: "Yewande B.",
    location: "Ibadan, Nigeria.",
    reach: "340,029",
    eng: "3.2%",
    interests: "Foods, Entertainment, Healthcare.",
  },
  {
    id: 2,
    img: "/assets/images/avatar2.png",
    p1: "/assets/icons/instagram.svg",
    p2: "/assets/icons/facebook-rounded.svg",
    p3: "/assets/icons/Twitter.svg",
    p4: "/assets/icons/Tiktok.svg",
    name: "Yewande B.",
    location: "Ibadan, Nigeria.",
    reach: "340,029",
    eng: "3.2%",
    interests: "Foods, Entertainment, Healthcare.",
  },
  {
    id: 3,
    img: "/assets/images/avatar2.png",
    p1: "/assets/icons/instagram.svg",
    p2: "/assets/icons/facebook-rounded.svg",
    p3: "/assets/icons/Twitter.svg",
    p4: "/assets/icons/Tiktok.svg",
    name: "Yewande B.",
    location: "Ibadan, Nigeria.",
    reach: "340,029",
    eng: "3.2%",
    interests: "Foods, Entertainment, Healthcare.",
  },
  {
    id: 4,
    img: "/assets/images/avatar3.png",
    p1: "/assets/icons/instagram.svg",
    p2: "/assets/icons/facebook-rounded.svg",
    p3: "/assets/icons/Twitter.svg",
    p4: "/assets/icons/Tiktok.svg",
    name: "Ahmed S.",
    location: "Ibadan, Nigeria.",
    reach: "101,948",
    eng: "11.5%",
    interests: "Foods, Entertainment, Healthcare.",
  },
  {
    id: 5,
    img: "/assets/images/avatar1.png",
    p1: "/assets/icons/instagram.svg",
    p2: "/assets/icons/facebook-rounded.svg",
    p3: "/assets/icons/Twitter.svg",
    p4: "/assets/icons/Tiktok.svg",
    name: "Tunde B.",
    location: "Ibadan, Nigeria.",
    reach: "340,029",
    eng: "28.2%",
    interests: "Foods, Entertainment, Healthcare.",
  },
  {
    id: 6,
    img: "/assets/images/avatar3.png",
    p1: "/assets/icons/instagram.svg",
    p2: "/assets/icons/facebook-rounded.svg",
    p3: "/assets/icons/Twitter.svg",
    p4: "/assets/icons/Tiktok.svg",
    name: "Ahmed S.",
    location: "Ibadan, Nigeria.",
    reach: "101,948",
    eng: "11.5%",
    interests: "Foods, Entertainment, Healthcare.",
  },
  {
    id: 7,
    img: "/assets/images/avatar1.png",
    p1: "/assets/icons/instagram.svg",
    p2: "/assets/icons/facebook-rounded.svg",
    p3: "/assets/icons/Twitter.svg",
    p4: "/assets/icons/Tiktok.svg",
    name: "Tunde B.",
    location: "Ibadan, Nigeria.",
    reach: "340,029",
    eng: "28.2%",
    interests: "Foods, Entertainment, Healthcare.",
  },
  // More people...
];
const InfluencerSearch = () => {
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
                        {people.map((person, personIdx) => (
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
                                    {person.name.match(/\b(\w)/g).slice(0, 2)}
                                  </div>
                                </div>
                                <div className="ml-2">
                                  <div className="font-semibold text-[13px] leading-5  text-black500">
                                    {person.name}
                                  </div>
                                  <div className="text-black400 text-[10px] leading-[15px] flex items-center font-medium">
                                    <img
                                      src="/assets/icons/location.svg"
                                      className="mr-1"
                                    />{" "}
                                    <span>{person.location}</span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="whitespace-nowrap py-3 px-3 text-sm  font-medium text-gray-900 ">
                              <div className="flex space-x-[7px]">
                                <div className="w-[22.75px] h-[22.75px] flex items-center justify-center rounded-full bg-[#EEEEEE]">
                                  <img src={person.p1} className="w-[60%]" />
                                </div>
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-3 py-3 leading-5 font-medium  text-xs text-gray110">
                              {person.reach}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3 leading-5 font-medium  text-xs text-gray110">
                              {person.eng}
                            </td>
                            <td className="relative min-w-[190px]  whitespace-wordwrap text-gray110 py-3 px-3 text-left text-[13px] leading-5 font-medium ">
                              <span className="">{person.interests}</span>
                            </td>
                            <td className="whitespace-nowrap min-w-[210px]  px-3 py-3 text-sm text-gray-500">
                              <div className="flex space-x-[6px] justify-center">
                                <img
                                  className="w-[58px] h-[51px] rounded-[12px]"
                                  src="/assets/images/image22.png"
                                />
                              </div>
                            </td>
                            <td></td>
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
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default InfluencerSearch;
