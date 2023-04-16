import { useState } from "react";
import { hamburger, logo } from "../../../assets/icons";

export const Header = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      {/* Desktop navbar */}
      <navbar className="hidden md:flex items-center md:justify-between p-6">
        <img src={logo} alt="Befounder logo" className="w-[100px]" />
        <ul className="flex gap-8">
          <li>
            <a href className="text-[#737373]">
              Offers
            </a>
          </li>
          <li>
            <a href className="text-[#737373]">
              About us
            </a>
          </li>
          <li>
            <a href className="text-[#737373]">
              FAQs
            </a>
          </li>
        </ul>
        <div>
          <button className="bg-[#090A2A] text-[#ECEBEF] py-3 px-5 rounded-lg mr-2">
            Sign Up
          </button>
          <button className="bg-[#fff] text-[#22232A] border border-[#000211]  py-3 px-6 rounded-lg">
            Log In
          </button>
        </div>
      </navbar>

      {/* Mobile navbar */}
      <navbar className="">
        <div className="md:hidden flex justify-between py-6 px-4">
          <div>
            <img src={logo} alt="Befounder logo" />
          </div>
          <div>
            <img src={hamburger} alt="hamburger icon" />
          </div>
        </div>
        <ul></ul>
      </navbar>
    </>
  );
};
