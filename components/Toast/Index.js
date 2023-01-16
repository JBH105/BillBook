import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetToast } from "../../Redux/action/toast";

export default function Toast({ children }) {
  const dispatch = useDispatch()
  const toastState = useSelector(data => data.Toast)

  switch (toastState.type) {
    case 200:
      toastState.color = "bg-green-50"
      toastState.textcolor = "text-green-700"
      toastState.iconscolor = "text-green-800"
      break;
    case 400:
      toastState.color = "bg-red-50"
      toastState.textcolor = "text-red-700"
      toastState.iconscolor = "text-red-800"
      break;
    default:
      break
  }

  return (
    <div>
      {Boolean(toastState.message) && (
        <div className=" fixed top-[15px] right-[20px] z-[99999999]">
          <div
            id="alert-1"
            class={`flex p-4 ${toastState.color} rounded-lg dark:bg-gray-800 ${toastState.textcolor}`}
            role="alert"
          >
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Info</span>
            <div class="ml-3 text-sm font-medium">{toastState.message}</div>
            <button
              type="button"
              class={`ml-auto -mx-1.5 -my-1.5 ${toastState.iconscolor} rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 inline-flex h-8 w-8`}
              data-dismiss-target="#alert-1"
              aria-label="Close"
              onClick={() => dispatch(resetToast())
              }
            >
              <span class="sr-only">Close</span>
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      )}

      {children}

    </div>
  );
}
