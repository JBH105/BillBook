import { Dialog, Listbox, Menu, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import {
  ChevronDownIcon,
  ChevronUpDownIcon,
  EllipsisVerticalIcon,
  StarIcon,
} from "@heroicons/react/20/solid";
import ReactTooltip from "react-tooltip";
import { BiCaretDown } from "react-icons/bi";
import CurrencyInput from "react-currency-input-field";

const followersOption = [
  {
    title: "All",
    current: true,
  },
  {
    title: "Accepted",
    current: false,
  },
  {
    title: "Pending",
    current: true,
  },
  {
    title: "Offer Sent",
    current: true,
  },
  {
    title: "Offer Received",
    current: false,
  },
  {
    title: "Shortlisted",
    current: true,
  },
  {
    title: "Rejected",
    current: true,
  },
];
const people = [
  {
    id: 1,
    img: "/assets/images/avatar2.png",
    platform: [
      {
        icon: "/assets/icons/instagram.svg",
      },
      {
        icon: "/assets/icons/Tiktok.svg",
      },
      {
        icon: "/assets/icons/Twitter.svg",
      },
    ],
    name: "Yewande B.",
    location: "Ibadan, Nigeria.",
    reach: "340,029",
    eng: "3.2%",
    offer: "N300,000",
    rating: 3,
    review: "234",
    status: "Accepted",
  },
  {
    id: 2,
    img: "/assets/images/avatar2.png",
    platform: [
      {
        icon: "/assets/icons/facebook-rounded.svg",
      },
      {
        icon: "/assets/icons/Tiktok.svg",
      },
      {
        icon: "/assets/icons/Twitter.svg",
      },
    ],
    name: "Yewande B.",
    location: "Ibadan, Nigeria.",
    reach: "340,029",
    eng: "3.2%",
    offer: "N250,000",
    rating: 3,
    review: "234",
    status: "Offer Received",
  },
  {
    id: 3,
    img: "/assets/images/avatar2.png",
    platform: [
      {
        icon: "/assets/icons/facebook-rounded.svg",
      },
      {
        icon: "/assets/icons/instagram.svg",
      },

      {
        icon: "/assets/icons/Tiktok.svg",
      },
    ],
    name: "Yewande B.",
    location: "Ibadan, Nigeria.",
    reach: "340,029",
    eng: "3.2%",
    offer: "N250,000",
    rating: 3,
    review: "234",
    status: "Rejected",
  },
  {
    id: 4,
    img: "/assets/images/avatar3.png",
    platform: [
      {
        icon: "/assets/icons/facebook-rounded.svg",
      },
      {
        icon: "/assets/icons/instagram.svg",
      },
      {
        icon: "/assets/icons/Tiktok.svg",
      },
      {
        icon: "/assets/icons/Twitter.svg",
      },
    ],
    name: "Ahmed S.",
    location: "Ibadan, Nigeria.",
    reach: "101,948",
    eng: "11.5%",
    offer: "N250,000",
    rating: 3,
    review: "234",
    status: "Shortlisted",
  },
  {
    id: 5,

    img: "/assets/images/avatar1.png",
    platform: [
      {
        icon: "/assets/icons/instagram.svg",
      },
      {
        icon: "/assets/icons/Tiktok.svg",
      },

      {
        icon: "/assets/icons/Twitter.svg",
      },
    ],

    name: "Tunde B.",
    location: "Ibadan, Nigeria.",
    reach: "340,029",
    eng: "28.2%",
    offer: "N250,000",
    rating: 3,
    review: "234",
    status: "Offer Sent",
  },
  {
    id: 6,
    img: "/assets/images/avatar3.png",
    platform: [
      {
        icon: "/assets/icons/instagram.svg",
      },

      {
        icon: "/assets/icons/Twitter.svg",
      },
    ],
    name: "Ahmed S.",
    location: "Ibadan, Nigeria.",
    reach: "101,948",
    eng: "11.5%",
    offer: "N250,000",
    rating: 3,
    review: "234",
    status: "Shortlisted",
  },
  {
    id: 7,
    img: "/assets/images/avatar1.png",
    platform: [
      {
        icon: "/assets/icons/facebook-rounded.svg",
      },
      {
        icon: "/assets/icons/instagram.svg",
      },
      {
        icon: "/assets/icons/Twitter.svg",
      },
    ],
    name: "Tunde B.",
    location: "Ibadan, Nigeria.",
    reach: "340,029",
    eng: "28.2%",
    offer: "N250,000",
    rating: 3,
    review: "234",
    status: "Pending",
  },
  //   {
  //     id: 8,
  //     img: "/assets/images/avatar1.png",
  //     platform: [
  //       {
  //         icon: "/assets/icons/facebook-rounded.svg",
  //       },
  //       {
  //         icon: "/assets/icons/instagram.svg",
  //       },
  //       {
  //         icon: "/assets/icons/Twitter.svg",
  //       },
  //     ],
  //     name: "Tunde B.",
  //     location: "Ibadan, Nigeria.",
  //     reach: "340,029",
  //     eng: "28.2%",
  //     offer: "N250,000",
  //     rating: 3,
  //     review: "234",
  //     status: "Offer Received",
  //   },
];

const negotiations = [
  {
    data: "28/11/2022",
    initiator: "Brand",
    offer: "N250,000",
    tasks: "All",
    response: true,
  },
  {
    data: "28/11/2022",
    initiator: "Influencer",
    offer: "N100,000",
    tasks: "1",
    response: true,
  },
  {
    data: "28/11/2022",
    initiator: "Brand",
    offer: "N80,000",
    tasks: "1",
    response: true,
  },
  {
    data: "28/11/2022",
    initiator: "Influencer",
    offer: "N90,000",
    tasks: "1",
    response: false,
  },
];
const mediatask = [
  { id: 1, name: "All" },
  { id: 2, name: "Task 1: Instagram Video" },
  { id: 3, name: "Task 2: Facebook Post" },
  { id: 4, name: "Task 3: Attend Event" },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Influencers = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [invitePopup, setInvitePopup] = useState(false);

  const [followers, setFollowers] = useState(followersOption[0]);
  console.log(
    "🚀 ~ file: influencers.js:279 ~ Influencers ~ followers",
    followers
  );

  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [selectRowAll, setSelectRowAll] = useState(false);
  const [selectedTask, setSelectedTask] = useState(mediatask[0]);
  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(people.map((li) => li.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };
  const handleFilter = (data) => {
    if (data.status === followers.title || followers.title === "All") {
      return data;
    }
  };

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, parseInt(id)]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== parseInt(id)));
    }
  };
  const [searchIsOpen, setSearchIsOpen] = useState(true);
  const search = () => {
    setSearchIsOpen(!searchIsOpen);
  };
  return (
    <>
      <ReactTooltip place="bottom" effect="solid" />
      <ReactTooltip
        id="test"
        clickable={true}
        globalEventOff="click"
        place="bottom"
        className="custom-tooltip"
        // effect="solid"
      >
        <div className="z-10 mt-2 w-[170px] origin-top-right rounded-lg bg-white shadow-lg px-2 py-2.5 focus:outline-none">
          {followers.title === "Offer Received" ? (
            <div className="">
              <div>
                <button className="hover:bg-violet600 hover:text-white text-black500 focus:outline-none w-full px-5 text-start py-1.5 text-[15px] rounded-lg leading-[22px] font-medium">
                  Message
                </button>
              </div>
              <div>
                <button className="hover:bg-violet600 hover:text-white text-black500 focus:outline-none w-full px-5 text-start py-1.5 text-[15px] rounded-lg leading-[22px] font-medium">
                  Send Offer
                </button>
              </div>
              <div>
                <button className="hover:bg-violet600 hover:text-white text-black500 focus:outline-none w-full px-5 text-start py-1.5 text-[15px] rounded-lg leading-[22px] font-medium">
                  Delete
                </button>
              </div>
            </div>
          ) : (
            <div>
              <button className="hover:bg-violet600 hover:text-white text-black500 focus:outline-none w-full px-5 text-start py-1.5 text-[15px] rounded-lg leading-[22px] font-medium">
                Delete
              </button>
            </div>
          )}
        </div>
      </ReactTooltip>
      <div className="mt-5">
        <div className="flex flex-wrap sm:flex-nowrap gap-5 justify-end">
          <div className="relative shadow-light100 order-last sm:order-first w-full sm:w-auto overflow-hidden">
            <button
              onClick={search}
              className="absolute h-[30px] w-[35px] flex items-center justify-center focus:outline-none rounded-lg"
            >
              <img src="/assets/icons/search.svg" />
            </button>
            <input
              className={classNames(
                searchIsOpen
                  ? "w-0 pl-9 h-full"
                  : "w-auto pr-3 py-1.5 py-1.5 pl-8",
                "focus:outline-none w-full  placeholder:text-xs placeholder:text-black200 placeholder:leading-[18px] leading-[18px]  text-xs border-black200/[0.5] rounded"
              )}
              type="text"
              name=""
              id=""
              placeholder="Search campaign by name"
            />
          </div>

          <div>
            <Listbox value={followers} onChange={setFollowers}>
              {({ open }) => (
                <>
                  <div className="relative">
                    <Listbox.Button className="inline-flex rounded bg-white shadow-light100">
                      <div className="inline-flex py-1 px-5 w-full justify-between">
                        <div className="inline-flex items-center  bg-white">
                          <span className="text-black200 text-[15px] leading-[22px] font-medium">
                            Filter:
                          </span>
                          <p className="ml-1 truncate text-[15px] leading-[22px] font-medium text-violet600">
                            {followers.title}
                          </p>
                        </div>
                        <div className=" pl-2 w-4 flex items-center rounded-r-md text-sm font-medium text-white focus:outline-none ">
                          <img
                            src="/assets/icons/Arrow - Down 2.svg"
                            className=" text-white flex-none"
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
                                "cursor-default font-medium select-none rounded-lg pl-5 pr-2 py-1.5 text-sm"
                              )
                            }
                            value={option}
                          >
                            {({ followers, active }) => (
                              <div className="flex flex-col">
                                <div className="flex justify-between">
                                  <p
                                    className={
                                      followers
                                        ? "font-semibold"
                                        : "font-normal"
                                    }
                                  >
                                    {option.title}
                                  </p>
                                  {followers ? (
                                    <span
                                      className={
                                        active
                                          ? "text-white"
                                          : "text-indigo-500"
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
          <button
            onClick={() => setInvitePopup(true)}
            className="border bg-[#DED4F580] flex items-center  py-1 px-3 text-violet600 text-[15px] leading-[22px] font-medium rounded-[6px]"
          >
            <img
              src="/assets/icons/massage.svg"
              alt="massage-icon"
              className="mr-2.5"
            />{" "}
            Invite
          </button>
        </div>
        <div>
          <div className="mt-2 overflow-auto flex flex-col">
            <div className=" ">
              <div className="inline-block min-w-full py-2 align-middle ">
                <div className="overflow-hidden ">
                  <table className="min-w-full ">
                    <thead className="bg-white">
                      {isCheck.length > 0 ? (
                        <tr className="bg-purple100/[0.2] ">
                          <th
                            scope="col"
                            className="relative w-12 px-6 sm:w-10 sm:px-4"
                          >
                            <input
                              type="checkbox"
                              onClick={(person) => {
                                setIsCheckAll(!selectRowAll);
                                handleSelectAll();
                              }}
                              className="absolute custom-checkbox left-4 top-1/2 -mt-2 h-4 w-4 bg-white text-[#090415] rounded-[2.8px] accent-violet600 border-gray-300 text-violet600 focus:ring-0 sm:left-6"
                            />
                          </th>
                          <th className="py-[11px] text-left">
                            <span className="text-black400 text-[15px] font-medium leading-[22px]">
                              {/* {isCheck.length} Selected */}
                              {isCheck.length === 7
                                ? "All Selected"
                                : `${isCheck.length} Selected`}
                            </span>
                          </th>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th className="min-w-[78px]">
                            <div className="flex items-center justify-end px-4 space-x-2">
                              <button className="w-5 focus:outline-none">
                                <img src="/assets/icons/tick-circle.svg" />
                              </button>
                              <button className="w-5 focus:outline-none">
                                <img src="/assets/icons/close-circle-red.svg" />
                              </button>
                              <button className="w-5 focus:outline-none">
                                <img src="/assets/icons/trash.svg" />
                              </button>
                            </div>
                          </th>
                        </tr>
                      ) : (
                        <tr>
                          <th
                            scope="col"
                            className="relative w-12 px-6 sm:w-10 sm:px-4"
                          >
                            <input
                              type="checkbox"
                              onClick={(person) => {
                                setIsCheckAll(!selectRowAll);
                                handleSelectAll();
                              }}
                              className="absolute custom-checkbox left-4 top-1/2 -mt-2 h-4 w-4 bg-white text-[#090415] rounded-[2.8px] accent-violet600 border-gray-300 text-violet600 focus:ring-0 sm:left-6"
                            />
                          </th>

                          <th
                            scope="col"
                            className="px-3 py-[9px] text-left text-[15px] font-semibold text-violet600"
                          >
                            Influencer
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-[9px]  text-left text-[15px] font-semibold text-violet600"
                          >
                            Platforms
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-[9px] min-w-[100px] text-left text-[15px] font-semibold text-violet600"
                          >
                            Reach
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-[9px] text-left text-[15px] font-semibold text-violet600"
                          >
                            Engagements
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-[9px] text-left text-[15px] font-semibold text-violet600"
                          >
                            Offer
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-[9px] text-left text-[15px] font-semibold text-violet600"
                          >
                            Status
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-[9px] text-end text-[15px] font-semibold text-violet600"
                          >
                            Actions
                          </th>
                        </tr>
                      )}
                    </thead>
                    <tbody className="bg-white">
                      {people
                        .filter((data) => handleFilter(data))
                        .map((person, personIdx) => (
                          <tr
                            key={person.email}
                            className={`${
                              personIdx % 2 === 1
                                ? undefined
                                : "bg-[#D9D9D9] bg-opacity-[0.2]"
                            } influencertable`}
                          >
                            <td className="relative w-12 px-6 sm:w-10 sm:px-6">
                              <input
                                type="checkbox"
                                id={person.id}
                                onChange={(e) => handleClick(e)}
                                checked={isCheck.includes(person.id)}
                                className="absolute custom-checkbox left-4 top-1/2 -mt-2 h-4 w-4 bg-white text-[#090415] rounded-[2.8px] accent-violet600 border-gray-300 text-violet600 focus:ring-0 sm:left-6"
                              />
                            </td>
                            <td
                              onClick={() => setProfileView(true)}
                              className="whitespace-nowrap py-3 px-3 cursor-pointer text-sm "
                            >
                              <div className="flex items-center">
                                <div className="h-[30px] w-[30px] flex-shrink-0">
                                  <img
                                    className="h-[30px] w-[30px] rounded-full"
                                    src={person.img}
                                    alt=""
                                  />
                                </div>
                                <div className="ml-2">
                                  <div className="font-semibold text-[13px] leading-5  text-black500">
                                    {person.name}
                                  </div>
                                  <div className="text-black400 text-[10px] leading-[15px] gap-1.5 flex items-center font-medium">
                                    <div className="flex gap-1  items-center">
                                      {[0, 1, 2, 3, 4].map((rating) => (
                                        <StarIcon
                                          key={rating}
                                          className={classNames(
                                            person.rating > rating
                                              ? "text-[#E5B027]"
                                              : "text-[#D9D9D9]",
                                            "h-[14px] w-[14px] flex-shrink-0"
                                          )}
                                          aria-hidden="true"
                                        />
                                      ))}
                                    </div>
                                    <span className="text-black300  text-[10px] leading-[15px] font-medium">
                                      ({person.review})
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="whitespace-nowrap py-5 px-3 text-sm  font-medium text-gray-900 ">
                              <div className="flex space-x-[7px]">
                                {person.platform.map((item) => {
                                  return (
                                    <div className="w-[22.75px] h-[22.75px] flex items-center justify-center rounded-full bg-[#EEEEEE]">
                                      <img
                                        src={item.icon}
                                        className="w-[14px]"
                                      />
                                    </div>
                                  );
                                })}
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-3 py-3 leading-5 font-medium  text-xs text-black300">
                              {person.reach}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3 leading-5 font-medium  text-xs text-black300">
                              {person.eng}
                            </td>
                            <td className="relative min-w-[190px]  whitespace-wordwrap text-black300 py-5 px-3 text-left text-[13px] leading-5 font-medium ">
                              <span className="flex">
                                {person.offer}
                                <button
                                  onClick={() => setOpenPopup(true)}
                                  className="focus:outline-none"
                                >
                                  <img
                                    src="/assets/icons/edit-2.svg"
                                    className="ml-1"
                                  />
                                </button>
                              </span>
                            </td>
                            <td className="whitespace-nowrap   px-3 py-5 text-sm text-gray-500">
                              <div>
                                <span
                                  className={`${
                                    person.status === "Accepted" ||
                                    person.status === "Offer Sent"
                                      ? " text-green600 bg-green100"
                                      : person.status === "Offer Received"
                                      ? "text-purple600 bg-purple100 "
                                      : person.status === "Rejected"
                                      ? "text-red600 bg-red100 "
                                      : person.status === "Pending"
                                      ? "text-pink600 bg-pink100"
                                      : "text-black300 bg-black100"
                                  } py-[3px] px-[5px] rounded text-[10px] leading-[15px] font-medium`}
                                >
                                  {person.status}
                                </span>
                              </div>
                            </td>
                            <td className="pr-[15px]">
                              <div className="flex items-center justify-end space-x-[5px]">
                                {person.status === "Offer Received" ? (
                                  <>
                                    <button className="w-5 focus:outline-none">
                                      <img src="/assets/icons/tick-circle.svg" />
                                    </button>
                                    <button className="w-5 focus:outline-none">
                                      <img src="/assets/icons/close-circle-red.svg" />
                                    </button>
                                  </>
                                ) : (
                                  <>
                                    <button
                                      data-tip="Send Offer"
                                      className="w-5"
                                    >
                                      <img src="/assets/icons/money-give.svg" />
                                    </button>

                                    <button data-tip="Message" className="w-5">
                                      <img src="/assets/icons/message-text.svg" />
                                    </button>
                                  </>
                                )}
                                <button
                                  data-tip
                                  data-event="click"
                                  data-for="test"
                                  className="flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
                                >
                                  <EllipsisVerticalIcon
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                  />
                                </button>
                                {/* <Menu
                                  as="div"
                                  className="relative w-5 inline-block text-left"
                                >
                                  <div>
                                    <Menu.Button
                                      data-tip
                                      data-event="click"
                                      data-for="test"
                                      className="flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
                                    >
                                      <EllipsisVerticalIcon
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                      />
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
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-[170px] origin-top-right rounded-lg bg-white shadow-lg px-2 py-2.5 focus:outline-none">
                                      {person.status === "Offer Received" ? (
                                        <>
                                          <div className="">
                                            <Menu.Item>
                                              {({ active }) => (
                                                <a
                                                  href="#"
                                                  className={classNames(
                                                    active
                                                      ? "bg-violet600 text-white"
                                                      : "text-black500",
                                                    "block px-5 py-1.5 text-[15px] rounded-lg leading-[22px] font-medium"
                                                  )}
                                                >
                                                  Message
                                                </a>
                                              )}
                                            </Menu.Item>
                                            <Menu.Item>
                                              {({ active }) => (
                                                <a
                                                  href="#"
                                                  className={classNames(
                                                    active
                                                      ? "bg-violet600 text-white"
                                                      : "text-black500",
                                                    "block px-5 py-1.5 text-[15px] rounded-lg leading-[22px] font-medium"
                                                  )}
                                                >
                                                  Send Offer
                                                </a>
                                              )}
                                            </Menu.Item>
                                            <Menu.Item>
                                              {({ active }) => (
                                                <a
                                                  href="#"
                                                  className={classNames(
                                                    active
                                                      ? "bg-violet600 text-white"
                                                      : "text-black500",
                                                    "block px-5 py-1.5 text-[15px] rounded-lg leading-[22px] font-medium"
                                                  )}
                                                >
                                                  Delete
                                                </a>
                                              )}
                                            </Menu.Item>
                                          </div>
                                        </>
                                      ) : (
                                        <>
                                          <div>
                                            <Menu.Item>
                                              {({ active }) => (
                                                <button
                                                  className={classNames(
                                                    active
                                                      ? "bg-violet600 text-white"
                                                      : "text-black500",
                                                    "focus:outline-none w-full px-5 text-start py-1.5 text-[15px] rounded-lg leading-[22px] font-medium"
                                                  )}
                                                >
                                                  Delete
                                                </button>
                                              )}
                                            </Menu.Item>
                                          </div>
                                        </>
                                      )}
                                    </Menu.Items>
                                  </Transition>
                                </Menu> */}
                              </div>
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

      <Transition.Root show={openPopup} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpenPopup}>
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
                <Dialog.Panel className="relative transform rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-[676px] sm:p-[40px] ">
                  <button
                    onClick={() => setOpenPopup(false)}
                    className="absolute focus:outline-none -top-[20px] -right-[20px]"
                  >
                    <img
                      src="/assets/icons/closebtn.svg"
                      className="w-[47px] h-[47px]"
                    />
                  </button>
                  <div>
                    <div className="flex justify-between mb-5">
                      <h2 className="text-black500 text-[17px] font-semibold leading-[26px]">
                        Influencer Negotiations
                      </h2>
                      <button>
                        <img src="/assets/icons/quationmark.svg" />
                      </button>
                    </div>
                    <div className=" h-[205px] md:h-[203px] custom-scroll overflow-auto">
                      <table className="min-w-full">
                        <thead className="bg-white sticky top-0">
                          <tr className="">
                            <th
                              scope="col"
                              className="px-3 py-[9px] text-left text-[15px] font-semibold text-violet600"
                            >
                              Date
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-[9px]  text-left text-[15px] font-semibold text-violet600"
                            >
                              Initiator
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-[9px] min-w-[100px] text-left text-[15px] font-semibold text-violet600"
                            >
                              Offer
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-[9px] text-left text-[15px] font-semibold text-violet600"
                            >
                              Tasks
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-[9px] text-end text-[15px]  font-semibold text-violet600"
                            >
                              Response
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          {negotiations.map((data, dataIdx) => (
                            <tr
                              key={dataIdx}
                              className={`${
                                dataIdx % 2 === 1
                                  ? undefined
                                  : "bg-[#D9D9D9] bg-opacity-[0.2]"
                              } influencertable`}
                            >
                              <td className="whitespace-nowrap px-5 py-2.5 leading-5 font-medium  text-xs text-gray700">
                                {data.data}
                              </td>
                              <td className="whitespace-nowrap px-5 py-2.5 leading-5 font-medium  text-xs text-gray700">
                                {data.initiator}
                              </td>
                              <td className="whitespace-nowrap px-5 py-2.5 leading-5 font-medium  text-xs text-gray700">
                                {data.offer}
                              </td>
                              <td className="whitespace-nowrap px-5 py-2.5 leading-5 font-medium  text-xs text-gray700">
                                {data.tasks}
                              </td>
                              <td className="whitespace-nowrap px-5 py-2.5 leading-5 font-medium  text-end text-xs text-gray700">
                                <span className=""></span>
                                {data.response === true ? (
                                  <span className="text-red600 bg-red100 text-[10px] leading-[15px] font-medium rounded py-[3px] px-[5px]">
                                    Rejected
                                  </span>
                                ) : (
                                  <div className="flex gap-[11px] justify-end">
                                    <button className="w-5 focus:outline-none">
                                      <img src="/assets/icons/tick-circle.svg" />
                                    </button>
                                    <button className="w-5 focus:outline-none">
                                      <img src="/assets/icons/close-circle-red.svg" />
                                    </button>
                                  </div>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="flex gap-2 sm:gap-0 flex-wrap justify-between items-center bg-purple100/[0.2] mt-[26px] px-5 py-3 rounded-lg">
                      <div className="flex items-center gap-2 w-full sm:w-auto">
                        <span className="text-black400 underline text-[15px] leading-[22px] font-medium">
                          Offer
                        </span>
                        <div className="relative w-full sm:w-auto">
                          <div className="absolute w-6 h-full flex justify-center items-center">
                            <img
                              src="/assets/icons/n.svg"
                              className="opacity-50 w-3 h-4"
                            />
                          </div>
                          <input
                            type="number"
                            placeholder="00.00"
                            className="placeholder:text-[15px] w-full sm:max-w-[123px] border-[0.5px] border-[#D9D9D980] rounded pr-2.5 placeholder:text-[#09041533] placeholder:leading-[22px] placeholder:font-medium placeholder:underline focus:outline-none pl-5 text-[15px] leading-[22px] font-medium py-0.5 text-end"
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-2 w-full sm:w-auto">
                        <span className="text-black400 underline text-[15px] leading-[22px] font-medium">
                          Tasks
                        </span>
                        <Listbox
                          value={selectedTask}
                          onChange={setSelectedTask}
                        >
                          {({ open }) => (
                            <>
                              <div className="relative w-full sm:w-auto ">
                                <Listbox.Button className="relative text-black400 w-full cursor-default rounded-md border border-gray-300 bg-white py-0.5 pl-2 pr-5 text-left shadow-sm  focus:outline-none sm:text-[15px]">
                                  <span className="block ">
                                    {selectedTask.name}
                                  </span>
                                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1">
                                    <BiCaretDown
                                      className="h-3 w-3 text-[#5B5863]"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </Listbox.Button>

                                <Transition
                                  show={open}
                                  as={Fragment}
                                  leave="transition ease-in duration-100"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <Listbox.Options className="absolute whitespace-nowrap space-y-2.5 right-0 px-[9px] py-3 z-10 mt-1.5  origin-top-right overflow-hidden rounded-md bg-white shadow-dark150 focus:outline-none">
                                    {mediatask.map((option) => (
                                      <Listbox.Option
                                        key={option.id}
                                        className={({ active }) =>
                                          classNames(
                                            active
                                              ? "text-white bg-violet600"
                                              : "text-black500",
                                            "cursor-default font-medium select-none rounded-lg pl-5 pr-5 py-1.5 text-sm"
                                          )
                                        }
                                        value={option}
                                      >
                                        {({ selectedTask, active }) => (
                                          <div className="flex flex-col">
                                            <div className="flex justify-between">
                                              <p
                                                className={
                                                  selectedTask
                                                    ? "font-semibold"
                                                    : "font-normal"
                                                }
                                              >
                                                {option.name}
                                              </p>
                                              {selectedTask ? (
                                                <span
                                                  className={
                                                    active
                                                      ? "text-white"
                                                      : "text-indigo-500"
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
                      <button className="text-white w-full sm:w-auto font-medium text-[15px] leading-[22px] py-1 px-[15px] rounded bg-violet600">
                        Submit Offer
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={invitePopup} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setInvitePopup}>
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
                <Dialog.Panel className="relative transform rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-[676px] sm:p-[40px] ">
                  <button
                    onClick={() => setInvitePopup(false)}
                    className="absolute focus:outline-none -top-[20px] -right-[20px]"
                  >
                    <img
                      src="/assets/icons/closebtn.svg"
                      className="w-[47px] h-[47px]"
                    />
                  </button>
                  <div>
                    <div className="flex justify-between mb-5">
                      <h2 className="text-black500 text-[17px] font-semibold leading-[26px]">
                        Invite External Influencers
                      </h2>
                      <button>
                        <img src="/assets/icons/quationmark.svg" />
                      </button>
                    </div>
                    <div className="mt-8 text-center">
                      <span className="text-black text-[13px] font-semibold leading-[20px]">
                        Invite your own Influencers to participate in this
                        campaign
                      </span>
                    </div>
                    <div className="mt-10">
                      <textarea class="resize-none rounded-none border border-black focus:outline-none h-[54px] w-full"></textarea>
                    </div>
                    <div className="text-center mt-12">
                      <button className="bg-[#D9D9D9] subpixel-antialiased px-5 py-2 text-[17px] font-semibold leading-[26px]">
                        Send Invite
                      </button>
                    </div>
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

export default Influencers;
