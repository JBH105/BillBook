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
  const [data, setData] = useState([{ productName: "", productQTY: "" }]);
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

  const handleChange = (i, e) => {
    const { name } = e.target;
    const text = e.target.value;
    let newFormValues = [...data];
    newFormValues[i][name] = text;
    setData(newFormValues);
  };

  const HandleRemov = (i) => {
    const list = [...data];
    list.splice(i, 1);
    setData(list);
  };

  const Handle = (e) => {
    setData([...data, { productName: "", productQTY: "" }]);
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

                              <div className="flex flex-col">
                                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                  <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                    <div className="overflow-hidden">
                                      <table className="min-w-full border text-center">
                                        <thead className="border-b">
                                          <tr className="border-b">
                                            <th
                                              scope="col"
                                              rowspan="2"
                                              className="text-sm font-medium text-gray-900 py-4 border-r"
                                            >
                                              #
                                            </th>
                                            <th
                                              colspan="2"
                                              scope="col"
                                              rowspan="2"
                                              className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
                                            >
                                              ITEM
                                            </th>
                                            <th
                                              scope="col"
                                              rowspan="2"
                                              className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
                                            >
                                              QTY
                                            </th>
                                            <th
                                              scope="col"
                                              colspan="2"
                                              className="text-sm font-medium text-gray-900 px-6"
                                            >
                                              PRICE/UNIT
                                            </th>

                                            <th
                                              scope="col"
                                              colspan="2"
                                              className="text-sm font-medium text-gray-900 px-6 border-l border-r"
                                            >
                                              DISCOUNT
                                            </th>

                                            <th
                                              scope="col"
                                              colspan="2"
                                              className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
                                            >
                                              TAX
                                            </th>

                                            <th
                                              scope="col"
                                              rowspan="2"
                                              className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
                                            >
                                              <div className="flex justify-between w-full">
                                                <span>AMOUNT</span>
                                                <img
                                                  src="/assets/icons8.png"
                                                  onClick={Handle}
                                                />
                                              </div>
                                            </th>
                                          </tr>
                                          <tr>
                                            <th
                                              scope="col"
                                              className="text-sm font-medium text-gray-900 px-6  border-l border-r"
                                            >
                                              <span className="">With Tax</span>
                                            </th>
                                            <th
                                              scope="col"
                                              className="text-sm font-medium text-gray-900 px-6  border-l border-r"
                                            >
                                              <span className="">
                                                Without Tax
                                              </span>
                                            </th>
                                            <th
                                              scope="col"
                                              className="text-sm font-medium text-gray-900 px-6  border-l border-r"
                                            >
                                              <span className="">%</span>
                                            </th>
                                            <th
                                              scope="col"
                                              className="text-sm font-medium text-gray-900 px-6  border-l border-r"
                                            >
                                              <span className="">AMOUNT</span>
                                            </th>
                                            <th
                                              scope="col"
                                              className="text-sm font-medium text-gray-900 px-6  border-l border-r"
                                            >
                                              <span className="">%</span>
                                            </th>
                                            <th
                                              scope="col"
                                              className="text-sm font-medium text-gray-900 px-6  border-l border-r"
                                            >
                                              <span className="">AMOUNT</span>
                                            </th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          {data &&
                                            data.map((item, i) => {
                                              return (
                                                <tr className="border-b">
                                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                                                    {i}
                                                  </td>
                                                  <td
                                                    colspan="2"
                                                    className="border-r"
                                                  >
                                                    <input
                                                      type="text"
                                                      name="productName"
                                                      className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                                                      onChange={(e) =>
                                                        handleChange(i, e)
                                                      }
                                                    />
                                                  </td>
                                                  <td className="text-sm text-gray-900 font-light whitespace-nowrap border-r">
                                                    <input
                                                      type="number"
                                                      name="productQTY"
                                                      className="text-sm text-gray-900 font-light h-full w-full px-6 py-4 "
                                                      onChange={(e) =>
                                                        handleChange(i, e)
                                                      }
                                                    />
                                                  </td>
                                                  <td className="text-sm text-gray-900 font-light whitespace-nowrap border-r">
                                                    <input
                                                      type="number"
                                                      name="priceWithText"
                                                      onChange={(e) =>
                                                        handleChange(i, e)
                                                      }
                                                      className="text-sm text-gray-900 font-light h-full w-full px-6 py-4 "
                                                    />
                                                  </td>
                                                  <td className="text-sm text-gray-900 font-light whitespace-nowrap border-r">
                                                    <input
                                                      type="number"
                                                      name="priceWithoutText"
                                                      onChange={(e) =>
                                                        handleChange(i, e)
                                                      }
                                                      className="text-sm text-gray-900 font-light h-full w-full px-6 py-4 "
                                                    />
                                                  </td>
                                                  <td className="text-sm text-gray-900 font-light whitespace-nowrap border-r">
                                                    <input
                                                      name="discountWith%"
                                                      type="number"
                                                      onChange={(e) =>
                                                        handleChange(i, e)
                                                      }
                                                      className="text-sm text-gray-900 font-light h-full w-full px-6 py-4 "
                                                    />
                                                  </td>
                                                  <td className="text-sm text-gray-900 font-light whitespace-nowrap border-r">
                                                    <input
                                                      name="discountWithAmount"
                                                      type="number"
                                                      onChange={(e) =>
                                                        handleChange(i, e)
                                                      }
                                                      className="text-sm text-gray-900 font-light h-full w-full px-6 py-4 "
                                                    />
                                                  </td>
                                                  <td className="text-sm text-gray-900 font-light whitespace-nowrap border-r">
                                                    <input
                                                      name="taxWith%"
                                                      type="number"
                                                      onChange={(e) =>
                                                        handleChange(i, e)
                                                      }
                                                      className="text-sm text-gray-900 font-light h-full w-full px-6 py-4 "
                                                    />
                                                  </td>
                                                  <td className="text-sm text-gray-900 font-light whitespace-nowrap border-r">
                                                    <input
                                                      name="taxWithAmount"
                                                      type="number"
                                                      onChange={(e) =>
                                                        handleChange(i, e)
                                                      }
                                                      className="text-sm text-gray-900 font-light h-full w-full px-6 py-4 "
                                                    />
                                                  </td>
                                                  <td className="text-sm text-gray-900 font-light whitespace-nowrap border-r">
                                                    <input
                                                      name="amount"
                                                      type="number"
                                                      onChange={(e) =>
                                                        handleChange(i, e)
                                                      }
                                                      className="text-sm text-gray-900 font-light h-full w-full px-6 py-4 "
                                                    />
                                                  </td>
                                                  {/* <button onClick={Handle}>
                                                    add
                                                  </button>
                                                  <button
                                                    onClick={() =>
                                                      HandleRemov(i)
                                                    }
                                                  >
                                                    remove
                                                  </button> */}
                                                </tr>
                                              );
                                            })}
                                          {/* <tr className="bg-white border-b">
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
                                          </tr> */}
                                          <tr className="bg-white border-b">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 "></td>
                                            <td
                                              colspan="2"
                                              className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center border-r"
                                            >
                                              Totale
                                            </td>
                                            <td className=" border-r text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                              0
                                            </td>
                                            <td className="border-r text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                              0
                                            </td>
                                            <td className="border-r text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                              0
                                            </td>
                                            <td className="border-r text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                              0
                                            </td>
                                            <td className="border-r text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                              0
                                            </td>
                                            <td className="border-r text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                              0
                                            </td>
                                            <td className="border-r text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                              0
                                            </td>
                                            <td className="border-r text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                              0
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
