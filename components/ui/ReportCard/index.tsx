import React from 'react';
import styles from './ReportCard.module.css';


const ReportCard = ({label, total, count, type}:{label:string, total:string, count:string, type:string}) => {
  return (
    <div className={`w-full p-6 ${type==='confirm'?'bg-confirmed':type==='pending'?'bg-pending':type==='delivered'?'bg-delivered':type==='canceled'?'bg-canceled':''} border rounded-md shadow`}>
      <div className="flex justify-between">
        <div className='grid'>
          <p className='text-base text-white'>{label}</p>
          <p className='my-3 text-2xl text-white'>Rs. {total}</p>
        </div>
        <div>
          <p className='text-4xl text-white'>{count}</p>
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
