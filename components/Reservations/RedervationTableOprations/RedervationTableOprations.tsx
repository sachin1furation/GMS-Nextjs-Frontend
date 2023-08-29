'use client'
import { GMSButton, GMSDatePicker, GMSDropDown, GMSSearchInput, GMSSelectInput } from '@/components'
import { downloadIcon, editIcon, listIcon, pritnerIcon, slashIcon } from '@/public/assests'
import { exportToExcel } from '@/utils/ExportTable/ExportTable'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import ReservationCoverFlow from '../ReservationCoverFlow/ReservationCoverFlow'
interface Data {
    covers: number;
    name: string;
    table: number;
    notes: string;
    phone: string;
    email: string;
    booked_by: string;
    created_date: string;
    status: string;
    spend: number;
    time: string;
}
const RedervationTableOprations = () => {
    const [searchInput, SetSearchInput] = useState<string>("")

    const selectionOption = ['All', 'Today']

    const ShiftTimeing = ['Dinner', 'Prive']

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };



    const data: Data[] = [
        {
            time: "7:00",
            covers: 4,
            name: "John Doe",
            table: 10,
            notes: "Special occasion",
            phone: "123-456-7890",
            email: "john@example.com",
            booked_by: "Jane Smith",
            created_date: "2023-08-25",
            status: "Confirmed",
            spend: 100,
        },
        {
            time: "7:30",
            covers: 2,
            name: "Alice Johnson",
            table: 11,
            notes: "",
            phone: "987-654-3210",
            email: "alice@example.com",
            booked_by: "Bob Brown",
            created_date: "2023-08-25",
            status: "Pending",
            spend: 0,
        },
        {
            time: "8:30",
            covers: 2,
            name: "Alice Johnson",
            table: 11,
            notes: "",
            phone: "987-654-3210",
            email: "alice@example.com",
            booked_by: "Bob Brown",
            created_date: "2023-08-25",
            status: "Pending",
            spend: 0,
        },
        {
            time: "8:30",
            covers: 5,
            name: "Boris Johnson",
            table: 11,
            notes: "",
            phone: "987-654-3210",
            email: "alice@example.com",
            booked_by: "Bob Brown",
            created_date: "2023-08-25",
            status: "Pending",
            spend: 0,
        },
    ];
    const handleExport = async () => {
        try {
            await exportToExcel(data, 'dummy_table.xlsx');
            console.log("yes")
        } catch (error) {
            console.error('Error exporting to Excel:', error);
        }
    };


    const handelSearchInput = (e) => {
        e.preventDefault()
        SetSearchInput(e.target.value)
    }
    console.log("search", searchInput)



    return (
        <div>
            <div className=' flex p-3 justify-between  bg-gray-100   '>

                <div className='flex gap-3'>
                    <div> <GMSDatePicker /></div>
                    <div>
                        <select
                            id="name"
                            name="name"
                            className=" min-w-[60px] border-2 border-gray  flex gap-2 text-[14px] text-gray-700 bg-white font-medium text-lg leading-[19.36px] px-5        h-[40px] rounded-md  hover:shadow-lg  font-inter"
                            value="All"
                        >
                            {ShiftTimeing.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="border-2 border-gray flex gap-2 text-[14px] text-gray-700 bg-white font-medium text-lg leading-[19.36px] px-5   min-w-[15px]    h-[40px] rounded-md  hover:shadow-lg  font-inter">

                        <Image src={listIcon} width={18} height={18} alt="" />

                        <button onClick={openModal}>Cover Flow</button>




                        <div>

                            <ReservationCoverFlow isOpen={isModalOpen} onClose={closeModal} />
                        </div>

                    </div>
                </div>

                <div className='flex gap-3'>
                    <div> <GMSButton content="Add Reservation" /></div>
                    <div> <GMSDropDown /></div>
                </div>

            </div>



            <div className='border-b justify-between flex bg-white border-gray-200  w-full min-h-[40px]   '>
                <div className='  flex border-r border-gray-200'>
                    <div> <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <FaSearch className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="pl-10 w-full px-4 py-2   focus:outline-none focus:border-indigo-500"
                            placeholder="Search...."
                            value={searchInput}
                            onChange={handelSearchInput}
                        />
                    </div>
                    </div>
                    <div  >
                        <select
                            id="name"
                            name="name"
                            className=" min-w-[60px] mt-1  py-2 text-blue-500     "
                            value="All"
                        >
                            {selectionOption.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>

                    </div>
                </div>



                <div className='flex justify-center      '>
                    <div onClick={handleExport} className='p-3 '  >
                        <Image src={downloadIcon} width={20} height={20} alt="" />
                    </div>
                    <div className='p-3 border-x border-gray-300'>
                        <Image src={slashIcon} width={20} height={20} alt="" />
                    </div>
                    <div className='p-3 border-r border-gray-300'>
                        <Image src={editIcon} width={20} height={20} alt="" />
                    </div>
                    <div className='p-3'>
                        <Image src={pritnerIcon} width={20} height={20} alt="" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default RedervationTableOprations
