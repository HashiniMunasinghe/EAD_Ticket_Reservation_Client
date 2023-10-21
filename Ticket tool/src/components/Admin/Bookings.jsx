import React, { useState, useEffect } from 'react';
import appoinmentDataService from '../../Services/BookingService';
import reservationDataService from '../../Services/ReservationService';
import { AiFillDelete } from 'react-icons/ai';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PuffLoader from 'react-spinners/PuffLoader';

const Appoinmets = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    useEffect(() => {
        getBookings();
    }, []);

    const getBookings = async () => {
        try {
            const data = await reservationDataService.getReservations();
            console.log(data);

            // Ensure that data is an array before updating state
            if (Array.isArray(data)) {
                setAppointments(data);
            } else {
                // Handle the case where data is not in the expected format
                console.error('Invalid data structure:', data);
                // You might want to set appointments to an empty array or handle it differently based on your use case
                setAppointments([]);
            }
        } catch (error) {
            console.error('Error getting reservations:', error);
            // Handle the error, setAppointments([]), or show an error message based on your requirements
        }
    };

    const deleteHandler = async (id) => {
        // Your delete logic here
        try {
            // Your delete logic here

            // Example using toast notification
            toast.success('Delete Success !', {
                position: toast.POSITION.TOP_RIGHT,
            });

            // After successful deletion, refresh the appointments
            getBookings();
        } catch (error) {
            console.error('Error deleting appointment:', error);
            // Handle the error, show an error message, etc.
        }
    };

    return (
        <div>
            {loading ? (
                <div className='flex justify-center mt-20'>
                    <PuffLoader
                        color='rgba(54, 215, 183, 1)'
                        cssOverride={{}}
                        loading
                        size={76}
                        speedMultiplier={2}
                    />
                </div>
            ) : (
                <table className='w-[1000px] p-2 ml-14 mt-14'>
                    <thead className='items-center justify-between p-2 bg-blue-700'>
                        <tr className='p-1'>
                            <th className='p-4 text-2xl text-white'>Train Code</th>
                            <th className='p-4 text-2xl text-white'>Starting From</th>
                            <th className='p-4 text-2xl text-white'>Destination</th>
                            <th className='p-4 text-2xl text-white'>Class</th>
                            <th className='p-4 text-2xl text-white'>Seats</th>
                            <th className='p-4 text-2xl text-white'>Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {appointments.map((appointment, index) => (
                            <tr
                                key={appointment.id} // Assuming 'id' is a property of your appointment object
                                className='items-center p-4 text-xl border-b-[1px]  border-blue-500 hover:bg-gray-400'
                            >
                                <td className='px-4 py-2 text-center'>{appointment.trainCode}</td>
                                <td className='px-4 py-2 text-center'>{appointment.startingFrom}</td>
                                <td className='px-4 py-2 text-center'>{appointment.destination}</td>
                                <td className='px-4 py-2 text-center'>{appointment.class}</td>
                                <td className='px-4 py-2 text-center'>{appointment.seats}</td>
                                <td className='px-4 py-2 text-left'>
                                    <div className='flex gap-2 ml-8 text-xl cursor-pointer'>
                                        <AiFillDelete
                                            className='hover:bg-blue-500'
                                            onClick={(e) => deleteHandler(appointment.id)}
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Appoinmets;
