import Link from "next/link";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ReactPlayer from "react-player";
// import { CheckIcon } from '@heroicons/react/24/outline'
const steps = [
  {
    name: "Personal Details",
    description: " Enter your personal details",
    href: "#",
    status: "complete",
  },
  {
    name: "Company Information",
    description: "Let’s get started with any of your preferred account",
    href: "#",
    status: "complete",
  },
  {
    name: "Social Connection",
    description: "Let’s get started with any of your preferred account",
    href: "#",
    status: "current",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Connections = () => {
  const [socialconnect, setSocialConnect] = useState([
    {
      icon: "/assets/icons/instagram.svg",
      name: "Instagram",
      username: "@dapsy",
      connected: false,
    },
    {
      icon: "/assets/icons/Twitter.svg",
      name: "Twitter",
      username: "@dapsy",
      connected: false,
    },
    {
      icon: "/assets/icons/Tiktok.svg",
      name: "Tiktok",
      username: "@dapsy",
      connected: false,
    },
    {
      icon: "/assets/icons/YouTube.svg",
      name: "Youtube",
      username: "@dapsy",
      connected: false,
    },
  ]);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState({});
  const [linked, setLinked] = useState(false);
  const [disconnect, setDisconnect] = useState(false);
  const cancelButtonRef = useRef(null);

  const handleConnectSocialAccount = (item, status = true) => {
    let dataArr = [...socialconnect];
    for (let i = 0; i <= dataArr.length; i++) {
      if (item.name === dataArr[i].name) {
        dataArr[i].connected = status;
        break;
      }
    }
    setSocialConnect(dataArr);
  };

  return (
    <>
      <div className=" min-h-screen grid  bg-white lg:grid-cols-2 lg:col-rows-1">
        <div
          div
          className="relative h-screen overflow-hidden p-[60px] hidden lg:block items-center after:top-0 after:bottom-0  after:left-0 after:right-0  after:absolute after:content-[' '] after:bg-violet600"
        >
          <div className="relative z-[5]">
            <img src="/assets/images/Logo.svg" alt="logo" className="" />
            <div className="mt-20">
              <nav aria-label="Progress">
                <ol role="list" className="overflow-hidden">
                  {steps.map((step, stepIdx) => (
                    <li
                      key={step.name}
                      className={classNames(
                        stepIdx !== steps.length - 1 ? "pb-10" : "",
                        "relative"
                      )}
                    >
                      {step.status === "complete" ? (
                        <>
                          {stepIdx !== steps.length - 1 ? (
                            <div
                              className="absolute top-4 left-[0.7rem] -ml-px mt-0.5 h-full w-2 bg-white"
                              aria-hidden="true"
                            />
                          ) : null}
                          <a
                            href={step.href}
                            className="group relative flex items-start"
                          >
                            <span className="flex h-9 items-center">
                              <span className="relative items-center justify-center rounded-full ">
                                <div className="w-[26px] ml-[1px] rounded-full flex items-center justify-center bg-violet600 border-2 broder-white h-[26px]">
                                  <img src="/assets/icons/check-white.svg" />
                                </div>
                              </span>
                            </span>
                            <span className="ml-4 flex min-w-0 flex-col">
                              <h3 className="font-semibold mb-2  text-xl text-[#ffffffe6]">
                                {step.name}
                              </h3>
                              <span className="text-[#ffffffcc] text-[15px] font-medium">
                                {step.description}
                              </span>
                            </span>
                          </a>
                        </>
                      ) : step.status === "current" ? (
                        <>
                          {stepIdx !== steps.length - 1 ? (
                            <div
                              className="absolute top-4 left-[0.7rem] -ml-px mt-0.5 h-full w-2 bg-[#FFFFFF80]"
                              aria-hidden="true"
                            />
                          ) : null}
                          <a
                            href={step.href}
                            className="group relative flex items-start"
                            aria-current="step"
                          >
                            <span
                              className="flex h-9 ml-[0.032rem] items-center"
                              aria-hidden="true"
                            >
                              <span className="relative z-10 flex h-[26px] w-[26px] items-center justify-center rounded-full border-2 border-white bg-[#5B26CF]">
                                <span className="h-3 w-3 rounded-full bg-white" />
                              </span>
                            </span>
                            <span className="ml-4 flex min-w-0 flex-col">
                              <h3 className="font-semibold mb-2  text-xl text-[#ffffffe6]">
                                {step.name}
                              </h3>
                              <span className="text-[#ffffffcc] text-[15px] font-medium">
                                {step.description}
                              </span>
                            </span>
                          </a>
                        </>
                      ) : (
                        <>
                          {stepIdx !== steps.length - 1 ? (
                            <div
                              className="absolute top-4 left-[0.7rem] -ml-px mt-0.5 h-full w-2 bg-[#FFFFFF80]"
                              aria-hidden="true"
                            />
                          ) : null}
                          <a
                            href={step.href}
                            className="group relative flex items-start"
                          >
                            <span
                              className="flex h-9 ml-[0.032rem] items-center"
                              aria-hidden="true"
                            >
                              <span className="relative z-10 flex h-[26px] w-[26px] items-center justify-center rounded-full border-2 border-[#FFFFFF80] bg-[#5B26CF]">
                                <span className="h-3 w-3 rounded-full rounded-full bg-transparent " />
                              </span>
                            </span>
                            <span className="ml-4 flex min-w-0 flex-col">
                              <h3 className="font-semibold mb-2  text-xl text-[#ffffff73]">
                                {step.name}
                              </h3>
                              <span className="text-[#ffffff73] text-[15px] font-medium">
                                {step.description}
                              </span>
                            </span>
                          </a>
                        </>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex  flex-col py-12">
          <div className="flex flex-col justify-center items-center flex-1 px-4 sm:px-6  lg:px-20 xl:px-[134px]">
            <div className="mx-auto w-full ">
              <div className="text-center">
                <span className=" text-[13px] font-medium text-gray600">
                  Step 3
                </span>
                <h2 className=" mt-2 mb-4 text-xl font-semibold tracking-tight text-dark900">
                  Social Connections
                </h2>
                <p className=" text-[15px] font-medium text-gray600">
                  Connect your social media accounts so that brands can view
                  your account statistics and view your content performance.
                </p>
              </div>

              <div className="mt-[52px] space-y-[25px] ">
                {socialconnect.map((item, index) => (
                  <div className="bg-white flex items-center justify-between shadow-dark100 w-full px-6 py-[18px] rounded-lg">
                    <div className="flex items-center">
                      <img src={item.icon} />
                      <div className="ml-4">
                        <h2 className="text-dark900 text-[15px]  font-semibold">
                          {item.name}
                        </h2>
                        <span
                          className={`${
                            item.connected ? "block" : "hidden"
                          } font-medium text-xs leading-[18px] text-gray800`}
                        >
                          {item.username}
                        </span>
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={() => {
                          setOpenModal(item);
                          if (item.connected) {
                            setDisconnect(true);
                            // handleAddRemoveconnection(item);
                          } else {
                            setOpen(true);
                          }
                          //   handleAddRemoveconnection(item);
                        }}
                        className={`${
                          item.connected
                            ? ""
                            : "text-gray800 leading-[22px] border text-[15px] text-normal px-4 py-1.5 border-gray800 rounded"
                        }  `}
                      >
                        {item.connected ? (
                          <img
                            src="/assets/icons/close-circle.svg"
                            alt="close icon"
                          />
                        ) : (
                          "Add"
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex px-4 lg:px-[60px] mt-10  justify-between">
            <Link href="/brand/onboarding/companyinformation">
              <button
                type="submit"
                className="flex justify-center rounded border border-transparent bg-transparent  py-3 px-[20px] text-[15px] flex items-center font-semibold text-violet600 focus:outline-none focus:ring-0 "
              >
                <img src="/assets/icons/left.svg" className="mr-3.5" /> Back
              </button>
            </Link>
            <div className="flex">
              <button
                type="submit"
                className="flex justify-center rounded border border-transparent bg-transparent mr-5  py-3 px-[20px] text-[15px] flex items-center font-semibold text-violet600 focus:outline-none focus:ring-0 "
              >
                Skip
              </button>
              <Link href="/brand/dashboard">
                <button
                  type="submit"
                  className="flex justify-center rounded border border-transparent bg-violet600 py-3 px-[30px] text-[15px] font-semibold text-white shadow-sm  focus:outline-none focus:ring-0 "
                >
                  Next
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ======= Detail popup======== */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
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
            <div className="flex min-h-full items-end justify-center sm:p-4 text-center sm:items-center lg:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform  sm:rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 w-full sm:w-full sm:max-w-[795px] sm:p-6">
                  <div className="max-w-[565px] mx-auto">
                    <div className="text-center mt-6 mb-4 sm:hidden relative">
                      <h2>{openModal.name}</h2>
                      <button
                        className="absolute top-0 left-0 flex items-center justify-center "
                        onClick={() => setOpen(false)}
                      >
                        <img src="/assets/icons/leftarrow.svg" />
                      </button>
                    </div>
                    <button
                      onClick={() => setOpen(false)}
                      className="hidden sm:block absolute -top-[15px] -right-[15px]"
                    >
                      <img src="/assets/icons/closebtn.svg" />
                    </button>
                    <div>
                      <div className="mx-auto flex  items-center justify-center ">
                        <img src="/assets/icons/intagramadd.svg" />
                      </div>
                      <div className="mt-3 text-center sm:mt-5">
                        <h2 className="text-[17px] font-semibold leading-[26px] text-dark900">
                          Link your Instagram
                        </h2>
                        <div className="mt-2">
                          <p className="text-[15px] text-medium text-gray800">
                            We will connect your Instagram using your Facebook
                            Login so that we can pull your statistics and
                            publish approved content.
                          </p>
                        </div>
                        <h4 className="mt-[18px] font-semibold text-gray850 text-center">
                          Connection Tutorial
                        </h4>
                        <div className="flex justify-center items-center mt-2 bg-[#616161] overflow-hidden max-w-[436px] h-[185px] lg:min-w-[436px] lg:min-h-[185px] max-h-[185px] rounded-lg mx-auto h-full w-full">
                          <ReactPlayer
                            url="https://www.youtube.com/watch?v=EwjSO1cXiSo"
                            controls={true}
                            width={"100%"}
                            height={"185px"}
                          />
                        </div>
                        {/* <Link
                          target="_blank"
                          href="https://www.youtube.com/watch?v=EwjSO1cXiSo"
                          className="flex justify-center items-center mt-2 bg-[#616161] max-w-[436px] h-[185px] lg:min-w-[436px] lg:min-h-[185px] max-h-[185px] rounded-lg mx-auto h-full w-full"
                        >
                          <img
                            src="/assets/icons/YouTube.svg"
                            className="w-[46px]"
                          />
                        </Link> */}
                      </div>
                      <div className="text-center mt-10">
                        <span className="text-center text-[#F72585] text-[13px] font-semibold ">
                          STEP 1
                        </span>
                        <h2 className="text-[17px] mt-2 mb-4 font-semibold leading-[26px] text-dark900">
                          Upgrade Your Instagram Account To a Business Account
                        </h2>
                      </div>
                      <ol className="list-decimal px-4">
                        <li className="text-[15px] font-medium text-gray800 leading-[30px]">
                          Open your Instagram account and go to the
                          <span className="text-gray850 font-semibold">
                            {" "}
                            Settings.
                          </span>
                        </li>
                        <li className="text-[15px] font-medium text-gray800 leading-[30px]">
                          Click on
                          <span className="text-gray850 font-semibold">
                            {" "}
                            Account.
                          </span>
                        </li>
                        <li className="text-[15px] font-medium text-gray800 leading-[30px]">
                          Click on{" "}
                          <span className="text-gray850 font-semibold">
                            {" "}
                            “Switch to a Professional Account”{" "}
                          </span>
                          and complete the process.
                        </li>
                        <li className="text-[15px] font-medium text-gray800 leading-[30px]">
                          Choose the{" "}
                          <span className="text-gray850 font-semibold">
                            {" "}
                            Business Account.
                          </span>
                        </li>
                        <li className="text-[15px] font-medium text-gray800 leading-[30px]">
                          Select any category that suit you.
                        </li>
                        <li className="text-[15px] font-medium text-gray800 leading-[30px]">
                          Click on Done!
                        </li>
                      </ol>
                      <div className="text-center mt-10">
                        <span className="text-center text-[#F72585] text-[13px] font-semibold ">
                          STEP 2
                        </span>
                        <h2 className="text-[17px] mt-2 mb-4 font-semibold leading-[26px] text-dark900">
                          Ensure You Have a Facebook Business Page Linked to
                          Your Instagram Account of which you are an Admin
                        </h2>
                      </div>
                      <ol className="list-decimal px-4">
                        <li className="text-[15px] font-medium text-gray800 leading-[30px]">
                          {" "}
                          Go to your Instagram page.
                        </li>
                        <li className="text-[15px] font-medium text-gray800 leading-[30px]">
                          Click on{" "}
                          <span className="text-gray850 font-semibold">
                            Edit Profile.
                          </span>
                        </li>
                        <li className="text-[15px] font-medium text-gray800 leading-[30px]">
                          Scroll to the Business Information and Page.{" "}
                        </li>
                        <li className="text-[15px] font-medium text-gray800 leading-[30px]">
                          Click on{" "}
                          <span className="text-gray850 font-semibold">
                            {" "}
                            Connect of Create.
                          </span>
                        </li>
                        <li className="text-[15px] font-medium text-gray800 leading-[30px]">
                          You can either select{" "}
                          <span className="text-gray850 font-semibold">
                            Create a Facebook Page
                          </span>{" "}
                          or{" "}
                          <span className="text-gray850 font-semibold">
                            Connect Existing Page.
                          </span>{" "}
                        </li>
                        <li className="text-[15px] font-medium text-gray800 leading-[30px]">
                          Done!
                        </li>
                      </ol>
                    </div>

                    <div className="mt-5 sm:mt-12 mb-4 flex flex-col items-center ">
                      <button
                        type="button"
                        className="flex w-full sm:w-auto justify-center rounded border border-transparent bg-violet600 py-3 px-[30px] text-[15px] font-semibold text-white shadow-sm  focus:outline-none focus:ring-0 "
                        onClick={() => {
                          handleConnectSocialAccount(openModal);
                          setLinked(true);
                          setOpen(false);
                        }}
                      >
                        Connect Now
                      </button>
                      <Link
                        href="https://buzzbite.io/troubleshoot-your-instagram-connection/"
                        target="_blank"
                      >
                        <button
                          type="button"
                          className="text-violet600 w-auto mt-7 flex justify-center rounded bg-white"
                          onClick={() => setOpen(false)}
                          ref={cancelButtonRef}
                        >
                          Having trouble?
                        </button>
                      </Link>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* ========== Successfully connect popup ============ */}
      <Transition.Root show={linked} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setLinked}>
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
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[512px] sm:px-[61px] sm:pb-11 sm:pt-12">
                  <div>
                    <div className="mx-auto flex  items-center justify-center ">
                      <img src="/assets/icons/greencheck.svg" />
                    </div>
                    <div className="mt-3 text-center sm:mt-4">
                      <h2 className="text-[17px]  font-semibold leading-[26px] text-dark900">
                        Successfully Linked
                      </h2>
                      <div className="mt-4">
                        <p className="text-[15px] text-gray700">
                          Your {openModal.name} account has been successfully
                          connected
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6 flex justify-center">
                    <button
                      type="button"
                      className="flex justify-center rounded-lg border border-transparent bg-violet600 py-3 px-[30px] text-[15px] font-semibold text-white shadow-sm  focus:outline-none focus:ring-0 "
                      onClick={() => {
                        setLinked(false);
                      }}
                    >
                      Continue
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* ==========  Disconnect popup ============ */}
      <Transition.Root show={disconnect} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setDisconnect}>
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
                      Do you want to disconnect your social account?
                      </h2>
                      <div className="mt-3 md:mt-4">
                        <p className="text-[12px] md:text-[15px] leading-[22px] text-gray700">
                        Disconnecting your social account won’t give you access to find job
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 sm:mt-7 flex items-center justify-center">
                    <button
                      type="button"
                      className="flex justify-center rounded border border-transparent bg-white mr-[24px] sm:mr-[30px] text-xs md:text-[15px] font-semibold text-[#8A8A8A]  focus:outline-none focus:ring-0 "
                      onClick={() => setDisconnect(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="flex justify-center rounded-lg border border-transparent bg-violet600 py-3 px-[20px] sm:px-[30px] text-xs md:text-[15px] font-semibold text-white shadow-sm  focus:outline-none focus:ring-0 "
                      onClick={() => {
                        handleConnectSocialAccount(openModal, false);
                        setDisconnect(false);
                      }}
                    >
                      Yes, disconnect
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

export default Connections;
