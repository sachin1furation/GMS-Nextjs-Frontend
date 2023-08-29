// components/Modal.tsx
import { GMSButton, GMSDatePicker } from '@/components';
import React, { useState } from 'react';
import { AiOutlinePrinter } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ReservationCoverFlow: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className='  border-2  shadow-lg  rounded-md bg-white py-3   w-[70%] h-[420px] m-auto'>


                <div className='flex flex-row-reverse pr-4 '>
                    <p className='cursor-pointer' onClick={onClose} ><RxCross2 /></p>
                </div>


                <div className='flex justify-between p-4   items-center '>
                    <div className='flex gap-3'>
                        <div><GMSDatePicker /> </div>
                        <div>
                            <div className='flex'>
                                <button
                                    className="  rounded-l-md  bg-gradient-to-r from-purple-600 to-indigo-700 text-white font-medium text-md leading-[19.36px] px-5   min-w-[15px]    min-h-[38px]  shadow-md hover:shadow-lg  font-inter"

                                >DINNER</button>
                                <button
                                    className=" rounded-r-md     text-gray-400 font-medium text-md leading-[19.36px] px-5   min-w-[15px]    min-h-[38px]   shadow-md hover:shadow-lg  font-inter"
                                >
                                    PRIVE
                                </button>

                            </div>
                        </div>
                    </div>


                    <div>
                        <div  >
                            <p className='text-[20px] cursor-pointer'>
                                <AiOutlinePrinter />

                            </p>
                        </div>
                    </div>
                </div>




                {/* .................... */}

                <div className='border-2 border-black h-[250px]'></div>


                {/* .................. */}



                <div className='flex gap-5 font-Lato p-5'>
                    <div>
                        <p  className='font-semibold  '>Total Booked</p>
                    </div>
                    <div className='flex gap-2  '>
                        <span className='font-semibold text-md'>130</span> <p className='text-sm'>Cover</p>
                    </div>
                    <div className='flex gap-2'>
                        <span className='font-semibold text-md'>10</span> <p className='text-sm'>Upcoming</p>
                    </div>
                    <div className='flex gap-2'>
                        <span className='font-semibold text-md'>13</span> <p className='text-sm'>Seated</p>
                    </div>
                    <div className='flex gap-2'>
                        <span className='font-semibold text-md'>60</span> <p className='text-sm'> Completed</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ReservationCoverFlow;



{/* <button
className="mt-4 p-2 bg-blue-500 text-white rounded"
onClick={onClose}
>
Close
</button> */}