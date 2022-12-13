import { Disclosure, Tab } from "@headlessui/react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const faqs = [
  {
    question: "What  can I do with Credits?",
    answer:
      "Mercedes’ flagship model will be presented to the world as the global benchmark for luxury motoring. Focusing on what the S-Class Mercedes stands for as an icon of future mobility. The campaign, which launched on TV towards the end of May, aimed to articulate Monzo’s brand.",
  },
  {
    question: "Can I carry credits over from one month to the next?",
    answer:
      "Mercedes’ flagship model will be presented to the world as the global benchmark for luxury motoring. Focusing on what the S-Class Mercedes stands for as an icon of future mobility. The campaign, which launched on TV towards the end of May, aimed to articulate Monzo’s brand.",
  },
  {
    question: "Do i still  need a marketing spend?",
    answer:
      "Mercedes’ flagship model will be presented to the world as the global benchmark for luxury motoring. Focusing on what the S-Class Mercedes stands for as an icon of future mobility. The campaign, which launched on TV towards the end of May, aimed to articulate Monzo’s brand.",
  },
  {
    question: "What is a Performance based campaign?",
    answer:
      "Mercedes’ flagship model will be presented to the world as the global benchmark for luxury motoring. Focusing on what the S-Class Mercedes stands for as an icon of future mobility. The campaign, which launched on TV towards the end of May, aimed to articulate Monzo’s brand.",
  },
  {
    question: "Can i cancel my subscription anytime?",
    answer:
      "Mercedes’ flagship model will be presented to the world as the global benchmark for luxury motoring. Focusing on what the S-Class Mercedes stands for as an icon of future mobility. The campaign, which launched on TV towards the end of May, aimed to articulate Monzo’s brand.",
  },
];
const plandetail = [
  {
    datail: "Users",
    starter: "1",
    professional: "2",
    enterprise: "10",
  },
  {
    datail: "Influencer Search",
    starter: true,
    professional: true,
    enterprise: true,
  },
  {
    datail: "Job Advertising",
    starter: true,
    professional: true,
    enterprise: true,
  },
  {
    datail: "Trend Analysis",
    starter: false,
    professional: true,
    enterprise: true,
  },
  {
    datail: "Advanced Reporting",
    starter: false,
    professional: true,
    enterprise: true,
  },
  {
    datail: "Performance Campaigns",
    starter: false,
    professional: false,
    enterprise: true,
  },
  {
    datail: "Influencer Recommendations",
    starter: false,
    professional: false,
    enterprise: true,
  },

  // More people...
];
const plan = [
  {
    name: "Starter",
    discription: "Perfect plan for starters",
    price: "Free",
    time: "for a lifetime",
    cradit: "25",
    trial: "",
    popular: false,
    runningpaln: true,
    specification: [
      {
        user: "1 User",
      },
      {
        user: "Influencer Search",
      },
      {
        user: "Job Advertisig",
      },
    ],
  },
  {
    name: "Professional",
    discription: "Get unlimited activities",
    price: "₦80,000",
    time: "per year",
    cradit: "100",
    popular: true,
    runningpaln: false,
    trial: "Start 14 day free trial",

    specification: [
      {
        user: "5 Users",
      },
      {
        user: "Influencer Search",
      },
      {
        user: "Job Advertisig",
      },
      {
        user: "Trend Analysis",
      },
    ],
  },
  {
    name: "Enterprise",
    discription: "For users who want to do more",
    price: "₦120,000",
    time: "per month",
    cradit: "300",
    runningpaln: false,
    trial: "Start 14 day free trial",
    popular: false,
    specification: [
      {
        user: "10 User",
      },
      {
        user: "Influencer Search",
      },
      {
        user: "Job Advertisig",
      },
      {
        user: "Performance Campaigns",
      },
    ],
  },
];
const UpgradePlan = () => {
  const [compare, setCompare] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="bg-[#FAF9FD] w-full">
      <div className="max-w-sm px-5 bg-[#FAF9FD] md:px-0 w-auto md:w-[858px] md:max-w-[858px] mx-auto pb-[60px] pt-8">
        <div className="max-w-sm md:max-w-[514px] mb-9 text-center mx-auto">
          <h1 className="text-[15px] md:text-[17px] font-semibold text-black500 mb-4 leading-[26px]">
            Upgrade your Plan
          </h1>
          <p className="text-xs md:text-[15px] leading-[18px] md:leading-[22px] text-black400 font-medium ">
            Simple pricing with no hidden fees and advanced features for each of
            your plans.
          </p>
        </div>
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className="flex justify-center gap-[33px] p-[3.5px] md:p-1 ">
            <Tab
              className={({ selected }) =>
                classNames(
                  " whitespace-nowrap pb-1 font-medium border-b text-xs md:text-xs leading-[18px] focus:outline-none",
                  selected
                    ? "text-violet600 border-violet600"
                    : "text-black300  border-transparent "
                )
              }
            >
              Monthly Billing
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  " whitespace-nowrap relative pb-1 font-medium border-b text-xs md:text-xs leading-[18px] focus:outline-none",
                  selected
                    ? "text-violet600 border-violet600"
                    : "text-black300  border-transparent "
                )
              }
            >
              Yearly Billing
              <div className="absolute hidden sm:block left-[85px] top-0">
                <div className="relative flex">
                  <img src="/assets/icons/Polygon.svg" className="-mr-1" />
                  <div className="w-[5px] h-[5px] absolute rounded-full bg-white top-[8px] left-[10px]"></div>
                  <div className="bg-[#FFC100]  px-1.5 whitespace-nowrap flex items-center rounded-r rounded-[2px]">
                    <span className="text-black400 text-[10px] font-medium leading-[15px]">
                      Save 20%
                    </span>
                  </div>
                </div>
              </div>
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel className="mt-5 md:mt-11">
              <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-9 lg:space-y-0">
                {plan.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-dark115 rounded-xl px-[27px] relative pt-12 pb-8 text-center overflow-hidden"
                  >
                    {item.popular ? (
                      <div className="absolute top-0  left-0 right-0 ">
                        <span className="text-white py-1 px-3 bg-violet600 rounded text-medium text-[10px] leading-[15px]">
                          Most Popular
                        </span>
                      </div>
                    ) : (
                      ""
                    )}

                    <div className="h-[8px] w-full absolute bg-violet600 top-0 left-0"></div>
                    <h3 className="text-dark900  text-[15px] leading-[22px] mb-px font-semibold">
                      {item.name}
                    </h3>
                    <span className="text-gray500 text-xs leading-[21px] font-medium">
                      {item.discription}
                    </span>
                    <h2 className="text-xl font-bold leading-[30px] text-dark900 mt-2">
                      {item.price}
                    </h2>
                    <span className="text-gray500 text-xs leading-[21px] font-medium">
                      {item.time}
                    </span>
                    <span className="flex justify-center mt-3.5 mb-[18px] items-center text-pink500 text-[10px] leading-[21px] font-medium">
                      <span className="text-pink600 mr-[3px] font-semibold">
                        {item.cradit}
                      </span>{" "}
                      Credits/Month
                      <img
                        src="/assets/icons/qua-pink.svg"
                        className="ml-1.5"
                      />
                    </span>
                    {item.runningpaln ? (
                      <button className="text-gray250 mb-4 text-[13px] leading-5 font-semibold w-full py-2 rounded border border-gray250 focus:outline-none">
                        Current Plan
                      </button>
                    ) : (
                      <button className="text-white mb-4 text-[13px] leading-5 bg-violet600 font-semibold w-full py-2 rounded border border-violet600 focus:outline-none">
                        Get Started
                      </button>
                    )}
                    {item.trial ? (
                      <span className="text-violet600 underline block mb-5 font-semibold text-[13px] leading-[21px]">
                        {item.trial}
                      </span>
                    ) : (
                      ""
                    )}
                    <ul className="space-y-2 ">
                      {item.specification.map((data) => (
                        <li className="text-gray500 text-xs font-medium leading-[21px] flex items-center ">
                          <CheckIcon
                            className="h-4 w-5 mr-2 text-[#0CB947]"
                            aria-hidden="true"
                          />{" "}
                          {data.user}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Tab.Panel>

            <Tab.Panel className="mt-5 md:mt-11">
              <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-9 lg:space-y-0">
                {plan.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-dark115 rounded-xl px-[27px] relative pt-12 pb-8 text-center overflow-hidden"
                  >
                    {item.popular ? (
                      <div className="absolute top-0  left-0 right-0 ">
                        <span className="text-white py-1 px-3 bg-violet600 rounded text-medium text-[10px] leading-[15px]">
                          Most Popular
                        </span>
                      </div>
                    ) : (
                      ""
                    )}

                    <div className="h-[8px] w-full absolute bg-violet600 top-0 left-0"></div>
                    <h3 className="text-dark900  text-[15px] leading-[22px] mb-px font-semibold">
                      {item.name}
                    </h3>
                    <span className="text-gray500 text-xs leading-[21px] font-medium">
                      {item.discription}
                    </span>
                    <h2 className="text-xl font-bold leading-[30px] text-dark900 mt-2">
                      {item.price}
                    </h2>
                    <span className="text-gray500 text-xs leading-[21px] font-medium">
                      {item.time}
                    </span>
                    <span className="flex justify-center mt-3.5 mb-[18px] items-center text-pink500 text-[10px] leading-[21px] font-medium">
                      <span className="text-pink600 mr-[3px] font-semibold">
                        {item.cradit}
                      </span>{" "}
                      Credits/Month
                      <img
                        src="/assets/icons/qua-pink.svg"
                        className="ml-1.5"
                      />
                    </span>
                    {item.runningpaln ? (
                      <button className="text-gray250 mb-4 text-[13px] leading-5 font-semibold w-full py-2 rounded border border-gray250 focus:outline-none">
                        Current Plan
                      </button>
                    ) : (
                      <button className="text-white mb-4 text-[13px] leading-5 bg-violet600 font-semibold w-full py-2 rounded border border-violet600 focus:outline-none">
                        Get Started
                      </button>
                    )}
                    {item.trial ? (
                      <span className="text-violet600 underline block mb-5 font-semibold text-[13px] leading-[21px]">
                        {item.trial}
                      </span>
                    ) : (
                      ""
                    )}
                    <ul className="space-y-2 ">
                      {item.specification.map((data) => (
                        <li className="text-gray500 text-xs font-medium leading-[21px] flex items-center ">
                          <CheckIcon
                            className="h-4 w-5 mr-2 text-[#0CB947]"
                            aria-hidden="true"
                          />{" "}
                          {data.user}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
        <Disclosure as="div" className=" ">
          {({ open }) => (
            <>
              <Disclosure.Panel as="dd" className="mt-2 ">
                {" "}
                <div className="mt-[27px]">
                  <h2 className="text-black500 text-center text-[17px] leading-[26px] font-semibold">
                    Compare plans
                  </h2>
                  <div className="mt-8 flex flex-col">
                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden ">
                          <table className="min-w-full ">
                            <thead className="bg-gray-50">
                              <tr>
                                <th
                                  scope="col"
                                  className="py-3.5 pl-4 pr-3 text-left text-[15px] font-semibold text-violet600 sm:pl-6"
                                >
                                  Features
                                </th>
                                <th
                                  scope="col"
                                  className="px-3 py-3.5 text-center min-w-[120px]  text-left text-[15px] font-semibold text-violet600"
                                >
                                  Starter
                                </th>
                                <th
                                  scope="col"
                                  className="px-3 py-3.5 text-center min-w-[120px] text-left text-[15px] font-semibold text-violet600"
                                >
                                  Professional
                                </th>
                                <th
                                  scope="col"
                                  className="px-3 py-3.5 text-center min-w-[120px] text-left text-[15px] font-semibold text-violet600"
                                >
                                  Enterprise
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white">
                              {plandetail.map((person, personIdx) => (
                                <tr
                                  key={person.email}
                                  className={
                                    personIdx % 2 === 0
                                      ? undefined
                                      : "bg-[#faf9fd]"
                                  }
                                >
                                  <td className="whitespace-nowrap py-3.5 pl-4 pr-3 text-[13px] leading-5 font-medium text-black400 sm:pl-7">
                                    {person.datail}
                                  </td>
                                  <td className="whitespace-nowrap text-center py-3.5  px-3 text-[13px] leading-5 font-medium text-black400 ">
                                    {person.starter === true ? (
                                      <CheckIcon className="h-5 w-6 text-[#0CB947] mx-auto text-bold" />
                                    ) : person.starter === false ? (
                                      <XMarkIcon
                                        className="h-6 w-6 text-[#FF0000] mx-auto text-bold"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      person.starter
                                    )}
                                  </td>
                                  <td className="whitespace-nowrap text-center py-3.5  px-3 text-[13px] leading-5 font-medium text-black400 ">
                                    {person.professional === true ? (
                                      <CheckIcon className="h-5 w-6 text-[#0CB947] mx-auto text-bold" />
                                    ) : person.professional === false ? (
                                      <XMarkIcon
                                        className="h-6 w-6 text-[#FF0000] mx-auto text-bold"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      person.professional
                                    )}
                                  </td>
                                  <td className="whitespace-nowrap text-center py-3.5  px-3 text-[13px] leading-5 font-medium text-black400 ">
                                    {person.enterprise === true ? (
                                      <CheckIcon className="h-5 w-6 text-[#0CB947] text-bold mx-auto" />
                                    ) : person.enterprise === false ? (
                                      <XMarkIcon
                                        className="h-6 w-6 text-[#FF0000] mx-auto text-bold"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      person.enterprise
                                    )}
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
              </Disclosure.Panel>
              <dt className="text-lg">
                <Disclosure.Button className="w-full focus:outline-none mt-4 bg-white rounded flex justify-center items-center text-[15px] leading-[22px] py-2.5  font-medium shadow-dark300 text-violet600">
                  <span>Show Detailed Plan Comparison</span>
                  <ChevronDownIcon
                    className={classNames(
                      open ? "-rotate-180" : "rotate-0",
                      " transform w-4 h-4 ml-1.5"
                    )}
                  />
                </Disclosure.Button>
              </dt>
            </>
          )}
        </Disclosure>

        <div className=" mt-10 md:mt-7">
          <div className=" mx-auto max-w-[589px] ">
            <h1 className="text-[17px] text-center mb-2  font-semibold text-dark900">
              Frequently Asked Questions
            </h1>
            <dl className=" space-y-6 divide-y divide-gray-200 ">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6 ">
                  {({ open }) => (
                    <>
                      <dt className="text-lg">
                        <Disclosure.Button className="flex w-full items-center justify-between text-left text-gray-400">
                          <span className="font-medium text-[13px] leading-[18px] md:text-[15px] md:leading-[22px] text-black400">
                            {faq.question}
                          </span>
                          <div className="ml-6 flex-none w-[30px] h-[30px] md:w-auto md:h-auto">
                            <img
                              src="/assets/icons/Frame35372.svg"
                              className={classNames(
                                open ? "-rotate-180" : "rotate-0",
                                " transform "
                              )}
                              aria-hidden="true"
                            />
                          </div>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 ">
                        <p className="text-xs leading-[18px] md:text-[13px] text-medium text-black400 md:leading-[22px]">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpgradePlan;
