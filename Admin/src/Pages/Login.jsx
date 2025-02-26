import React, { useRef, useState } from "react";
import { MdEmail } from "react-icons/md";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [popupform, setPopUpForm] = useState(false);
  const [forgotpasswordpopup, setForgotPasswordPopUp] = useState(false);
  

  const inputRefs = useRef([]);

  const handleChange = (index, e) => {
    if (e.target.value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && index > 0 && e.target.value === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <>
      <div class="h-screen flex w-full items-center justify-center">
        <div class="h-screen bg-gray-100 flex justify-center items-center w-full">
          <form>
            <div class="bg-white px-10 py-8 rounded-xl w-screen shadow-xl max-w-lg">
              <div class="space-y-4">
                <h1 class="text-center text-2xl font-semibold text-gray-700">
                  Admin Login
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

              <p
                type="submit"
                onClick={() => setPopUpForm(true)}
                class="mt-4 mb-4 text-center w-full shadow-md  cursor-pointer bg-gradient-to-tr from-[#f9f7f8] to-[#934b32]  py-2 rounded-md text-md tracking-wide transition duration-1000 "
              >
                Varify Email
              </p>

              <p
                onClick={() => setForgotPasswordPopUp(true)}
                className="float-right hover:underline cursor-pointer text-xs"
              >
                Forgot Password?
              </p>
            </div>
          </form>
        </div>

        {popupform && (
          <>
            <div class="absolute items-center  z-40 w-full flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
              <div class="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
                <div class="mx-auto flex w-full max-w-md flex-col space-y-16">
                  <div class="flex flex-col items-center justify-center text-center space-y-2">
                    <div class="font-semibold text-3xl">
                      <p>Email Verification</p>
                    </div>
                    <div class="flex flex-row text-sm font-medium text-gray-400">
                      <p>
                        We have sent a code to your email zoyas3423@gmail.com
                      </p>
                    </div>
                  </div>

                  <div>
                    <form >
                      <div class="flex flex-col space-y-16">
                        <div class="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                          {Array(4)
                            .fill("")
                            .map((_, index) => (
                              <div key={index} className="w-16 h-16">
                                <input
                                  ref={(el) => (inputRefs.current[index] = el)}
                                  className="otp-input w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                  type="text"
                                  maxLength="1"
                                  onChange={(e) => handleChange(index, e)}
                                  onKeyDown={(e) => handleKeyDown(index, e)}
                                />
                              </div>
                            ))}
                        </div>

                        <div class="flex flex-col space-y-5">
                          <div>
                            <button class="flex flex-row cursor-pointer items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-gradient-to-tr from-[#f9f7f8] to-[#934b32] border-none text-white text-sm shadow-sm">
                              Verify Account
                            </button>
                          </div>

                          <div class="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                            <p>Didn't recieve code?</p>{" "}
                            <a
                              class="flex flex-row items-center text-blue-600"
                             
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Resend
                            </a>
                          </div>

                          <div>
                            <p
                              className="text-blue-900 text-sm cursor-pointer "
                              onClick={() => setPopUpForm(false)}
                            >
                              Back to Login
                            </p>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {forgotpasswordpopup && (
          <main
            id="content"
            role="main"
            class="w-full z-40  absolute  max-w-xl mx-auto p-6"
          >
            <div class="mt-7 bg-white  rounded-xl shadow-lg">
              <div class="p-4 sm:p-7">
                <div class="text-center">
                  <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">
                    Forgot password?
                  </h1>
                  <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Remember your password?
                    <p
                      onClick={() => setForgotPasswordPopUp(false)}
                      class="text-blue-600 cursor-pointer decoration-2 hover:underline font-medium"
                    >
                      Login here
                    </p>
                  </p>
                </div>

                <div class="mt-5">
                  <form>
                    <div class="grid gap-y-4">
                      <div>
                        <label
                          for="email"
                          class="block text-sm font-bold ml-1 mb-2 dark:text-white"
                        >
                          Email address
                        </label>
                        <div class="relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                            required
                            aria-describedby="email-error"
                          />
                        </div>
                        <p
                          class="hidden text-xs text-red-600 mt-2"
                          id="email-error"
                        >
                          Please include a valid email address so we can get
                          back to you
                        </p>
                      </div>
                      <button
                        type="submit"
                        class="py-3 px-4 cursor-pointer inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gradient-to-tr from-[#f9f7f8] to-[#934b32] text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                      >
                        Reset password
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>
        )}
      </div>
    </>
  );
};

export default Login;
