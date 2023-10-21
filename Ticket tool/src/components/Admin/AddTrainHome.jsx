import React from 'react'
import AddTrain from './AddTrain';
import AdminSide from './AdminSide';

const AddTrainHome = () => {
  return (
    <div className='flex'>
        <div className='w-[20%]'>
            <AdminSide/>
        </div>
        <div className='w-[80%]'>
           <AddTrain/> 
        </div>
    </div>
  )
}

export default AddTrainHome