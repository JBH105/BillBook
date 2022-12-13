import Link from "next/link";
import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";

const Verification = () => {
    const [OTP, setOTP] = useState("");

  const handleChange = (OTP) => {
    setOTP(OTP);
  };
  const [isActive, setIsActive] = useState(false);
 
  const [seconds, setSeconds] = useState(60);


  useEffect(() => {
    let timer = null;
    if (isActive) {
      timer = setInterval(() => {
        if (seconds !== 0) {
          setSeconds((seconds) => seconds - 1);
        }
        else if(seconds===0){
            setIsActive(false)
            setSeconds(60);
        }
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  });
  return (
    <div className=" min-h-screen grid bg-white lg:grid-cols-2 lg:col-rows-1">
      <div className="relative hidden     lg:flex items-center after:top-0 after:bottom-0 after:opacity-60 after:left-0 after:right-0  after:absolute after:content-[' ']  after:bg-violet600">
        <div className="p-[60px] pt-[190px]  relative z-[8] ">
          <h1 className="text-[32px] leading-[50px]  mb-10 font-semibold text-white">
            Turn Your Impressions And Engagements Into Earnings
          </h1>
          <p className="text-[#E2D7F9] text-[15px] font-medium leanding-[22px]">
            Create a free account and get full access hundreds of influecer
            jobs. Trusted by 5000+ Influencers.
          </p>
        </div>
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="/assets/images/Branding&Lifestyle.png"
          alt="Branding&Lifestyle"
        />
        <img
          src="/assets/images/Logo.svg"
          alt="logo"
          className="absolute z-[1] top-[55px] left-[60px]"
        />
      </div>
      <div className="flex  flex-col justify-center items-center px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-[134px]">
        <div className="mx-auto w-full ">
          <div>
            <h2 className="mt-6 text-xl font-semibold tracking-tight text-dark900 text-center">
              Verification Code
            </h2>
            <p className="mt-4 text-[15px] font-medium text-gray800">
              We’ve sent the verification code to the email{" "}
              <span className="font-semibold">patrickkennedy@gmail.com</span>{" "}
              provided.
            </p>
          </div>
          <div className="mt-[60px]">
            <form className="" action="#" method="POST">
              <div>
                <div className="mt-1 flex justify-center space-x-[33px]">
                  <OtpInput
                    isInputNum
                    containerStyle=" flex justify-center space-x-[33px]"
                    value={OTP}
                    inputStyle="h-[50px_!important] text-center w-[50px_!important] appearance-none rounded-lg bg-violet200 border  px-3 py-2 focus:border-violet600 focus:outline-none focus:ring-slate-300 sm:text-[25px] font-medium text-gray800"
                    onChange={handleChange}
                    numInputs={4}
                    separator={<span></span>}
                  />
                </div>
              </div>
              <div className="text-center mt-12">
                <span className="text-medium text-[15px] text-gray800 leanding-[22px]">
                  Do not receive the code?{" "}
                  <button
                    onClick={() => {
                      setIsActive(true);
                    }}
                    type="button"
                    className="font-semibold text-violet600 cursor-pointer"
                  >
                    Send again
                  </button>
                </span>
              </div>
              {isActive && (
                <div className="mt-[60px] text-center">
                  <p className="text-[13px] font-semibold text-pink600">
                    00:{seconds} secs
                  </p>
                </div>
              )}
              <div className="mt-[60px]">
                <Link href="/brand/resetpassword">
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded border border-transparent bg-violet600 py-3 px-4 text-[15px] font-semibold text-white shadow-sm  focus:outline-none focus:ring-0 "
                  >
                    Verify
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
