import { GMSInput, GMSSelectInput } from "@/components";
import React from "react";

const AdditionalInfoSection: React.FC = () => {
  return (
    <>
      <div className="px-3">
        <div className="pt-3">
          <GMSSelectInput
            label="Resevation Tags"
            name="reservation_tags"
            options={[1, 2, 3]}
            value={"abc"}
          />
          <GMSSelectInput
            label="Resevation Notes"
            name="reservation_notes"
            options={[1, 2, 3]}
            value={"abc"}
          />
          <div className="grid grid-cols-11 grid-flow-row gap-1">
            <div className="col-span-5">
              <GMSSelectInput
                label="Table"
                name="table"
                options={[1, 2, 3]}
                value={"abc"}
              />
            </div>
            <div className="col-span-5">
              <GMSSelectInput
                label="Booked By"
                name="booked_by"
                options={[1, 2, 3]}
                value={"abc"}
              />
            </div>
            <div className="col-span-1 flex justify-center items-center">+</div>

            <div className="col-span-5">
              <GMSSelectInput
                label="Booked By"
                name="booked_by"
                options={[1, 2, 3]}
                value={"abc"}
              />
            </div>
          </div>
        </div>
        <GMSInput label="Perks" type="text" />
      </div>
    </>
  );
};

export default AdditionalInfoSection;
