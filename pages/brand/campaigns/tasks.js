import React, { useEffect } from "react";
import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import UseMediaQuery from "../../../hooks/UseMediaQuery";

import { IoCheckmarkCircle, IoCloseCircle } from "react-icons/io5";

const massage = [
  {
    name: "Jonathon B.",
    icon: " /assets/images/avatar3.png",
    status:
      "Coca Cola | Coca Cola Q1 Awaren Coca Cola | Coca Cola Q1 Awaren...",
    time: "8:00 PM",
    pending: "0",
    current: true,
  },
  {
    name: "Samuel D.",
    icon: " /assets/images/Avatar (5).png",
    status:
      "Got any questions? I’m glad to he Got any questions? I’m glad to he...",
    time: "8:00 PM",
    pending: "0",
    current: true,
  },
  {
    name: "Funke A.",
    icon: " /assets/images/avatar2.png",
    status: "Content in review!",
    time: "8:00 PM",
    pending: "3",
    current: true,
  },
  {
    name: "Khadijat P.",
    icon: " /assets/images/Avatar (6).png",
    status: "Content approved!",
    time: "8:00 PM",
    pending: "3",
    current: true,
  },
  {
    name: "Khadijat P.",
    icon: " /assets/images/avatar-1.png",
    status: "Content rejected!",
    time: "8:00 PM",
    pending: "1",
    current: true,
  },
  {
    name: "Khadijat P.",
    icon: " /assets/images/img-2.png",
    status: "Content rejected!",
    time: "8:00 PM",
    pending: "0",
    current: true,
  },
  {
    name: "Khadijat P.",
    icon: " /assets/images/avatar1.png",
    status: "Content in review!",
    time: "8:00 PM",
    pending: "3",
    current: true,
  },
  {
    name: "Khadijat P.",
    icon: " /assets/images/img-1.png",
    status: "Content approved!",
    time: "8:00 PM",
    pending: "3",
    current: true,
  },
];

