import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Bars3BottomLeftIcon, BellIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { BsCaretDownFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const pages = [
  { name: "Projects", href: "#", current: false },
  { name: "Project Nero", href: "#", current: true },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = ({ setSidebarOpen }) => {
  const router = useRouter();
  const HendleLogOut = () => {
    sessionStorage.removeItem("x-access-token");
    router.push("/brand/login");
  };
  const userNavigation = [
    { name: "Your Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Sign out", href: "#", on: HendleLogOut },
  ];
  return (
    <>
      {/* Static sidebar for desktop */}
      <div className="sticky top-0 z-10 flex h-[66px] h-md-[60px] flex-shrink-0 bg-white shadow">
        <div className="flex flex-1 justify-between px-4 mx-auto  px-[19px]  sm:px-6 lg:px-16 ">
          <div className="flex items-center ">
            <img
              src="/assets/icons/fulllogoBlue.svg"
              className={`${
                router.pathname == "/brand/setting/upgradeplan"
                  ? "flex"
                  : "md:hidden "
              }`}
            />
            {router.pathname == "/brand/setting/upgradeplan" ? (
              <nav className="hidden md:flex  ml-10" aria-label="Breadcrumb">
                <ol role="list" className="flex items-center space-x-[5px]">
                  <li>
                    <Link
                      href="#"
                      className=" text-sm font-medium text-black200 hover:text-gray-700"
                    >
                      Settings
                    </Link>
                  </li>
                  <li>
                    <ChevronRightIcon
                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                  </li>
                  <li>
                    <div className="flex items-center">
                      <Link
                        href="#"
                        className=" text-sm font-medium text-black300 hover:text-gray-700"
                      >
                        Upgrade Plan
                      </Link>
                    </div>
                  </li>
                </ol>
              </nav>
            ) : (
              ""
            )}
          </div>
          <div className="ml-4 flex items-center md:ml-6">
            <button
              type="button"
              className="rounded-md hidden md:flex items-center bg-blue100 mr-4 font-semibold flex py-[5px] px-2.5 border border-[#5c47cf] text-[#5c47cf]  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <img
                src="/assets/icons/wallet1.svg"
                className=" mr-2 "
                alt="wallet"
              />
              ₦65,000
            </button>
            <button
              type="button"
              className="rounded-[10px] flex justify-center items-center w-[35px] md:w-auto md:h-auto h-[33px] bg-blue100 md:py-2 md:px-3.5 mr-2  text-[#5c47cf] hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <img src="/assets/icons/bell.svg" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="hidden md:flex relative ">
              <div>
                <Menu.Button className="flex max-w-xs items-center rounded-full  p-[5px]  bg-[#f2edfe] text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-5 w-5 rounded-full"
                    src="/assets/icons/pepsi.png"
                    alt=""
                  />
                  <BsCaretDownFill className="h-2 w-2 ml-1 text-[#5c47cf]" />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {userNavigation.map((item) => (
                    <Menu.Item key={item.name}>
                      {({ active }) => (
                        <button className="flex w-full" onClick={item?.on}>
                          <a
                            href={item.href}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            {item.name}
                          </a>
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
            <button
              type="button"
              className="rounded-[10px] flex md:hidden justify-center items-center w-[35px] md:w-auto md:h-auto h-[33px] bg-blue100 md:py-2 md:px-3.5 ml-2  text-[#5c47cf] hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu as="div" className="md:flex relative ">
                <div>
                  <Menu.Button className="flex max-w-xs items-center rounded-full  p-[5px]  bg-[#f2edfe] text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span className="sr-only">Open user menu</span>
                    <img
                      src="/assets/icons/menu.svg"
                      className=""
                      aria-hidden="true"
                    />
                    {/* <BsCaretDownFill className="h-2 w-2 ml-1 text-[#5c47cf]" /> */}
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <button className="flex w-full" onClick={item?.on}>
                            <a
                              href={item.href}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              {item.name}
                            </a>
                          </button>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
