import { useEffect, useRef, useState } from "react";
import {
  arrowLeft,
  arrowRight,
  offer,
  people,
  plus,
  postedOffer,
  search,
} from "../../assets/icons";
import gsap from "gsap";
import { profile } from "../../assets/images";
const Homepage: React.FC = () => {
  const filterData: string[] = [
    "All Fields",
    "Designers",
    "Software Developers",
    "Product Mangers",
    "QA Testers",
    "Community Managers",
    "Social Media Managers",
    "Data Specialists",
    "Overflow",
    "Dummy",
    "Dummy",
    "Dummy",
    "Dummy",
    "Dummy",
  ];
  let scrl :any = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);
  const [jobsUpdate, setJobsUpdate] = useState(filterData)
  const [Role, setRole] = useState("All Fields")
  const [show, setShow] = useState(6)
  const slide = (shift: number) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };
  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };
  const anim = (e:any) => {
    gsap.from(e.target, { scale: 1 });
    gsap.to(e.target, { scale: 1.5 });
  };
  const anim2 = (e:any) => {
    gsap.from(e.target, { scale: 1.5 });
    gsap.to(e.target, { scale: 1 });
  };
  const filterByRole = (role : string) => {
    setRole(role)
    if (role === "All Fields") {
      setJobsUpdate(filterData)
    } else {
      setJobsUpdate(filterData.filter((data) => data == role))
    }
  }
  return (
    <div className="my-1.5 w-full">
      <div className="w-1/2 flex justify-center items-center py-3 rounded mx-auto">
        <input
          type="text"
          placeholder="Search for an offer"
          className="w-full bg-[#F7F7FD] border-s border-y border-[#D9D9D9] text-sm p-2.5 rounded-s-lg text-black outline-none placeholder:text-black"
        />
        <button className="p-[11px] bg-[#090A2A] rounded-r-lg">
          <img src={search} alt="search" />
        </button>
      </div>
      <div className="my-5 mx-10">
        <h2 className="text-3xl font-semibold">Offers</h2>
        <p className="text-xl font-medium">
          Work with top collaborators on Befounders to help you build your
          project
        </p>
      </div>
      <div className="mt-3">
        <div className="mx-10 flex justify-between">
          <div className="flex items-center space-x-5 divide-x-2 my-3">
            <span className="flex cursor-pointer">
              <img src={offer} alt="offer" />
              <p className="font-bold text-lg">All offers</p>
            </span>
            <span className="flex pl-4 cursor-pointer">
              <img src={postedOffer} alt="posted-offer" />
              <p className="font-medium text-md ml-1 text-[#8E8E8E]">
                Offers i have posted
              </p>
            </span>
            <span className="flex pl-3 cursor-pointer">
              <img src={postedOffer} alt="posted-offer" />
              <p className="font-medium text-md ml-1 text-[#8E8E8E]">
                Applied offers
              </p>
            </span>
          </div>
          <button className="bg-[#090A2A] flex rounded-lg py-4 px-3 items-center">
            <img src={plus} alt="plus" />
            <span className="text-white ml-2">Create an Offer</span>
          </button>
        </div>
        <hr className="my-2 w-full border-1 border-[#878787] text-black" />
        <div className="flex mx-10 my-1">
          {scrollX !== 0 && (
            <button
              className="cursor-pointer my-2"
              onClick={() => slide(-50)}
              onMouseEnter={(e) => anim(e)}
              onMouseLeave={(e) => anim2(e)}
            >
              <img src={arrowLeft} alt="arrow-left" />
            </button>
          )}
          <ul
            className="flex gap-4 w-full overflow-hidden justify-start items-center"
            ref={scrl}
            onScroll={scrollCheck}
          >
            {filterData.map((data, index) => (
              <li
                key={index}
                className={`${Role == data ? "text-[#090A2A] font-bold" : "text-black"} whitespace-nowrap cursor-pointer translate-x-4`}
                onClick={() => filterByRole(data)}
              >
                {data}
              </li>
            ))}
          </ul>
          {!scrolEnd && (
            <button
              className="cursor-pointer my-2"
              onClick={() => slide(+50)}
              onMouseEnter={(e) => anim(e)}
              onMouseLeave={(e) => anim2(e)}
            >
              <img src={arrowRight} alt="arrow-right" />
            </button>
          )}
        </div>
        <hr className="mt-2 w-full border-1 border-[#878787] text-black" />
      </div>
      <section className="w-full bg-[#F8F8F8] px-10">
        <div className="w-full flex flex-wrap gap-6 py-16">
          {jobsUpdate
         // .filter((data, index) => index < show)
          .map((data, index) => (
            index < show &&
            <div
              className="bg-white w-[400px] rounded-3xl py-5 px-4 space-y-3"
              key={index}
            >
              <div className="flex justify-between text-[#8E8E8E] items-center text-center">
                <div className="flex space-x-2 items-center">
                  <img
                    src={profile}
                    alt="profile"
                    className="rounded-full h-9 w-9"
                  />
                  <p>Sam Kulhan</p>.<p>1 hour ago</p>
                </div>
                <span className="flex space-x-1">
                  <img src={people} alt="people" />
                  <p>2</p>
                </span>
              </div>
              <p className="text-2xl">
                Looking for a Product Designer and a Frontend Dev willing to
                build an educational platform......
              </p>
              <span className="flex flex-wrap space-x-1">
              <p className="font-semibold">Role needed: </p>
                {filterData
               // .filter((data) => filterData.length = 3)
                .map((data) => (
                  <p className="font-normal" key={index}>{data},</p>
                ))}
              </span>
              <span className="flex flex-wrap space-x-1">
                <p className="font-semibold">Required time: </p>
                <p className="font-normal">7 hours daily</p>
              </span>
              <span className="flex flex-wrap space-x-1">
                <p className="font-semibold"> Project Timeline: </p>
                <p className="font-normal">2 weeks</p>
              </span>
            </div>
          ))}
        </div>
        {show < jobsUpdate.length && <p className=" mx-auto w-28 text-center cursor-pointer font-medium border-2 border-black text-[#1B1A1A] py-3 px-2.5" onClick={()=>setShow(show + 6)}>Load more</p>}
      </section>
    </div>
  );
};
export default Homepage;
