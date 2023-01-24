import { CheckIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useRef, useState } from "react";
import useWidth from "../hooks/useWidth";

const Task = ({ item, moretask }) => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const windowWidth = useWidth();
  const [allowed, setAllowed] = useState();
  useEffect(() => {
    if (ref?.current?.offsetWidth) {
      setAllowed(ref?.current?.offsetWidth / 130);
    }
  }, [windowWidth, ref.current]);

  return (
    <>
      <div ref={ref} className=" flex justify-between pb-2">
          <fieldset className="flex  gap-1 sm:gap-2">
            {item
              .filter((data, index) => {
                return index < parseInt(allowed);
              })
              .map((tasks) => (
                <div
                  key={tasks.id}
                  className={`${
                    tasks.approved
                      ? "bg-[#F3FFF7] border-[#0CB947]"
                      : "bg-white border-border-[#eeeeee]"
                  } relative shadow-task border-[0.8px]  min-w-[120px] pl-3 pr-2 py-[4px] border rounded flex items-center `}
                >
                 
                  <div
                    className={`${
                      tasks.approved
                        ? "bg-white"
                        : "bg-[#CECDD0] bg-opacity-[0.3]"
                    } w-[26px] h-[26px] rounded-full flex items-center justify-center`}
                  >
                    <img src={tasks.icon} className="w-[16px] h-[16px]" />
                  </div>
                  <div className="ml-2 mr-4 flex justify-center items-center">
                    <span className="text-[10px] font-semibold text-[#84828A] leading-[15px]">
                      {tasks.task}
                    </span>
                  </div>
                  {tasks.approved ? (
                    <div className="flex items-center justify-center text-[7px] text-white font-medium leading-[5px] w-[9px] h-[9px] bg-[#0CB947] rounded-full">
                      <CheckIcon className="text-white w-[7px]" />
                    </div>
                  ) : tasks.pending === true ? (
                    <>
                      <img
                        src="/assets/icons/checkboxes(1).svg"
                        className="w-[9px] h-[9px]"
                        alt=""
                      />
                    </>
                  ) : (
                    ""
                  )}
                </div>
              ))}
          </fieldset>
          {parseInt((item.length+1)-allowed) > 0 ? <button className="block focus:outline-none text-black font-medium leading-[12px] text-[10px]">
          {parseInt((item.length+1)-allowed)}+
        </button> :''}
        
      </div>
    </>
  );
};

export default Task;
