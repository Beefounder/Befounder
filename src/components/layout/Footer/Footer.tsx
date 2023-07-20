import React from "react";
import {
  facebookLogo,
  instagramLogo,
  twitterLogo,
} from "../../../assets/icons";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="bg-[#0E2439]">
        <div className="md:px-10 px-3 py-14 text-white">
          <div className="lg:grid lg:grid-cols-3 flex flex-col-reverse">
            <div className="lg:grid gap-y-5 flex justify-between lg:mt-0 mt-12">
              <div className="lg:text-[32px] md:text-[24px] text-[20px] flex items-center mb-1">
                <span className="bg-white text-[#090A2A] font-semibold p-2">
                  Be
                </span>
                <span className="bg-[#090A2A] text-[#FCFCFD] font-bold p-2 ">
                  Founder
                </span>
              </div>
              <p className="text-xl font-medium text-[#FCFCFD] lg:block hidden">
                We are on social media:
              </p>
              <div className="flex justify-between items-center lg:w-36 w-28">
                <span>
                  <a href="./hhhh">
                    <img src={facebookLogo} alt="Facebook" />
                  </a>
                </span>
                <span>
                  <a href="./hhhh">
                    <img src={instagramLogo} alt="Instagram" />
                  </a>
                </span>
                <span>
                  <a href="./hhh">
                    <img src={twitterLogo} alt="Twitter" />
                  </a>
                </span>
              </div>
            </div>
            <div className="flex gap-24 lg:w-full md:w-3/5 w-full lg:my-0 my-10">
              <div className="mx-2">
                <ul className="grid gap-y-4 md:text-xl text-base font-normal">
                  <li>
                    <a href="/home">Home</a>
                  </li>
                  <li>
                    <a href="/home">About us</a>
                  </li>
                  <li>
                    <a href="/home">FAQS</a>
                  </li>
                  <li>
                    <a href="/home">Meet the team</a>
                  </li>
                </ul>
              </div>
              <div className="mx-2 lg:ml-0 md:ml-12">
                <ul className="grid gap-y-4 md:text-xl text-base font-normal">
                  <li>
                    <a href="/home">Terms and Conditions</a>
                  </li>
                  <li>
                    <a href="/home">Privacy policy</a>
                  </li>
                  <li>
                    <a href="/home">Partnerships</a>
                  </li>
                  <li>
                    <a href="/home">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="flex xl:gap-x-6 xl:justify-end justify-between lg:w-full md:w-1/2 w-full md:text-base text-sm"> */}
            <div className="flex gap-2 md:text-base text-sm h-fit w-fit">
              <input
                type="text"
                placeholder="Start collaborating"
                // className="bg-white rounded-lg text-[#958E8E] w-fit h-fit  sm-[420]:w-full py-3 xl:px-3 md:px-2 px-3 outline-none"
                className="bg-white rounded-lg text-[#958E8E] h-fit w-full py-3 xl:px-3 md:px-2 px-3 outline-none"
              />
              <button className="bg-[#000211] w-full px-5 py-3 rounded-lg font-medium border-0">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
