import { Switch, Tab } from "@headlessui/react";
import { ArrowDownLeftIcon, ArrowLeftIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import Content from "./content";
import Influencers from "./influencers";
import Tasks from "./tasks";
const statusbar = [
  {
    name: "Budget Spent",
    value: "N145,000",
  },
  {
    name: "Active Content",
    value: "21",
  },
  {
    name: "Content in Review",
    value: "8",
  },
  {
    name: "Influencers Hired",
    value: "45",
  },
  {
    name: "Influencer Requests",
    value: "10",
  },
];
const tab = [
  {
    name: "Overview",
  },
  {
    name: "Influencers",
    tab: <Influencers />,
  },
  {
    name: "Tasks",
    tab: <Tasks />,
  },
  {
    name: "Content",
    tab: <Content />,
  },
  {
    name: "Reports",
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const NewCampaigns = () => {
  const [selectedIndex, setSelectedIndex] = useState(2);
  const [enabled, setEnabled] = useState(false);
  return (
    <main className="bg-main-bg px-4 sm:px-6 xl:px-[60px]">
      <div className="py-6">
        <div className=" flex flex-wrap sm:flex-nowrap gap-2 items-center justify-between ">
          <h1 className="text-[18px] md:text-xl leading-[26px] font-semibold text-black600">
            Campaigns
          </h1>
          <div className="flex w-full sm:w-auto flex-wrap sm:flex-nowrap items-center gap-4">
            {selectedIndex === 1 ? (
              <>
                <div className="flex w-full justify-end sm:justify-start sm:w-auto flex-wrap gap-4">
                  <button className="focus:outline-none flex-none rotate-[0deg] active:rotate-[360deg] ease-linear transition-all duration-100 ">
                    <img
                      src="/assets/icons/reload-blue.svg"
                      className="w-[15px] h-[15px]"
                    />
                  </button>
                  <Switch.Group as="div" className="flex items-center">
                    <Switch
                      checked={enabled}
                      onChange={setEnabled}
                      className={classNames(
                        enabled ? "bg-violet600" : "bg-gray-200",
                        "relative inline-flex h-[21px] w-[41px] flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none"
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={classNames(
                          enabled
                            ? "translate-x-[1.22rem]"
                            : "translate-x-[1px]",
                          "pointer-events-none inline-block h-[17px] w-[17px] transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                        )}
                      />
                    </Switch>
                    <Switch.Label as="span" className="ml-[5px]">
                      <span className="text-[15px] font-medium text-black300">
                        Public
                      </span>
                    </Switch.Label>
                  </Switch.Group>
                  <button className="bg-violet600 w-full sm:w-auto shadow-dark10 leading-[22px] text-white px-4 py-[7px] text-[15px]  font-medium rounded-[8px]">
                    Top up
                  </button>
                </div>
              </>
            ) : (
              <></>
            )}
            <button
              className={`${
                selectedIndex === 1
                  ? " text-violet600 bg-[#DED4F580]"
                  : "bg-violet600 text-white  shadow-dark10"
              }  leading-[22px] w-full sm:w-auto  px-4 py-[7px] text-[15px]  font-medium rounded-[8px]`}
            >
              End Campaign
            </button>
          </div>
        </div>
      </div>
      <div className="pb-4">
        <div className="grid grid-cols-1 divide-y bg-white divide-gray-200  rounded-xl md:py-[18px] shadow-mainbox sm:grid-cols-2 lg:grid-rows-2 xl:grid-rows-1 lg:grid-cols-3 xl:lg:grid-cols-5 sm:divide-y-0 sm:divide-x">
          {statusbar.map((item, index) => (
            <div
              key={index}
              className="pl-3 text-center md:text-left md:pl-9 pr-3 py-3 font-medium"
            >
              <span className="text-black300 text-[15px] leading-[22px] font-medium block">
                {item.name}
              </span>

              <span className="text-violet600 font-bold text-xl mt-3 block">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-[15px] bg-white shadow-ratecard py-5 px-5 md:px-[30px]">
        <h2 className="text-black600 mb-5 font-semibold text-[18px] md:text-xl">
          Campaign Manager
        </h2>
        <div className="mb-4">
          <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            <Tab.List className="gap-[10px] md:gap-[16px] lg:gap-[48px] xl:gap-[64px] mb-3.5 flex border-b border-[#CECDD033]">
              {tab.map((item, index) => (
                <Tab
                  key={index}
                  className={({ selected }) =>
                    classNames(
                      "leading-[18px] md:leading-[22px] w-auto focus:outline-none text-xs md:text-[13px] lg:text-[15px] font-medium",
                      selected
                        ? "text-white py-px px-1 md:py-1 md:px-5 lg:px-7 rounded-t-xl bg-violet600"
                        : "bg-transparent text-black400"
                    )
                  }
                >
                  {item.name}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels>
              {tab.map((item, index) => (
                <Tab.Panel key={index}>{item.tab}</Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </main>
  );
};

export default NewCampaigns;
