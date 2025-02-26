import React from "react";
import { FaCamera } from "react-icons/fa";

const AddProducts = () => {
  return (
    <div>
      <div className="flex space-x-2">
        <div className="w-1 rounded-md h-10 bg-gradient-to-tr from-[#f9f7f8] to-[#934b32]"></div>
        <h1 className="text-3xl">Add Products</h1>
      </div>

      <div className="border p-4 bg-white max-w-4xl mx-auto mt-10 h-auto ">
        <form>
          <div className="grid grid-cols-2 space-x-6 justify-between items-center">
            <div className="flex flex-col">
              <label>Product Name</label>
              <input
                type="text"
                className="border py-2 mt-1 rounded-md  border-gray-600 w-full "
              />
            </div>

            <div className="flex flex-col">
              <label>Product Category</label>
              <select className="border border-gray-600 py-2 rounded-md mt-1">
                <option>Select Product</option>
                <option>1</option>
              </select>
            </div>
          </div>
          <div className="flex mt-4 flex-col w-full">
            <label>Product Discription</label>
            <textarea rows={6} className="border mt-1 border-gray-600 " />
          </div>

          <div className="grid mt-4 grid-cols-3 space-x-6 justify-between items-center">
            <div className="flex flex-col">
              <label>Price</label>
              <input
                type="number"
                className="border py-2 mt-1 rounded-md  border-gray-600 w-full "
              />
            </div>

            <div className="flex flex-col">
              <label>Product Stock</label>
              <input
                type="number"
                className="border py-2 mt-1 rounded-md  border-gray-600 w-full "
              />
            </div>

            <div className="flex flex-col">
              <label>Product status</label>
              <div className="">
                <p>
                  <input type="radio" name="status" className="mr-2" />
                  Active
                </p>
                <p>
                  <input type="radio" name="status" className="mr-2" />
                  inactive
                </p>
              </div>
            </div>
          </div>

          <div class="rounded-md mt-8 border border-indigo-500 bg-gray-50 p-4 shadow-md w-36">
            <label
              for="upload"
              class="flex flex-col items-center gap-2 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 fill-white stroke-indigo-500"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span class="text-gray-600 font-medium">Upload file</span>
            </label>
            <input id="upload" type="file" class="hidden" />
          </div>

          <button
            type="submit"
            className=" mt-10 py-2 bg-gradient-to-tr from-[#f9f7f8] to-[#934b32] w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
