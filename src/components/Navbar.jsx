import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'

import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
            <header className="bg-transparent sticky  mx-auto " >
                <nav className="mx-auto  flex max-w-10xl items-center justify-between  " aria-label="Global">
                    <div className="flex w-[0] lg:flex-1 justify-between items-center lg:mr-8">
                     
                            <Link to="/" className="m-1.5 p-1.5 flex justify-center items-center">
                                {/* <span Your Company</span> */}
                                <img className="h-20 w-auto " style={{
                                    display: 'inline'
                                }} src="https://images.indianexpress.com/2021/01/myntra.png" alt="" />
                                {/* <span className='mx-2 text-4xl text-white'></span> */}
                            </Link>
                      
                        
                        <div className="flex justify-between w-full lg:visible invisible">

                            <Link to="/men" className='font-bold text-lg opacity-90  mr-4'>Men</Link>
                            <Link to="/women" className='font-bold text-lg opacity-90 mr-4 '>Women</Link>
                            <Link to="/" className='font-bold text-lg opacity-90 mr-4 '>Kids</Link>
                            <Link to="/" className='font-bold text-lg opacity-90  mr-4'>Home & Living

                            </Link>
                            <div className='font-bold text-lg opacity-90 mr-4'>Beauty</div>
                            <div className='relative font-bold text-lg opacity-90 mr-4'>
                                Studio
                                <div className='absolute text-xs right-0 top-0 text-red-600 my-[-5px] mx-[-30px]'>NEW</div>
                            </div>
                        </div>

                    </div>
                    {/* <div className="flex lg:flex-1 justify-between">
                    
                   
                </div> */}
                    <div className="flex lg:hidden w-full lg:w-2/3 justify-around ">
                        {/* <div className=" flex w-[30%] justify-evenly"> */}
                        <Link to="/" className="m-1.5 p-1.5 flex justify-center items-center">
                            {/* <span Your Company</span> */}
                            <img className="h-20 w-auto " style={{
                                display: 'inline'
                            }} src="https://images.indianexpress.com/2021/01/myntra.png" alt="" />
                            {/* <span className='mx-2 text-4xl text-white'></span> */}
                        </Link>
                        <div className='flex flex-col justify-center items-center'>
                            <Person2OutlinedIcon />
                            Profile
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <FavoriteBorderOutlinedIcon />
                            Wishlist
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <ShoppingBagOutlinedIcon />
                            Bag
                        </div>
                        {/* </div> */}
                        <button
                            type="button"
                            className=" inline-flex items-center justify-center rounded-md p-2.5  text-black "
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only text-white">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    {/* <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    

                    
                    
                </Popover.Group> */}
                    <div className="hidden ps-8 lg:flex lg:flex-1 lg:justify-around ">
                        {/* <a to="#" className="text-sm font-semibold leading-6 text-gray-100 px-6 pt-3 pb-[6px] text-xl">
                        Log in
                    </a>
                    <button
                        type="button"
                        className="inline-block rounded-full border-2 border-primary-100 px-6 pt-2 pb-[6px]  font-medium uppercase leading-normal text-gray-100 transition duration-150 ease-in-out hover:border-primary-accent-100 hover:bg-neutral-500 hover:bg-opacity-10 focus:border-primary-accent-100 focus:outline-none focus:ring-0 active:border-primary-accent-200 dark:text-primary-100 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 text-xl"
                        data-te-ripple-init>
                        Join
                    </button> */}


                        <div className=" relative mx-auto rounded-lg border-1 text-gray-600 px-5  w-[70%] bg-gray-100" >
                            <button type="submit" className="absolute left-0 top-0  px-4 h-full my-auto">
                                <SearchIcon />
                            </button>
                            <input className="ps-8 w-full  bg-transparent h-full py-auto  text-lg focus:outline-none"
                                type="search" name="search" placeholder="Search" />
                        </div>

                        <div className=" flex w-[30%] justify-evenly pe-8">
                            <div className='flex flex-col justify-center items-center'>
                                <Person2OutlinedIcon />
                                Profile
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <FavoriteBorderOutlinedIcon />
                                Wishlist
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <ShoppingBagOutlinedIcon />
                                Bag
                            </div>
                        </div>

                    </div>
                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-10" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-80 overflow-y-auto bg-white  px-6 py-6 sm:max-w-80 sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Link to="/" className="-my-1.5 mx-auto">
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-16 w-auto"
                                    src="https://images.indianexpress.com/2021/01/myntra.png"
                                    alt=""
                                />
                            </Link>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">

                                    <Link
                                        to="/men"
                                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Men
                                    </Link>
                                    <Link
                                        to="/women"
                                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Women
                                    </Link>
                                    <Link
                                        to="#"
                                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Kids
                                    </Link>
                                    <Link
                                        to="#"
                                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Home & Living
                                    </Link>
                                    <Link
                                        to="#"
                                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Beauty
                                    </Link>
                                    <Link
                                        to="#"
                                        className="-mx-3 relative block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        
                                            Studio
                                            <div className='absolute text-[10px] left-16 top-2 text-red-600 my-[-5px] '>NEW</div>
                                      
                                    </Link>
                                </div>
                                
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>

        </div>
    )
}