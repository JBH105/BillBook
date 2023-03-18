import React, { Fragment, useState} from "react";
import {
  Dialog,
  Transition,

} from "@headlessui/react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { AddProduct, AllProduct } from "../../../Redux/action/stock";
import { resetToast, showToast } from "../../../Redux/action/toast";

const tab = [
  { name: "Recent History" },
  { name: "Recent Transaction" },
  { name: "Profile" },
];

export default function AddStock({ profileView, setProfileView, userDetail }) {
  const dispatch = useDispatch();
  const Product = useSelector((state) => state.Product.stock);
  const [page, setPage] = useState(1);
  const [image, setImage] = useState();
  const initialValues = {
    id: userDetail ? userDetail.product_ID : " ",
    product: userDetail ? userDetail.product_Name : " ",
    quantity: userDetail ? userDetail.available_Quantity : " ",
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
    formData.append("ID", userDetail?.id)

    const response = await dispatch(AddProduct(formData));

    await dispatch(AllProduct(page))
    if (response?.payload.message) {
      await dispatch(showToast({
        message: response?.payload.message,
        time: 5000,
        id: "SampleToast",
        type: 200,
        handleClose: () => { console.log("the toast is closed") }
      }))
      setTimeout(() => {
        dispatch(resetToast())
      }, 3000)
      setProfileView(false)
    } else {
      await dispatch(showToast({
        message: response?.payload.data.message ,
        time: 5000,
        id: "SampleToast",
        type: 400,
        handleClose: () => { console.log("the toast is closed") }
      }))
      setTimeout(() => {
        dispatch(resetToast())
      }, 3000)
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
                <Dialog.Panel className="relative min-h-[100vh] flex w-full max-w-[988px] flex-1 flex-col bg-white">


                  <div className="flex h-full flex-col flex-shrink-0 pt-8 px-3 md:px-12">
                    <div className="w-full flex items-center space-x-[25px]">
                      <button
                        className="focus:outline-none"
                        onClick={() => setProfileView(false)}
                      >
                        <img src="/assets/icons/left-dark.svg" />
                      </button>
                      <h2 className="text-black600 font-semibold text-xl">
                        Add New Stock
                      </h2>
                    </div>
                    <div className="mt-7 custom-scroll min-h-[calc(100vh_-_5rem)] overflow-auto">
                      <nav
                        className="-mb-px flex gap-[20px] sm:gap-[30px] lg:gap-[68px] "
                        aria-label="Tabs"
                      >
                        <div className=" w-full ">
                          <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            enableReinitialize={true}
                            onSubmit={(values) => HandleData(values)}
                          >
                            {(formik) => {
                              return (
                                <Form className=" mt-10 lg:mt-0 flex-auto mr-[25px] ml-[25px] sm:mr-[50px] sm:ml-[50px] lg:ml-[75px] py-10">
                                  <div>
                                    <h3 className="text-[14px] md:text-[13px] mb-4 font-semibold leading-5 text-gray500">
                                      ADD PRODUCT DETAILS
                                    </h3>

                                    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-2">
                                      <div className="">
                                        <label className="block md:mb-1 text-[13px] font-medium leading-5 text-gray700">
                                          Product ID
                                        </label>
                                        <Field
                                          id="id"
                                          name="id"
                                          type="text"
                                          placeholder="DL-12"
                                          className="md:max-w-[350px] inputbg focus:bg-white/[0.25] focus:bg-white/[0.25] w-full placeholder:italic placeholder:text-black600/[0.3] placeholder:leading-[22px] placeholder:font-normal placeholder:text-xs  md:placeholder:text-[15px] focus:outline-none text-[15px] font-medium leading-[22px] text-black600 border border-gray250 focus:border-[#2E1368] rounded-lg py-3 bg-white bg-opacity-[0.25] px-4"
                                        />
                                        <div style={{ color: "red" }}>
                                          <ErrorMessage
                                            name="id"
                                            component="span"
                                            className="error text-[13px] font-medium leanding-[20px] text-red500"
                                          />
                                        </div>
                                      </div>
                                      <div className="">
                                        <label className="block md:mb-1 text-[12px] md:text-[13px] font-medium leading-5 text-gray700">
                                          Product Name
                                        </label>
                                        <Field
                                          id="product"
                                          name="product"
                                          placeholder="Enter Product name"
                                          type="text"
                                          className="md:max-w-[350px] inputbg w-full placeholder:italic placeholder:text-black600/[0.3] placeholder:leading-[22px] placeholder:font-normal placeholder:text-xs  md:placeholder:text-[15px] focus:outline-none text-[15px] font-medium leading-[22px] text-black600 border border-gray250 focus:border-[#2E1368] rounded-lg py-3 focus:bg-white/[0.25] bg-white bg-opacity-[0.25] px-4"
                                        />
                                        <div style={{ color: "red" }}>
                                          <ErrorMessage
                                            name="product"
                                            component="span"
                                            className="error text-[13px] font-medium leanding-[20px] text-red500"
                                          />
                                        </div>
                                      </div>
                                      <div className="">
                                        <label className="block md:mb-1 text-[13px] font-medium leading-5 text-gray700">
                                          Total Quantity
                                        </label>
                                        <Field
                                          id="quantity"
                                          name="quantity"
                                          type="number"
                                          placeholder="120"
                                          className="md:max-w-[350px] inputbg focus:bg-white/[0.25] focus:bg-white/[0.25] w-full placeholder:italic placeholder:text-black600/[0.3] placeholder:leading-[22px] placeholder:font-normal placeholder:text-xs  md:placeholder:text-[15px] focus:outline-none text-[15px] font-medium leading-[22px] text-black600 border border-gray250 focus:border-[#2E1368] rounded-lg py-3 bg-white bg-opacity-[0.25] px-4"
                                        />
                                        <div style={{ color: "red" }}>
                                          <ErrorMessage
                                            name="quantity"
                                            component="span"
                                            className="error text-[13px] font-medium leanding-[20px] text-red500"
                                          />
                                        </div>
                                      </div>

                                      <div className="">
                                        <label className="block md:mb-1 text-[13px] font-medium leading-5 text-gray700">
                                          Purchase Price
                                        </label>
                                        <Field
                                          id="purchase"
                                          name="purchase"
                                          type="number"
                                          placeholder="125"
                                          className="md:max-w-[350px] inputbg focus:bg-white/[0.25] focus:bg-white/[0.25] w-full placeholder:italic placeholder:text-black600/[0.3] placeholder:leading-[22px] placeholder:font-normal placeholder:text-xs  md:placeholder:text-[15px] focus:outline-none text-[15px] font-medium leading-[22px] text-black600 border border-gray250 focus:border-[#2E1368] rounded-lg py-3 bg-white bg-opacity-[0.25] px-4"
                                        />
                                        <div style={{ color: "red" }}>
                                          <ErrorMessage
                                            name="purchase"
                                            component="span"
                                            className="error text-[13px] font-medium leanding-[20px] text-red500"
                                          />
                                        </div>
                                      </div>
                                      <div className="">
                                        <label className="block md:mb-1 text-[13px] font-medium leading-5 text-gray700">
                                          Selling Price
                                        </label>
                                        <Field
                                          id="selling"
                                          name="selling"
                                          type="number"
                                          placeholder="example@example.com"
                                          className="md:max-w-[350px] inputbg focus:bg-white/[0.25] focus:bg-white/[0.25] w-full placeholder:italic placeholder:text-black600/[0.3] placeholder:leading-[22px] placeholder:font-normal placeholder:text-xs  md:placeholder:text-[15px] focus:outline-none text-[15px] font-medium leading-[22px] text-black600 border border-gray250 focus:border-[#2E1368] rounded-lg py-3 bg-white bg-opacity-[0.25] px-4"
                                        />
                                        <div style={{ color: "red" }}>
                                          <ErrorMessage
                                            name="selling"
                                            component="span"
                                            className="error text-[13px] font-medium leanding-[20px] text-red500"
                                          />
                                        </div>
                                      </div>
                                      <div className=""></div>
                                      <div className="mt-4">
                                        {!image ? (
                                          <div className="h-[148px] w-[148px] rounded-full bg-upload-img mx-auto flex justify-center items-center">
                                            <img src="/assets/icons/camera.svg" />
                                          </div>
                                        ) : (
                                          <div className="h-[148px] w-[148px] rounded-full shadow-dark15 mx-auto flex justify-center items-center bg-white p-1">
                                            <img
                                              src={URL.createObjectURL(image)}
                                              alt="image"
                                              className="w-full h-full rounded-full"
                                            />
                                          </div>
                                        )}

                                        <div className="flex">
                                          <input
                                            type="file"
                                            id="image"
                                            className="hidden"
                                            onChange={(e) =>
                                              setImage(e.target.files[0])
                                            }
                                            accept="image/*"
                                          />
                                          <label
                                            htmlFor="image"
                                            className="flex bg-gray50 rounded-[6px] mt-7 mx-auto py-[8.5px] px-[12.6px]  items-center text-[15.8px] font-semibold text-gray700"
                                          >
                                            <img
                                              src="/assets/icons/upload.svg"
                                              className="mr-1"
                                            />
                                            Upload Product Image
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="space-y-3 sm:space-x-[30px] mt-9 md:mt-[60px]">
                                    <button
                                      type="submit"
                                      disabled={
                                        !(formik.isValid && formik.dirty)
                                      }
                                      className={`${formik.isValid && formik.dirty
                                        ? ""
                                        : "opacity-[0.3]"
                                        } bg-violet600 shadow-blue100  w-full sm:w-auto block sm:inline-block  focus:outline-none rounded-[4px] sm:rounded-lg py-3 px-[30px] font-semibold text-[15px] leading-[22px] text-white  `}
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
                                </Form>
                              );
                            }}
                          </Formik>
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
