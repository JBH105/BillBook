import React, { Fragment, useState, Component, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { randomIntFromInterval } from "../../../util/randomNumber";
import { useDispatch, useSelector } from "react-redux";
import { AllTransaction } from "../../../Redux/action/transaction";
import Details from "../../../components/Brand/User/Details";
import AddStock from "../../../components/Brand/Stock/AddStock";
import { AllProduct, DeleteProduct } from "../../../Redux/action/stock";
import BASE_URL from "../../../URL";
import Image from "../../../components/ImageBox/Image";
import Tooltip from "../../../components/Tooltip/tooltip";
import { resetToast, showToast } from "../../../Redux/action/toast";
import SaleInvoice from "../../../components/Brand/SaleInvoice/saleInvoice";
import { AllInvoice } from "../../../Redux/action/saleInvoice";
import Invoice from "../../../components/Brand/SaleInvoice/Invoice";
import { totalinvoice } from "../../../util/totalinvoice";
import { formatCurrency } from "../../../util/formatCurrency";
import Pagination from "../../../components/Pagination/Pagination";

export default function Index() {
  const dispatch = useDispatch();
  const [profileView, setProfileView] = useState(false);
  const [stockDetails, setStockDetails] = useState({});
  const [image, setImage] = useState();
  const [open, setOpen] = useState(false);
  const [openInvoice, setOpenInvoice] = useState(false);
  const [tool, setTool] = useState();
  const [saleData, setSaleData] = useState();

  const allInvoice = useSelector((state) => state.Invoice.allInvoice);
  const allStock = useSelector((state) => state.Product.allstock);
  const [page, setPage] = useState(1);

  const pageLimit = [];
  var i;
  for (i = 1; i <= allInvoice.total; i++) {
    pageLimit.push(i);
  }

  const handleTransaction = async () => {
    await dispatch(AllInvoice(page));
  };

  useEffect(() => {
    handleTransaction();
    dispatch(AllProduct(1));
  }, [page]);

  // const deleteProduct = async (id) => {
  //   const response = await dispatch(DeleteProduct(id));
  //   if (response?.payload.message) {
  //     await dispatch(AllProduct(page));
  //     await dispatch(
  //       showToast({
  //         message: response?.payload.message,
  //         time: 5000,
  //         id: "SampleToast",
  //         type: 200,
  //         handleClose: () => {
  //           console.log(action.type, "payload")("the toast is closed");
  //         },
  //       })
  //     );
  //     setTimeout(() => {
  //       dispatch(resetToast());
  //     }, 3000);
  //   }
  // };

  return (
    <main className="bg-main-bg px-4 sm:px-6 lg:px-[60px]">
      <SaleInvoice
        userDetail={stockDetails}
        profileView={profileView}
        setProfileView={setProfileView}
      />
      <Invoice
        open={openInvoice}
        setOpen={setOpenInvoice}
        saleData={saleData}
      />
      <Image open={open} setOpen={setOpen} image={image} />
      <div className="py-6">
        <div className="mt-6 bg-white shadow-dark20 pt-[18px] px-[30px] pb-[22px] rounded-[15px]">
          <div className="md:flex justify-between">
            <div className="flex items-center">
              <h2 className="text-black500  font-semibold text-[17px] leading-[26px]">
                Invoice
              </h2>
            </div>
            <div>
              <button
                type="submit"
                className="bg-violet600 shadow-blue100  w-full sm:w-auto block sm:inline-block  focus:outline-none rounded-[4px] sm:rounded-lg py-3 px-[30px] font-semibold text-[15px] leading-[22px] text-white"
                onClick={() => {
                  setProfileView(true);
                  setStockDetails({});
                }}
              >
                Add Stock
              </button>
            </div>
          </div>

          {allInvoice?.data?.length ? (
            <>
              <div className="mt-2 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className=" inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="overflow-hidden ">
                      <table className="min-w-full ">
                        <thead className="bg-white">
                          <tr>
                            <th
                              scope="col"
                              className="px-3 py-[9px]  text-left text-[15px] font-semibold text-violet600"
                            >
                              Invoice No
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-[9px]  text-left text-[15px] font-semibold text-violet600"
                            >
                              User Name
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-[9px]  text-left text-[15px] font-semibold text-violet600"
                            >
                              Phone No
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
                              Total Amount
                            </th>

                            <th
                              scope="col"
                              className="px-3 py-[9px]   text-left text-[15px] font-semibold text-violet600"
                            >
                              Status
                            </th>

                          </tr>
                        </thead>
                        <tbody>
                          {allInvoice?.data &&
                            allInvoice.data.map((person, personIdx) => {
                              const count = totalinvoice(person?.saleProducts)
                              return (
                                <tr
                                  key={person.email}
                                  className={`${personIdx % 2 === 1
                                    ? undefined
                                    : "bg-[#D9D9D9] bg-opacity-[0.2]"
                                    } influencertable`}
                                  onClick={() => {
                                    setOpenInvoice(true);
                                    setSaleData(person);
                                  }}
                                >
                                  <td className="whitespace-nowrap py-3 px-3 cursor-pointer text-sm ">
                                    <div className="flex space-x-[7px]">
                                      <div className="">{person?.id}</div>
                                    </div>
                                  </td>
                                  <td className="whitespace-nowrap py-3 px-3 cursor-pointer text-sm ">
                                    <div className="flex space-x-[7px]">
                                      <div className="">{person?.user_Name}</div>
                                    </div>
                                  </td>
                                  <td className="whitespace-nowrap py-3 px-3 text-sm  font-medium text-gray-900 ">
                                    <div className="flex space-x-[7px]">
                                      <div className="">{person?.phoneNo}</div>
                                    </div>
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-3 leading-5 font-medium  text-sm font-medium text-gray-900">
                                    <div className=" ">
                                      {count?.total?.QuntitySum}
                                    </div>
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-3 leading-5 font-medium  text-sm font-bold text-gray-900">
                                    {formatCurrency(count?.total?.AmountSum, "INR")}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-3 text-sm text-gray-500">
                                    <span
                                      className={`${person.total_Quantity > 15
                                        ? " bg-green100 text-green600"
                                        : person.total_Quantity < 15 &&
                                          person.total_Quantity > 5
                                          ? " bg-[#FFEFDB] text-[#FF8B00]"
                                          : "bg-[#f9d6d6] text-[#ff2500]"
                                        } text-black400 px-[25px] py-[3px] rounded font-medium leading-[15px] text-[13px] text-center`}
                                    >
                                      Credit
                                    </span>
                                  </td>

                                </tr>
                              )
                            })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <Pagination
                className="pagination-bar"
                currentPage={allInvoice.current}
                totalCount={allInvoice.results}
                pageSize={10}
                onPageChange={(pages) => setPage(pages)}
              />
            </>
          ) : (
            <div className="flex h-[74vh] justify-center ">
              <img src="/assets/datanotfound.svg" />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
