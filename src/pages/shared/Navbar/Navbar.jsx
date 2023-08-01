import { Link } from 'react-router-dom'

import { BsTelephone } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {

    const navBar = <>

        <li tabIndex={0}>
            <details>
                <summary className='font-semibold'>Category</summary>
                <ul className="p-2">
                    <li><Link to='#' className='font-semibold' >Desktop</Link></li>
                    <li><Link to='#' className='font-semibold' >Laptop</Link></li>
                    <li><Link to='#' className='font-semibold' >Monitor</Link></li>
                    <li><Link to='#' className='font-semibold' >Components</Link></li>

                </ul>
            </details>
        </li>
        <li><Link to='#' className='font-semibold'>Deals</Link></li>
        <li><Link to='#' className='font-semibold'>What's New</Link></li>
        <li><Link to='#' className='font-semibold'>Delivery</Link></li>

    </>


    return (
        <>
            <div className="h-8 bg-green-900 hidden lg:block">
                <div className="h-8 my-container text-white flex items-center justify-between">

                    <p className="flex items-center gap-2">
                        <BsTelephone className="h-5 w-5" />
                        +001234567890
                    </p>

                    <div className="flex gap-2 items-center">
                        <p>Get 50% off on Selected Items</p>
                        <p>|</p>
                        <p>Shop Now</p>
                    </div>
                    <div className="flex items-center ">
                        {/* language */}
                        <ul className="menu menu-horizontal px-1 hover:text-white ">
                            <li>
                                <details className="">
                                    <summary>Eng</summary>
                                    <ul className="p-2 text-black">
                                        <li><a>Ban</a></li>
                                        <li><a>Fra</a></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                        {/* Location */}
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <details className="">
                                    <summary>Location</summary>
                                    <ul className="p-2 text-black">
                                        <li><a>Dhaka</a></li>
                                        <li><a>Deli</a></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>

                    </div>

                </div>
            </div>

            <div className="navbar  my-container ">
                {/* <div className="navbar-start"> */}
                <div className="">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            {navBar}

                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl text-green-900 font-bold">Shopcart</a>
                </div>
                <div className=" hidden lg:flex lg:ml-5">
                    {/* <div className="navbar-center hidden lg:flex"> */}
                    <ul className="menu menu-horizontal px-1">

                        {navBar}

                    </ul>
                </div>
                {/* <div className="navbar-end"> */}
                <div className="lg:ml-12  w-2/4 flex gap-5 justify-end">

                    <div className='hidden lg:flex items-center  lg:w-1/2'>
                        <div className="form-control w-full">
                            <input type="text" placeholder="Search Product" className="input input-bordered border w-full  md:w-auto rounded-3xl bg-slate-50" />
                        </div>
                        <BiSearchAlt2 className='h-6 w-6 -ml-10' />
                    </div>

                    {/* <a className="btn">Button</a> */}
                    <button className='flex items-center gap-2'>
                        <AiOutlineUser className='h-5 w-5  hidden lg:block'/>
                        <p className='font-semibold'>Account</p>
                    </button>

                    <button className='flex items-center gap-2'>
                        <AiOutlineShoppingCart className='h-5 w-5 hidden lg:block'/>
                        <p className='font-semibold'>Cart</p>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;