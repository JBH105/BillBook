import { ArrowLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import ContentAll from "./contentall";

const contect = [
  {
    profile: "/assets/images/avatar2.png",
    name: "@tundednut",
    day: "2 days ago",
    cost: "N700,00",
    img: "/assets/images/image25.png",
    impression: "120,000",
    engRate: "32%",
    video: true,
  },
  {
    profile: "/assets/images/avatar2.png",
    name: "@tundednut",
    day: "2 days ago",
    cost: "N700,00",
    img: "/assets/images/image25.png",
    impression: "120,000",
    engRate: "32%",
    video: false,
  },
  {
    profile: "/assets/images/avatar2.png",
    name: "@tundednut",
    day: "2 days ago",
    cost: "N700,00",
    img: "/assets/images/image25.png",
    impression: "120,000",
    engRate: "32%",
    video: true,
  },
  {
    profile: "/assets/images/avatar2.png",
    name: "@tundednut",
    day: "2 days ago",
    cost: "N700,00",
    img: "/assets/images/image25.png",
    impression: "120,000",
    engRate: "32%",
    video: false,
  },
  {
    profile: "/assets/images/avatar2.png",
    name: "@tundednut",
    day: "2 days ago",
    cost: "N700,00",
    img: "/assets/images/image25.png",
    impression: "120,000",
    engRate: "32%",
    video: true,
  },
  {
    profile: "/assets/images/avatar2.png",
    name: "@tundednut",
    day: "2 days ago",
    cost: "N700,00",
    img: "/assets/images/image25.png",
    impression: "120,000",
    engRate: "32%",
    video: true,
  },
];

const Content = () => {
  const [instagram, setInstagram] = useState(false);
  const [tweeter, setTweeter] = useState(false);
  const [facebook, setfacebook] = useState(false);
  const [youtube, setYoutube] = useState(false);
  const [allContent, setAllContent] = useState(false);

  const handleFalse = () => {
    setYoutube(false);
    setfacebook(false);
    setInstagram(false);
    setTweeter(false);
    setAllContent(false);
  };
  return (
    <>
      {allContent ? (
        <ContentAll
          handleFalse={handleFalse}
          instagram={instagram}
          tweeter={tweeter}
          facebook={facebook}
          youtube={youtube}
        />
      ) : (
        <div className="grid gap-9">
          <div className="">
            <div className="bg-violet210 rounded py-[9px] px-[17px]">
              <div className="flex relative justify-between">
                <div className="flex items-center">
                  <div className="bg-white rounded-full p-[5px] mr-2">
                    <img
                      src="/assets/icons/instagram.svg"
                      className="w-[17px] h-[17px]"
                    />
                  </div>
                  <h2 className="text-[15px] text-black400 font-semibold leading-[22px]">
                    Instagram Stories
                  </h2>
                </div>
                <button
                  onClick={() => {
                    setInstagram(true);
                    setAllContent(true);
                  }}
                  className="text-violet600 flex text-xs md:text-[15px] font-medium leading-[22px] items-center"
                >
                  See More{" "}
                  <ChevronRightIcon
                    className="w-4 h-4 md:h-5 md:w-5 text-violet600"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
            <div className="mt-6 mb-6 flex-wrap  flex justify-between">
              <div>
                <span className="text-[15px] leading-[22px] font-medium leading-[22px] text-black400">
                  <span className="font-semibold ">1,256 </span>contents found
                </span>
              </div>
              <div className="flex items-center">
                <img
                  src="/assets/icons/calendar.svg"
                  className="opacity-70  mr-[9px]"
                />
                <div className="hidden md:block mt-2 sm:mt-0 ">
                  <span className="text-black400 block sm:inline-block font-medium text-[15px] whitespace-nowrap mr-3">
                    <span className="font-semibold">From:</span> 20/05/2022
                  </span>
                  <span className="text-black400 block sm:inline-block font-medium text-[15px] whitespace-nowrap">
                    <span className="font-semibold">To:</span> 31/05/2022
                  </span>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols lg:grid-cols-4 xl:grid-cols-6 2xl:gid-cols-9 gap-x-4 gap-y-6">
              {contect.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-[#D9D9D9]/[0.25]  rounded-[6px]"
                  >
                    <div className="flex gap-2 p-3 pb-2">
                      <div className="flex-none">
                        <div className="p-px from-[#5B26CF] flex-none bg-gradient-to-r to-[#D62595] rounded-full">
                          <img
                            src={item.profile}
                            className="w-[25px] h-[25px] fllex-none rounded-full"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-[13px] leading-[18px] font-semibold text-black500">
                          {item.name}
                        </h3>
                        <span className="text-[10px] leading-[15px] font-medium text-gray110">
                          {item.day}
                        </span>
                      </div>
                    </div>
                    <div className="h-[210px] relative">
                      <div className="absolute bg-black500/[0.5] z-[2] py-0.5 top-0 left-0 right-0 text-center">
                        <span className="text-white text-[10px] leading-[15px] font-semibold">
                          Cost: {item.cost}
                        </span>
                      </div>
                      {item.video === true ? (
                        <div className="bg-black/[0.5] flex justify-center items-center absolute w-full h-full top-0 bottom-0 right-0 left-0">
                          <button className="foucs:outline-none">
                            <img
                              src="/assets/icons/play-icon.svg"
                              className="w-[24px] h-[24px]"
                            />
                          </button>
                        </div>
                      ) : (
                        ""
                      )}

                      <img src={item.img} className="w-full h-full" />
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-[13px] mb-1 block leading-[20px] font-medium text-[#84828A]">
                        Impression:{item.impression}
                      </span>
                      <span className="text-[13px] block leading-[20px] font-medium text-[#84828A]">
                        Eng Rate: {item.engRate}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="">
            <div className="bg-violet210 rounded py-[9px] px-[17px]">
              <div className="flex relative justify-between">
                <div className="flex items-center">
                  <div className="bg-white rounded-full p-[5px] mr-2">
                    <img
                      src="/assets/icons/Twitter.svg"
                      className="w-[17px] h-[17px]"
                    />
                  </div>
                  <h2 className="text-[15px] text-black400 font-semibold leading-[22px]">
                    Tweet
                  </h2>
                </div>
                <button
                  onClick={() => {
                    setTweeter(true);
                    setAllContent(true);
                  }}
                  className="text-violet600 flex text-xs md:text-[15px] font-medium leading-[22px] items-center"
                >
                  See More{" "}
                  <ChevronRightIcon
                    className="w-4 h-4 md:h-5 md:w-5 text-violet600"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
            <div className="mt-6 mb-6 flex-wrap  flex justify-between">
              <div>
                <span className="text-[15px] leading-[22px] font-medium leading-[22px] text-black400">
                  <span className="font-semibold ">1,256 </span>contents found
                </span>
              </div>
              <div className="flex items-center">
                <img
                  src="/assets/icons/calendar.svg"
                  className="opacity-70  mr-[9px]"
                />
                <div className="hidden md:block mt-2 sm:mt-0 ">
                  <span className="text-black400 block sm:inline-block font-medium text-[15px] whitespace-nowrap mr-3">
                    <span className="font-semibold">From:</span> 20/05/2022
                  </span>
                  <span className="text-black400 block sm:inline-block font-medium text-[15px] whitespace-nowrap">
                    <span className="font-semibold">To:</span> 31/05/2022
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols lg:grid-cols-4 xl:grid-cols-6 2xl:gid-cols-9 gap-x-4 gap-y-6">
              {contect.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-[#D9D9D9]/[0.25] rounded-[6px]"
                  >
                    <div className="flex gap-2 p-3 pb-2">
                      <div className="flex-none">
                        <div className="p-px from-[#5B26CF] flex-none bg-gradient-to-r to-[#D62595] rounded-full">
                          <img
                            src={item.profile}
                            className="w-[25px] h-[25px] fllex-none rounded-full"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-[13px] leading-[18px] font-semibold text-black500">
                          {item.name}
                        </h3>
                        <span className="text-[10px] leading-[15px] font-medium text-gray110">
                          {item.day}
                        </span>
                      </div>
                    </div>
                    <div className="relative h-[219px]">
                      <div className=" bg-black500/[0.5] z-[2] py-0.5 top-0 left-0 right-0 text-center">
                        <span className="text-white text-[10px] leading-[15px] font-semibold">
                          Cost: {item.cost}
                        </span>
                      </div>
                      <p className="py-1.5 truncate hover:overflow-auto hover:whitespace-normal hover:text-clip hover:absolute hover:top-[28px] hover:bg-[#D9D9D9] hover:bottom-0 px-3 text-gray750 text-xs leading-[18px]">
                        Within 3 months time, we have helped over 500 Nigerians
                        make money from their social media. Within 3 months
                        time, we have helped over 500. Within 3 months time, we
                        have helped over 500 Nigerians...
                      </p>

                      <img src={item.img} className="w-full h-[161px]" />
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-[13px] mb-1 block leading-[20px] font-medium text-[#84828A]">
                        Impression:{item.impression}
                      </span>
                      <span className="text-[13px] block leading-[20px] font-medium text-[#84828A]">
                        Eng Rate: {item.engRate}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="">
            <div className="bg-violet210 rounded py-[9px] px-[17px]">
              <div className="flex relative justify-between">
                <div className="flex items-center">
                  <div className="bg-white rounded-full p-[5px] mr-2">
                    <img
                      src="/assets/icons/YouTube.svg"
                      className="w-[17px] h-[17px]"
                    />
                  </div>
                  <h2 className="text-[15px] text-black400 font-semibold leading-[22px]">
                    YouTube Videos
                  </h2>
                </div>
                <button
                  onClick={() => {
                    setYoutube(true);
                    setAllContent(true);
                  }}
                  className="text-violet600 flex text-xs md:text-[15px] font-medium leading-[22px] items-center"
                >
                  See More{" "}
                  <ChevronRightIcon
                    className="w-4 h-4 md:h-5 md:w-5 text-violet600"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
            <div className="mt-6 mb-6 flex-wrap  flex justify-between">
              <div>
                <span className="text-[15px] leading-[22px] font-medium leading-[22px] text-black400">
                  <span className="font-semibold ">1,256 </span>contents found
                </span>
              </div>
              <div className="flex items-center">
                <img
                  src="/assets/icons/calendar.svg"
                  className="opacity-70  mr-[9px]"
                />
                <div className="hidden md:block mt-2 sm:mt-0">
                  <span className="text-black400 block sm:inline-block font-medium text-[15px] whitespace-nowrap mr-3">
                    <span className="font-semibold">From:</span> 20/05/2022
                  </span>
                  <span className="text-black400 block sm:inline-block font-medium text-[15px] whitespace-nowrap">
                    <span className="font-semibold">To:</span> 31/05/2022
                  </span>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols lg:grid-cols-4 xl:grid-cols-6 2xl:gid-cols-9 gap-x-4 gap-y-6">
              {contect.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-[#D9D9D9]/[0.25]  rounded-[6px]"
                  >
                    <div className="flex gap-2 p-3 pb-2">
                      <div className="flex-none">
                        <div className="p-px from-[#5B26CF] flex-none bg-gradient-to-r to-[#D62595] rounded-full">
                          <img
                            src={item.profile}
                            className="w-[25px] h-[25px] fllex-none rounded-full"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-[13px] leading-[18px] font-semibold text-black500">
                          {item.name}
                        </h3>
                        <span className="text-[10px] leading-[15px] font-medium text-gray110">
                          {item.day}
                        </span>
                      </div>
                    </div>
                    <div className="h-[210px] relative">
                      <div className="absolute bg-black500/[0.5] z-[2] py-0.5 top-0 left-0 right-0 text-center">
                        <span className="text-white text-[10px] leading-[15px] font-semibold">
                          Cost: {item.cost}
                        </span>
                      </div>
                      {item.video === true ? (
                        <div className="bg-black/[0.5] flex justify-center items-center absolute w-full h-full top-0 bottom-0 right-0 left-0">
                          <button className="foucs:outline-none">
                            <img
                              src="/assets/icons/play-icon.svg"
                              className="w-[24px] h-[24px]"
                            />
                          </button>
                        </div>
                      ) : (
                        ""
                      )}

                      <img src={item.img} className="w-full h-full" />
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-[13px] mb-1 block leading-[20px] font-medium text-[#84828A]">
                        Impression:{item.impression}
                      </span>
                      <span className="text-[13px] block leading-[20px] font-medium text-[#84828A]">
                        Eng Rate: {item.engRate}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="">
            <div className="bg-violet210 rounded py-[9px] px-[17px]">
              <div className="flex relative justify-between">
                {/* <button className="absolute left-0  foucs:outline-none top-px">
                        <ArrowLeftIcon className="w-[24px] h-[24px] text-black400 " />
                    </button> */}
                <div className="flex items-center">
                  <div className="bg-white rounded-full p-[5px] mr-2">
                    <img
                      src="/assets/icons/facebook.svg"
                      className="w-[17px] h-[17px]"
                    />
                  </div>
                  <h2 className="text-[15px] text-black400 font-semibold leading-[22px]">
                    Facebook Posts
                  </h2>
                </div>
                <button
                  onClick={() => {
                    setfacebook(true);
                    setAllContent(true);
                  }}
                  className="text-violet600 flex text-xs md:text-[15px] font-medium leading-[22px] items-center"
                >
                  See More{" "}
                  <ChevronRightIcon
                    className="w-4 h-4 md:h-5 md:w-5 text-violet600"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
            <div className="mt-6 mb-6 flex-wrap  flex justify-between">
              <div>
                <span className="text-[15px] leading-[22px] font-medium leading-[22px] text-black400">
                  <span className="font-semibold ">1,256 </span>contents found
                </span>
              </div>
              <div className="flex items-center">
                <img
                  src="/assets/icons/calendar.svg"
                  className="opacity-70  mr-[9px]"
                />
                <div className="hidden md:block mt-2 sm:mt-0">
                  <span className="text-black400 block sm:inline-block font-medium text-[15px] whitespace-nowrap mr-3">
                    <span className="font-semibold">From:</span> 20/05/2022
                  </span>
                  <span className="text-black400 block sm:inline-block font-medium text-[15px] whitespace-nowrap">
                    <span className="font-semibold">To:</span> 31/05/2022
                  </span>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols lg:grid-cols-4 xl:grid-cols-6 2xl:gid-cols-9 gap-x-4 gap-y-6">
              {contect.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-[#D9D9D9]/[0.25]  rounded-[6px]"
                  >
                    <div className="flex gap-2 p-3 pb-2">
                      <div className="flex-none">
                        <div className="p-px from-[#5B26CF] flex-none bg-gradient-to-r to-[#D62595] rounded-full">
                          <img
                            src={item.profile}
                            className="w-[25px] h-[25px] fllex-none rounded-full"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-[13px] leading-[18px] font-semibold text-black500">
                          {item.name}
                        </h3>
                        <span className="text-[10px] leading-[15px] font-medium text-gray110">
                          {item.day}
                        </span>
                      </div>
                    </div>
                    <div className="h-[210px] relative">
                      <div className="absolute bg-black500/[0.5] z-[2] py-0.5 top-0 left-0 right-0 text-center">
                        <span className="text-white text-[10px] leading-[15px] font-semibold">
                          Cost: {item.cost}
                        </span>
                      </div>
                      {item.video === true ? (
                        <div className="bg-black/[0.5] flex justify-center items-center absolute w-full h-full top-0 bottom-0 right-0 left-0">
                          <button className="foucs:outline-none">
                            <img
                              src="/assets/icons/play-icon.svg"
                              className="w-[24px] h-[24px]"
                            />
                          </button>
                        </div>
                      ) : (
                        ""
                      )}

                      <img src={item.img} className="w-full h-full" />
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-[13px] mb-1 block leading-[20px] font-medium text-[#84828A]">
                        Impression:{item.impression}
                      </span>
                      <span className="text-[13px] block leading-[20px] font-medium text-[#84828A]">
                        Eng Rate: {item.engRate}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Content;
