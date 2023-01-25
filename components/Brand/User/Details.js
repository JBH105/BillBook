import React, { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";

import RecentHistory from "./UserTab/RecentHistory";
import RecentTransaction from "./UserTab/RecentTransaction";
import { randomIntFromInterval } from "../../../util/randomNumber";
import Profile from "./UserTab/profile";
import { VenderTransaction } from "../../../Redux/action/transaction";
import { useDispatch } from "react-redux";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} before:hidden`}
      style={{
        ...style,
        background: "#fff",
        borderRadius: "100%",
        width: "43px",
        height: "43px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "-4px 4px 12px 1px rgba(0, 0, 0, 0.12)",
      }}
      onClick={onClick}
    >
      <img src="/assets/icons/left-dark.svg" className="rotate-180" />
    </div>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} before:hidden hidden z-10`}
      style={{
        ...style,
        background: "#fff",
        borderRadius: "100%",
        width: "43px",
        height: "43px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "-4px 4px 12px 1px rgba(0, 0, 0, 0.12)",
      }}
      onClick={onClick}
    >
      <img src="/assets/icons/left-dark.svg" />
    </div>
  );
}
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const tab = [
  { name: "Recent History" },
  { name: "Recent Transaction" },
  { name: "Profile" },
];

export default function Details({ profileView, setProfileView, userDetail }) {
  const dispatch = useDispatch();
  const [openTab, setOpenTab] = React.useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    HandleData();
  }, [page, userDetail.id]);
  const HandleData = async () => {
    if (userDetail.id) {
      dispatch(VenderTransaction({ id: userDetail?.id, page: page }));
    }
  };
  return (
    <div>
      {" "}
      <Transition.Root show={profileView} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={setProfileView}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-[#00000080] " />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex justify-end">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-[988px] flex-1 flex-col bg-white">
                <div className="flex flex-col flex-shrink-0 pt-8 px-3 md:px-12">
                  <div className="w-full flex items-center space-x-[25px]">
                    <button
                      className="focus:outline-none"
                      onClick={() => setProfileView(false)}
                    >
                      <img src="/assets/icons/left-dark.svg" />
                    </button>
                    <h2 className="text-black600 font-semibold text-xl">
                      Vender’s Profile
                    </h2>
                  </div>

                  <div className="mt-[30px]">
                    <div className="md:flex md:space-x-5">
                      <div
                        className="text-[40px] rounded-full text-center w-[107px] h-[110px] rounded-full mx-auto md:ml-0 grid items-center"
                        style={{
                          background: randomIntFromInterval(0, 9),
                          color: "white",
                          textTransform: "uppercase",
                        }}
                      >
                        {/* JB */}
                        {userDetail &&
                          userDetail.fullName &&
                          userDetail.fullName.slice(0, 2)}
                      </div>
                      <div className="flex-1">
                        <div>
                          <div className="md:flex items-center space-y-2 md:space-y-0 mt-3 md:mt-0 justify-between">
                            <h2 className="text-[17px] text-center md:text-left font-semibold text-black500 leading-[26px]">
                              {/* Jonathon B. */}
                              {userDetail.fullName}
                            </h2>
                          </div>
                          <div className="space-y-2 md:space-y-0">
                            <div className="sm:flex justify-center sm:justify-between mb-[5px]">
                              <div className="flex justify-center sm:justify-start items-center">
                                <img
                                  src="/assets/icons/location.svg"
                                  className="mr-1"
                                />
                                <span className="text-black400 text-xs font-medium leading-[18px]">
                                  {userDetail.businessEmail}
                                </span>
                              </div>
                            </div>
                            <div className="flex justify-center sm:justify-start items-center">
                              <img
                                src="/assets/icons/location.svg"
                                className="mr-1"
                              />
                              <span className="text-black400 text-xs font-medium leading-[18px]">
                                {userDetail.phoneNumber}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-7">
                    <nav
                      className="-mb-px flex gap-[20px] sm:gap-[30px] lg:gap-[68px] overflow-x-auto"
                      aria-label="Tabs"
                    >
                      {tab.map((item, index) => (
                        <div className="group cursor-pointer">
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                              setOpenTab(index);
                            }}
                            key={item.index}
                            href={item.href}
                            className={`${
                              openTab === index
                                ? " font-semibold text-violet600"
                                : " font-medium text-black300  group-hover:text-violet600 "
                            } whitespace-nowrap text-xs sm:text-[15px]  leading-[22px]`}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                          <div className="flex mt-1.5 justify-center">
                            <div
                              className={`${
                                openTab === index
                                  ? "block"
                                  : "hidden group-hover:block"
                              } w-[40px] h-[2.5px] bg-violet600 rounded-full`}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </nav>
                  </div>
                </div>
                {openTab === 0 && (
                  <RecentHistory openTab={0} setProfileView={setProfileView} />
                )}
                {openTab === 1 && (
                  <RecentTransaction
                    vender={userDetail}
                    openTab={1}
                    page={page}
                    setPage={setPage}
                  />
                )}
                {openTab === 2 && (
                  <Profile
                    openTab={1}
                    ProfileData={userDetail}
                    setProfileView={setProfileView}
                  />
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
