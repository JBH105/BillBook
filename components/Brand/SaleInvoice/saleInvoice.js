import React, { Fragment, useState, Component, useEffect } from "react";
import {
  Disclosure,
  Dialog,
  Transition,
  Listbox,
  Menu,
} from "@headlessui/react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { AddProduct, AllProduct } from "../../../Redux/action/stock";
import { resetToast, showToast } from "../../../Redux/action/toast";

const tab = [
  {
    name: "Recent History",
  },
  {
    name: "Recent Transaction",
  },
  {
    name: "Profile",
  },
];

export default function SaleInvoice({
  profileView,
  setProfileView,
  userDetail,
}) {
  const dispatch = useDispatch();
  const Product = useSelector((state) => state.Product.stock);
  const [date, setDate] = useState(new Date());
  const [page, setPage] = useState(1);
  const [image, setImage] = useState();
  const initialValues = {
    id: userDetail ? userDetail.product_ID : " ",
    product: userDetail ? userDetail.product_Name : " ",
    quantity: userDetail ? userDetail.total_Quantity : " ",
    purchase: userDetail ? userDetail.purchase_Price : " ",
    selling: userDetail ? userDetail.selling_Price : " ",
  };

  const validationSchema = Yup.object({
    id: Yup.string().required("Product id is required"),
    product: Yup.string().required("Product name is required"),
    quantity: Yup.string().required("Total quantity is required"),
    purchase: Yup.string().required("Purchase price is required"),
    selling: Yup.string().required("Selling price is required"),
  });

  const HandleData = async (values) => {
    let formData = new FormData();
    formData.append("image", image);
    formData.append("product_ID", values.id);
    formData.append("product_Name", values.product);
    formData.append("purchase_Price", values.purchase);
    formData.append("total_Quantity", values.quantity);
    formData.append("selling_Price", values.selling);
    formData.append("ID", userDetail?.id);

    const response = await dispatch(AddProduct(formData));

    await dispatch(AllProduct(page));
    if (response?.payload.message) {
      await dispatch(
        showToast({
          message: response?.payload.message,
          time: 5000,
          id: "SampleToast",
          type: 200,
          handleClose: () => {
            console.log("the toast is closed");
          },
        })
      );
      setTimeout(() => {
        dispatch(resetToast());
      }, 3000);
      setProfileView(false);
    } else {
      await dispatch(
        showToast({
          message: response?.payload.data.message,
          time: 5000,
          id: "SampleToast",
          type: 400,
          handleClose: () => {
            console.log("the toast is closed");
          },
        })
      );
      setTimeout(() => {
        dispatch(resetToast());
      }, 3000);
    }
  };

  return (
    <div>
      <div className="">
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
                <Dialog.Panel className="relative min-h-[100vh] flex w-full max-w-[1333px] flex-1 flex-col bg-white">
                  <div className="flex h-full flex-col flex-shrink-0 pt-8 px-3 md:px-12">
                    <div className="w-full flex items-center space-x-[25px]">
                      <button
                        className="focus:outline-none"
                        onClick={() => setProfileView(false)}
                      >
                        <img src="/assets/icons/left-dark.svg" />
                      </button>
                      <h2 className="text-black600 font-semibold text-xl">
                        Sale Invoice
                      </h2>
                    </div>
                    <div className="mt-7 custom-scroll min-h-[calc(100vh_-_5rem)] overflow-auto">
                      <nav
                        className="-mb-px flex gap-[20px] sm:gap-[30px] lg:gap-[68px] "
                        aria-label="Tabs"
                      >
                        <div className=" w-full ">
                          <div className=" mt-10 lg:mt-0 flex-auto mr-[25px] ml-[25px] sm:mr-[50px] sm:ml-[50px] lg:ml-[75px] py-10">
                            <div>
                              <div className="flex justify-between mb-9">
                                <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
                                  <div className="">
                                    <label className="block md:mb-1 text-[13px] font-medium leading-5 text-gray700">
                                      Billing Name
                                    </label>
                                    <input
                                      id="id"
                                      name="id"
                                      type="text"
                                      placeholder="DL-12"
                                      className="md:max-w-[350px] inputbg focus:bg-white/[0.25] focus:bg-white/[0.25] w-full placeholder:italic placeholder:text-black600/[0.3] placeholder:leading-[22px] placeholder:font-normal placeholder:text-xs  md:placeholder:text-[15px] focus:outline-none text-[15px] font-medium leading-[22px] text-black600 border border-gray250 focus:border-[#2E1368] rounded-lg py-3 bg-white bg-opacity-[0.25] px-4"
                                    />
                                  </div>
                                  <div className="">
                                    <label className="block md:mb-1 text-[13px] font-medium leading-5 text-gray700">
                                      Phone No.
                                    </label>
                                    <input
                                      id="id"
                                      name="id"
                                      type="number"
                                      placeholder="0123456789"
                                      className="md:max-w-[350px] inputbg focus:bg-white/[0.25] focus:bg-white/[0.25] w-full placeholder:italic placeholder:text-black600/[0.3] placeholder:leading-[22px] placeholder:font-normal placeholder:text-xs  md:placeholder:text-[15px] focus:outline-none text-[15px] font-medium leading-[22px] text-black600 border border-gray250 focus:border-[#2E1368] rounded-lg py-3 bg-white bg-opacity-[0.25] px-4"
                                    />
                                  </div>
                                </div>
                                <div className="">
                                  <div className="flex gap-[33px] mb-4">
                                    <label className="block whitespace-nowrap md:mb-1 text-[13px] font-medium leading-5 text-gray700">
                                      Invoice No.
                                    </label>
                                    <p className=" w-full max-w-[80px] min-w-[70px] text-center text-[13px] font-medium leading-5 text-gray700">
                                      123
                                    </p>
                                  </div>
                                  <div className="flex gap-[33px] mb-4">
                                    <label className="block whitespace-nowrap md:mb-1 text-[13px] font-medium leading-5 text-gray700">
                                      Invoice Date
                                    </label>
                                    <input
                                      type="date"
                                      className=" w-full min-w-[70px] text-center text-[13px] font-medium leading-5 text-gray700"
                                      defaultValue={date}
                                    />
                                  </div>
                                  <div className="flex gap-[33px]">
                                    <label className="block whitespace-nowrap md:mb-1 text-[13px] font-medium leading-5 text-gray700">
                                      State of supply
                                    </label>
                                    <select className=" w-full border-b-2 min-w-[70px] text-center text-[13px] font-medium leading-5 text-gray700">
                                      <option value="Select state">
                                        Select state
                                      </option>
                                      <option value="One">One</option>
                                      <option value="Two">Two</option>
                                    </select>
                                  </div>
                                </div>
                              </div>

                              {/* <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                                                <div className=" inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                                                    <div className="overflow-hidden ">
                                                                        <table className="min-w-full ">
                                                                            <thead className="bg-white">
                                                                                <tr>
                                                                                    <th
                                                                                        scope="col"
                                                                                        className="px-3 py-[9px]  text-left text-[15px] font-semibold text-violet600"
                                                                                    >
                                                                                        Product Image
                                                                                    </th>
                                                                                    <th
                                                                                        scope="col"
                                                                                        className="px-3 py-[9px]  text-left text-[15px] font-semibold text-violet600"
                                                                                    >
                                                                                        Product ID
                                                                                    </th>
                                                                                    <th
                                                                                        scope="col"
                                                                                        className="px-3 py-[9px]   text-left text-[15px] font-semibold text-violet600"
                                                                                    >
                                                                                        Product Name
                                                                                    </th>
                                                                                    <th
                                                                                        scope="col"
                                                                                        className="px-3 py-[9px]   text-left text-[15px] font-semibold text-violet600"
                                                                                    >
                                                                                        Total Quantity
                                                                                    </th>

                                                                                    <th
                                                                                        scope="col"
                                                                                        className="px-3 py-[9px]   text-left text-[15px] font-semibold text-violet600"
                                                                                    >
                                                                                        Available Quantity
                                                                                    </th>
                                                                                    <th
                                                                                        scope="col"
                                                                                        className="px-3 py-[9px] flex justify-center text-center text-left text-[15px] font-semibold text-violet600"
                                                                                    >
                                                                                        Option
                                                                                    </th>

                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>

                                                                                <tr

                                                                                >
                                                                                    <td className="whitespace-nowrap py-3 px-3 cursor-pointer text-sm ">

                                                                                    </td>
                                                                                    <td className="whitespace-nowrap py-3 px-3 text-sm  font-medium text-gray-900 ">
                                                                                        <div className="flex space-x-[7px]">
                                                                                            <div className="">123</div>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td className="whitespace-nowrap px-3 py-3 leading-5 font-medium  text-sm font-medium text-gray-900">
                                                                                        <div className=" ">123</div>
                                                                                    </td>
                                                                                    <td className="whitespace-nowrap px-3 py-3 leading-5 font-medium  text-xs font-medium text-gray-900">
                                                                                        2
                                                                                    </td>
                                                                                    <td className="whitespace-nowrap px-3 py-3 text-sm text-gray-500">
                                                                                        <span
                                                                                        >
                                                                                            1
                                                                                        </span>
                                                                                    </td>
                                                                                    <td></td>
                                                                                    <td></td>
                                                                                </tr>

                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div> */}

                              {/* <div className="relative overflow-x-auto">
                                                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                                                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                                                                        <tr>
                                                                            <th scope="col" className="px-6 py-3 rounded-l-lg">
                                                                                Product name
                                                                            </th>
                                                                            <th scope="col" className="px-6 py-3">
                                                                                Qty
                                                                            </th>
                                                                            <th scope="col" className="px-6 py-3 rounded-r-lg">
                                                                                Price
                                                                            </th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr className="bg-white dark:bg-gray-800">
                                                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                Apple MacBook Pro 17"
                                                                            </th>
                                                                            <td className="px-6 py-4">
                                                                                1
                                                                            </td>
                                                                            <td className="px-6 py-4">
                                                                                $2999
                                                                            </td>
                                                                        </tr>
                                                                        <tr className="bg-white dark:bg-gray-800">
                                                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                Microsoft Surface Pro
                                                                            </th>
                                                                            <td className="px-6 py-4">
                                                                                1
                                                                            </td>
                                                                            <td className="px-6 py-4">
                                                                                $1999
                                                                            </td>
                                                                        </tr>
                                                                        <tr className="bg-white dark:bg-gray-800">
                                                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                Magic Mouse 2
                                                                            </th>
                                                                            <td className="px-6 py-4">
                                                                                1
                                                                            </td>
                                                                            <td className="px-6 py-4">
                                                                                $99
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                    <tfoot>
                                                                        <tr className="font-semibold text-gray-900 dark:text-white">
                                                                            <th scope="row" className="px-6 py-3 text-base">Total</th>
                                                                            <td className="px-6 py-3">3</td>
                                                                            <td className="px-6 py-3">21,000</td>
                                                                        </tr>
                                                                    </tfoot>
                                                                </table>
                                                            </div> */}

                              <div className="flex flex-col">
                                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                  <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                    <div className="overflow-hidden">
                                      <table className="min-w-full border text-center">
                                        <thead className="border-b">
                                          <tr>
                                            <th
                                              scope="col"
                                              className="text-sm font-medium text-gray-900 py-4 border-r"
                                            >
                                              #
                                            </th>
                                            <th
                                              colspan="2"
                                              scope="col"
                                              className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
                                            >
                                              ITEM
                                            </th>
                                            <th
                                              scope="col"
                                              className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
                                            >
                                              QTY
                                            </th>
                                            <th
                                              scope="col"
                                              className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
                                            >
                                              <div>
                                                <span>PRICE/UNIT</span>
                                              </div>
                                              <hr />

                                              <div className="mt-3">
                                                <select>
                                                  <option>With text</option>
                                                  <option>Without text</option>
                                                </select>
                                              </div>
                                            </th>

                                            <th
                                              scope="col"
                                              className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
                                            >
                                              <p className="border-b">
                                                DISCOUNT
                                              </p>
                                              <div className="gap-[10px] flex justify-center">
                                                <span className="border-r">
                                                  %
                                                </span>
                                                <span className="">AMOUNT</span>
                                              </div>
                                            </th>

                                            <th
                                              scope="col"
                                              className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
                                            >
                                              TAX
                                            </th>

                                            <th
                                              scope="col"
                                              className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
                                            >
                                              AMOUNT
                                            </th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr className="border-b">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                                              1
                                            </td>
                                            <td
                                              rowspan="1"
                                              className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r"
                                            >
                                              Mark
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                                              Otto
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                                              Otto
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                                              Otto
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                                              Otto
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                                              Otto
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                                              Otto
                                            </td>
                                          </tr>
                                          <tr className="bg-white border-b">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                                              2
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                                              Jacob
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                                              Thornton
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                              @fat
                                            </td>
                                          </tr>
                                          <tr className="bg-white border-b">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                                              3
                                            </td>
                                            <td
                                              colspan="2"
                                              className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center border-r"
                                            >
                                              Larry the Bird
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                              @twitter
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="space-y-3 sm:space-x-[30px] mt-9 md:mt-[60px]">
                              <button
                                type="submit"
                                className="opacity-[0.3] bg-violet600 shadow-blue100  w-full sm:w-auto block sm:inline-block  focus:outline-none rounded-[4px] sm:rounded-lg py-3 px-[30px] font-semibold text-[15px] leading-[22px] text-white"
                              >
                                Save Changes
                              </button>
                              <button
                                type="button"
                                className="text-[15px] w-full sm:w-auto block sm:inline-block border border-violet600 sm:border-none font-semibold text-violet600 sm:text-[#8A8A8A] rounded-[4px]  focus:outline-none py-3 px-[30px] sm:p-0"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      </nav>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </div>
  );
}
