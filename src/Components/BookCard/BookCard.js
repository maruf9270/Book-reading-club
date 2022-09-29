import React from 'react';
import './BookCard.css'

const BookCard = (props) => {

    const {name,description,picture,language,readingTime,_id,index} = props.books

  
    


    return (
        <div>
            
            {/* Card starts from here */}

            <div className="card w-72 bg-[#20134e] shadow-xl text-white bookCard">
            <figure><img src={picture} alt="Shoes" className='bookCardImg'/></figure>
                <div className="card-body relative">
                    <h2 className="card-title font-bold">
                {name}
                   
                    </h2>
                    <p className='text-gray-300'>{description.length > 90 ? description.slice(0,90) +'...' :description  }</p>
                    <h3 className='text-lg font-extrabold'>Time required: {readingTime} Hour</h3>
                    <div className="card-actions justify-end mb-7 ">
                        <div className="badge badge-outline">{language}</div> 
                        
                    </div>
                    <button onClick={()=>props.readHandle(readingTime)} className='addList absolute bottom-0 left-0 bg-info text-lg font-bold'>Add To List</button>
                </div>
            </div>

            
        </div>
    );
};

export default BookCard;