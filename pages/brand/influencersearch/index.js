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
// const ReactApexChart =dynamic()
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
const city = [
  { label: "Andalusia", value: "Andalusia" },
  { label: "Anniston", value: "Anniston" },
  { label: "Atmore", value: "Atmore" },
  { label: "Palmer", value: "Palmer" },
  { label: "Prescott", value: "Prescott" },
  { label: "Arkadelphia", value: "Arkadelphia" },
  { label: "Alameda", value: "Alameda" },
];
const country = [
  { label: "Andalusia", value: "Andalusia" },
  { label: "Anniston", value: "Anniston" },
  { label: "Atmore", value: "Atmore" },
  { label: "Palmer", value: "Palmer" },
  { label: "Prescott", value: "Prescott" },
  { label: "Arkadelphia", value: "Arkadelphia" },
  { label: "Alameda", value: "Alameda" },
];
const interest = [
  { label: "Foods & Drinks", value: "Foods & Drinks" },
  { label: "Sports", value: "Sports" },
  { label: "Beauty", value: "Beauty" },
  { label: "Finance", value: "Finance" },
  { label: "Health & Fitness", value: "Health & Fitness" },
  { label: "Sports", value: "Sports" },
  { label: "Fashion", value: "Fashion" },
  { label: "Education", value: "Education" },
  { label: "Fitness", value: "Fitness" },
  { label: "Sports", value: "Sports" },
  { label: "Politics", value: "Politics" },
  { label: "Healthcare", value: "Healthcare" },
  { label: "Beauty", value: "Beauty" },
  { label: "Education", value: "Education" },
  { label: "Sports", value: "Sports" },
  { label: "Foods & Drinks", value: "Foods & Drinks" },
  { label: "Entertainments", value: "Entertainments" },
  { label: "Beauty", value: "Beauty" },
  { label: "Finance", value: "Finance" },
  { label: "Health & Fitness", value: "Health & Fitness" },
  { label: "Sports", value: "Sports" },
];
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
const socialMedia = [
  {
    icon: "/assets/icons/instagram.svg",
    name: "Instagram",
  },
  {
    icon: "/assets/icons/facebook-rounded.svg",
    name: "Facebook",
  },
  {
    icon: "/assets/icons/Tiktok.svg",
    name: "Tiktok",
  },
  {
    icon: "/assets/icons/Twitter.svg",
    name: "Twitter",
  },
];
const age = [
  {
    name: "All",
  },
  {
    name: "13 - 17",
  },
  {
    name: "18 - 24",
  },
  {
    name: "25 - 34",
  },
  {
    name: "35 - 44",
  },
  {
    name: "45 - 54",
  },
  {
    name: "55 - 64",
  },
  {
    name: "65+",
  },
];
const tab = [
  { name: "Instagram " },
  { name: "Facebook" },
  { name: "Twitter" },
  { name: "TikTok" },
  { name: "YouTube" },
];
const ratecard = [
  {
    icon: "/assets/icons/post.svg",
    name: "Post/Tweet",
    rate: "$50.00",
  },
  {
    icon: "/assets/icons/gallery.svg",
    name: "Photo Carousel",
    rate: "$50.00",
  },
  {
    icon: "/assets/icons/Story.svg",
    name: "Story",
    rate: "$32.00",
  },
  {
    icon: "/assets/icons/Live.svg",
    name: "Live Video",
    rate: "$15.00",
  },
  {
    icon: "/assets/icons/play-circle.svg",
    name: "Video",
    rate: "N/A",
  },
];
const aduienceprogress = [
  {
    name: "Nigeria",
    process: "57%",
  },
  {
    name: "Egypt",
    process: "28%",
  },
  {
    name: "Ghana",
    process: "10%",
  },
  {
    name: "Senegal",
    process: "5%",
  },
];
const reviwe = [
  {
    comment:
      "I really loved working with Jonnathan. He was very professional and delivered quality content.",
  },
  {
    comment:
      "Within 3 months time, we have helped over 500 Nigerians 🥰 make money from their social media😍💃. Within 3 months time, we have helped over 500 Nigerians 🥰 make money from their social media ",
  },
  {
    comment:
      "Within 3 months time, we have helped over 500 Nigerians 🥰 make money.",
  },
  {
    comment:
      "Within 3 months time, we have helped over 500 Nigerians 🥰 make money from their social media😍💃. Within 3 months time, we have helped over 500 Nigerians 🥰 make money from their social media",
  },
];
const brandmentions = [
  { no: "1.", icons: "/assets/icons/pepsi.png", name: "Pepsi" },
  { no: "2.", icons: "/assets/icons/pepsi.png", name: "Samsung Galaxy" },
  { no: "3.", icons: "/assets/icons/pepsi.png", name: "Pepsi" },
  { no: "4.", icons: "/assets/icons/pepsi.png", name: "Pepsi" },
  { no: "5.", icons: "/assets/icons/pepsi.png", name: "Pepsi" },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

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
const animatedComponents = makeAnimated();
const InfluencerSearch = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileView, setProfileView] = useState(false);
  const [audience, setAudience] = useState(true);
  const [openTab, setOpenTab] = React.useState(0);
  const [selected, setSelected] = useState();
  const [selectedMedia, setSelectedMedia] = useState([]);
  const [selectedAge, setSelectedAge] = useState([]);
  const [selectedGender, setSelectedGender] = useState();
  const [selectedInterest, setSelectedInterest] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState([]);
  const [selectedCity, setSelectedCity] = useState([]);
  const [selectedKeyword, setSelectedKeyword] = useState("");
  const [selectedFollower, setSelectedFollower] = useState({
    minimum: "",
    maximum: "",
  });
  const [selectRowAll, setSelectRowAll] = useState(false);
 

  const ClearAll = () => {
    setSelectedMedia([]);
    setSelectedAge([]);
    setSelectedGender();
    setSelectedInterest([]);
    setSelectedCountry([]);
    setSelectedCity([]);
    setSelectedKeyword("");
    setSelectedFollower({
      minimum: "",
      maximum: "",
    });
  };
  const handleInterest = (item) => {
    setSelectedInterest(item);
  };
  const handleCountry = (item) => {
    setSelectedCountry(item);
  };
  const handleCity = (item) => {
    setSelectedCity(item);
  };
  const handleKeyword = (event) => {
    setSelectedKeyword(event.target.value);
  };
  const handleFollowers = (event) => {
    setSelectedFollower({ [event.target.name]: event.target.value });
  };

  const [series, setSeries] = useState([
    {
      name: "Male",
      data: [5, 40, 25, 12, 15, 15, 17],
    },
    {
      name: "Female",
      data: [2, 20, 10, 13, 15, 15, 25],
    },
  ]);

  const [options, setOptions] = useState({
    chart: {
      type: "bar",
      height: "400px",
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 991,
        options: {
          legend: {
            position: "top",
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 2,
        columnWidth: "24px",
        rangeBarOverlap: true,
        dataLabels: {
          total: {
            enabled: false,
          },
        },
      },
    },
    xaxis: {
      title: {
        text: "Age Interval",
        position: "bottom",
        horizontalAlign: "center",

        floating: false,
        style: {
          fontSize: "12px",
          fontWeight: "500",
          fontFamily: undefined,
          color: "#09041580",
        },
      },

      // type: "date",
      categories: ["13-17", "18-24", "25-34", "35-44", "45-54", "55-64", "65+"],
    },
    legend: {
      show: true,
      showForSingleSeries: false,
      showForNullSeries: true,
      showForZeroSeries: true,
      position: "top",
      horizontalAlign: "right",
      floating: false,
      fontSize: "13px",
      fontFamily: "Poppins",
      fontWeight: 500,
      formatter: undefined,
      inverseOrder: false,
      width: undefined,
      height: undefined,
      tooltipHoverFormatter: undefined,
      customLegendItems: [],

      labels: {
        colors: "#5B5863",
        useSeriesColors: false,
      },
      markers: {
        width: 12,
        height: 12,
        strokeWidth: 0,
        // strokeColor: "#fff",
        fillColors: ["#DED4F5", "#5B26CF"],
        radius: 12,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0,
      },
      itemMargin: {
        horizontal: 5,
        vertical: 0,
      },
      onItemClick: {
        toggleDataSeries: true,
      },
      onItemHover: {
        highlightDataSeries: true,
      },
    },
    fill: {
      colors: ["#DED4F5", "#5B26CF"],
    },
    yaxis: {
      title: {
        text: " Percentage (%)",
        align: "left",
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize: "12px",
          fontWeight: "500",
          fontFamily: undefined,
          color: "#09041580",
        },
      },

      show: true,
      showAlways: true,
      showForNullSeries: true,
      seriesName: undefined,
      opposite: false,
      reversed: false,
      logarithmic: false,
      logBase: 10,
      tickAmount: 3,
      min: 0,
      max: 75,

      forceNiceScale: false,
      floating: false,
      decimalsInFloat: undefined,
      labels: {
        show: true,
        align: "right",
        minWidth: 0,
        maxWidth: 160,
        formatter: (value) => value.toFixed(0) + "%",
      },
      crosshairs: {
        show: true,
        position: "back",
        stroke: {
          color: "#b6b6b6",
          width: 1,
          dashArray: 0,
        },
      },
      tooltip: {
        enabled: true,
        offsetX: 0,
      },
    },
  });
  const [pieseries, setPieSeries] = useState({
    series: [60, 40],
    options: {
      chart: {
        type: "pie",
      },
      plotOptions: {
        pie: {
          dataLabels: {
            offset: -25,
          },
        },
      },
      dataLabels: {
        enabled: true,
        position: "center",

        style: {
          fontSize: "20px",
          fontWeight: 500,
        },
      },
      stroke: {
        show: false,
      },
      colors: ["#5B26CF", "#DED4F5"],
      legend: {
        show: true,
        position: "top",
        horizontalAlign: "left",
        fontSize: "13px",
        fontFamily: "Poppins",
        fontWeight: 500,
        formatter: undefined,
        labels: {
          colors: "#5B5863",
          useSeriesColors: false,
        },
      },
      labels: ["Male", "Female"],
      responsive: [
        {
          breakpoint: 991,
          options: {
            chart: {
              width: 500,
            },
            legend: {
              position: "top",
            },
            dataLabels: {
              enabled: true,
              position: "center",
              style: {
                fontSize: "16px",
                fontWeight: 500,
              },
            },
          },
        },
        {
          breakpoint: 545,
          options: {
            chart: {
              width: 250,
            },
            legend: {
              position: "top",
            },
            dataLabels: {
              enabled: true,
              position: "center",
              style: {
                fontSize: "12px",
                fontWeight: 500,
              },
            },
          },
        },
      ],
    },
  });

  const handleAddRemoveInterest = (item) => {
    if (selectedMedia.includes(item)) {
      const arr = [...selectedMedia];
      const index = arr.indexOf(item);
      if (index > -1) {
        // only splice array when item is found
        arr.splice(index, 1);
        setSelectedMedia([...arr]); // 2nd parameter means remove one item only
      }
    } else {
      setSelectedMedia([...selectedMedia, item]);
    }
  };
  const handleAddRemoveAge = (item) => {
    if (selectedAge.includes(item)) {
      if (item.name === "All") {
        const arr = [...selectedAge];
        arr.splice(0, arr.length);
        setSelectedAge([...arr]);
      } else {
        const arr = [...selectedAge];
        const index = arr.indexOf(item);

        if (index > -1) {
          // only splice array when item is found
          arr.splice(index, 1);
          if (arr.length === 7) {
            arr.splice(0, 1);
          }
          setSelectedAge([...arr]); // 2nd parameter means remove one item only
        }
      }
    } else {
      if (item.name === "All") {
        const arrAll = [];
        arrAll.push(...age);
        setSelectedAge([...arrAll]);
      } else {
        if (selectedAge.length >= 6) {
          const arrAll = [];
          arrAll.push(...age);
          setSelectedAge([...arrAll]);
        } else {
          setSelectedAge([...selectedAge, item]);
        }
      }
    }
  };
  const [selectedframe, setSelectedframe] = useState([]);
  const handleAddRemoveframe = (item) => {
    if (selectedframe.includes(item)) {
      const arr = [...selectedframe];
      const index = arr.indexOf(item);
      if (index > -1) {
        // only splice array when item is found
        arr.splice(index, 1);
        setSelectedframe([...arr]); // 2nd parameter means remove one item only
      }
    } else {
      setSelectedframe([...selectedframe, item]);
    }
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,

    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);

  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(people.map((li) => li.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, parseInt(id)]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== parseInt(id)));
    }
  };

  return (
    <>
      <main className="bg-main-bg px-4 sm:px-6 lg:px-[60px]">
        <div className="py-6">
          <div className="mx-auto md:flex  justify-between ">
            <div>
              <h1 className="text-xl mb-1 font-semibold text-gray200">
                Influencer Discovery
              </h1>
              <span className="font-medium text-[15px] text-black400 leading-[22px]">
                Find the Influencer that is perfect for your campaign.
              </span>
            </div>
            <div className="flex mt-4 md:mt-0 items-start space-x-[12px]">
              <button className="bg-white flex items-center shadow-dark10 text-violet600  flex justify-center px-[15px] py-1.5 text-[17px] font-medium rounded">
                <img src="/assets/icons/frame-violet.svg" className="mr-2" />
                <span>Saved</span>
              </button>
              <button
                onClick={() => setSidebarOpen(true)}
                className="bg-violet600 items-center shadow-dark10 text-white flex justify-center px-[15px] py-1.5 text-[17px] font-medium rounded"
              >
                <img src="/assets/icons/setting-menu.svg" className="mr-3" />
                <span>Filters </span>
              </button>
            </div>
          </div>

          <div className="mt-6 bg-white shadow-dark20 pt-[18px] px-[30px] pb-[22px] rounded-[15px]">
            <div className="md:flex justify-between">
              <div className="flex items-center">
                <h2 className="text-black500  font-semibold text-[17px] leading-[26px]">
                  Discover Profiles
                </h2>
              </div>
              <div>
                <Listbox value={selected} onChange={setSelected}>
                  {({ open }) => (
                    <>
                      <Listbox.Label className="sr-only">
                        {" "}
                        Change published status{" "}
                      </Listbox.Label>
                      <div className="relative">
                        <div className="inline-flex md:mt-0 mt-2 w-full divide-x divide-indigo-600 rounded-md shadow-sm">
                          <div className="inline-flex w-full rounded-[6px] shadow-dark10">
                            <div className="inline-flex items-center w-full md:w-auto rounded-l-md border border-transparent bg-white py-1 pl-3 pr-2 text-white shadow-sm">
                              <span className="text-black200 inline-flex text-[15px] font-medium">
                                Sort by:
                                <p className="ml-1 font-medium text-violet600 ">
                                  {" "}
                                  Reach
                                </p>
                              </span>
                            </div>
                            <Listbox.Button className="inline-flex items-center rounded-l-none rounded-r-md  py-2 pl-0 pr-3 text-sm font-medium text-white  focus:outline-none ">
                              <img
                                src="/assets/icons/Arrow - Down 2.svg"
                                aria-hidden="true"
                              />
                            </Listbox.Button>
                          </div>
                        </div>

                        <Transition
                          show={open}
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute right-0 z-10 mt-2 w-[196px] px-[9px] py-3 origin-top-right  overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Listbox.Option
                              className={({ active }) =>
                                classNames(
                                  active
                                    ? "text-white bg-violet600"
                                    : "black500",
                                  "cursor-default rounded-lg  select-none px-3 py-1.5 text-[15px] font-medium leading-[22px]"
                                )
                              }
                            >
                              <div className="flex flex-col">
                                <div className="flex justify-between">
                                  <p>Reach</p>
                                </div>
                              </div>
                            </Listbox.Option>
                            <Listbox.Option
                              className={({ active }) =>
                                classNames(
                                  active
                                    ? "text-white bg-violet600"
                                    : "black500",
                                  "cursor-default rounded-lg  select-none px-3 py-1.5 text-[15px] font-medium leading-[22px]"
                                )
                              }
                            >
                              <div className="flex flex-col">
                                <div className="flex justify-between">
                                  <p>Engagements</p>
                                </div>
                              </div>
                            </Listbox.Option>
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </>
                  )}
                </Listbox>
              </div>
            </div>

            <div className="mt-2 flex flex-col">
              <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className={`${isCheck.length > 0 ? 'mt-6' :''} inline-block min-w-full py-2 align-middle md:px-6 lg:px-8 `}>
                  <div className="overflow-hidden ">
                    <table className="min-w-full ">
                      <thead className="bg-white">
                        {isCheck.length > 0 ? (
                          <tr className="bg-purple100/[0.2] ">
                            <th scope="col" className="w-12 relative w-12 px-6">
                              {isCheck.length === 7 ? (
                                <input
                                  type="checkbox"
                                  onClick={(person) => {
                                    
                                    setIsCheckAll(!selectRowAll);
                                    handleSelectAll();
                                  }}
                               checked={isCheck.length === 7}
                                  className="custom-checkbox absolute left-4 top-1/2 -mt-2 h-4 w-4 bg-white text-[#090415] rounded-[2.8px] accent-violet600 border-gray-300 text-violet600 focus:ring-0 sm:left-6"
                                />
                              ) : (
                                <div className="flex items-center justify-center">
                                  <button
                                    onClick={(person) => {
                                      setIsCheck([]);
                                    }}
                                    className="focus:ring-0 absolute focus:outline-none w-5 h-5"
                                  >
                                    <img src="/assets/icons/close-square.svg" />
                                  </button>
                                </div>
                              )}
                            </th>
                            <th className="py-[11px] text-left">
                              <span className="text-black400 text-[15px] font-medium leading-[22px]">
                                {isCheck.length} Selected
                              </span>
                            </th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th className="min-w-[78px]">
                              <div className="flex items-center justify-center space-x-[18px]">
                                <button className="flex-none focus:outline-none">
                                  <img src="/assets/icons/profile-add.svg" />
                                </button>
                                <button className="flex-none">
                                  <img src="/assets/icons/frame.svg" />
                                </button>
                              </div>
                            </th>
                          </tr>
                        ) : (
                          <tr>
                            <th
                              scope="col"
                              className="relative w-12 px-6 sm:w-16 sm:px-8"
                            >
                              <input
                                type="checkbox"
                                onClick={(person) => {
                                  // handleAddRemoveRow(person),
                                  setIsCheckAll(!selectRowAll);
                                  handleSelectAll();
                                }}
                                // onClick={() => setCheckedState}
                                className="absolute custom-checkbox left-4 top-1/2 -mt-2 h-4 w-4 bg-white text-[#090415] rounded-[2.8px] accent-violet600 border-gray-300 text-violet600 focus:ring-0 sm:left-6"
                              />
                            </th>

                            <th
                              scope="col"
                              className="px-3 py-[9px]  text-left text-[15px] font-semibold text-violet600"
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
                              className="px-3 py-[9px]   text-left text-[15px] font-semibold text-violet600"
                            >
                              Reach
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-[9px]   text-left text-[15px] font-semibold text-violet600"
                            >
                              Eng.
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-[9px]   text-left text-[15px] font-semibold text-violet600"
                            >
                              Interests
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-[9px]   text-center text-[15px] font-semibold text-violet600"
                            >
                              Recent Posts
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-[9px]   text-end text-[15px] font-semibold text-violet600"
                            >
                              Actions
                            </th>
                          </tr>
                        )}
                      </thead>
                      <tbody
                        className={`${
                          isCheck.length > 0
                            ? "before:leading-[1em] before:content-['']  before:h-[8px] before:text-[1px] before:text-white before:block"
                            : ""
                        }bg-white `}
                      >
                        {people.map((person, personIdx) => (
                          <tr
                            key={person.email}
                            className={`${
                              personIdx % 2 === 1
                                ? undefined
                                : "bg-[#D9D9D9] bg-opacity-[0.2]"
                            } influencertable`}
                          >
                            <td className="relative w-12 px-6 sm:w-16 sm:px-8">
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
                                <div className="h-10 w-10 flex-shrink-0">
                                  <img
                                    className="h-10 w-10 rounded-full"
                                    src={person.img}
                                    alt=""
                                  />
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
                                <img
                                  className="w-[58px] h-[51px] rounded-[12px]"
                                  src="/assets/images/image22.png"
                                />
                                <img
                                  className="w-[58px] h-[51px] rounded-[12px]"
                                  src="/assets/images/image22.png"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="flex items-center justify-center space-x-[18px]">
                                <Menu
                                  as="div"
                                  className="relative inline-block text-left "
                                >
                                  <div className="flex items-center">
                                    <Menu.Button className="flex-none focus:outline-none">
                                      <img src="/assets/icons/profile-add.svg" />
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
                                    <Menu.Items className="absolute menu-popup right-0 z-10 mt-2 w-[288px] origin-top-right rounded-md bg-white shadow-lg  focus:outline-none">
                                      <div className="px-2 py-3">
                                        <Menu.Item>
                                          {({ active }) => (
                                            <a
                                              href="#"
                                              className={classNames(
                                                active
                                                  ? "bg-violet600 rounded-lg text-white"
                                                  : "text-black500",
                                                "block px-4 py-2 flex items-center text-[15px] leading-[22px] font-medium py-1.5 px-3"
                                              )}
                                            >
                                              <img
                                                src={
                                                  active
                                                    ? "/assets/icons/speak.svg "
                                                    : "/assets/icons/speak-dark500.svg"
                                                }
                                                className="mr-3"
                                              />
                                              Kylie Jenner Campaign
                                            </a>
                                          )}
                                        </Menu.Item>
                                        <Menu.Item>
                                          {({ active }) => (
                                            <a
                                              href="#"
                                              className={classNames(
                                                active
                                                  ? "bg-violet600 rounded-lg text-white"
                                                  : "text-black500",
                                                "block px-4 py-2 flex mt-2 items-center text-[15px] leading-[22px] font-medium py-1.5 px-3"
                                              )}
                                            >
                                              <img
                                                src={
                                                  active
                                                    ? "/assets/icons/speak.svg "
                                                    : "/assets/icons/speak-dark500.svg"
                                                }
                                                className="mr-3"
                                              />
                                              Bet9ja 2023 Launch
                                            </a>
                                          )}
                                        </Menu.Item>
                                      </div>

                                      <Menu.Item>
                                        {({ active }) => (
                                          <button
                                            type="submit"
                                            className={classNames(
                                              active ? "" : "text-black500",
                                              "block w-full border-t block mx-2  px-4 py-2.5 flex items-center text-[15px] leading-[22px] font-medium py-1.5 px-3"
                                            )}
                                          >
                                            <img
                                              src="/assets/icons/add-rounded.svg"
                                              className="mr-3"
                                            />
                                            Create Campaign
                                          </button>
                                        )}
                                      </Menu.Item>
                                    </Menu.Items>
                                  </Transition>
                                </Menu>

                                <button
                                  key={personIdx}
                                  className="flex-none"
                                  onClick={() => handleAddRemoveframe(person)}
                                >
                                  {selectedframe.includes(person) ? (
                                    <img src="/assets/icons/Vector-bold.svg" />
                                  ) : (
                                    <img src="/assets/icons/frame.svg" />
                                  )}
                                </button>
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

      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={setSidebarOpen}>
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
              <Dialog.Panel className="relative flex w-full max-w-[317px] flex-1 flex-col bg-white">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 -left-[3rem]  pt-2">
                    <button
                      type="button"
                      className="ml-1 flex h-[29px] w-[29px] items-center justify-center rounded-[3.7px] focus:outline-none focus:ring-0 bg-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className=" text-black500"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex flex-shrink-0 items-center justify-between pt-5 px-[30px]">
                  <h2 className="text-black600 font-semibold text-xl">
                    Filter
                  </h2>
                  <div>
                    <button
                      onClick={ClearAll}
                      className="focus:outline-none flex"
                    >
                      <span className="text-black300 font-normal text-xs">
                        Clear all
                      </span>
                      <XMarkIcon
                        className="w-[16px] ml-1.5 text-black500"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
                <div className="h-0 flex-1 custom-scroll overflow-y-auto  px-[30px] pb-4">
                  <div className="mt-5 space-y-1 ">
                    <dl className=" space-y-6 divide-y divide-gray-200">
                      <Disclosure as="div" className="">
                        {({ open }) => (
                          <>
                            <dt className="text-lg">
                              <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                                <span className="font-semibold text-[15px] text-black400">
                                  Keywords
                                </span>
                                <span className="ml-6 flex h-7 items-center">
                                  <ChevronDownIcon
                                    className={classNames(
                                      open ? "-rotate-180" : "rotate-0",
                                      "h-6 w-6 transform"
                                    )}
                                    aria-hidden="true"
                                  />
                                </span>
                              </Disclosure.Button>
                            </dt>
                            <Disclosure.Panel as="dd" className="mt-4">
                              <input
                                value={selectedKeyword}
                                onChange={(e) => handleKeyword(e)}
                                placeholder="Type your keywords"
                                className="border text-black500 bg-white py-[9px] px-4 border-black200 text-xs rounded-[6px] focus:outline-none w-full placeholde:text-xs placeholde:text-black200 placeholder:font-normal"
                              />
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    </dl>
                    <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                      <Disclosure as="div" className="pt-6">
                        {({ open }) => (
                          <>
                            <dt className="text-lg">
                              <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                                <span className="font-semibold text-[15px] text-black400">
                                  Social Media
                                </span>
                                <span className="ml-6 flex h-7 items-center">
                                  <ChevronDownIcon
                                    className={classNames(
                                      open ? "-rotate-180" : "rotate-0",
                                      "h-6 w-6 transform"
                                    )}
                                    aria-hidden="true"
                                  />
                                </span>
                              </Disclosure.Button>
                            </dt>
                            <Disclosure.Panel as="dd" className="mt-4">
                              <div className="flex flex-wrap">
                                {socialMedia.map((item, index) => (
                                  <button
                                    key={index}
                                    onClick={() => {
                                      handleAddRemoveInterest(item);
                                    }}
                                    className={`border mr-2 mb-2 rounded-[5px] flex items-center px-[10px] py-[3px] ${
                                      selectedMedia.includes(item)
                                        ? "bg-violet600 border-violet600 "
                                        : " border-black200 "
                                    }`}
                                  >
                                    <img
                                      src={item.icon}
                                      className="bg-white rounded-[2px] w-[15px] h-[15px] mr-[9px]"
                                    />
                                    <span
                                      className={`font-medium text-[13px] leading-5 ${
                                        selectedMedia.includes(item)
                                          ? "text-white"
                                          : " text-black300 "
                                      }`}
                                    >
                                      {" "}
                                      {item.name}
                                    </span>
                                  </button>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    </dl>
                    <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                      <Disclosure as="div" className="pt-6">
                        {({ open }) => (
                          <>
                            <dt className="text-lg">
                              <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                                <span className="font-semibold text-[15px] text-black400">
                                  Age
                                </span>
                                <span className="ml-6 flex h-7 items-center">
                                  <ChevronDownIcon
                                    className={classNames(
                                      open ? "-rotate-180" : "rotate-0",
                                      "h-6 w-6 transform"
                                    )}
                                    aria-hidden="true"
                                  />
                                </span>
                              </Disclosure.Button>
                            </dt>
                            <Disclosure.Panel as="dd" className="mt-4">
                              <div className="flex flex-wrap">
                                {age.map((item, index) => (
                                  <button
                                    key={index}
                                    onClick={() => handleAddRemoveAge(item)}
                                    className={`border  mr-2 mb-2 rounded-[5px] flex items-center px-[10px] py-[3px] ${
                                      selectedAge.includes(item)
                                        ? "bg-violet600 border-violet600 text-white "
                                        : " border-black200 text-black300 "
                                    }`}
                                  >
                                    <span className=" font-medium text-[13px] leading-5">
                                      {" "}
                                      {item.name}
                                    </span>
                                  </button>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    </dl>
                    <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                      <Disclosure as="div" className="pt-6">
                        {({ open }) => (
                          <>
                            <dt className="text-lg">
                              <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                                <span className="font-semibold text-[15px] text-black400">
                                  Gender
                                </span>
                                <span className="ml-6 flex h-7 items-center">
                                  <ChevronDownIcon
                                    className={classNames(
                                      open ? "-rotate-180" : "rotate-0",
                                      "h-6 w-6 transform"
                                    )}
                                    aria-hidden="true"
                                  />
                                </span>
                              </Disclosure.Button>
                            </dt>
                            <Disclosure.Panel as="dd" className="mt-4">
                              <div className="flex flex-wrap">
                                <button
                                  onClick={() => setSelectedGender(1)}
                                  className={`border  mr-2 mb-2 rounded-[5px] flex items-center px-[10px] py-[3px] ${
                                    selectedGender === 1
                                      ? "bg-violet600 border-violet600 text-white "
                                      : " border-black200 text-black300 "
                                  }`}
                                >
                                  <span className=" font-medium text-[13px] leading-5">
                                    {" "}
                                    All
                                  </span>
                                </button>
                                <button
                                  onClick={() => setSelectedGender(2)}
                                  className={`border  mr-2 mb-2 rounded-[5px] flex items-center px-[10px] py-[3px] ${
                                    selectedGender === 2
                                      ? "bg-violet600 border-violet600 text-white "
                                      : " border-black200 text-black300 "
                                  }`}
                                >
                                  <span className=" font-medium text-[13px] leading-5">
                                    Male
                                  </span>
                                </button>
                                <button
                                  onClick={() => setSelectedGender(3)}
                                  className={`border  mr-2 mb-2 rounded-[5px] flex items-center px-[10px] py-[3px] ${
                                    selectedGender === 3
                                      ? "bg-violet600 border-violet600 text-white "
                                      : " border-black200 text-black300 "
                                  }`}
                                >
                                  <span className=" font-medium text-[13px] leading-5">
                                    Female
                                  </span>
                                </button>
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    </dl>

                    <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                      <Disclosure as="div" className="pt-6">
                        {({ open }) => (
                          <>
                            <dt className="text-lg">
                              <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                                <span className="font-semibold text-[15px] text-black400">
                                  Interest
                                </span>
                                <span className="ml-6 flex h-7 items-center">
                                  <ChevronDownIcon
                                    className={classNames(
                                      open ? "-rotate-180" : "rotate-0",
                                      "h-6 w-6 transform"
                                    )}
                                    aria-hidden="true"
                                  />
                                </span>
                              </Disclosure.Button>
                            </dt>
                            <Disclosure.Panel as="dd" className="mt-4">
                              {/* <Listbox value={selected} onChange={setSelected}>
                                {({ open }) => (
                                  <>
                                    <div className="relative mt-1">
                                      <Listbox.Button className="relative w-full cursor-default rounded-md border border-black200 bg-white py-[9px] px-4 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                                        <span className="block truncate text-xs text-black200 font-normal">
                                          Select your interests
                                        </span>
                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                          <ChevronDownIcon
                                            className="h-5 w-5 text-gray-400"
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
                                        {Country.map((person) => (
                                        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                          <Listbox.Option
                                            className={({ active }) =>
                                              classNames(
                                                active
                                                  ? "text-white bg-indigo-600"
                                                  : "text-gray-900",
                                                "relative cursor-default select-none py-2 pl-3 pr-9"
                                              )
                                            }
                                          >
                                            {({ selected, active }) => (
                                              <>
                                                <span
                                                  className={classNames(
                                                    selected
                                                      ? "font-semibold"
                                                      : "font-normal",
                                                    "block truncate"
                                                  )}
                                                ></span>

                                                {selected ? (
                                                  <span
                                                    className={classNames(
                                                      active
                                                        ? "text-white"
                                                        : "text-indigo-600",
                                                      "absolute inset-y-0 right-0 flex items-center pr-4"
                                                    )}
                                                  >
                                                    <CheckIcon
                                                      className="h-5 w-5"
                                                      aria-hidden="true"
                                                    />
                                                  </span>
                                                ) : null}
                                              </>
                                            )}
                                          </Listbox.Option>
                                        </Listbox.Options>
                                        ))}
                                      </Transition>
                                    </div>
                                  </>
                                )}
                              </Listbox> */}

                              <Select
                                isClearable={false}
                                components={animatedComponents}
                                classNamePrefix="react-select"
                                className="react-select-container bg-white border-black200 text-xs  focus:outline-none w-full placeholde:text-xs placeholde:text-black200 placeholder:font-normal"
                                placeholder="Type your interests"
                                isMulti
                                options={interest}
                                value={selectedInterest}
                                onChange={handleInterest}
                              />
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    </dl>
                    <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                      <Disclosure as="div" className="pt-6">
                        {({ open }) => (
                          <>
                            <dt className="text-lg">
                              <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                                <span className="font-semibold text-[15px] text-black400">
                                  Country
                                </span>
                                <span className="ml-6 flex h-7 items-center">
                                  <ChevronDownIcon
                                    className={classNames(
                                      open ? "-rotate-180" : "rotate-0",
                                      "h-6 w-6 transform"
                                    )}
                                    aria-hidden="true"
                                  />
                                </span>
                              </Disclosure.Button>
                            </dt>
                            <Disclosure.Panel as="dd" className="mt-4">
                              {/* <Listbox value={selected} onChange={setSelected}>
                                {({ open }) => (
                                  <>
                                    <div className="relative mt-1">
                                      <Listbox.Button className="relative w-full cursor-default rounded-md border border-black200 bg-white py-[9px] px-4 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                                        <span className="block truncate text-xs text-black200 font-normal">
                                          Select country
                                        </span>
                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                          <ChevronDownIcon
                                            className="h-5 w-5 text-gray-400"
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
                                        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                          <Listbox.Option
                                            className={({ active }) =>
                                              classNames(
                                                active
                                                  ? "text-white bg-indigo-600"
                                                  : "text-gray-900",
                                                "relative cursor-default select-none py-2 pl-3 pr-9"
                                              )
                                            }
                                          >
                                            {({ selected, active }) => (
                                              <>
                                                <span
                                                  className={classNames(
                                                    selected
                                                      ? "font-semibold"
                                                      : "font-normal",
                                                    "block truncate"
                                                  )}
                                                ></span>

                                                {selected ? (
                                                  <span
                                                    className={classNames(
                                                      active
                                                        ? "text-white"
                                                        : "text-indigo-600",
                                                      "absolute inset-y-0 right-0 flex items-center pr-4"
                                                    )}
                                                  >
                                                    <CheckIcon
                                                      className="h-5 w-5"
                                                      aria-hidden="true"
                                                    />
                                                  </span>
                                                ) : null}
                                              </>
                                            )}
                                          </Listbox.Option>
                                        </Listbox.Options>
                                      </Transition>
                                    </div>
                                  </>
                                )}
                              </Listbox> */}
                              <Select
                                isClearable={false}
                                components={animatedComponents}
                                classNamePrefix="react-select"
                                className="react-select-container bg-white border-black200 text-xs  focus:outline-none w-full placeholde:text-xs placeholde:text-black200 placeholder:font-normal"
                                placeholder="Select country"
                                isMulti
                                options={country}
                                value={selectedCountry}
                                onChange={handleCountry}
                              />
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    </dl>
                    <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                      <Disclosure as="div" className="pt-6">
                        {({ open }) => (
                          <>
                            <dt className="text-lg">
                              <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                                <span className="font-semibold text-[15px] text-black400">
                                  City
                                </span>
                                <span className="ml-6 flex h-7 items-center">
                                  <ChevronDownIcon
                                    className={classNames(
                                      open ? "-rotate-180" : "rotate-0",
                                      "h-6 w-6 transform"
                                    )}
                                    aria-hidden="true"
                                  />
                                </span>
                              </Disclosure.Button>
                            </dt>
                            <Disclosure.Panel as="dd" className="mt-4">
                              {/* <Listbox value={selected} onChange={setSelected}>
                                {({ open }) => (
                                  <>
                                    <div className="relative mt-1">
                                      <Listbox.Button className="relative w-full cursor-default rounded-md border border-black200 bg-white py-[9px] px-4 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                                        <span className="block truncate text-xs text-black200 font-normal">
                                          Select (multiple) cities
                                        </span>
                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                          <ChevronDownIcon
                                            className="h-5 w-5 text-gray-400"
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
                                        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                          <Listbox.Option
                                            className={({ active }) =>
                                              classNames(
                                                active
                                                  ? "text-white bg-indigo-600"
                                                  : "text-gray-900",
                                                "relative cursor-default select-none py-2 pl-3 pr-9"
                                              )
                                            }
                                          >
                                            {({ selected, active }) => (
                                              <>
                                                <span
                                                  className={classNames(
                                                    selected
                                                      ? "font-semibold"
                                                      : "font-normal",
                                                    "block truncate"
                                                  )}
                                                ></span>

                                                {selected ? (
                                                  <span
                                                    className={classNames(
                                                      active
                                                        ? "text-white"
                                                        : "text-indigo-600",
                                                      "absolute inset-y-0 right-0 flex items-center pr-4"
                                                    )}
                                                  >
                                                    <CheckIcon
                                                      className="h-5 w-5"
                                                      aria-hidden="true"
                                                    />
                                                  </span>
                                                ) : null}
                                              </>
                                            )}
                                          </Listbox.Option>
                                        </Listbox.Options>
                                      </Transition>
                                    </div>
                                  </>
                                )}
                              </Listbox> */}
                              <Select
                                isClearable={false}
                                components={animatedComponents}
                                classNamePrefix="react-select"
                                className="react-select-container bg-white border-black200 text-xs  focus:outline-none w-full placeholde:text-xs placeholde:text-black200 placeholder:font-normal"
                                placeholder="Select (multiple) cities"
                                isMulti
                                options={city}
                                value={selectedCity}
                                onChange={handleCity}
                              />
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    </dl>

                    <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                      <Disclosure as="div" className="pt-6">
                        {({ open }) => (
                          <>
                            <dt className="text-lg">
                              <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                                <span className="font-semibold text-[15px] text-black400">
                                  Followers
                                </span>
                                <span className="ml-6 flex h-7 items-center">
                                  <ChevronDownIcon
                                    className={classNames(
                                      open ? "-rotate-180" : "rotate-0",
                                      "h-6 w-6 transform"
                                    )}
                                    aria-hidden="true"
                                  />
                                </span>
                              </Disclosure.Button>
                            </dt>
                            <Disclosure.Panel as="dd" className="mt-4">
                              <div className="flex items-center justify-between">
                                <input
                                  name="minimum"
                                  value={selectedFollower.minimum}
                                  onChange={(e) => handleFollowers(e)}
                                  className="border text-black500 bg-white py-[9px] px-4 border-black200 text-xs rounded-[6px] w-[100px] text-center focus:outline-none w-full placeholde:text-xs placeholde:text-black200 placeholder:font-normal"
                                  placeholder="Minimum"
                                  type="number"
                                />
                                <span className="text-black300 font-medium text-[13px] leading-5">
                                  to
                                </span>
                                <input
                                  name="maximum"
                                  value={selectedFollower.maximum}
                                  onChange={(e) => handleFollowers(e)}
                                  className="border text-black500 bg-white py-[9px] px-4 border-black200 text-xs rounded-[6px] w-[100px] text-center focus:outline-none w-full placeholde:text-xs placeholde:text-black200 placeholder:font-normal"
                                  placeholder="Maximum"
                                  type="number"
                                />
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    </dl>
                  </div>
                </div>
                <div className="flex flex-shrink-0 border-t border-gray-200 py-4 px-[31px] ">
                  <button className="w-full bg-violet600 text-white font-semibold text-sm leading-[21px] rounded-lg py-3">
                    Apply
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

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
                      Influencer’s Profile
                    </h2>
                  </div>

                  <div className="mt-[30px]">
                    <div className="md:flex md:space-x-5">
                      <div className="">
                        <img
                          src="/assets/images/dapo-1.png"
                          className="w-[107px] h-[110px] rounded-full mx-auto md:ml-0 "
                        />
                      </div>
                      <div className="flex-1">
                        <div>
                          <div className="md:flex items-center space-y-2 md:space-y-0 mt-3 md:mt-0 justify-between">
                            <h2 className="text-[17px] text-center md:text-left font-semibold text-black500 leading-[26px]">
                              Jonathon B.
                            </h2>
                            <div className="flex justify-center md:justify-start">
                              <button className="foucs:outline-none mr-4">
                                <img src="/assets/icons/profile-add-blue.svg" />
                              </button>
                              <button>
                                <img src="/assets/icons/frame-violet.svg" />
                              </button>
                              <button className="focus:outline-none bg-violet600 ml-6 rounded py-1 px-[15px] flex space-x-2">
                                <img src="/assets/icons/directbox-receive-white.svg" />
                                <span className="text-white text-[15px] leading-[22px] font-medium">
                                  Export
                                </span>
                              </button>
                            </div>
                          </div>
                          <div className="space-y-2 md:space-y-0">
                            <div className="flex items-center mt-1 mb-1 justify-center md:justify-start ">
                              {[0, 1, 2, 3, 4].map((rating) => (
                                <StarIcon
                                  key={rating}
                                  className={classNames(
                                    3 > rating
                                      ? "text-[#E5B027]"
                                      : "text-[#D9D9D9]",
                                    "flex-shrink-0 h-[14.88px] w-[14.88px]"
                                  )}
                                  aria-hidden="true"
                                />
                              ))}
                              <span className="text-black300 ml-1.5 leading-[15px] text-[10px]  font-medium">
                                (234 reviews)
                              </span>
                            </div>
                            <div className="sm:flex justify-center sm:justify-between mb-[5px]">
                              <div className="flex justify-center sm:justify-start items-center">
                                <img
                                  src="/assets/icons/location.svg"
                                  className="mr-1"
                                />
                                <span className="text-black400 text-xs font-medium leading-[18px]">
                                  Ibadan, Nigeria.
                                </span>
                              </div>
                              <div className="flex justify-center sm:justify-start gap-4">
                                <div className="flex items-center">
                                  <div className="bg-[#CECDD0] mr-1.5 bg-opacity-[0.3] w-[24px] h-[24px] rounded-full flex items-center justify-center">
                                    <img
                                      src="/assets/icons/instagram.svg"
                                      className="w-[15px] h-[15px]"
                                    />
                                  </div>
                                  <span className="text-black400 text-xs font-medium leading-[18px]">
                                    23.90K
                                  </span>
                                </div>
                                <div className="flex items-center">
                                  <div className="bg-[#CECDD0] mr-1.5 bg-opacity-[0.3] w-[24px] h-[24px] rounded-full flex items-center justify-center">
                                    <img
                                      src="/assets/icons/Tiktok.svg"
                                      className="w-[15px] h-[15px]"
                                    />
                                  </div>
                                  <span className="text-black400 text-xs font-medium leading-[18px]">
                                    23.90K
                                  </span>
                                </div>
                                <div className="flex items-center">
                                  <div className="bg-[#CECDD0] mr-1.5 bg-opacity-[0.3] w-[24px] h-[24px] rounded-full flex items-center justify-center">
                                    <img
                                      src="/assets/icons/Twitter.svg"
                                      className="w-[15px] h-[15px]"
                                    />
                                  </div>
                                  <span className="text-black400 text-xs font-medium leading-[18px]">
                                    23.90K
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-center sm:justify-start gap-1.5 mb-[5px]">
                              <span className="text-[10px] px-2.5 py-[2.5px] rounded-[5px] font-medium leading-[15px] text-violet600 bg-violet250 border border-violet600">
                                Foods
                              </span>
                              <span className="text-[10px] px-2.5 py-[2.5px] rounded-[5px] font-medium leading-[15px] text-violet600 bg-violet250 border border-violet600">
                                Sports
                              </span>
                              <span className="text-[10px] px-2.5 py-[2.5px] rounded-[5px] font-medium leading-[15px] text-violet600 bg-violet250 border border-violet600">
                                Healthcare
                              </span>
                            </div>
                            <div>
                              <p className="text-black400 text-center sm:text-left text-[13px] font-medium leading-5">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nam ut cursus ipsum.
                              </p>
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
                <div className="h-0 flex-1 pt-[17px] px-2.5  md:pl-[49px] md:pr-[47px] custom-scroll overflow-y-auto bg-main-bg  px-[30px] pb-4">
                  <div className={`${openTab === 0 ? "block" : "hidden"}  `}>
                    <div className="sm:flex justify-between">
                      <div className="flex items-center mb-2 sm:mb-0">
                        <div className="bg-[#CECDD0] mr-3 bg-opacity-[0.3] w-[31px] h-[31px] rounded-full flex items-center justify-center">
                          <img
                            src="/assets/icons/instagram.svg"
                            className="w-[19px] h-[19px]"
                          />
                        </div>
                        <span className="text-black400 text-[15px] font-semibold leading-[22px]">
                          @Jon_B124
                        </span>
                      </div>
                      <div className="sm:flex justify-end gap-7 space-y-3 sm:space-y-0">
                        <div className="bg-[#F7D3EA80] py-2.5 px-4 rounded flex items-center">
                          <img
                            src="/assets/icons/like.svg"
                            className="w-[22px] h-[22px] mr-2.5"
                          />
                          <span className="text-[13px] text-pink500 font-medium leading-[19.5px]">
                            Engagement{" "}
                            <span className="font-semibold text-pink600">
                              {" "}
                              23.12%
                            </span>
                          </span>
                        </div>
                        <div className="bg-[#DED4F580] py-2.5 px-4 rounded flex items-center">
                          <img
                            src="/assets/icons/eyes-icon.svg"
                            className="w-[22px] h-[22px] mr-2.5"
                          />
                          <span className="text-[13px] text-violet500 font-medium leading-[19.5px]">
                            Avg Impressions:{" "}
                            <span className="font-semibold text-violet600">
                              {" "}
                              23,905
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="grid gap-8 mt-[15px]">
                      <div className="bg-white shadow-dark20 rounded-[15px] pt-5 pl-8 pr-9 pb-8 overflow-auto">
                        <div className="flex items-center justify-between">
                          <h2 className="text-black500 text-[17px] leading-[26px] font-semibold ">
                            Recent Posts
                          </h2>
                          <button>
                            <img src="/assets/icons/quationmark.svg" />
                          </button>
                        </div>
                        <div className="mt-4">
                          <Slider {...settings}>
                            <div className=" bg-[#D9D9D9]/[0.25] rounded-[6px]">
                              <div className="h-[179px] relative flex justify-center items-center">
                                <img src="/assets/images/car.png" />
                                <button className="absolute">
                                  <img src="/assets/icons/play-icon.svg" />
                                </button>
                              </div>
                              <div className="px-3 pt-2 pb-[11px]">
                                <span className="block text-black200 text-xs font-medium leading-[18px]">
                                  Aug 20, 2022
                                </span>
                                <p className="text-justify text-black400 text-xs font-medium leading-[18px]">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Nam ut cursus ipsum.
                                </p>
                                <div className="mt-2.5 flex justify-between">
                                  <div>
                                    <h2 className="text-black500 font-bold text-[13px] leading-5">
                                      30k+
                                    </h2>
                                    <span className="text-black200 text-[10px] leading-[15px] font-medium">
                                      Impressions
                                    </span>
                                  </div>
                                  <div className="text-end">
                                    <h2 className="text-black500 font-bold text-[13px] leading-5">
                                      30k
                                    </h2>
                                    <span className="text-black200 text-[10px] leading-[15px] font-medium">
                                      Engagement
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className=" bg-[#D9D9D9]/[0.25] rounded-[6px]">
                              <div className="h-[179px] relative flex justify-center items-center">
                                <img src="/assets/images/car.png" />
                                <button className="absolute">
                                  <img src="/assets/icons/play-icon.svg" />
                                </button>
                              </div>
                              <div className="px-3 pt-2 pb-[11px]">
                                <span className="block text-black200 text-xs font-medium leading-[18px]">
                                  Aug 20, 2022
                                </span>
                                <p className="text-justify text-black400 text-xs font-medium leading-[18px]">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Nam ut cursus ipsum.
                                </p>
                                <div className="mt-2.5 flex justify-between">
                                  <div>
                                    <h2 className="text-black500 font-bold text-[13px] leading-5">
                                      30k+
                                    </h2>
                                    <span className="text-black200 text-[10px] leading-[15px] font-medium">
                                      Impressions
                                    </span>
                                  </div>
                                  <div className="text-end">
                                    <h2 className="text-black500 font-bold text-[13px] leading-5">
                                      30k
                                    </h2>
                                    <span className="text-black200 text-[10px] leading-[15px] font-medium">
                                      Engagement
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-[#D9D9D9]/[0.25] rounded-[6px]">
                              <div className="h-[179px] relative flex justify-center items-center">
                                <img src="/assets/images/car.png" />
                                <button className="absolute">
                                  <img src="/assets/icons/play-icon.svg" />
                                </button>
                              </div>
                              <div className="px-3 pt-2 pb-[11px]">
                                <span className="block text-black200 text-xs font-medium leading-[18px]">
                                  Aug 20, 2022
                                </span>
                                <p className="text-justify text-black400 text-xs font-medium leading-[18px]">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Nam ut cursus ipsum.
                                </p>
                                <div className="mt-2.5 flex justify-between">
                                  <div>
                                    <h2 className="text-black500 font-bold text-[13px] leading-5">
                                      30k+
                                    </h2>
                                    <span className="text-black200 text-[10px] leading-[15px] font-medium">
                                      Impressions
                                    </span>
                                  </div>
                                  <div className="text-end">
                                    <h2 className="text-black500 font-bold text-[13px] leading-5">
                                      30k
                                    </h2>
                                    <span className="text-black200 text-[10px] leading-[15px] font-medium">
                                      Engagement
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className=" bg-[#D9D9D9]/[0.25] rounded-[6px]">
                              <div className="h-[179px] relative flex justify-center items-center">
                                <img src="/assets/images/car.png" />
                                <button className="absolute">
                                  <img src="/assets/icons/play-icon.svg" />
                                </button>
                              </div>
                              <div className="px-3 pt-2 pb-[11px]">
                                <span className="block text-black200 text-xs font-medium leading-[18px]">
                                  Aug 20, 2022
                                </span>
                                <p className="text-justify text-black400 text-xs font-medium leading-[18px]">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Nam ut cursus ipsum.
                                </p>
                                <div className="mt-2.5 flex justify-between">
                                  <div>
                                    <h2 className="text-black500 font-bold text-[13px] leading-5">
                                      30k+
                                    </h2>
                                    <span className="text-black200 text-[10px] leading-[15px] font-medium">
                                      Impressions
                                    </span>
                                  </div>
                                  <div className="text-end">
                                    <h2 className="text-black500 font-bold text-[13px] leading-5">
                                      30k
                                    </h2>
                                    <span className="text-black200 text-[10px] leading-[15px] font-medium">
                                      Engagement
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className=" bg-[#D9D9D9]/[0.25] rounded-[6px]">
                              <div className="h-[179px] relative flex justify-center items-center">
                                <img src="/assets/images/car.png" />
                                <button className="absolute">
                                  <img src="/assets/icons/play-icon.svg" />
                                </button>
                              </div>
                              <div className="px-3 pt-2 pb-[11px]">
                                <span className="block text-black200 text-xs font-medium leading-[18px]">
                                  Aug 20, 2022
                                </span>
                                <p className="text-justify text-black400 text-xs font-medium leading-[18px]">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Nam ut cursus ipsum.
                                </p>
                                <div className="mt-2.5 flex justify-between">
                                  <div>
                                    <h2 className="text-black500 font-bold text-[13px] leading-5">
                                      30k+
                                    </h2>
                                    <span className="text-black200 text-[10px] leading-[15px] font-medium">
                                      Impressions
                                    </span>
                                  </div>
                                  <div className="text-end">
                                    <h2 className="text-black500 font-bold text-[13px] leading-5">
                                      30k
                                    </h2>
                                    <span className="text-black200 text-[10px] leading-[15px] font-medium">
                                      Engagement
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Slider>
                        </div>
                      </div>
                      <div className="flex gap-8 flex-col lg:flex-row">
                        <div className="bg-white w-full lg:max-w-[560px] flex-1 shadow-dark20 rounded-[15px]  pt-5 pl-8 pr-9 pb-8">
                          <div className="flex items-center justify-between">
                            <h2 className="text-black500 text-[17px] leading-[26px] font-semibold ">
                              Rate Card
                            </h2>
                            <button>
                              <img src="/assets/icons/quationmark.svg" />
                            </button>
                          </div>
                          <div className="mt-5 space-y-2">
                            {ratecard.map((item) => (
                              <div className="even:bg-white odd:bg-[#0904150D]  justify-between flex py-4 px-7 rounded">
                                <div className="flex gap-4 items-center ">
                                  <div>
                                    <img
                                      src={item.icon}
                                      className="mr-4 w-[23px] h-[23px]"
                                    />
                                  </div>
                                  <span className="text-gray700 text-[15px] font-medium leading-[22px] ">
                                    {item.name}
                                  </span>
                                </div>
                                <div>
                                  <span className="text-dark900 font-semibold text-[15px] leading-[22px]">
                                    {item.rate}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-white flex-1 w-full lg:max-w-[300px] shadow-dark20 rounded-[15px]  pt-5 pl-8 pr-9 pb-8">
                          <div className="flex items-center justify-between">
                            <h2 className="text-black500 text-[17px] leading-[26px] font-semibold ">
                              Brand Mentions
                            </h2>
                            <button>
                              <img src="/assets/icons/quationmark.svg" />
                            </button>
                          </div>
                          <div className="mt-5">
                            {brandmentions.map((item) => (
                              <div className="flex items-center even:bg-white odd:bg-[#D9D9D9]/[0.2] gap-3  px-5 py-[15.2px] rounded ">
                                <span className="text-black400 font-medium leading-5 text-[13px]">
                                  {item.no}
                                </span>

                                <img
                                  src={item.icons}
                                  className="w-[30.65px] h-[30.65px]"
                                />
                                <span className="text-black400 font-medium leading-5 text-[13px]">
                                  {item.name}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="bg-white  shadow-dark20 rounded-[15px]  pt-5 pl-8 pr-9 pb-8">
                        <div className="flex items-center justify-between">
                          <h2 className="text-black500 text-[17px] leading-[26px] font-semibold ">
                            Audience Age Distribution
                          </h2>
                          <div></div>
                        </div>
                        <ReactApexChart
                          options={options}
                          series={series}
                          type="bar"
                          height={350}
                        />
                      </div>
                      <div className="flex gap-8 flex-col lg:flex-row">
                        <div className="bg-white flex-none lg:max-w-[388px] shadow-dark20 rounded-[15px]  pt-5 pl-8 pr-9 pb-8">
                          <div className="flex items-center justify-between">
                            <h2 className="text-black500 text-[17px] leading-[26px] font-semibold ">
                              Audience Gender Distribution
                            </h2>
                          </div>
                          <div id="chart" className="flex justify-center">
                            <ReactApexChart
                              options={pieseries.options}
                              series={pieseries.series}
                              type="pie"
                            />
                          </div>
                        </div>
                        <div className="bg-white w-full shadow-dark20 rounded-[15px]  pt-5 pl-8 pr-9 pb-8">
                          <div className="flex items-center justify-between">
                            <h2 className="text-black500 text-[17px] leading-[26px] font-semibold ">
                              Audience by Country
                            </h2>
                            <button>
                              <img src="/assets/icons/quationmark.svg" />
                            </button>
                          </div>
                          <div className="mt-4">
                            <div className="grid grid-cols-2  border border-violet600 rounded w-full">
                              <span
                                onClick={() => setAudience(true)}
                                className={`${
                                  audience
                                    ? "bg-violet600 text-white"
                                    : "text-violet600 bg-white"
                                } cursor-pointer py-[11.5px] flex items-center text-xs font-medium leading-[18px] justify-center `}
                              >
                                By Country
                              </span>
                              <span
                                onClick={() => setAudience(false)}
                                className={`${
                                  audience
                                    ? "text-violet600 bg-white"
                                    : "bg-violet600 text-white"
                                } cursor-pointer py-[11.5px] flex items-center text-xs font-medium leading-[18px] justify-center `}
                              >
                                By City
                              </span>
                            </div>
                            {audience ? (
                              <div className="mt-5 space-y-2.5">
                                {aduienceprogress.map((item) => (
                                  <div>
                                    <div className="flex justify-between items-center mb-2 ">
                                      <h3 className="text-black400 font-medium text-[15px] leading-[22px]">
                                        {item?.name}
                                      </h3>
                                      <span className="text-black400 font-medium text-[15px] leading-[22px]">
                                        {item?.process}
                                      </span>
                                    </div>
                                    <div className="bg-[#0904151F] rounded-full h-[10px] w-full ">
                                      <div
                                        className={`  bg-violet600 rounded-full h-full`}
                                        style={{ width: `${item?.process}` }}
                                      ></div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <div className="mt-5 space-y-2.5">
                                {aduienceprogress.map((item) => (
                                  <div>
                                    <div className="flex justify-between items-center mb-2 ">
                                      <h3 className="text-black400 font-medium text-[15px] leading-[22px]">
                                        {item?.name}
                                      </h3>
                                      <span className="text-black400 font-medium text-[15px] leading-[22px]">
                                        {item?.process}
                                      </span>
                                    </div>
                                    <div className="bg-[#0904151F] rounded-full h-[10px] w-full ">
                                      <div
                                        className={`  bg-violet600 rounded-full h-full`}
                                        style={{ width: `${item?.process}` }}
                                      ></div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="bg-white w-full shadow-dark20 rounded-[15px]  pt-5 pl-8 pr-9 pb-8">
                        <div className="flex items-center justify-between">
                          <h2 className="text-black500 text-[17px] leading-[26px] font-semibold ">
                            Customer Reviews
                          </h2>
                          <button>
                            <img src="/assets/icons/quationmark.svg" />
                          </button>
                        </div>
                        <div className="mt-5 space-y-2 ">
                          {reviwe.map((item) => (
                            <div className="px-[11px] py-2 flex bg-[#CECDD033]">
                              <div className="mr-2">
                                <img
                                  src="/assets/icons/pepsi.png"
                                  className="flex-auto w-[25px] h-[25px]"
                                />
                              </div>
                              <div className="flex-1">
                                <div className="flex itmes-center mb-1">
                                  <h2 className="font-semibold text-black500 text-xs leading-[18px]">
                                    Pepsi
                                  </h2>
                                  <ul className="list-disc ml-6">
                                    <li className="text-black300 font-medium text-xs  leading-[18px] ">
                                      2 mins ago
                                    </li>
                                  </ul>
                                  {[0, 1, 2, 3, 4].map((rating) => (
                                    <StarIcon
                                      key={rating}
                                      className={classNames(
                                        3 > rating
                                          ? "text-[#E5B027]"
                                          : "text-[#D9D9D9]",
                                        "flex-shrink-0 h-[14.88px] w-[14.88px]"
                                      )}
                                      aria-hidden="true"
                                    />
                                  ))}
                                </div>
                                <div>
                                  <p className="text-black400 text-xs leading-[18px] font-medium">
                                    {item.comment}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default InfluencerSearch;
