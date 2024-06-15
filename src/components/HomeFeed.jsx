import React, {useState} from 'react';
import {IoMdArrowBack} from 'react-icons/io';
import {IoIosInformationCircleOutline} from 'react-icons/io';
import CoinsHeld from './CoinsHeld';

const HomeFeed = () => {
  const [activeTab, setActiveTab] = useState (0);

  return (
    <div>
      <IoMdArrowBack style={{height: '20px', width: '20px'}} />

      <div className="mt-[35px]">
        <div className="w-[134px] h-[134px] bg-white rounded-[50%]" />
      </div>

      <div className="flex justify-between items-center gap-[175px] mt-[20px]">
        <div className="flex justify-start items-start gap-[20px] flex-col">
          <div className="flex justify-start items-start flex-col">
            <span className="text-[20px]">@KarkarotBuilds</span>
            <span className="text-[#BFDBFE] text-[15px]">0x234243242323</span>
          </div>
          <div className="text-[15px] text-[#E7E9EA] max-w-[287px]">
            Building in the SocialFi space. Coming soon to the blockchains near you!
          </div>
        </div>

        <div className="flex justify-center items-center flex-col gap-[10px]">
          <span className="text-[#E8BF29] text-[16px] font-extrabold underline flex justify-start items-center gap-[5px]">
            30.23
            <IoIosInformationCircleOutline />
          </span>
          <button className="py-[7px] px-[15px] bg-white rounded-[9999px] text-black text-[15px]">
            Follow
          </button>
        </div>
      </div>

      <div className="mt-[15px] text-[#71767B] text-[15px]">
        Joined May 2024
      </div>

      <div className="flex justify-start items-center gap-[20px] text-[#71767B] mt-[20px]">
        <span className="flex justify-center items-center gap-[5px]">
          <span className="text-white">2</span>
          <span>Following</span>
        </span>
        <span className="flex justify-center items-center gap-[5px]">
          <span className="text-white">0</span>
          <span>Followers</span>
        </span>
        <span className="flex justify-center items-center gap-[5px]">
          <span className="text-white">0</span>
          <span>Likes</span>
        </span>
        <span className="flex justify-center items-center gap-[5px]">
          <span className="text-white">0</span>
          <span>Mentions</span>
        </span>
      </div>

      <div className="flex justify-start items-center gap-[10px] mt-[10px]">
        <span className="text-[#71767B]">
          Rewards Earned:
        </span>
        <span>
          1.12 ETH
        </span>
      </div>

      <div className="w-[600px] flex justify-between items-center gap-[94px] text-[#E7E9EA] mt-[25px]">
        <span
          className={`cursor-pointer pb-[20px] text-[15px] ${activeTab === 0 ? 'text-[#E7E9EA] border-b-[4px] border-[#1D9BF0]' : 'text-[#71767B]'}`}
          onClick={() => setActiveTab (0)}
        >
          Coins held
        </span>
        <span
          className={`cursor-pointer pb-[20px] text-[15px] ${activeTab === 1 ? 'text-[#E7E9EA] border-b-[4px] border-[#1D9BF0]' : 'text-[#71767B]'}`}
          onClick={() => setActiveTab (1)}
        >
          Replies
        </span>
        <span
          className={`cursor-pointer pb-[20px] text-[15px] ${activeTab === 2 ? 'text-[#E7E9EA] border-b-[4px] border-[#1D9BF0]' : 'text-[#71767B]'}`}
          onClick={() => setActiveTab (2)}
        >
          Created Created
        </span>
        <span
          className={`cursor-pointer pb-[20px] text-[15px] ${activeTab === 3 ? 'text-[#E7E9EA] border-b-[4px] border-[#1D9BF0]' : 'text-[#71767B]'}`}
          onClick={() => setActiveTab (3)}
        >
          Allocated
        </span>
      </div>

      <div className="border-t-[1px] border-[#2F3336] py-[20px] mt-[1px] ">
        {activeTab === 0
          ? <div>
              {Array (3).fill ('*').map ((item, index) => {
                return <CoinsHeld key={index} />;
              })}
            </div>
          : null}
      </div>

    </div>
  );
};

export default HomeFeed;
