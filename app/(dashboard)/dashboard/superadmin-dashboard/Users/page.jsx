"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTable } from "react-table";
import axiosInstance, { axiosAuthInstance } from "@/services/axios";

const page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axiosAuthInstance.get("/user");
      const list = result?.data?.data;
      setData(list);
      console.log(list);
    };
    fetchData();
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "username",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Phone-number",
        accessor: "phoneNumber",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <div className="mt-5 ml-10">
      <h1 className="font-bold text-2xl mb-4">Users : </h1>
      <div className="shadow-lg border">
        <table
          className="border-2 border-orange-600 table-auto bg-white shadow-md rounded-lg overflow-hidden"
          {...getTableProps()}
        >
          <thead className=" border-2 border-slate-700 pt-2 bg-slate-600 text-white">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    className="border-slate-500 p-4"
                    {...column.getHeaderProps()}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-slate-200" {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr key={row.id} {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        className="border-2 border-slate-700 p-4"
                        {...cell.getCellProps()}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;