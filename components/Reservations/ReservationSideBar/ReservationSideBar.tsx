import React from 'react'

const ReservationSideBar = () => {

    const GruopByArra = ['Default', 'Time', 'Seating Area', 'VIP / Other', 'Reservation Tags', 'Reservation Status']
    const AvailabilityArray = ['Shifts', 'Access rules', 'Daily Program', 'Blackout Dates' ]

    return (
        <div style={{ width: "200px", minHeight: "100vh", background: "#F8F9FA" }} >
            <div className='    flex flex-col gap-1 '>
                <p className=' p-3 '>Group by</p>
                <div className='flex flex-col gap-1 text-gray-500'>
                    {GruopByArra.map((item,index)=>(
                         <div key={index} className="hover:bg-gray-300     cursor-pointer">
                         <p className='pl-2 m-1'>{item}
                         </p></div>
                    ))}
                    {/* <div className="hover:bg-gray-300     cursor-pointer">
                        <p className='pl-2 m-1'>Default
                        </p></div>
                    <div className="hover:bg-gray-300     cursor-pointer">
                        <p className='pl-2 m-1'>Time
                        </p></div>
                    <div className="hover:bg-gray-300     cursor-pointer">
                        <p className='pl-2 m-1'>Seating area
                        </p></div>
                    <div className="hover:bg-gray-300     cursor-pointer">
                        <p className='pl-2 m-1'>VIP / Other
                        </p></div>
                    <div className="hover:bg-gray-300     cursor-pointer">
                        <p className='pl-2 m-1'> Reservation Tags
                        </p></div>
                    <div className="hover:bg-gray-300     cursor-pointer">
                        <p className='pl-2 m-1'> Reservation Status
                        </p></div> */}
                </div>

            </div>

            <div className='     flex flex-col gap-1 '>
                <p className=' p-3 '>Availability</p>
                <div className='flex flex-col gap-1 text-gray-500'>
                {AvailabilityArray.map((item,index)=>(
                         <div key={index} className="hover:bg-gray-300     cursor-pointer">
                         <p className='pl-2 m-1'>{item}
                         </p></div>
                    ))}
                    {/* <div className="hover:bg-gray-300     cursor-pointer">
                        <p className='pl-2 m-1'>Shifts
                        </p></div>
                    <div className="hover:bg-gray-300     cursor-pointer">
                        <p className='pl-2 m-1'>Access rules
                        </p></div>
                    <div className="hover:bg-gray-300     cursor-pointer">
                        <p className='pl-2 m-1'>Daily Program
                        </p></div>
                    <div className="hover:bg-gray-300     cursor-pointer">
                        <p className='pl-2 m-1'> Blackout Dates
                        </p></div> */}

                </div>

            </div>
        </div>
    )
}

export default ReservationSideBar
