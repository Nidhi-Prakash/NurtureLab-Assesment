import React from 'react';
import {IoSearch} from 'react-icons/io5';
import UltraStonk from '../assets/svg/UltraStonk.svg';
import LeftBicep from '../assets/svg/LeftBicep.svg';
import RightBicep from '../assets/svg/RightBicep.svg';
import Bunny from '../assets/svg/Bunny.svg';
import CROWN from '../assets/images/CROWN.png';
import TwitterLogo from '../assets/images/twitter.png';
import InstaLogo from '../assets/images/instagram.png';
import KingsOfStonks from '../assets/svg/KingsOfStonka.svg';
import Pepe from '../assets/svg/Pepe.svg';

const SearchFeed = () => {
  const suggestionFeed = [
    {
      name: '@PhysicsToday',
      logo: TwitterLogo,
    },
    {
      name: '@JohnsCharts',
      logo: InstaLogo,
    },
    {
      name: '@naval',
      logo: TwitterLogo,
    },
  ];

  return (
    <div>
      <div className="relative flex items-center py-[12px] px-[18px]">
        <span className="relative left-[30px] h-full py-1 pl-3 text-gray-400 text-sm">
          <IoSearch style={{height: '15px', width: '15px', color: '#71767B'}} />
        </span>
        <input
          type="text"
          className="w-full pl-10 py-2 px-3 placeholder:text-[#71767B] focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-[#202327] rounded-[9999px]"
          placeholder="Search a coin"
        />
      </div>

      <div className="border-[1px] border-[#2F3336] py-[18px] px-[11px] rounded-[16px] mt-[18px]">
        <div className="flex justify-center items-center">
          <img
            src={LeftBicep}
            alt="leftBicep"
            style={{height: '30px', width: '30px'}}
            className="relative left-[2px] bottom-[6px]"
          />
          <img src={UltraStonk} alt="ultra-stonk" />
          <img
            src={RightBicep}
            alt="rightBicep"
            style={{height: '30px', width: '30px'}}
            className="relative right-[2px] bottom-[6px]"
          />
        </div>

        <div className="flex justify-start items-center gap-[20px] mt-[10px]">
          <img src={Bunny} alt="bunny" className="h-[100px] w-[100px]" />
          <div className="flex justify-start items-start flex-col">
            <span className="text-[15px]">KITTYANN Token</span>
            <span className="text-[#FBC025] text-[15px]">$KITTYANN</span>
            <span className="flex justify-start items-start gap-[10px] text-[12px]">
              <span className="text-[#BFDBFE]">Created by</span>
              <span className="text-[#1D9BF0]">@bonk20_solana</span>
            </span>
            <span className="text-[#86EFAC] text-[12px]">
              Market cap: 46.03K (10%) 👑🦄
            </span>
            <span className="text-[#86EFAC] text-[12px]">
              Comments: 80, Holders: 200
            </span>
          </div>
        </div>
      </div>

      <div className="border-[1px] border-[#2F3336] rounded-[16px] mt-[18px] py-[30px] px-[18px] w-[350px]">
        <div>
          <div className="flex justify-start items-center">
            <img
              src={CROWN}
              alt="crown"
              className="h-[30px] w-[30px] relative bottom-[24px] left-[14px] rotate-[-20deg]"
            />
            <img src={KingsOfStonks} alt="kingsOfStonks" />
          </div>
        </div>

        <div>
          {suggestionFeed.map ((item, index) => {
            return (
              <div className="flex justify-between items-center mt-[15px]">
                <img
                  src={Pepe}
                  alt="pepe"
                  className="h-[43px] w-[43px] rounded-[9999px] "
                />
                <div className="flex justify-start items-start flex-col text-[15px]">
                  <div className="flex justify-start items-center gap-[5px]">
                    <span>{item.name}</span>
                    <img
                      src={item.logo}
                      alt="social-icons"
                      className="h-[14px] w-[14px]"
                    />
                  </div>
                  <div className="max-w-[167px] truncate text-[#71767B]">
                    Building in the SocialFi space. Coming soon to the blockchains near you!
                  </div>
                </div>

                <button className="py-[7px] px-[15px] bg-white rounded-[9999px] text-black text-[15px]">
                  Follow
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-[#71767B] mt-[18px] text-[13px] w-[350px]">
        <div className="flex justify-center items-center gap-[12px]">
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
          <span>Cookie Policy</span>
        </div>

        <div className="flex justify-center items-center gap-[12px]">
          <span>Accessbility</span>
          <span>Ads info</span>
          <span>More</span>
          <span>© 2024 X Corp</span>
        </div>
      </div>

    </div>
  );
};

export default SearchFeed;
