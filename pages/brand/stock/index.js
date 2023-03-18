import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import AddStock from "../../../components/Brand/Stock/AddStock";
import { AllProduct, DeleteProduct } from "../../../Redux/action/stock";
import BASE_URL from "../../../URL";
import Image from "../../../components/ImageBox/Image";
import Tooltip from "../../../components/Tooltip/tooltip";
import { resetToast, showToast } from "../../../Redux/action/toast";

const InfluencerSearch = () => {
  const dispatch = useDispatch();
  const [profileView, setProfileView] = useState(false);
  const [stockDetails, setStockDetails] = useState({})
  const [image, setImage] = useState()
  const [open, setOpen] = useState(false)
  const [tool, setTool] = useState()

  const allTransaction = useSelector(
    (state) => state.Transaction.AllTransaction
  );
  const allStock = useSelector((state) => state.Product.allstock)
  const [page, setPage] = useState(1);

  const pageLimit = [];
  var i;
  for (i = 1; i <= allStock.total; i++) {
    pageLimit.push(i);
  }

  const handleTransaction = async () => {
    await dispatch(AllProduct(page))
  };

  useEffect(() => {
    handleTransaction();
  }, [page]);

  const deleteProduct = async (id) => {
    const response = await dispatch(DeleteProduct(id))
    if (response?.payload.message) {
      await dispatch(AllProduct(page))
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
    }
  }

  return (
    <>
      <main className="bg-main-bg px-4 sm:px-6 lg:px-[60px]">
        <AddStock
          userDetail={stockDetails}
          profileView={profileView}
          setProfileView={setProfileView}
        />
        <Image open={open} setOpen={setOpen} image={image} />
        <div className="py-6">
          <div className="mt-6 bg-white shadow-dark20 pt-[18px] px-[30px] pb-[22px] rounded-[15px]">
            <div className="md:flex justify-between">
              <div className="flex items-center">
                <h2 className="text-black500  font-semibold text-[17px] leading-[26px]">
                  Stock List
                </h2>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-violet600 shadow-blue100  w-full sm:w-auto block sm:inline-block  focus:outline-none rounded-[4px] sm:rounded-lg py-3 px-[30px] font-semibold text-[15px] leading-[22px] text-white"
                  onClick={() => {
                    setProfileView(true)
                    setStockDetails({})
                  }}
                >
                  Add Stock
                </button>
              </div>
            </div>
            {allStock.data.length > 0 ?
              <div>
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
                            {allStock.data &&
                              allStock.data.map((person, personIdx) => (
                                <tr
                                  key={person.email}
                                  className={`${personIdx % 2 === 1
                                    ? undefined
                                    : "bg-[#D9D9D9] bg-opacity-[0.2]"
                                    } influencertable`}
                                >
                                  <td className="whitespace-nowrap py-3 px-3 cursor-pointer text-sm ">
                                    <div className="flex items-center">
                                      <div className="h-10 w-10 flex-shrink-0">
                                        <div
                                          className="text-[20px] rounded-full text-center border border-transparent grid items-center h-full w-full"

                                        >
                                          <img onClick={() => {
                                            setOpen(true)
                                            setImage(`${BASE_URL}/image/${person?.product_Image}`)
                                          }} src={`${BASE_URL}/image/${person?.product_Image}`} />
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="whitespace-nowrap py-3 px-3 text-sm  font-medium text-gray-900 ">
                                    <div className="flex space-x-[7px]">
                                      <div className="">{person?.product_ID}</div>
                                    </div>
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-3 leading-5 font-medium  text-sm font-medium text-gray-900">
                                    <div className=" ">{person?.product_Name}</div>
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-3 leading-5 font-medium  text-xs font-medium text-gray-900">
                                    {person?.total_Quantity}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-3 text-sm text-gray-500">
                                    <span
                                      className={`${person.available_Quantity > 15
                                        ? " bg-green100 text-green600"
                                        : person.available_Quantity < 15 && person.available_Quantity > 5
                                          ? " bg-[#FFEFDB] text-[#FF8B00]"
                                          : "bg-[#f9d6d6] text-[#ff2500]"
                                        } text-black400 px-[25px] py-[3px] rounded font-medium leading-[15px] text-[13px] text-center`}
                                    >
                                      {person.available_Quantity ? person.available_Quantity : 0}
                                    </span>
                                  </td>
                                  <td className="whitespace-nowrap text-sm text-gray-500">
                                    <Tooltip content={tool} direction="left-px">
                                      <div className="flex justify-center text-center gap-[12px]">
                                        <img onClick={() => {
                                          setProfileView(true)
                                          setStockDetails(person)
                                        }} onMouseOver={(e) => setTool(e.target.name)} name="Edit stock" src="/assets/icons/edit-2.svg" className="w-[12%] hover:bg-blue-100 hover:rounded-md" />
                                        <img onMouseOver={(e) => setTool(e.target.name)} name="Outof stock" src="/assets/icons/view-off.svg" className="w-[12%]" />
                                        <img onClick={() => deleteProduct(person?.id)} onMouseOver={(e) => setTool(e.target.name)} name="Delete stock" src="/assets/icons/trash.svg" className="w-[12%]" />
                                      </div>
                                    </Tooltip>
                                  </td>
                                  <td></td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Pagination */}
                <div className="flex justify-end items-center pt-5">
                  <div className="flex items-center space-x-[19px]">
                    <button className="bg-[#CECDD066] flex items-center justify-center rounded-[6px] w-[28.38px] h-[28.38px]">
                      <img src="/assets/icons/left-gray.svg" />
                    </button>
                    {pageLimit &&
                      pageLimit.map((item, index) => {
                        return (
                          <div>
                            <button
                              // className="bg-violet600 rounded-[6px] flex items-center justify-center text-white ring-1 ring-purple100 w-[24.75px] h-[24.75px]  text-[13px] font-semibold leading-5"
                              // bg-white text-violet600 hover:bg-violet600   hover:text-white ring-1

                              className={
                                item === allStock.current
                                  ? "bg-violet600 rounded-[6px] flex items-center justify-center text-white ring-1 ring-purple100 w-[24.75px] h-[24.75px]  text-[13px] font-semibold leading-5"
                                  : "bg-white text-violet600 hover:bg-violet600 rounded-[6px] flex items-center justify-center hover:text-white ring-1 ring-purple100 w-[24.75px] h-[24.75px]  text-[13px] font-semibold leading-5"
                              }
                              onClick={() => setPage(item)}
                            >
                              {item}
                            </button>
                          </div>
                        );
                      })}
                    <button className="bg-[#CECDD066] flex items-center justify-center rounded-[6px] w-[28.38px] h-[28.38px]">
                      <img src="/assets/icons/right-gray.svg" />
                    </button>
                  </div>
                </div>
              </div>
              :
              <img src="/assets/datanotfound.svg" />
            }
          </div>
        </div>
      </main>
    </>
  );
};

export default InfluencerSearch;
