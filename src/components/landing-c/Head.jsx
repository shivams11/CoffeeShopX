import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import Button from "./Button";
import Wood from "../../assets/Logo.png"
import Logout from "../main/logout";
import { CiUser } from "react-icons/ci";
import { useState,useEffect } from "react";
import {usePopup} from "../../config/popup"
import {useUser} from "../../config/user"
import {Link} from 'react-router-dom'

function Heading() {
  return (
    <div className="flex flex-col md:gap-10 ss:gap-7 max-ss:gap-3">
      <h1 className="cd:text-7xl sm:text-6xl text-5xl font-bold text-white">LIFE IS BETTER</h1>
      <h2 className="cd:text-5xl sm:text-4xl text-3xl font-medium text-white">WITH COFFEE</h2>
      <Button text="Order Now" link="store" />
    </div>
  );
}
function Tab({ btns }) {
  return (
    <>
      {btns.map((data, index) => {
        return (
          <Link to={data[1]}>
          <span className="mx-4" key={index}>
            {data[0]}
          </span>
          </Link>
        );
      })}
    </>
  );
}

function Tabsearch() {
  // Check if user is logged in
  let {isLoggedIn}=useUser();
  let [popup,setPopup]=useState(false);
  let {handelPopcart,handellogin,handelsignup,num}=usePopup();
  return (
    <>
    <div className="bg-white border mt-5 h-12 rounded-3xl gap-2 flex items-center justify-center text-xl px-5">
      <a onClick={handelPopcart} className="flex items-center">
        <IoBagOutline />
        {num > 0 ? (<span className="relative text-base rounded-full w-6 right-3 text-center bg-white text-black bottom-2 border">{num}
            </span>):null}
      </a>
      <button
        onClick={() => {
          setPopup(!popup);
        }}
      >
        <CiUser />
      </button>
    </div>
    <div>

        {popup ?!isLoggedIn? (
            <div className="absolute top-20 right-[37%] w-36 h-32 bg-white rounded-3xl flex flex-col gap-2  max-cd:right-[26%] max-xs:right-[5%]">
              <button onClick={() => {handellogin();setPopup((n) => !n);}} className="mt-4 text-xl font-semibold text-gray-600">Login</button>
              <button onClick={() => {handelsignup();setPopup((n) => !n);}}className="mt-4 text-xl font-semibold text-gray-600">Signup</button>
            </div>
          ):<Logout bg="bg-white" text="text-gray-600" home={true} quit={setPopup}/>: null}
    </div>
    </>
  );
}

function Info() {
  
  return (
    <>
    <div
      className={`w-[100%] rounded-3xl bg-[#000000] sm:h-48 border overflow-hidden md:px-28 xs:px-6 py-5 flex max-sm:flex-col gap-2 max-sm:items-center bg-[linear-gradient(315deg,_#000000_0%,_#414141_74%)] `}
      id="aboutus"
      >
      {/* <img src={Bg} alt="" className="w-full h-full  object-cover -z-10" /> */}
      <div className="flex sm:w-[20%] ">
        <img src={Wood} alt="" />
      </div>
      <div className="flex items-center  text-white w-[80%] max-sm:text-sm">
        At Damiun Coffee Shop, we take immense pride in crafting each cup of
        coffee with passion and precision. Our skilled baristas curate a diverse
        selection of specialty coffees sourced from the finest beans across the
        globe, ensuring every sip transports you to a world of unparalleled
        taste and bliss.
      </div>
    </div>
      </>
  );
}

export { Tab, Tabsearch, Heading, Info };
