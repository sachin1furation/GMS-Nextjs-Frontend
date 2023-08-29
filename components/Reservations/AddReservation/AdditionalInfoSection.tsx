import { GMSInput, GMSSelectInput } from "@/components";
import React from "react";

const AdditionalInfoSection: React.FC = () => {
  return (
    <>
      <div className="px-3">
        <div className="pt-3">
          <GMSSelectInput />
          <GMSSelectInput />
          <div className="grid grid-cols-11 grid-flow-row gap-1">
            <div className="col-span-5">
              <GMSSelectInput />
            </div>
            <div className="col-span-5">
              <GMSSelectInput />
            </div>
            <div className="col-span-1 flex justify-center items-center">+</div>

            <div className="col-span-5">
              <GMSSelectInput />
            </div>
          </div>
        </div>
        <GMSInput label="Perks" type="text" />
      </div>
    </>
  );
};

export default AdditionalInfoSection;
