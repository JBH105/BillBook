import React from "react";

export default function Index({ row, data }) {
  return (
    <div>
      <table className="min-w-full ">
        <thead className="bg-white">
          <tr>
            {row &&
              row.map((item, index) => {
                return (
                  <th
                    scope="col"
                    className="px-3 py-[9px]  text-left text-[15px] font-semibold text-violet600"
                    key={index}
                  >
                    {item}
                  </th>
                );
              })}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item) => {
              return (
                <tr key={item.id}>
                  {Object.keys(row).map((header, index) => {
                    <td className="whitespace-nowrap py-3 px-3 cursor-pointer text-sm ">
                      <div className="flex space-x-[7px]">{item[header]}</div>
                    </td>;
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
