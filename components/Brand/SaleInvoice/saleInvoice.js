import React, { Fragment, useMemo, useState } from "react";
import { Dialog, Transition, Combobox, Listbox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

import { useDispatch, useSelector } from "react-redux";
import { resetToast, showToast } from "../../../Redux/action/toast";
import { AddInvoice, AllInvoice } from "../../../Redux/action/saleInvoice";
import { totalinvoice } from "../../../util/totalinvoice";
import { BiRupee } from "react-icons/bi";
import { formatCurrency } from "../../../util/formatCurrency";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function SaleInvoice({
  profileView,
  setProfileView,
  userDetail,
}) {
  const dispatch = useDispatch();
  const Product = useSelector((state) => state.Product.allstock);
  const [date, setDate] = useState(new Date());
  const [saleData, setSaleData] = useState({});
  const [data, setData] = useState([{ productId: "", qty: "" }]);
  const [total, setTotal] = useState({});
  const [query, setQuery] = useState("");

  const createInvoiceData = totalinvoice(data)

  const HandleSaleData = async (e) => {
    setSaleData({ ...saleData, [e.target.name]: e.target.value });
  };
  useMemo(() => {
    setData([{ productId: "", qty: "" }])
  }, [profileView])
  // useMemo(() => {
  //   let amount = 0
  //   data?.map((item, index) => {
  //     let sum = item.priceWithTax * item.qty;
  //     item.TotalSum = sum
  //     // count discount
  //     if (item?.discountWithAmount) {
  //       item.TotalDiscount = item?.discountWithAmount;
  //     } else if (item?.discountWithPercentage) {
  //       item.TotalDiscount = (sum * item?.discountWithPercentage) / 100;
  //     }
  //     // Text count
  //     if (item?.taxWithAmount) {
  //       let sumtext = item?.taxWithAmount;
  //       item.TotalTax = sumtext
  //     } else if (item?.taxWithPercentage) {
  //       item.TotalTax = (sum * item?.taxWithPercentage) / 100;
  //     }
  //     // Total Count
  //     if (item.TotalDiscount && item.TotalTax) {
  //       console.log(typeof item.TotalTax, typeof sum - item.TotalDiscount, typeof sum, typeof item.TotalDiscount, "TotalTax");
  //       item.amount = parseInt(sum) - parseInt(item.TotalDiscount) + parseInt(item.TotalTax);
  //     } else if (item.TotalDiscount) {
  //       item.amount = parseInt(sum) - parseInt(item.TotalDiscount);
  //     } else if (item.TotalTax) {
  //       item.amount = parseInt(sum) + parseInt(item.TotalTax);
  //     } else {
  //       item.amount = parseInt(item.TotalSum);
  //     }
  //     amount = (parseInt(item.amount) ? parseInt(item.amount) : 0) +
  //       amount;
  //     setTotal({ ...total, amount: amount })
  //   })

  // }, [data])

  const handleChange = (i, e) => {
    const { name } = e.target;
    const text = e.target.value;
    let newFormValues = [...data];
    newFormValues[i][name] = text;
    setData(newFormValues);
    let sum = 0;
    let priceWithTax = 0;
    let priceWithoutTax = 0;
    let discountWithPercentage = 0;
    let discountWithAmount = 0;
    let taxWithPercentage = 0;
    let taxWithAmount = 0;

    data?.forEach((item, index) => {
      sum = (parseInt(item.qty) ? parseInt(item.qty) : 0) + sum;

      priceWithTax =
        (parseInt(item.priceWithTax) ? parseInt(item.priceWithTax) : 0) +
        priceWithTax;

      priceWithoutTax =
        (parseInt(item.priceWithoutTax) ? parseInt(item.priceWithoutTax) : 0) +
        priceWithoutTax;

      discountWithPercentage =
        (parseInt(item.discountWithPercentage)
          ? parseInt(item.discountWithPercentage)
          : 0) + discountWithPercentage;

      discountWithAmount =
        (parseInt(item.discountWithAmount)
          ? parseInt(item.discountWithAmount)
          : 0) + discountWithAmount;

      taxWithPercentage =
        (parseInt(item.taxWithPercentage)
          ? parseInt(item.taxWithPercentage)
          : 0) + taxWithPercentage;

      taxWithAmount =
        (parseInt(item.taxWithAmount) ? parseInt(item.taxWithAmount) : 0) +
        taxWithAmount;

      setTotal({
        ...total,
        totalQTY: sum,
        price: priceWithTax,
        discountWithPercentage: discountWithPercentage,
        discountWithAmount: discountWithAmount,
        taxWithPercentage: taxWithPercentage,
        taxWithAmount: taxWithAmount
      });
    });
  };

  const HandleRemov = (i) => {
    const list = [...data];
    list.splice(i, 1);
    setData(list);
  };

  const Handle = (e) => {
    setData([...data, { productId: "", qty: "" }]);
  };

  const HandleInvoice = async (event) => {
    event.preventDefault()
    const invoicedata = {
      user_Name: saleData.user_Name,
      phoneNo: saleData.phoneNo,
      invoice_Date: saleData.invoice_Date,
      product: data,
    };

    const response = await dispatch(AddInvoice(invoicedata));
    await dispatch(AllInvoice(1));
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
          message:
            response?.payload?.data?.message?.parent?.sqlMessage ||
            // response?.payload?.data?.message?.errors[0]?.message ||
            response?.payload?.data?.message,
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
                        <form onSubmit={HandleInvoice}>
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
                                        name="user_Name"
                                        type="text"
                                        placeholder="DL-12"
                                        required
                                        className="md:max-w-[350px] inputbg focus:bg-white/[0.25] focus:bg-white/[0.25] w-full placeholder:italic placeholder:text-black600/[0.3] placeholder:leading-[22px] placeholder:font-normal placeholder:text-xs  md:placeholder:text-[15px] focus:outline-none text-[15px] font-medium leading-[22px] text-black600 border border-gray250 focus:border-[#2E1368] rounded-lg py-3 bg-white bg-opacity-[0.25] px-4"
                                        onChange={(e) => HandleSaleData(e)}
                                      />
                                    </div>
                                    <div className="">
                                      <label className="block md:mb-1 text-[13px] font-medium leading-5 text-gray700">
                                        Phone No.
                                      </label>
                                      <input
                                        id="id"
                                        name="phoneNo"
                                        type="number"
                                        placeholder="0123456789"
                                        required
                                        min={10}
                                        // max={10}
                                        className="md:max-w-[350px] inputbg focus:bg-white/[0.25] focus:bg-white/[0.25] w-full placeholder:italic placeholder:text-black600/[0.3] placeholder:leading-[22px] placeholder:font-normal placeholder:text-xs  md:placeholder:text-[15px] focus:outline-none text-[15px] font-medium leading-[22px] text-black600 border border-gray250 focus:border-[#2E1368] rounded-lg py-3 bg-white bg-opacity-[0.25] px-4"
                                        onChange={(e) => HandleSaleData(e)}
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
                                        name="invoive_Date"
                                        className=" w-full min-w-[70px] text-center text-[13px] font-medium leading-5 text-gray700"
                                        defaultValue={date}
                                        onChange={(e) => HandleSaleData(e)}
                                      />
                                    </div>

                                  </div>
                                </div>

                                <div className="flex flex-col">
                                  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                      <div className="overflow-hidden pb-[80px]">
                                        <table className="min-w-full border text-center">
                                          <thead className="border-b">
                                            <tr className="border-b">
                                              <th
                                                scope="col"
                                                rowSpan="2"
                                                className="text-sm font-medium text-gray-900 py-4 border-r"
                                              >
                                                #
                                              </th>
                                              <th
                                                colSpan="2"
                                                scope="col"
                                                rowSpan="2"
                                                className="text-sm font-medium min-w-[250px] max-w-[251px] text-gray-900 px-6 py-4 border-r"
                                              >
                                                ITEM
                                              </th>
                                              <th
                                                scope="col"
                                                rowSpan="2"
                                                className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
                                              >
                                                QTY
                                              </th>
                                              <th
                                                scope="col"
                                                rowSpan="2"
                                                className="text-sm font-medium text-gray-900 px-6"
                                              >
                                                PRICE/UNIT
                                              </th>

                                              <th
                                                scope="col"
                                                colSpan="2"
                                                className="text-sm font-medium text-gray-900 px-6 border-l border-r"
                                              >
                                                DISCOUNT
                                              </th>

                                              <th
                                                scope="col"
                                                colSpan="2"
                                                className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
                                              >
                                                TAX
                                              </th>

                                              <th
                                                scope="col"
                                                rowSpan="2"
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
                                                <span className="">%</span>
                                              </th>
                                              <th
                                                scope="col"
                                                className="text-sm font-medium text-gray-900 px-6  border-l border-r"
                                              >
                                                <span className=""><BiRupee className="inline-block " /></span>
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
                                                <span className=""><BiRupee className="inline-block " /></span>
                                              </th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            {createInvoiceData.data &&
                                              createInvoiceData.data.map((item, i) => {
                                                return (
                                                  <tr className="border-b">
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                                                      {i}
                                                    </td>
                                                    <td
                                                      colSpan="2"
                                                      className="border-r"
                                                    >
                                                      <Combobox
                                                        className="h-full  "
                                                        as="div"
                                                        value={item.product_ID}
                                                        required
                                                      >
                                                        <Combobox.Label className="block text-sm font-medium text-gray-700"></Combobox.Label>
                                                        <div className="relative h-full">
                                                          <Combobox.Input
                                                            className="w-full h-full px-6 py-4 sm:text-sm"
                                                            name="productId"
                                                            onChange={(
                                                              event
                                                            ) => {
                                                              setQuery(
                                                                event.target
                                                                  .value
                                                              );
                                                              handleChange(
                                                                i,
                                                                event
                                                              );
                                                            }}
                                                            displayValue={(
                                                              person
                                                            ) =>
                                                              person?.product_ID
                                                            }
                                                          />
                                                          {Product?.data?.length >
                                                            0 && (
                                                              <Combobox.Options className="absolute z-[99999] custom-scroll max-h-[118px] mt-1 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                {Product?.data?.map(
                                                                  (person) => (
                                                                    <Combobox.Option
                                                                      key={
                                                                        person.id
                                                                      }
                                                                      value={
                                                                        person
                                                                      }
                                                                      className={({
                                                                        active,
                                                                      }) =>
                                                                        classNames(
                                                                          "relative cursor-default select-none py-2 pl-9 pr-3",
                                                                          active
                                                                            ? "bg-indigo-600 text-white"
                                                                            : "text-gray-900"
                                                                        )
                                                                      }
                                                                    >
                                                                      {({
                                                                        active,
                                                                        selected,
                                                                      }) => (
                                                                        <>
                                                                          {selected && (
                                                                            <span
                                                                              className={classNames(
                                                                                "absolute inset-y-0 left-[10px] flex items-center pr-4",
                                                                                active
                                                                                  ? "text-white"
                                                                                  : "text-indigo-600"
                                                                              )}
                                                                            >
                                                                              <CheckIcon
                                                                                className="h-5 w-5"
                                                                                aria-hidden="true"
                                                                              />
                                                                            </span>
                                                                          )}
                                                                          <span
                                                                            className={classNames(
                                                                              "block truncate text-left",
                                                                              selected &&
                                                                              "font-semibold"
                                                                            )}
                                                                          >
                                                                            {
                                                                              person.product_ID
                                                                            }
                                                                          </span>
                                                                        </>
                                                                      )}
                                                                    </Combobox.Option>
                                                                  )
                                                                )}
                                                              </Combobox.Options>
                                                            )}
                                                        </div>
                                                      </Combobox>
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light whitespace-nowrap border-r">
                                                      <input
                                                        type="number"
                                                        name="qty"
                                                        required
                                                        className="text-sm text-center text-gray-900 font-light h-full w-full px-6 py-4 "
                                                        onChange={(e) =>
                                                          handleChange(i, e)
                                                        }
                                                      />
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light whitespace-nowrap border-r">
                                                      <input
                                                        type="number"
                                                        name="priceWithTax"
                                                        required
                                                        onChange={(e) =>
                                                          handleChange(i, e)
                                                        }
                                                        className="text-sm text-center text-gray-900 font-light h-full w-full px-6 py-4 "
                                                      />
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light whitespace-nowrap border-r">
                                                      <input
                                                        name="discountWithPercentage"
                                                        type="number"
                                                        disabled={Boolean(
                                                          item.discountWithAmount
                                                        )}
                                                        onChange={(e) =>
                                                          handleChange(i, e)
                                                        }
                                                        className="text-sm text-center text-gray-900 font-light h-full w-full px-6 py-4 "
                                                      />
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light whitespace-nowrap border-r">
                                                      <input
                                                        name="discountWithAmount"
                                                        type="number"
                                                        disabled={Boolean(
                                                          item.discountWithPercentage
                                                        )}
                                                        onChange={(e) =>
                                                          handleChange(i, e)
                                                        }
                                                        className="text-sm text-center text-gray-900 font-light h-full w-full px-6 py-4 "
                                                      />
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light whitespace-nowrap border-r">
                                                      <input
                                                        name="taxWithPercentage"
                                                        type="number"
                                                        disabled={Boolean(
                                                          item.taxWithAmount
                                                        )}
                                                        onChange={(e) =>
                                                          handleChange(i, e)
                                                        }
                                                        className="text-sm text-center text-gray-900 font-light h-full w-full px-6 py-4 "
                                                      />
                                                    </td>
                                                    <td className="text-sm text-center text-gray-900 font-light whitespace-nowrap border-r">
                                                      <input
                                                        name="taxWithAmount"
                                                        type="number"
                                                        disabled={Boolean(
                                                          item.taxWithPercentage
                                                        )}
                                                        onChange={(e) =>
                                                          handleChange(i, e)
                                                        }
                                                        className="text-sm text-center text-gray-900 font-light h-full w-full px-6 py-4 "
                                                      />
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light whitespace-nowrap border-r">

                                                      {item?.TotalAmount ? formatCurrency(item?.TotalAmount, 'INR') : ""}

                                                    </td>
                                                  </tr>
                                                );
                                              })}
                                            <tr className="bg-white border-b">
                                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 "></td>
                                              <td
                                                colSpan="2"
                                                className="text-sm whitespace-nowrap px-3 font-semibold py-4 text-sm text-gray-900 border-r"
                                              >
                                                Total
                                              </td>
                                              <td className=" border-r whitespace-nowrap px-3 font-semibold py-4 text-sm text-gray-900">
                                                {createInvoiceData?.SubTotal.totalQTY}
                                              </td>
                                              <td className="border-r whitespace-nowrap px-3 font-semibold py-4 text-sm text-gray-900">
                                                {createInvoiceData?.SubTotal.price}
                                              </td>
                                              <td
                                                colSpan="2"
                                                className="border-r whitespace-nowrap px-3 font-semibold py-4 text-sm text-gray-900">
                                                {formatCurrency(createInvoiceData?.total.DiscountSum, 'INR')}
                                              </td>
                                              <td
                                                colSpan="2"
                                                className="border-r whitespace-nowrap px-3 font-semibold py-4 text-sm text-gray-900">
                                                {formatCurrency(createInvoiceData?.total.GSTSum, 'INR')}
                                              </td>
                                              <td className=" whitespace-nowrap px-3 font-semibold py-4 text-sm text-gray-900">
                                                {formatCurrency(createInvoiceData?.total.AmountSum, 'INR')}
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="space-y-3 sm:space-x-[30px] ">
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
                        </form>
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
