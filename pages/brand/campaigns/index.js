import React, { Fragment, useState } from "react";
import { Dialog, Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
const publishingOptions = [
  {
    title: "All",
    current: true,
  },
  {
    title: "Active Campaigns",
    current: false,
  },
  {
    title: "Completed Campaigns",
    current: true,
  },
  {
    title: "Draft",
    current: true,
  },
  {
    title: "In Review",
    current: true,
  },
];
const draft = [
  {
    img: "/assets/icons/AndreyKrav-.jpg",
    name: "Akinbobola Y.",
    subname: "Kylie Jenner Campaign",
    time: "2:04 pm",
  },
  {
    img: "/assets/icons/AndreyKrav-.jpg",
    name: "Akinbobola Y.",
    subname: "Kylie Jenner Campaign",
    time: "2:04 pm",
  },
  {
    img: "/assets/icons/AndreyKrav-.jpg",
    name: "Akinbobola Y.",
    subname: "Kylie Jenner Campaign",
    time: "2:04 pm",
  },
  {
    img: "/assets/icons/AndreyKrav-.jpg",
    name: "Akinbobola Y.",
    subname: "Kylie Jenner Campaign",
    time: "2:04 pm",
  },
  {
    img: "/assets/icons/AndreyKrav-.jpg",
    name: "Akinbobola Y.",
    subname: "Kylie Jenner Campaign",
    time: "2:04 pm",
  },
  {
    img: "/assets/icons/AndreyKrav-.jpg",
    name: "Akinbobola Y.",
    subname: "Kylie Jenner Campaign",
    time: "2:04 pm",
  },
];
// const stats = [
// 	{ id: 1, name: 'Active Campaigns', stat: '10', icon: '/assets/icons/spent.svg', change: '+5.50%', color: '#5B26CF', },
// 	{ id: 2, name: 'Influencers to Review', stat: '24', icon: '/assets/icons/see.svg', change: '+01', color: '#DE7C32' },
// 	{ id: 3, name: 'Content to Review', stat: '08', icon: '/assets/icons/transfer.svg', change: '+01',  color: '#4FB6F0' },
// 	{ id: 4, name: 'Review Contents', stat: '12 ', icon: '/assets/icons/like.svg', change: '+07',  color: '#D82594' },
// ]
const campaigns = [
  {
    img: "/assets/icons/AndreyKrav-.jpg",
    title: "Kylie Jenner Campaign",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut cursus ipsum. Ut tristique turpis liber o, conv allis tincidunt purus euismod.",
    status: "Acitve",
  },
  {
    img: "/assets/images/drink.png",
    title: "Campaign Title",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut cursus ipsum. Ut tristique turpis liber o, conv allis tincidunt purus euismod.",
    status: "Draft",
  },
  {
    img: "/assets/icons/AndreyKrav-.jpg",
    title: "Campaign Title",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut cursus ipsum. Ut tristique turpis liber o, conv allis tincidunt purus euismod.",
    status: "In Review",
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Campaigns = () => {
  const [selected, setSelected] = useState(publishingOptions[0]);
  const [draftModal, setDraftModal] = useState(false);
  const [contentModal, setContentModal] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(true);
  const search = () => {
    setSearchIsOpen(!searchIsOpen);
  };

  return (
    <>
      <main className="bg-main-bg px-4 sm:px-6 xl:px-[60px]">
        <div className="py-6">
          <div className="mx-auto  ">
            <h1 className="text-[17px] leading-[26px] mb-2 font-semibold text-gray200">
              Campaigns
            </h1>
            <span className="font-medium text-[15px] text-black400 leading-[22px]">
              View and manage all your Influencer campaigns.
            </span>

            {/* <div>
				<button className='bg-white shadow-dark10 text-white w-full flex justify-center px-5 py-2 text-sm font-medium rounded-md'>
					End Campaign
				</button>
			</div> */}
          </div>
          {/* <div className="mx-auto mt-[17px]   ">
						<div className='mb-[27px]'>
							<dl className="mt-5 grid grid-cols-1 gap-[23px] sm:grid-cols-4">
								{stats.map((item) => (
									<div key={item.name} className="overflow-hidden rounded-[15px] bg-white px-4 py-5 shadow-dark80 sm:px-5 sm:pt-[18px] sm:pb-[16px]">
										<div className='flex items-center mb-3'>

											<img src={item.icon} />
											<h4 className="truncate text-[15px] ml-3  font-semibold text-black400">{item.name}</h4>
										</div>
										<span className={`text-xl font-semibold tracking-tight`}
											style={{ color: item.color }}>{item.stat}</span>
										<div className='mt-[7px] flex items-center'>
											<span style={{ color: item.color }} className="text-medium text-[10px]">{item.count}</span>
											<div className='flex items-center ml-[17px]'>

												<img src="/assets/icons/graph.svg" className='mr-[3px]' />
												<span className={classNames(item.count ? 'text-[10px]' : '  text-xs', 'text-green600 font-medium')}>{item.change}</span>
											</div>
										</div>
									</div>
								))}
							</dl>
						</div>
					</div> */}
          <div className="mt-8">
            <div className="grid grid-cols-1 items-start gap-4 xl:grid-cols-3 lg:gap-8">
              <div className="grid gap-4 col-span-1 xl:col-span-2">
                <div className="bg-white shadow-dark20 p-3 sm:py-5 sm:px-5 md:px-[31px] rounded-[15px]">
                  <div className="space-y-2 sm:space-y-0 sm:flex justify-between">
                    <div>
                      <h2 className="text-black600 font-semibold text-[17px] leading-[26px]">
                        My Campaigns
                      </h2>
                    </div>
                    <div className="flex relative justify-between sm:justify-end gap-5">
                      <div className="relative">
                        <button
                          onClick={search}
                          className="absolute h-[30px] w-[40px] flex items-center justify-center focus:outline-none rounded-lg"
                        >
                          <img src="/assets/icons/search.svg" />
                        </button>
                        <input
                          className={classNames(
                            searchIsOpen ? "w-0 pl-5" : "w-auto",
                            "transition-all duration-700 focus:outline-none pl-9 pr-5 border text-xs placeholder:text-xs font-normal leading-[18px] placeholder:font-normal placeholder:leading-[18px] border-black200/[0.5] rounded-lg  placeholder:text-black200 py-1.5"
                          )}
                          type="text"
                          name=""
                          id=""
                          placeholder="Search campaign by name"
                        />
                      </div>
                      <div>
                        <Listbox value={selected} onChange={setSelected}>
                          {({ open }) => (
                            <>
                              <div className="relative">
                                <Listbox.Button className="inline-flex rounded-md shadow-dark10">
                                  <div className="inline-flex rounded-md  py-[3px] px-[15px]">
                                    <div className="inline-flex items-center rounded-l-md border border-transparent bg-white">
                                      <span className="text-black200 text-[15px] leading-[22px] font-medium">
                                        Filter:
                                      </span>
                                      <p className="ml-1 text-[15px] leading-[22px] font-medium text-violet600">
                                        {selected.title}
                                      </p>
                                    </div>
                                    <div className=" pl-2 flex items-center rounded-r-md text-sm font-medium text-white focus:outline-none ">
                                      <img
                                        src="/assets/icons/Arrow - Down 2.svg"
                                        className=" text-white"
                                        aria-hidden="true"
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
                                  <Listbox.Options className="absolute right-0 px-[9px] py-3 z-10 mt-1.5 w-[248px] origin-top-right overflow-hidden rounded-md bg-white shadow-dark150 focus:outline-none">
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
                                                  selected
                                                    ? "font-semibold"
                                                    : "font-normal"
                                                }
                                              >
                                                {option.title}
                                              </p>
                                              {selected ? (
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
                    </div>
                  </div>
                  <div className="mt-[35px] grid gap-3 sm:gap-[24px]">
                    {campaigns.map((item) => (
                      <div className="bg-white lg:flex shadow-dark800 gap-5 rounded-[12px] p-3">
                        <div className="flex-none ">
                          <img
                            src={item.img}
                            className="rounded-[10px] mx-auto sm:w-[182px] w-full sm:h-[194px]"
                          />
                        </div>
                        <div className="flex-1 mt-4 lg:mt-0">
                          <div className="space-y-3 sm:space-y-0 sm:flex items-center justify-between mb-5">
                            <Link href="/brand/campaigns/newcampaigns">
                              <h3 className="text-black500 text-[15px]  md:text-[17px] leading-[22px] md:leading-[26px] font-semibold">
                                {item.title}
                              </h3>
                            </Link>
                            <div className="flex items-center justify-between sm:justify-start gap-5">
                              <span
                                className={` ${
                                  item.status === "Active"
                                    ? "text-green600 bg-green100"
                                    : item.status === "Draft"
                                    ? "text-black300 bg-[#C4C4C480]"
                                    : item.status === "In Review"
                                    ? "text-[#E5B027] bg-[#FFF4D7]"
                                    : ""
                                } text-green600 bg-green100 rounded-[10px] text-[13px] leading-5 font-medium px-3 py-px`}
                              >
                                {item.status}
                              </span>
                              <div className="flex gap-5">
                                <button className="focus:outline-none">
                                  <img src="/assets/icons/message-edit2.svg" />
                                </button>
                                <button className="focus:outline-none">
                                  <img src="/assets/icons/copy2.svg" />
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="mb-3">
                            <p className="text-black400 text-[12px] leading-[17px]  md:text-[15px] font-medium md:leading-[22px] ">
                              {" "}
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Nam ut cursus ipsum. Ut tristique turpis
                              liber o, conv allis tincidunt purus euismod.
                            </p>
                          </div>
                          <div className="mb-[18px]">
                            <div className="flex justify-between mb-1">
                              <h6 className="text-pink600 font-semibold text-[12px] sm:text-[13px] leading-5">
                                Target Achieved
                              </h6>
                              <span className="text-pink600 font-medium text-[12px] sm:text-[13px] leading-5">
                                100,000 Impressions
                              </span>
                            </div>
                            <div className="w-full h-[6px] bg-gray120 overflow-hidden rounded-md">
                              <div className="w-[75%] bg-pink600 h-full"></div>
                            </div>
                          </div>
                          <div className="grid  grid-cols-2 xl:grid-cols-4  ">
                            <div>
                              <span className="text-black300 font-medium text-[10px] sm:text-[13px] leading-5">
                                Budget
                              </span>
                              <div className="flex gap-2 mt-1">
                                <div className="w-[18px] h-[18px] sm:w-[21px] sm:h-[21px] flex items-center justify-center rounded-full bg-gray120">
                                  <img src="/assets/icons/card-pos.svg" />
                                </div>
                                <span className="text-black500 text-[13px] sm:text-[15px] font-semibold leading-[22px]">
                                  N250,000
                                </span>
                              </div>
                            </div>
                            <div>
                              <span className="text-black300 font-medium text-[10px] sm:text-[13px] leading-5">
                                Content Published
                              </span>
                              <div className="flex gap-2 mt-1">
                                <div className="w-[18px] h-[18px] sm:w-[21px] sm:h-[21px] flex items-center justify-center rounded-full bg-gray120">
                                  <img src="/assets/icons/select-all.svg" />
                                </div>
                                <span className="text-black500 text-[13px] sm:text-[15px] font-semibold leading-[22px]">
                                  29
                                </span>
                              </div>
                            </div>
                            <div>
                              <span className="text-black300 font-medium text-[10px] sm:text-[13px] leading-5">
                                Pending Tasks
                              </span>
                              <div className="flex gap-2 mt-1">
                                <div className="w-[18px] h-[18px] sm:w-[21px] sm:h-[21px] flex items-center justify-center rounded-full bg-gray120">
                                  <img src="/assets/icons/activity.svg" />
                                </div>
                                <span className="text-black500 text-[13px] sm:text-[15px] font-semibold leading-[22px]">
                                  23
                                </span>
                              </div>
                            </div>
                            <div>
                              <span className="text-black300 font-medium text-[10px] sm:text-[13px] leading-5">
                                Influencers Hired
                              </span>
                              <div className="flex gap-2 mt-1">
                                <div className="w-[18px] h-[18px] sm:w-[21px] sm:h-[21px] flex items-center justify-center rounded-full bg-gray120">
                                  <img src="/assets/icons/people.svg" />
                                </div>
                                <span className="text-black500 text-[13px] sm:text-[15px] font-semibold leading-[22px]">
                                  35
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 lg:gap-8">
                <div className="bg-white shadow-dark20 py-5 px-4 sm:px-[31px] rounded-[15px]">
                  <div className="flex items-center justify-between">
                    <h2 className="text-black600 font-semibold text-[17px] leading-[25px] flex">
                      Drafts{" "}
                      <span className="text-black500  inline-block xl:block text-[15px] leading-[22px]">
                        {" "}
                        (pending approval)
                      </span>
                    </h2>
                    <button
                      onClick={() => setDraftModal(true)}
                      className="whitespace-nowrap focus:outline-none text-violet600 font-medium text-[13px] sm:text-[17px] leading-[26px]"
                    >
                      View All
                    </button>
                  </div>
                  <div className="mt-5 grid gap-[22px]">
                    {draft.slice(0, 4).map((item) => (
                      <div className="flex justify-between">
                        <div className="flex">
                          <div className="bg-white h-[35px] w-[35px]  flex items-center justify-center ">
                            <img
                              src={item.img}
                              className="  rounded h-[35px] w-[35px] flex"
                            />
                          </div>
                          <div className="ml-2.5 grid">
                            <h4 className="text-black500 mb-0.5 font-semibold text-[15px] leading-[22px]">
                              {item.name}
                            </h4>
                            <span className="text-black300 text-[13px] leading-[20px] font-medium">
                              {item.subname}
                            </span>
                          </div>
                        </div>
                        <span className="text-xs text-normal leading-[18px] text-black300">
                          {item.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white shadow-dark20 py-5 px-4 sm:px-[31px] rounded-[15px]">
                  <div className="flex items-center justify-between">
                    <h2 className="text-black600 font-semibold text-[17px] leading-[25px]">
                      Content Published
                    </h2>
                    <button
                      onClick={() => setContentModal(true)}
                      className="whitespace-nowrap focus:outline-none text-violet600 font-medium text-[13px] sm:text-[17px] leading-[26px]"
                    >
                      View All
                    </button>
                  </div>
                  <div className="mt-5 grid gap-[22px]">
                    {draft.slice(0, 4).map((item) => (
                      <div className="flex justify-between">
                        <div className="flex">
                          <div className="bg-white w-[42px] h-[42px] rounded-full flex items-center justify-center border border-[#F2EDFF]">
                            <img
                              src={item.img}
                              className="  rounded h-[35px] w-[35px] flex"
                            />
                          </div>
                          <div className="ml-2.5 grid">
                            <h4 className="text-black500 mb-0.5 font-semibold text-[15px] leading-[22px]">
                              {item.name}
                            </h4>
                            <span className="text-black300 text-[13px] leading-[20px] font-medium">
                              {item.subname}
                            </span>
                          </div>
                        </div>
                        <span className="text-xs text-normal leading-[18px] text-black300">
                          {item.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Transition.Root show={draftModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setDraftModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
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
                <Dialog.Panel className="relative transform rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all  w-full sm:max-w-sm sm:p-6">
                  <button
                    onClick={() => setDraftModal(false)}
                    className="absolute -top-[15px] -right-[15px] focus:outline-none  rounded-full"
                  >
                    <img src="/assets/icons/closebtn.svg" />
                  </button>
                  <div>
                    <div className="mt-3  sm:mt-5">
                      <Dialog.Title
                        as="h2"
                        className="text-black600 font-semibold text-[17px] leading-[25px]"
                      >
                        Drafts{" "}
                        <span className="text-black500 text-[15px] leading-[22px]">
                          {" "}
                          (pending approval)
                        </span>
                      </Dialog.Title>
                      <div className="mt-5 grid gap-[22px]">
                        {draft.map((item) => (
                          <div className="flex justify-between">
                            <div className="flex">
                              <div className="bg-white h-[35px] w-[35px]  flex items-center justify-center ">
                                <img
                                  src={item.img}
                                  className="  rounded h-[35px] w-[35px] flex"
                                />
                              </div>
                              <div className="ml-2.5 grid">
                                <h4 className="text-black500 mb-0.5 font-semibold text-[15px] leading-[22px]">
                                  {item.name}
                                </h4>
                                <span className="text-black300 text-[13px] leading-[20px] font-medium">
                                  {item.subname}
                                </span>
                              </div>
                            </div>
                            <span className="text-xs text-normal leading-[18px] text-black300">
                              {item.time}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={contentModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setContentModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
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
                <Dialog.Panel className="relative transform  rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all  w-full sm:max-w-sm sm:p-6">
                  <button
                    onClick={() => setContentModal(false)}
                    className="absolute -top-[15px] -right-[15px] focus:outline-none  rounded-full"
                  >
                    <img src="/assets/icons/closebtn.svg" />
                  </button>
                  <div>
                    <div className="mt-3  sm:mt-5">
                      <Dialog.Title
                        as="h2"
                        className="text-black600 font-semibold text-[17px] leading-[25px]"
                      >
                        Content Published
                      </Dialog.Title>
                      <div className="mt-5 grid gap-[22px]">
                        {draft.map((item) => (
                          <div className="flex justify-between">
                            <div className="flex">
                              <div className="bg-white h-[35px] w-[35px]  flex items-center justify-center ">
                                <img
                                  src={item.img}
                                  className="  rounded h-[35px] w-[35px] flex"
                                />
                              </div>
                              <div className="ml-2.5 grid">
                                <h4 className="text-black500 mb-0.5 font-semibold text-[15px] leading-[22px]">
                                  {item.name}
                                </h4>
                                <span className="text-black300 text-[13px] leading-[20px] font-medium">
                                  {item.subname}
                                </span>
                              </div>
                            </div>
                            <span className="text-xs text-normal leading-[18px] text-black300">
                              {item.time}
                            </span>
                          </div>
                        ))}
                      </div>
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

export default Campaigns;
