import React from 'react';
import Bunny from '../assets/svg/Bunny.svg';

const CoinsHeld = () => {
  return (
    <div className="border-[1px] border-[#2F3336] rounded-[17px] py-[10px] px-[10px] mb-[10px]">
      <div className="flex justify-start items-center gap-[10px]">
        <img src={Bunny} alt="bunny" className="h-[63px] w-[63px]" />
        <div className="flex justify-start items-start gap-[2px] flex-col text-[15px]">
          <span>KITTYANN Token</span>
          <span className="text-[#FBC025]">100 $KITTYANN (0.1 ETH)</span>
          <span className="text-[#71767B]">Rewards: 0.1 ETH</span>
        </div>
      </div>
    </div>
  );
};

export default CoinsHeld;
