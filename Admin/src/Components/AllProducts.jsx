import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

const AllProducts = () => {
  return (
    <div>
      <div className="flex space-x-2">
        <div className="w-1 rounded-md h-10 bg-gradient-to-tr from-[#f9f7f8] to-[#934b32]"></div>
        <h1 className="text-3xl">All Products</h1>
      </div>

      <div class=" mt-10  py-8">
    <div class="max-w-4xl  border border-gray-400   mx-auto ">
        <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
                <div class=" flex flex-col space-y-2 rounded-lg  dark:bg-gray-700 mb-4">
                    <img class="w-full h-84 object-cover " src="https://peorajewellery.com/cdn/shop/files/Clip_path_group_360x.png?v=1730208683" alt="Product Image"/>
                    <div className="flex justify-between">
                    <img class="h-20 object-cover" src="https://peorajewellery.com/cdn/shop/files/Clip_path_group_360x.png?v=1730208683" alt="Product Image"/>
                    <img class="h-20 object-cover" src="https://peorajewellery.com/cdn/shop/files/Clip_path_group_360x.png?v=1730208683" alt="Product Image"/>
                    <img class="h-20 object-cover" src="https://peorajewellery.com/cdn/shop/files/Clip_path_group_360x.png?v=1730208683" alt="Product Image"/>
                    </div>
                </div>
             
            </div>
            <div class="md:flex-1 px-4 py-6">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">Product Name</h2>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                    ante justo. Integer euismod libero id mauris malesuada tincidunt.
                </p>
                <div class="flex mb-4">
                    <div class="mr-4">
                        <span class="text-gray-600 text-3xl flex items-center space-x-1 dark:text-gray-300"><span className="text-2xl">₹</span>1920</span>
                    </div>
                </div>
               
             
                <div>
                  <ul style={{listStyleType :"disc"}} className="space-y-4 mt-4">
                    <li>category : A</li>
                    <li>Sold : 12</li>
                    <li>Shipping cost : 20</li>
                    <li>Stock : 230</li>
                  </ul>
                </div>

                <div className="flex space-x-3  px-2 mt-10 text-white text-center">
                  <p className="bg-green-800 rounded-md flex justify-center items-center  py-2 w-full"> <FaRegEdit /> Edit</p>
                  <p className="bg-red-700 py-2 w-full rounded-md flex justify-center items-center"> <RiDeleteBin6Fill /> Delete</p>

                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  );
};

export default AllProducts;
