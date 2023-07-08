import { close } from "../../../assets/icons";
import { useState } from "react";
import Signup from "../Signup/Signup";
import ResetPassword from "../ResetPassword/ResetPassword";

const Login = (modalOption: { open: any; onClose: any }) => {
  const [openSignup, setOpenSignup] = useState(false);
  const [openResetPassword, setOpenResetPassword] = useState(false);

  if (!modalOption.open) return null;

  return (
    <div
      onClick={modalOption.onClose}
      className="fixed left-0 top-0 bottom-0 bg-black bg-opacity-25 w-full flex justify-center items-center"
    >
      <form
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="py-8 text-center bg-white"
      >
        <div className="flex gap-12 md:gap-32 lg:gap-40 mb-4 pl-3 md:pl-24 lg:pl-32 pr-7">
          <h1 className="text-xl md:text-2xl text-[#090A2A] font-medium">
            Sign in or create an account to post offer{" "}
          </h1>
          <button className="cursor-pointer p-2">
            <img
              onClick={modalOption.onClose}
              src={close}
              alt="x close icon"
              className=" max-w-md"
            />
          </button>
        </div>
        <div className="px-6 md:px-24 lg:px-32">
          <p className="text-[#494A50] text-sm">
            Collaborate with top talents to bring your idea to life
          </p>
          <h1 className="text-xl  md:text-2xl text-[#090A2A] font-medium mt-4 mb-7">
            Log into you account{" "}
          </h1>
          <div className="flex flex-col items-center gap-4 w-full">
            <input
              className="w-10/12 p-3 text-[#B3B3B3] border border-[#090A2A] rounded"
              type="text"
              placeholder="Email"
            />
            <input
              className="w-10/12 p-3 text-[#B3B3B3] border border-[#090A2A] rounded"
              type="text"
              placeholder="Password"
            />
            <input
              className="w-10/12 p-3 bg-[#000211] text-[#fff] rounded"
              type="button"
              value="Log In"
            />
          </div>
          <div className="m-11 text-left">
            <p className="mt-8 text-sm">
              New to Befounder?{" "}
              <a
                href="/"
                onClick={() => setOpenSignup(!openSignup)}
                className="cursor-pointer text-[#1F2399]"
              >
                Sign Up
              </a>
            </p>
            <Signup open={openSignup} onClose={() => setOpenSignup(false)} />

            <a
              href="/"
              onClick={() => setOpenResetPassword(!openResetPassword)}
              className="cursor-pointer text-[#1F2399] text-sm mt-2"
            >
              Forgot password?
            </a>
            <ResetPassword
              open={openResetPassword}
              onClose={() => setOpenResetPassword(false)}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
