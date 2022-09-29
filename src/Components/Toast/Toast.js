import React from 'react';
import './Toast.css'

const Toast = () => {
  
    return (
       <div id='toast' className='hidden'>
         <div className='Toast h-[100vh] w-[100vw] bg-gray-900 opacity-75 z-50 flex justify-center items-center {vlaue} '>
            <div className='h-[50vh] w-[50vw] bg-slate-300 opacity-100 text-3xl text-black flex items-center justify-center'>
                <h1 className='text-center'>Congratulation on compleatin <br /> reading for today. Read <br /> daily to build a good habit <br /> of reading</h1>
             </div>

            
        </div>
       </div>
    );
};

export default Toast;