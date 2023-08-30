import { GMSInput, GMSSelectInput } from "@/components";
import React from "react";

const AddNewSource = () => {
  const sideStats = [
    { name: "Net Spend", value: "---" },
    { name: "Visits", value: "---" },
    { name: "Avg/Visits", value: "---" },
    { name: "Cancels", value: "---" },
    { name: "Avg/Cover", value: "---" },
    { name: "No Shows", value: "---" },
  ];

  return (
    <>
      <div className="px-3 pt-3 pb-3">
        <div className="flex pb-3 border-b items-center">
          <div className="w-4/6">dasdd</div>
          <div className="w-2/6 flex gap-2">
            <button className="border text-sm rounded h-8 w-24 px-2 btn_error hover:bg-gray-100">
              Cancel
            </button>

            <button className="add_btn h-8 w-24 rounded">Add Now</button>
          </div>
        </div>

        <div className="flex mt-3 gap-2">
          <div>
            <div className=" grid grid-cols-6 gap-1">
              <div className="col-span-2">
                <GMSInput id="first_name" label="First Name" type="text" />
              </div>
              <div className="col-span-2">
                <GMSInput id="last_name" label="Last Name" type="text" />
              </div>
              <div className="col-span-2">
                <GMSSelectInput
                  name="salutation"
                  label="Salutation"
                  options={[1, 2]}
                  value={"abc"}
                />
              </div>
            </div>

            <div className=" grid grid-cols-6 gap-1">
              <div className="col-span-3">
                <GMSInput
                  id="mobile"
                  label="Mobile Number"
                  required
                  type="tel"
                />
              </div>
              <div className="col-span-3">
                <GMSInput
                  id="email"
                  required
                  label="Email Address"
                  type="email"
                />
              </div>
              <div className="col-span-3">
                <GMSInput
                  id="alt_mobile"
                  required
                  label="Alt Mobile Number"
                  type="tel"
                />
              </div>
              <div className="col-span-3">
                <GMSInput
                  id="alt_email"
                  label="Alt Email Address"
                  type="email"
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="profile_notes" className=" text-xs">
                  Profile Notes
                </label>
                <textarea
                  className="w-full border rounded-md text-xs"
                  name=""
                  id="profile_notes"
                  cols={30}
                  rows={3}
                  placeholder="Enter here..."
                ></textarea>
              </div>
            </div>
          </div>

          <div className="w-1/4  flex flex-col p-3 justify-between border-0 rounded-sm sideStats_bg">
            {sideStats.map((stat, index) => (
              <div key={index} className="">
                <p className="uppercase text-xs form_sideStats">{stat.name}</p>
                <p className="uppercase text-xs form_sideStats">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-base font-semibold py-2">Personal</p>
          <div className="py-2">
            <div className=" grid grid-cols-3 gap-1">
              <GMSInput id="street" label="Street" type="text" />
              <GMSInput id="title" label="Title (Position)" type="text" />
              <div className="flex items-center justify-center gap-5">
                <div className="flex items-center gap-4">
                  <div id="genderDiv">
                    <input
                      id="male"
                      className="peer/male"
                      type="radio"
                      name="gender"
                      checked
                    />
                    <label
                      htmlFor="male"
                      className="peer-checked/male:text-sky-500"
                    >
                      Male
                    </label>
                  </div>

                  <div>
                    <input
                      id="female"
                      className="peer/female"
                      type="radio"
                      name="gender"
                    />
                    <label
                      htmlFor="female"
                      className="peer-checked/female:text-sky-500"
                    >
                      Female
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <GMSInput type="date" id="anniversary" label="Anniversary" />
              </div>
              <div>
                <GMSInput type="date" id="birthday" label="Birthday" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-base font-semibold py-2">Address</p>
          <div className="py-2">
            <div className=" grid grid-cols-3 gap-1">
              <GMSInput id="street" label="Street" type="text" />
              <GMSInput id="address_line2" label="Address Line 2" type="text" />
              <GMSInput id="city" label="City" type="text" />
              <GMSInput id="state" label="State" type="text" />
              <GMSInput id="zip" label="Zip" type="text" />
              <GMSInput id="country" label="Country" type="text" />
            </div>
          </div>
        </div>

        <div>
          <p className="text-base font-semibold py-2">Loyalty</p>
          <div className="py-2">
            <div className=" grid grid-cols-3 gap-1">
              <GMSInput id="loyaltyTo" label="Loyalty To" type="text" />
              <GMSInput id="loyalty_tier" label="Loyalty Tier" type="text" />
              <GMSInput id="loyalty_rank" label="Loyalty Rank" type="text" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewSource;