const taskbar = [
  {
    icon: "/assets/icons/instagram.svg",
    task: "TASK 1",
    id: 1,
  },
  {
    icon: "/assets/icons/facebook-rounded.svg",
    task: "TASK 2",
    id: 2,
  },
  {
    icon: "/assets/icons/instagram.svg",
    task: "TASK 3",
    id: 3,
  },
  {
    icon: "/assets/icons/Twitter.svg",
    task: "TASK 4",
    id: 4,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Tasks = () => {
  const [selectedMedia, setSelectedMedia] = useState();
  const matches = UseMediaQuery("(min-width: 1024px)");
  console.log("🚀 ~ file: index.js ~ line 121 ~ Message ~ matches", matches);

  const [scroll, setScroll] = useState();
  console.log("🚀 ~ file: index.js ~ line 121 ~ Message ~ scroll", scroll);

  const [open, setOpen] = useState(false);

  const [text, setText] = useState("");
  function handleOnEnter(text) {
    console.log("enter", text);
  }
  const [deletepopup, setDeletePopup] = useState(false);

  return (
    <>
      <div className="min-h-[calc(100vh-12.3rem)] md:min-h-[calc(100vh-34rem)] bg-white flex">
        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <div className="relative z-0 flex flex-1 overflow-hidden">
            {/* =====Chate Box===== */}
            {(matches || (!matches && open)) && (
              <main className="relative  z-0 flex-1 overflow-y-auto md:justify-between  flex flex-col  focus:outline-none lg:order-last">
                <div className="relative  w-full top-0">
                  <div className="flex border-b-[1.5px] border-[#0904151F] px-5 md:px-6 pt-[11px] pb-2.5 justify-between items-center">
                    <div className="flex items-center">
                      <button
                        onClick={() => {
                          setOpen(!open);
                        }}
                        className="mr-4 lg:hidden"
                      >
                        <img src="/assets/icons/leftarrow.svg" />
                      </button>

                      <div className="mr-[12px] ">
                        <img
                          src="/assets/images/avatar3.png"
                          className="w-[37px] h-[37px] rounded-full ring ring-white ring-offset-[1px]"
                        />
                      </div>
                      <div>
                        <h2 className="text-[17px] font-semibold leading-5 text-gray801">
                          Jonathon B.
                        </h2>
                        <span className="text-black300 text-medium text-xs leading-[18px]">
                          Task 1 - Instagram Story
                        </span>
                      </div>
                    </div>
                    <div className="gap-5 flex items-center">
                      <div>
                        <span className="text-black300 text-xs leading-[18px] font-medium py-1 px-2 rounded bg-[#D9D9D980]">
                          Pending Review
                        </span>
                      </div>
                      <Menu
                        as="div"
                        className="relative inline-block text-left"
                      >
                        <div className="flex items-center">
                          <Menu.Button className="inline-flex w-full justify-center shadow-sm  focus:ring-offset-0 ">
                            <img src="/assets/icons/menu-3dot.svg" alt="menu" />
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
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-[185px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="p-[9px] w-full">
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    className={classNames(
                                      active
                                        ? "bg-violet600 rounded-lg text-white"
                                        : "text-[#322E3C]",
                                      "block px-4 w-full py-2 text-[15px] font-medium leading-[22px]"
                                    )}
                                  >
                                    View Profile
                                  </button>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    className={classNames(
                                      active
                                        ? "bg-violet600 rounded-lg text-white"
                                        : "text-[#322E3C]",
                                      "block px-4 py-2 w-full text-[15px] font-medium leading-[22px]"
                                    )}
                                  >
                                    Select Messages
                                  </button>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    onClick={() => setDeletePopup(true)}
                                    className={classNames(
                                      active
                                        ? "bg-violet600 rounded-lg text-white"
                                        : "text-[#322E3C]",
                                      "block px-4 py-2 w-full text-[15px] font-medium leading-[22px]"
                                    )}
                                  >
                                    Report
                                  </button>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                </div>

                <div className="flex-1 max-h-[calc(100vh_-_19.5rem)] md:max-h-[calc(100vh_-_35.9rem)]  justify-between flex flex-col ">
                  <div
                    id="messages"
                    onScroll={(event) => {
                      setScroll(event.target.scrollTop);
                    }}
                    className={`${
                      Number(scroll) > 0 ? "chat-box-show" : "chat-box"
                    } flex flex-col space-y-4 p-3  overflow-y-auto`}
                  >
                    {/* <div className="chat-message">
                      <div className="flex items-start justify-end">
                        <div className="flex flex-col space-y-[4px] text-xs max-w-[442px] mx-2 order-1 items-end">
                          <div className="flex items-center space-x-[12px]">
                            <img src="/assets/icons/replay.svg" />
                            <div className=" text-[15px] shadow-dark10 w-[186px] font-medium leading-[22px] overflow-hidden rounded-[12px] inline-block  bg-white  ">
                              <div>
                                <img
                                  src="/assets/images/image22.png"
                                  className="rounded-[12px] rounded-b-none"
                                />
                              </div>
                              <div className="pt-2 pb-3 px-3 ">
                                <span className="text-[10px] font-medium text-[#322E3C] leading-[10px]">
                                  Mercedes’ flagship model will be presen ted to
                                  the world as...
                                  <span className="text-violet600">
                                    #buzzbite @cocacola
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>

                          <div>
                            <span className="text-[13px] text-medium text-[#84828A]">
                              8:00 AM
                            </span>
                          </div>
                        </div>
                        <img
                          src="/assets/images/bottel.png"
                          alt="My profile"
                          className="w-[40px] h-[41px] rounded-full order-1"
                        />
                      </div>
                    </div> */}
                    <div className="chat-message">
                      <div className="flex items-start justify-end">
                        <div className="flex flex-col space-y-[4px] text-xs max-w-[442px] mx-2 order-1 items-end">
                          <div className="flex items-center space-x-[12px]">
                            {/* <img src="/assets/icons/replay.svg" /> */}
                            <span className="px-5 py-2.5 text-xs md:text-[15px] font-medium leading-[22px] rounded-[30px] inline-block rounded-br-none bg-violet600 text-white ">
                              Got any questions? I’m Glad to help.
                            </span>
                          </div>

                          <div>
                            <span className="text-[13px] text-medium text-[#84828A]">
                              8:00 AM
                            </span>
                          </div>
                        </div>
                        <img
                          src="/assets/images/bottel.png"
                          alt="My profile"
                          className="w-[40px] h-[41px] rounded-full order-1"
                        />
                      </div>
                    </div>
                    <div className="chat-message">
                      <div className="flex items-start">
                        <div className="flex flex-col space-y-2 text-xs max-w-[442px] mx-2 order-2 items-start">
                          <div className="flex items-center space-x-[12px]">
                            <div className="flex items-center space-x-[12px]">
                              <div className=" text-[15px] shadow-dark10 w-[186px] font-medium leading-[22px] overflow-hidden rounded-[12px] inline-block  bg-white  ">
                                <div>
                                  <img
                                    src="/assets/images/bottel.png"
                                    className="rounded-[12px] rounded-b-none mx-auto"
                                  />
                                </div>
                                <div className="pt-2 flex pb-3 px-3 ">
                                  <span className="text-[10px] font-medium text-black500 leading-[15px]">
                                    I love driking my drik. It is super
                                    refreshing and gives me energy for the day.
                                  </span>
                                </div>
                              </div>
                            </div>
                            {/* <img src="/assets/icons/replay.svg" /> */}
                          </div>
                          <div className="flex gap-[5px]">
                            <button className="flex items-center focus:outline-none text-white bg-green600 rounded-[2.9px] text-[7px] font-semibold leading-[9px] py-[4.4px] px-[7px]">
                              <IoCheckmarkCircle className="mr-1" />
                              Approve
                            </button>
                            <button className="flex items-center focus:outline-none text-white bg-red600 rounded-[2.9px] text-[7px] font-semibold leading-[9px] py-[4.4px] px-[7px]">
                              <IoCloseCircle className="mr-1" />
                              Reject
                            </button>
                          </div>
                          <div>
                            <span className="text-[13px] text-medium text-[#84828A]">
                              8:00 AM
                            </span>
                          </div>
                        </div>
                        <img
                          src="/assets/images/avatar3.png"
                          alt="My profile"
                          className="w-[40px] h-[41px] rounded-full order-1"
                        />
                      </div>
                    </div>
                    <div className="chat-message">
                      <div className="flex items-start justify-end">
                        <div className="flex flex-col space-y-[4px] text-xs max-w-[442px] mx-2 order-1 items-end">
                          <div className="flex items-center space-x-[12px]">
                            {/* <img src="/assets/icons/replay.svg" /> */}
                            <span className="px-5 py-2.5 text-xs md:text-[15px] font-medium leading-[22px] rounded-[30px] inline-block rounded-br-none bg-violet600 text-white ">
                              Can you please change the music
                            </span>
                          </div>

                          <div>
                            <span className="text-[13px] text-medium text-[#84828A]">
                              8:00 AM
                            </span>
                          </div>
                        </div>
                        <img
                          src="/assets/images/bottel.png"
                          alt="My profile"
                          className="w-[40px] h-[41px] rounded-full order-1"
                        />
                      </div>
                    </div>
                    {/* <div className="chat-message">
                      <div className="flex items-start">
                        <div className="flex flex-col space-y-2 text-xs max-w-[442px] mx-2 order-2 items-start">
                          <div className="flex items-center space-x-[12px]">
                            <div className="bg-gray30 rounded-t-[15px] rounded-br-[30px] ">
                              <div className="rounded-l-[4px] overflow-hidden  ml-[9px] pl-2.5 mb-[6px] mt-[7px] relative">
                                <div className="w-[3px] absolute h-full left-0 bg-violet600 "></div>

                                <span className="mb-[6px] text-xs text-[#84818A] md:text-[15px] font-medium leading-[22px]">
                                  Got any questions? I’m Glad to help.
                                </span>
                              </div>
                              <span className="px-5 py-2.5 text-xs md:text-[15px] font-medium leading-[22px] rounded-[30px] inline-block rounded-bl-none bg-[#F0F0F1] text-gray800">
                                Got any questions? I’m Glad to help. Any
                                questions? I’m Glad to help. Got any questions?
                                I’m Glad to help. Any questions? I’m Glad to
                                help.
                              </span>
                            </div>
                            <img src="/assets/icons/replay.svg" />
                          </div>
                          <div>
                            <span className="text-[13px] text-medium text-[#84828A]">
                              8:00 AM
                            </span>
                          </div>
                        </div>
                        <img
                          src="/assets/images/dapo.png"
                          alt="My profile"
                          className="w-[40px] h-[41px] rounded-full order-1"
                        />
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="bg-[#EBEBED] md:bg-gray40 relative flex-shrink-0 bottom-0 w-full">
                  <div className="flex-shrink-0 relative bottom-0  w-full">
                    <div className=" flex py-2 pl-6 pr-4 md:pr-11 items-center">
                      <button className="mr-[15px]">
                        <img src="/assets/icons/chat-share.svg" />
                      </button>
                      <div className="flex items-center flex-1">
                        <div className="relative flex-1">
                          <input
                            placeholder="Type your message"
                            className=" rounded-[33px] bg-white w-full focus:outline-none py-[9.5px] pl-[21px] pr-[57px]"
                          />
                          <div className="absolute inset-y-0 right-[10px]  flex items-center">
                            <button className="">
                              <img src="/assets/icons/emoji.svg" />
                            </button>
                          </div>
                        </div>

                        <button className="ml-[17px]">
                          <img src="/assets/icons/send.svg" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            )}
            {/*======= Contect List ===== */}
            {(matches || (!matches && !open)) && (
              <aside className="relative w-full lg:w-[370px] xl:w-[462px] flex-shrink-0 lg:border-r-[1.5px] overflow-hidden border-[#0904151F] lg:order-first flex flex-col">
                {/* Start secondary column (hidden on smaller screens) */}
                <div className="w-full">
                  <div className=" my-3  mr-[11.5px]">
                    <div className="task-scroll  pt-[9px] pb-2 overflow-x-auto">
                      <fieldset className="space-x-2.5 flex ">
                        {taskbar.map((item, index) => (
                          <div
                            key={index}
                            onClick={() => setSelectedMedia(index)}
                            className={`${
                              selectedMedia === index
                                ? "bg-blue100 border-violet600"
                                : "bg-white border-[#eeeeee]"
                            } relative w-auto pl-3 pr-3 py-[5px] border rounded flex items-center `}
                          >
                            <div
                              className={`${
                                selectedMedia === index
                                  ? "bg-white"
                                  : "bg-[#CECDD0] bg-opacity-[0.3]"
                              } w-[26px] h-[26px] rounded-full flex items-center justify-center`}
                            >
                              <img
                                src={item.icon}
                                className="w-[16px] h-[16px]"
                              />
                            </div>
                            <div className="ml-2">
                              <label
                                htmlFor="comments"
                                className={`${
                                  selectedMedia === index
                                    ? "text-violet600"
                                    : "text-[#84828A]"
                                } text-[10px] whitespace-nowrap font-semibold leading-[15px]`}
                              >
                                {item.task}
                              </label>
                            </div>
                          </div>
                        ))}
                      </fieldset>
                    </div>
                    <div className="relative mt-1 rounded-lg border-black200/[0.5]  border py-2">
                      <div
                        className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                        aria-hidden="true"
                      >
                        <MagnifyingGlassIcon
                          className="mr-3 h-4 w-4 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        type="text"
                        name="search"
                        id="search"
                        className="block w-full rounded-lg text-xs border-black200 placeholder:font-normal placeholder:text-xs placeholder:text-[#ADABB1] pl-9 focus:outline-none bg-transparent"
                        placeholder="Search brands"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute massage-scroll divide-y overflow-y-auto mt-[117px] inset-0 massage-scroll">
                  {massage.map((item) => (
                    <div
                      className="flex items-center pl-[20px] pr-[18px] pt-[23.5px] pb-[23.5px] hover:bg-[#0904150F] "
                      onClick={() => {
                        setOpen(!open);
                      }}
                    >
                      <img
                        src={item.icon}
                        className="w-[58px] mr-2 sm:mr-4 flex-shrink-0 h-[58px] rounded-full ring ring-white ring-offset-[0.8px]"
                      />
                      <div className="flex-1 truncate">
                        <div className="flex items-center justify-between">
                          <h2 className="text-sm truncate md:text-[17px] mb-[3px] font-semibold leading-[26px] text-black500">
                            {item.name}
                          </h2>
                          <span className="text-[11px] md:text-[13px] text-black400 font-medium leading-5">
                            {item.time}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-xs truncate text-black300 md:text-[15px] text-medium leading-[22px] truncate w-[266px]">
                            {item.status}
                          </p>
                          {item.pending > 0 ? (
                            <span className="bg-[#D52596] flex-shrink-0 flex items-center justify-center text-[13px] pt-px leading-5 font-semibold text-white w-[25px] h-[25px] rounded-full">
                              {item.pending}
                            </span>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* End secondary column */}
              </aside>
            )}
          </div>
        </div>
      </div>

      <Transition.Root show={deletepopup} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setDeletePopup}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-[#000000] bg-opacity-50 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-[6px] sm:rounded-[15px] bg-white px-8 pt-8 pb-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[521px] sm:px-[55px] sm:pb-11 sm:pt-12">
                  <div>
                    <div className="mx-auto flex  items-center justify-center ">
                      <img src="/assets/icons/qua.svg" />
                    </div>
                    <div className="mt-5 text-center">
                      <h2 className="text-[14px] md:text-[17px]  font-semibold leading-[26px] text-dark900">
                        Do you want to report this client to BuzzBite?
                      </h2>
                      <div className="mt-3 md:mt-4">
                        <p className="text-[12px] md:text-[15px] leading-[22px] text-gray700">
                          The last 7 messages from this client will be forwarded
                          to BuzzBite.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 sm:mt-7 flex items-center justify-end">
                    <button
                      type="button"
                      className="flex justify-center rounded border border-transparent bg-white mr-[24px] sm:mr-[30px] text-xs md:text-[15px] font-semibold text-[#8A8A8A]  focus:outline-none focus:ring-0 "
                      onClick={() => setDeletePopup(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="flex justify-center rounded-lg border border-transparent bg-violet600 py-3 px-[20px] sm:px-[30px] text-xs md:text-[15px] font-semibold text-white shadow-sm  focus:outline-none focus:ring-0 "
                      onClick={() => {
                        setDeletePopup(false);
                      }}
                    >
                      Yes, report
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default Tasks;
