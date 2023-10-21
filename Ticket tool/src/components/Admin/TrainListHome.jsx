import React from 'react'
import AdminSide from './AdminSide'
import TrainList from './TrainList'

const TrainListHome = () => {
  return (
    <div className='flex'>
        <div className='w-[20%]'>
            <AdminSide/>
        </div>
        <div className='w-[80%]'>
            <TrainList/>
        </div>
    </div>
  )
}

export default TrainListHome