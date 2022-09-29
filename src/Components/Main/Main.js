import React, { useEffect, useState } from 'react';
import BookCard from '../BookCard/BookCard';
import ReadingTime from '../ReadingTime/ReadingTime';
import './Main.css'

const Main = () => {
    // Fetching data
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        fetch('booklist.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    // Using start to update reading Time
    const [readingTimeNew, handleReading] = useState(0)
    // Using function to add reading Time
    const readingTime =(props)=>{

        const readingTimefloat = parseFloat(props)
        handleReading(readingTimeNew + readingTimefloat)
    }


    return (
        <div>
           <div className='Main '>
                <div className='book'> 
                {books.map(book=><BookCard key={book._id} books={book} readHandle={readingTime}></BookCard>)}
            
                </div>
            <div className='bg-[#20134e] mt-8 h-[800px] rounded'>
                <ReadingTime readingTime={readingTimeNew} ></ReadingTime>

            </div>

           </div>
        </div>
    );
};

export default Main;