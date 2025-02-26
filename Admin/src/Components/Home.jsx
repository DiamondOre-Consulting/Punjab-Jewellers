import React from "react";
import wavyhand from "../assets/wavyhandgif.gif";
import { FaShoppingBag } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FcCancel } from "react-icons/fc";
import { ImCancelCircle } from "react-icons/im";
const Home = () => {
  return (
    <>
      <div>
        <div className="flex items-start">
          <p className="text-3xl">Welcome Admin </p>
          <img src={wavyhand} className="w-24 -mt-6" alt="" />
        </div>

        <div className="grid grid-cols-2 gap-6 mt-10">
          <div className="  border border-1 border-gray-300 rounded-md ">
            <div className="p-4 flex justify-between items-center">
              <div className="bg-gradient-to-tr from-[#f9f7f8] to-[#934b32] p-4 text-gray-50 rounded-md">
                <FaShoppingBag />
              </div>
              <div className="flex flex-col items-center">
                <p className="text-lg">Confirm Orders</p>
                <p className="text-lg">13</p>
              </div>
            </div>
            <p className="p-2 bg-gray-100 float-right w-full cursor-pointer text-sm">
              View More
            </p>
          </div>

          <div className="  border border-1 border-gray-300 rounded-md ">
            <div className="p-4 flex justify-between items-center">
              <div className="bg-gradient-to-tr from-[#f9f7f8] to-[#934b32] p-4 text-gray-50 rounded-md">
                <ImCancelCircle />
              </div>
              <div className="flex flex-col items-center">
                <p className="text-lg">Cancelled Orders</p>
                <p className="text-lg">130</p>
              </div>
            </div>
            <p className="p-2 bg-gray-100 float-right w-full cursor-pointer text-sm">
              View More
            </p>
          </div>

          <div className="  border border-1 border-gray-300 rounded-md ">
            <div className="p-4 flex justify-between items-center">
              <div className="bg-gradient-to-tr from-[#f9f7f8] to-[#934b32] p-4 text-gray-50 rounded-md">
                <FaMoneyBillAlt />
              </div>
              <div className="flex flex-col items-center">
                <p className="text-lg">Total Sales</p>
                <p className="text-lg">13,450</p>
              </div>
            </div>
            <p className="p-2 bg-gray-100 float-right w-full cursor-pointer text-sm">
              View More
            </p>
          </div>

          <div className="  border border-1 border-gray-300 rounded-md ">
            <div className="p-4 flex justify-between items-center">
              <div className="bg-gradient-to-tr from-[#f9f7f8] to-[#934b32] p-4 text-gray-50 rounded-md">
                <FaUsers />
              </div>
              <div className="flex flex-col items-center">
                <p className="text-lg">Total Users</p>
                <p className="text-lg">13</p>
              </div>
            </div>
            <p className="p-2 bg-gray-100 float-right w-full cursor-pointer text-sm">
              View More
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md  w-full border border-gray-200 mt-4">
        <div className="justify-between flex p-2 items-center">
          <div className="flex space-x-2">
            <div className="w-1 h-8  bg-gradient-to-tr from-[#f9f7f8] to-[#934b32]"></div>
            <p className="text-xl">Orders</p>
          </div>

          <div className="">
            <select className="border border-gray-700 p-1 rounded-full">
              <option>Select Option</option>
              <option>Active</option>
              <option>Cancelled</option>
              <option>Completed</option>
            </select>
          </div>
        </div>

        <table class="min-w-full divide-y divide-gray-200 overflow-x-auto">
          <thead class="bg-gray-50">
            <tr>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Phone
              </th>

              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Email
              </th>

              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Price
              </th>

              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Order Date
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10"></div>

                  <div class="text-sm font-medium text-gray-900">ZOYA</div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">+91 234567878</div>
              </td>

              <td class="px-6 py-4 whitespace-nowrap">zoyas33423</td>

              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                23
              </td>

              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                12/3/2007
              </td>

              <td className="px-6 py-4 text-sm ">
                <p className="bg-green-100 p-2 rounded-full  flex items-center justify-between">
                  <p> Active</p>
                  <div className="size-2 bg-green-400 animate-pulse rounded-full"></div>
                </p>
              </td>

              {/* <td class="px-6  flex items-center whitespace-nowrap py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                <span class="">
                  Active
                </span>
                <div className="bg-green-500 size-2 "></div>
              </td> */}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
