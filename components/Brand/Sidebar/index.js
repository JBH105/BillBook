import React, { useState } from "react";
import { useRouter } from "next/router";

import Link from "next/link";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const router = useRouter();
  const navigation = [
    {
      name: "Dashboard",
      href: "/brand/dashboard",
      icon1: "/assets/icons/Home-white.svg",
      icon2: "/assets/icons/Dashboard.svg",
    },
    {
      name: "Influencers",
      href: "/brand/influencersearch",
      icon1: "/assets/icons/people-white.svg",
      icon2: "/assets/icons/people-outline.svg",
    },
    {
      name: "User",
      href: "/brand/user",
      icon1: "/assets/icons/trand-white.svg",
      icon2: "/assets/icons/grow.svg",
    },
    {
      name: "Transaction",
      href: "/brand/transaction",
      icon1: "/assets/icons/people-white.svg",
      icon2: "/assets/icons/people-outline.svg",
    },
    {
      name: "Add Transaction",
      href: "/brand/addtransaction",
      href2: "/brand/campaigns/newcampaigns",
      icon2: "/assets/icons/speak-dark.svg",
      icon1: "/assets/icons/speak.svg",
    },
    {
      name: "Stock",
      href: "/brand/stock",
      href2: "/brand/campaigns/newcampaigns",
      icon2: "/assets/icons/speak-dark.svg",
      icon1: "/assets/icons/speak.svg",
    },
    {
      name: "sale Invoice",
      href: "/brand/sale",
      icon1: "/assets/icons/people-white.svg",
      icon2: "/assets/icons/people-outline.svg",
    },
  ];
  const HendleLogOut = () => {
    sessionStorage.removeItem("x-access-token");
    router.push("/brand/login");
  };
  return (
    <>
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-[262px] md:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex flex-grow flex-col overflow-y-auto custom-scroll bg-main pt-5">
          <div className="flex flex-shrink-0 items-center px-10">
            <div className="">
              <img
                className="pl-3 "
                src="/assets/icons/LogoFullName.svg"
                alt="Your Company"
              />
            </div>
          </div>
          <div className="px-10 mt-12 ">
            <button className="bg-white ml-2  flex justify-center text-violet600 whitespace-nowrap group flex items-center px-3 py-2 text-[13px] leading-5 font-semibold rounded-md">
              <img src="/assets/icons/flash.svg" className="mr-[9px]" /> Create
              Campaign
            </button>
          </div>
          <div className="mt-9 flex flex-1 flex-col">
            <nav className=" space-y-[32px] pb-4">
              {navigation.map((item, index) => (
                <div
                  key={index}
                  className="pl-[60px] group flex relative h-[30px]"
                >
                  <Link
                    href={item.href}
                    className={` ${router.asPath === item.href ||
                      router.asPath === item.href2
                      ? " text-white font-semibold "
                      : "text-gray-400 font-medium group-hover:font-semibold group-hover:text-white"
                      } group flex items-center text-[15px]`}
                  >
                    <img
                      src={
                        router.asPath === item.href ||
                          router.asPath === item.href2
                          ? item.icon1
                          : item.icon2
                      }
                      className="mr-3 h-5 w-5 flex-shrink-0 "
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                  {router.asPath === item.href ||
                    router.asPath === item.href2 ? (
                    <div className="h-full absolute  right-[2px] w-[4px] rounded-[20px] bg-white"></div>
                  ) : (
                    ""
                  )}
                  <div className="h-full absolute hidden group-hover:block right-[2px] w-[4px] rounded-[20px] bg-white"></div>
                </div>
              ))}
            </nav>
            <div className="px-10 mt-[78px] ">
              <div className="rounded-[15px] overflow-hidden relative bg-[#f0e7fd]  pt-5 pb-3.5">
                <div className="absolute right-0 bottom-0">
                  <img src="/assets/icons/fram2.svg" />
                </div>
                <div className="text-center relative z-[3]">
                  <span className="block text-[13px] text-black500 font-medium">
                    Unlock more Information <br />
                    now! Upgrade to pro
                  </span>
                  <Link href="/brand/setting/upgradeplan">
                    <button className="text-white bg-[#5c47cf] mt-[18px] px-[15.5px]  py-[7px] text-xs font-semibold rounded-[5px]">
                      Upgrade Now
                    </button>
                  </Link>
                </div>
                <div className="absolute top-0 left-0 rotate-180">
                  <img src="/assets/icons/fram2.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="pl-[60px] mt-10 space-y-[32px] mb-5">
            <a className="text-gray-400 hover:text-white hover:font-semibold group cursor-pointer flex items-center  text-[15px] font-medium rounded-md">
              <img
                src="/assets/icons/help.svg"
                className="mr-4 flex-shrink-0 "
                aria-hidden="true"
              />
              Help & Support
            </a>
            <a className="text-gray-400 hover:text-white group cursor-pointer hover:font-semibold flex items-center  text-[15px] font-medium rounded-md">
              <div
                className="text-gray-400 hover:text-white group cursor-pointer hover:font-semibold flex items-center  text-[15px] font-medium rounded-md"
                onClick={HendleLogOut}
              >
                <img
                  src="/assets/icons/logout.svg"
                  className="mr-4 h-5 w-5 flex-shrink-0 "
                  aria-hidden="true"
                />
                Logout
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
