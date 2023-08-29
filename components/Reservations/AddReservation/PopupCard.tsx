import React from "react";

const PopupCard: React.FC = () => {
  return (
    <>
      <div className="p-3">
        <div className="rounded-full bg-slate-400 w-[18%] flex justify-center text-xs p-2 mb-4">
          It's Been a While
        </div>
        <div className="grid grid-cols-11 grid-flow-col gap-1">
          <div className="rounded-full col-span-1 h-9 w-9 border flex justify-center items-center">
            SC
          </div>
          <div className="col-span-6 flex flex-col">
            <p className="text-base font-bold">Shivani Choudhary</p>
            <p className="text-[10px] light_grey font-normal">9875647386</p>
            <p className="text-[10px] light_grey font-normal">
              shivanichoudhary@gmail.com
            </p>
          </div>
          <div className="col-span-2 flex flex-col ">
            <div className="flex gap-2">
              <p className="text-xs font-semibold">24000</p>
              <p className="text-[10px] light_grey">Net Spend</p>
            </div>
            <div className="flex gap-2">
              <p className="text-xs font-semibold">24000</p>
              <p className="text-[10px] light_grey">Avg/Visit</p>
            </div>
            <div className="flex gap-2">
              <p className="text-xs font-semibold">24000</p>
              <p className="text-[10px] light_grey">Avg/Cover</p>
            </div>
          </div>

          <div className="col-span-2 flex flex-col">
            <div className="flex gap-2">
              <p className="text-xs font-semibold">2</p>
              <p className="text-[10px] light_grey">Visits</p>
            </div>
            <div className="flex gap-2">
              <p className="text-xs font-semibold">1</p>
              <p className="text-[10px] light_grey">Cancels</p>
            </div>
            <div className="flex gap-2">
              <p className="text-xs font-semibold">0</p>
              <p className="text-[10px] light_grey">No Shows</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupCard;
