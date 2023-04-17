import React from "react";
import { close } from "../../../assets/icons";

export const Signup = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed left-0 top-0 bottom-0 bg-transparent w-full flex justify-center items-center">
      <form
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="pt-8 text-center"
      >
        <div className="flex gap-40 mb-4">
          <h1 className="text-xl md:text-2xl text-[#090A2A] font-medium">
            Sign in or create an account to post offer
          </h1>
          <img onClick={onClose} src={close} alt="x close icon" />
        </div>{" "}
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
      </form>
    </div>
  );
};
