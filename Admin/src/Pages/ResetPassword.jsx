import React from "react";

const ResetPassword = () => {
  return (
    <div>
      <div class="h-screen flex w-full items-center justify-center">
        <div class="h-screen bg-gray-100 flex justify-center items-center w-full">
          <form method="POST" action="#">
            <div class="bg-white px-10 py-8 rounded-xl w-screen shadow-xl max-w-lg">
              <div class="space-y-4">
                <h1 class="text-center text-2xl font-semibold text-gray-700">
                 Reset Password
                </h1>
                <hr />
                <div class="flex items-center border-1 py-3 px-3 rounded-md mb-4">
                  <MdEmail className="w-5 h-5 text-gray-400" />
                  <input
                    class="pl-2 outline-none border-none w-full bg-transparent"
                    type="text"
                    name="email"
                    placeholder="Enter Your Email Id"
                    required
                  />
                </div>
                <div class="flex items-center border-1 py-3 px-3 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <input
                    class="pl-2 outline-none border-none w-full "
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Enter Your Password"
                    required
                  />
                </div>
              </div>

              <div class="flex justify-start items-center mt-4">
                <p class="inline-flex items-center text-gray-700 font-medium text-xs text-center">
                  <input
                    type="checkbox"
                    id="showPassword"
                    name="showPassword"
                    onChange={() => setShowPassword(true)}
                    class="mr-2"
                  />
                  <span class="text-xs font-semibold">Show Password</span>
                </p>
              </div>

              <button
                type="submit"
                value="login"
                onClick={() => setPopUpForm(true)}
                id="login"
                class="mt-4 mb-4 w-full shadow-md  cursor-pointer bg-gradient-to-tr from-[#f9f7f8] to-[#934b32]  py-2 rounded-md text-md tracking-wide transition duration-1000 "
              >
                Varify Email
              </button>

              <p
                onClick={() => setForgotPasswordPopUp(true)}
                className="float-right hover:underline cursor-pointer text-xs"
              >
                Forgot Password?
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
