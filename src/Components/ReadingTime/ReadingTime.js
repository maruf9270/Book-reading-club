import React, { useEffect, useState } from 'react';
import Profile from '../../images/profile.png'
import {toastHandle} from '../Toast/ToastControler'
import { HandleDB, getValueFromLocalStorage } from "../HandleningDB/HandelingDB";

import './ReadingTime.css'

const ReadingTime = (props) => {


    // Using state to updating break Time
    const [breakTime, setBreakTime] = useState(0)
    const breakTimeControl =(props) =>{
        
        HandleDB(props);
        const time = getValueFromLocalStorage()
       
        setBreakTime(time)
       
        
    }

    // using effect to load data from local storage
 
    useEffect(()=>{
        const time = getValueFromLocalStorage()
        if(time){
            setBreakTime(time)
            
        }
        else{
            setBreakTime(0)
        }
        },[])
   

    return (
        <div className='lg:w-80 w-full p-4 cardbook'>
            {/* Profile section */}
           <div className='profile flex mt-5'>
                <div className='img'><img src={Profile} className='h-[50px} w-[50px]' alt="" /></div>
                <div className='address ml-2'>
                    <h4 className='text-xl font-bold text-white'>Maruf Ahmed</h4>
                    Faridpur, Bangladesh

                </div>

           </div>

           {/* Total reading section */}
           <h3 className='mt-7 text-lg text-white'>Reading History</h3>

           <div className='total-readed w-[18rem] h-[80px] bg-[#2d1b69] mt-0 flex justify-around items-center rounded-xl'>
                <div><span className='text-3xl font-bold text-white'>3</span> <br />Books</div>
        
                <div><span className='text-3xl font-bold text-white'>20</span> <br />Hours</div>

                <div><span className='text-3xl font-bold text-white'>2100</span><br />
                Pages
                </div>
           </div>

           {/* Add a break section */}
           <h3 className='mt-7 text-lg text-white'>Add A Break</h3>
           
          
           <div className='text-white addBreak mt-0 w-[18rem] h-[80px] bg-[#2d1b69] rounded-xl flex justify-around items-center'>
                <div onClick={()=>breakTimeControl(1)} className='rounded-full bg-[#20134e] w-[50px] h-[50px] flex justify-center items-center'>1Min</div>
                <div onClick={()=>breakTimeControl(2)} className='rounded-full bg-[#20134e] w-[50px] h-[50px] flex justify-center items-center'>2Min</div>
                <div onClick={()=>breakTimeControl(5)} className='rounded-full bg-[#20134e] w-[50px] h-[50px] flex justify-center items-center'>5Min</div>
                <div onClick={()=>breakTimeControl(10)} className='rounded-full bg-[#20134e] w-[50px] h-[50px] flex justify-center items-center'>10Min</div>
                <div onClick={()=>breakTimeControl(15)} className='rounded-full bg-[#20134e] w-[50px] h-[50px] flex justify-center items-center'>15Min</div>


           </div>


           {/* Exercise details section */}
           <h3 className='mt-10 text-lg text-white'>Exercise Details</h3>
           
            <div className='w-[18rem] h-[80px] bg-[#2d1b69] mb-4 rounded-xl flex justify-between items-center p-4'>
                <div className='text-white font-bold text-xl'>Reading Time:</div>
                <div><span className='text-white text-lg'>{props.readingTime}</span> Hours</div>
            </div>
            <div className='w-[18rem] h-[80px] bg-[#2d1b69] rounded-xl flex justify-between items-center p-5'>
                <div className='text-white font-bold text-xl'>Break Time:</div>
                <div><span className='text-white text-lg'>{breakTime}</span> Minute</div>
            </div>


            {/* Activity compleate button */}
            <div>
                <button onClick={()=>toastHandle()} className='w-[18rem] h-[40px] rounded-xl btn btn-info mt-28 text-white font-bold text-lg'>Activity Completed</button>
            </div>

           
           
            
        </div>
    );
};

export default ReadingTime;