import React from 'react';
import logo from '../../logo.png'

const Navber = () => {
    return (
        <div>
            {/* Navigation starts from here */}
            <div className="navbar bg-[#20134e] lg:w-11/12 mx-auto rounded mt-2">
                    <div className="navbar-start">
                        <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href='/'><button className='text-white btn btn-success'>Log out</button></a></li>
                            {/* <li tabIndex={0}>
                            <a className="justify-between" href='/'>
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                            </a>
                            <ul className="p-2">
                                <li><a href='/'>Submenu 1</a></li>
                                <li><a href='/'>Submenu 2</a></li>
                            </ul>
                            </li>
                            <li><a href='/'>Item 3</a></li> */}
                        </ul>
                        </div>
                       
                        <a href='/' className='flex items-center'><img src={logo} alt="" className='w-1/6 inline-block '/> <span className='lg:text-3xl md:text-xl font-extrabold text-white text-sm'>Book Reading Club</span></a>
                       
                      
                    </div>
                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                        
                        
                        <li><a href='/'><button className='text-white btn btn-success'>Log out</button></a></li>
                        </ul>
                    </div>
                    {/* <div className="navbar-end">
                        <a className="btn" href='/'>Get started</a>
                    </div> */}
                    </div>


            
        </div>
    );
};

export default Navber;