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

    


    return (
        <div>
           <div className='Main '>
                <div className='book'> 
                {books.map(book=><BookCard books={book}></BookCard>)}
            
                </div>
            <div className='bg-[#20134e] mt-8 h-[800px] rounded'>
                <ReadingTime></ReadingTime>

            </div>

           </div>
        </div>
    );
};

export default Main;