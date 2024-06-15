import React from 'react';
import Logo from '../assets/svg/Logo.svg';
import Pepe from '../assets/svg/Pepe.svg';
import {MdHomeFilled} from 'react-icons/md';
import {PiBell} from 'react-icons/pi';
import {BsPerson} from 'react-icons/bs';
import {MdOutlineSettings} from 'react-icons/md';

const Navigation = () => {
  return (
    <div className="max-w-[220px]">
      <div>
        <img src={Logo} alt="logo" className="w-[43px] h-[39px]" />
      </div>

      <div className="mt-[26px]">
        <div className="flex justify-start items-center mb-[17px] gap-[19px] text-[20px] font-normal">
          <span>
            <MdHomeFilled style={{height: '26px', width: '26px'}} />
          </span>
          <span>Home</span>
        </div>
        <div className="flex justify-start items-center mb-[17px] gap-[19px] text-[20px] font-normal">
          <span><PiBell style={{height: '26px', width: '26px'}} /></span>
          <span>Notifications</span>
        </div>
        <div className="flex justify-start items-center mb-[17px] gap-[19px] text-[20px] font-normal">
          <span><BsPerson style={{height: '26px', width: '26px'}} /></span>
          <span>Profile</span>
        </div>
        <div className="flex justify-start items-center mb-[17px] gap-[19px] text-[20px] font-normal">
          <span>
            <MdOutlineSettings style={{height: '26px', width: '26px'}} />
          </span>
          <span>Setting</span>
        </div>
      </div>

      <div>
        <button className="w-[218px] bg-[#E8BF29] py-[15px] px-[37px] rounded-[9999px] text-outline text-[17px] tracking-[5%]">
          Create a coin
        </button>
        <div className="flex justify-start items-center mt-[15px] gap-[7px]">
          <img src={Pepe} alt="pepe" className="h-[43px] w-[43px]" />
          <div className="flex justify-start items-start flex-col text-[15px]">
            <span>Karkarot</span>
            <span className="text-[#71767B]">@KakarotBuilds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
