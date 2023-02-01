import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { BiRupee } from "react-icons/bi";
const people = [
  {
    id: 1,
    name: "Lindsay Walton",
    hsn: "",
    qua: "10 ",
    unit: "Bag",
    price: "1000 ",
    dis: "123.00",
    gst: "0.00(0%)",
    amount: "12,757.00",
  },
];
const text = [
  {
    name: "SGST",

    taxableamu: "0.00 ",
    rate: "0%",
    taxamu: "0.00 ",
  },
  {
    name: "CGST",

    taxableamu: "0.00 ",
    rate: "0%",
    taxamu: "0.00 ",
  },
];
export default function Invoice(props) {
  return (
    <div>
      <Transition.Root show={props.open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={props.setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 ">
            <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform rounded-lg bg-white overflow-hidden  text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-6xl  px-0">
                  <div className="overflow-y-auto px-6 h-[82vh] pt-8 custom-scroll">

                  <div className="flex border-b mb-3 pb-5">
                    <img
                      src={props?.image}
                      alt="Logo"
                      className="w-full h-full"
                    />
                    <div>
                      <p className="text-black500  font-semibold text-[17px] leading-[26px]">
                        My Company
                      </p>
                      <p className="text-sm whitespace-nowrap font-medium text-gray-500">
                        Phone no: 9714024077
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <h3 className="text-center font-semibold">Tax Invoice</h3>
                    <div className="flex justify-between">
                      <div>
                        <span className="block">Bill To</span>
                        <span className="block">Viaraj</span>
                      </div>
                      <div className="text-end">
                        <span className="text-violet600 block">
                          Invoice No.: 3
                        </span>
                        <span className="text-violet600 block">
                          Date : 23-01-2023
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex flex-col">
                    <div className="overflow-x-auto ">
                      <div className="inline-block min-w-full py-2 align-middle">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                          <table className="min-w-full divide-y divide-gray-300">
                            <thead className="bg-violet600">
                              <tr>
                                <th
                                  scope="col"
                                  className="px-3 py-3.5 text-left text-sm font-semibold text-white "
                                >
                                  #{" "}
                                </th>
                                <th
                                  scope="col"
                                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white "
                                >
                                  Item Name
                                </th>
                                <th
                                  scope="col"
                                  className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                                >
                                  HSN/SAC
                                </th>
                                <th
                                  scope="col"
                                  className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                                >
                                  Quntity
                                </th>
                                <th
                                  scope="col"
                                  className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                                >
                                  Unit
                                </th>
                                <th
                                  scope="col"
                                  className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                                >
                                  Price/Unit
                                </th>
                                <th
                                  scope="col"
                                  className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                                >
                                  Discount
                                </th>
                                <th
                                  scope="col"
                                  className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                                >
                                  GST
                                </th>
                                <th
                                  scope="col"
                                  className="px-3 py-3.5 text-right text-sm font-semibold text-white"
                                >
                                  Amount
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                              {people.map((person) => (
                                <tr key={person.id}>
                                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                    {person.id}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    {person.name}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    {person.hsn}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    {person.qua}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    {person.unit}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  <BiRupee className="inline-block " />{person.price}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  <BiRupee className="inline-block " />{person.dis}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                     {person.gst}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-right text-sm text-gray-500">
                                  <BiRupee className="inline-block " />{person.amount}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                            <tfoot>
                              <tr>
                                <td className="whitespace-nowrap px-3 py-4 text-left text-sm text-gray-500"></td>
                                <td className="whitespace-nowrap px-3 font-semibold py-4 text-left text-sm text-gray-900">
                                  Totle
                                </td>
                                <td className="whitespace-nowrap px-3 font-semibold py-4 text-left text-sm text-gray-900"></td>
                                <td className="whitespace-nowrap px-3 font-semibold py-4 text-left text-sm text-gray-900">
                                  100
                                </td>
                                <td className="whitespace-nowrap px-3 font-semibold py-4 text-left text-sm text-gray-900"></td>
                                <td className="whitespace-nowrap px-3 font-semibold py-4 text-left text-sm text-gray-900"></td>
                                <td className="whitespace-nowrap px-3 font-semibold py-4 text-left text-sm text-gray-900">
                                <BiRupee className="inline-block " />2333.00
                                </td>
                                <td className="whitespace-nowrap px-3 font-semibold py-4 text-left text-sm text-gray-900">
                                <BiRupee className="inline-block " />2333.00
                                </td>
                                <td className="whitespace-nowrap px-3 font-semibold py-4 text-right text-sm text-gray-900">
                                <BiRupee className="inline-block " />2333333.00
                                </td>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mt-8 flex flex-col">
                      <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-1 lg:grid-cols-2">
                        <div>
                          <div className="overflow-x-auto ">
                            <div className="inline-block min-w-full py-2 align-middle">
                              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-300">
                                  <thead className="bg-violet600">
                                    <tr>
                                      <th
                                        scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-white "
                                      >
                                        Tax Type
                                      </th>
                                      <th
                                        scope="col"
                                        className="px-3 py-3.5 text-right text-sm font-semibold text-white "
                                      >
                                        Taxable Amount
                                      </th>
                                      <th
                                        scope="col"
                                        className="px-3 py-3.5 text-right text-sm font-semibold text-white"
                                      >
                                        Rate
                                      </th>
                                      <th
                                        scope="col"
                                        className="px-3 py-3.5 text-right text-sm font-semibold text-white"
                                      >
                                        Tax Amount
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y divide-gray-200 bg-white">
                                    {text.map((value, index) => (
                                      <tr key={index}>
                                        <td className="whitespace-nowrap px-3 py-3.5 text-sm font-medium text-gray-900 ">
                                          {value.name}
                                        </td>
                                        <td className="whitespace-nowrap text-right px-3 py-4 text-sm text-gray-500">
                                        <BiRupee className="inline-block " />{value.taxableamu}
                                        </td>
                                        <td className="whitespace-nowrap text-right px-3 py-4 text-sm text-gray-500">
                                          {value.rate}
                                        </td>
                                        <td className="whitespace-nowrap text-right px-3 py-4 text-sm text-gray-500">
                                        <BiRupee className="inline-block " />{value.taxamu}
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="overflow-x-auto ">
                              <div className="inline-block min-w-full py-2 align-middle">
                                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                  <table className="min-w-full divide-y divide-gray-300">
                                    <thead className="bg-violet600">
                                      <tr>
                                        <th
                                          scope="col"
                                          className="px-3 py-3.5 text-left text-sm font-semibold text-white "
                                        >
                                          Invoice Amount in Word
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                      <tr>
                                        <td className="whitespace-nowrap px-3 py-3.5 text-sm font-medium text-gray-900 ">
                                          Six
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                            <div className="overflow-x-auto ">
                              <div className="inline-block min-w-full py-2 align-middle">
                                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                  <table className="min-w-full divide-y divide-gray-300">
                                    <thead className="bg-violet600">
                                      <tr>
                                        <th
                                          scope="col"
                                          className="px-3 py-3.5 text-left text-sm font-semibold text-white "
                                        >
                                          Term & Conditions
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                      <tr>
                                        <td className="whitespace-nowrap px-3 py-3.5 text-sm font-medium text-gray-900 ">
                                          Thanks for doing business with us!
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="overflow-x-auto ">
                            <div className="inline-block min-w-full py-2 align-middle">
                              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-300">
                                  <thead className="bg-violet600">
                                    <tr>
                                      <th
                                        scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-white "
                                      >
                                        Amounts:
                                      </th>
                                      <th
                                        scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-white "
                                      ></th>
                                    </tr>
                                  </thead>
                                  <tbody className=" bg-white">
                                    <tr className="border-b border-gray-200">
                                      <td className=" whitespace-nowrap px-3 py-3.5 text-sm font-medium text-gray-900 ">
                                        Sub Total
                                      </td>
                                      <td className=" whitespace-nowrap px-3 py-3.5 text-sm text-right font-medium text-gray-900 ">
                                      <BiRupee className="inline-block "/>30,000
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className=" whitespace-nowrap px-3 py-3.5 text-md font-semibold text-gray-900 ">
                                        Total
                                      </td>
                                      <td className=" whitespace-nowrap px-3 py-3.5 text-right text-md font-semibold text-gray-900 ">
                                    <BiRupee className="inline-block text-xl"/>30,000
                              
                                      </td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                      <td className=" whitespace-nowrap px-3 py-3.5 text-sm font-medium text-gray-900 ">
                                        Received
                                      </td>
                                      <td className=" whitespace-nowrap px-3 py-3.5 text-sm text-right font-medium text-gray-900 ">
                                      <BiRupee className="inline-block "/>30,000
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className=" whitespace-nowrap px-3 py-3.5 text-sm font-medium text-violet600">
                                        You Saved
                                      </td>
                                      <td className=" whitespace-nowrap px-3 py-3.5 text-sm text-right font-medium text-violet600 ">
                                      <BiRupee className="inline-block "/>30,000
                                      </td>
                                    </tr>
                                    <tr></tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="min-h-[200px] pt-10 sm:px-20 flex justify-end">
                    <div className="text-center">

                      <span className="block" >For : My Company</span>
                      <div className="min-h-[50px]"></div>
                      <span className="block">Authoraized Signatory</span>
                    </div>
                  </div>
                  </div>
                  <div className="static bottom-0 w-full left-0 right-0 duration-300 transition bg-white p-3 gap-2 flex justify-end">
                  <button className="bg-sky-500 text-white px-6 rounded-lg py-2 hover:bg-sky-600 duration-300 transition outline-none focus:outline-none">OPNE PDF</button>
                        <button className="bg-sky-500 text-white px-6 rounded-lg hover:bg-green-600 duration-300 py-2 outline-none  focus:outline-none">SAVE PDF</button>
                        <button className="bg-sky-500 text-white px-6 rounded-lg hover:bg-sky-600 duration-300 py-2 outline-none focus:outline-none">PRINT</button>
                        <button onClick={() => props.setOpen(false)} className="bg-sky-500 text-white px-6 rounded-lg hover:bg-red-600 duration-300 py-2 outline-none focus:outline-none">CANCEL</button>
                                      
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
