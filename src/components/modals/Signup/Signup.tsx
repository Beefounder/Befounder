import { useState } from "react";
import { close } from "../../../assets/icons";
import Login from "../Login/Login";

const Signup = (modalOption: { open: any; onClose: any }) => {
  const [openLogin, setOpenLogin] = useState(false);
  if (!modalOption.open) return null;
  // const clickHandler = () => {
  //   return (event: React.MouseEvent) => {
  //     event.preventDefault();

  //     // modalOption.onClose;
  //   };
  // };
  return (
    <div
      onClick={modalOption.onClose}
      className="fixed left-0 top-0 bottom-0 z-10 bg-black bg-opacity-25 w-full flex justify-center items-center"
    >
      <form
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="w-[51.125rem] pt-10 pb-4 text-center bg-white relative"
      >
        <div className="absolute right-0 md:left-[90%]">
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
          <h1 className="text-xl md:text-2xl text-[#090A2A] font-medium mb-4 max-sm:mr-5">
            Sign in or create an account to post offer{" "}
          </h1>
          <p className="text-[#494A50] text-sm">
            Collaborate with top talents to bring your idea to life
          </p>
          <h1 className="text-xl  md:text-2xl text-[#090A2A] font-medium mt-4 mb-7">
            Create a Befounder account{" "}
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
              value="Create Account"
            />
          </div>
          <div className="m-11 text-left">
            <p className="mt-8  text-sm">
              Have an account?{" "}
              <a
                href="/"
                onClick={() => setOpenLogin(!openLogin)}
                className="cursor-pointer text-[#1F2399]"
              >
                Log In
              </a>
            </p>
            <Login open={openLogin} onClose={() => setOpenLogin(false)} />
          </div>
        </div>
      </form>
    </div>
  );
};
export default Signup;
