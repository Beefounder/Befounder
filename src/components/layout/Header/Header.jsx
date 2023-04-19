import { useState } from "react";
import { Signup } from "../../modals/Signup/Signup";
import { hamburger, logo } from "../../../assets/icons";

export const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {/* Desktop navbar */}
      <navbar className="hidden md:flex items-center md:justify-between p-6">
        <img src={logo} alt="Befounder logo" className="w-[100px]" />
        <ul className="flex gap-8">
          <li>
            <a href className="text-[#737373] text-base">
              Offers
            </a>
          </li>
          <li>
            <a href className="text-[#737373] text-base">
              About us
            </a>
          </li>
          <li>
            <a href className="text-[#737373] text-base">
              FAQs
            </a>
          </li>
        </ul>
        <div>
          <button
            onClick={() => setOpenModal(!openModal)}
            className="bg-[#090A2A] text-[#ECEBEF] text-base py-3 px-5 rounded-lg mr-2"
          >
            Sign Up
          </button>
          <Signup open={openModal} onClose={() => setOpenModal(false)} />
          <button className="bg-[#fff] text-[#22232A] text-base border border-[#000211]  py-3 px-6 rounded-lg">
            Log In
          </button>
        </div>
      </navbar>

      {/* Mobile navbar */}
      <navbar className="md:hidden">
        <div className="flex justify-between py-6 px-4">
          <div>
            <img src={logo} alt="Befounder logo" />
          </div>
          <div>
            <img
              onClick={() => setIsMobile(!isMobile)}
              src={hamburger}
              alt="hamburger icon"
            />
          </div>
        </div>
        <div className={isMobile ? "block" : "hidden"}>
          <div className="flex flex-col gap-8 px-8 absolute w-full py-7 bg-white border border-[#090A2A]">
            <div>
              <button
                onClick={() => setOpenModal(!openModal)}
                className="bg-[#090A2A] text-[#ECEBEF] text-base py-3 w-full rounded-lg mr-2 block mb-3"
              >
                Sign Up
              </button>
              <Signup open={openModal} onClose={() => setOpenModal(false)} />
              <button className="bg-[#fff] text-[#22232A] text-base border border-[#000211] w-full  py-3 rounded-lg">
                Log In
              </button>
            </div>
            <ul className="flex flex-col gap-6">
              <li>
                <a href className="text-[#010101] text-base">
                  Offers
                </a>
              </li>
              <li>
                <a href className="text-[#010101] text-base">
                  About us
                </a>
              </li>
              <li>
                <a href className="text-[#010101] text-base">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </navbar>
    </>
  );
};
