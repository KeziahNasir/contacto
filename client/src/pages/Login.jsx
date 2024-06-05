import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(true);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  function handleShowPassword() {
    setShowPassword((prev) => !prev);
  }

  function handlePasswordFocus() {
    setIsPasswordFocused(true);
  }

  function handlePasswordBlur() {
    setIsPasswordFocused(false);
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-sky-500">
      <div className="w-1/3 flex flex-col gap-8 p-8 bg-white rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Email Address"
          className="border-2 px-10 py-4 rounded-full shadow-md"
        />
        <div className={`flex items-center border-2 rounded-full shadow-md px-10 py-4 ${isPasswordFocused ? "border-black" : ""}`}>
          <input
            type={showPassword ? "password" : "text"}
            placeholder="Password"
            className="flex-1 outline-none"
            onFocus={handlePasswordFocus}
            onBlur={handlePasswordBlur}
          />
          <div onClick={handleShowPassword} className="cursor-pointer ml-4">
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>
      </div>
  <button
      type="submit"
      className="bg-red-500 text-white rounded-full py-3 px-6 font-semibold  focus:outline-none focus:ring-2 "
  Login>
  </button>
    </div>

  );
}

export default Login;
