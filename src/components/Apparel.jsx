import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { additem } from '../actions/index'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


const Apparel = () => {

    const myState = useSelector((state) => state.setitem)
    const dispatch = useDispatch();
    const [isactive, setisactive] = useState('0')
    const [added, setadded] = useState(false)

    // console.log(myState)

    return (
        <>
            <div className='flex my-8 container mx-auto'>
                <div className='w-3/5 flex'>
                    <img className='p-4' src={myState.poster} alt="" />
                    <img className='p-4' src={myState.poster} alt="" />
                </div>
                <div className="w-2/5 my-8">
                    <div className="px-3">

                        <div className='font-bold text-3xl'>{myState.name}</div>
                        <div className='opacity-80 lg:opacity-70 pb-2 lg:text-2xl'>{myState.desc}</div>
                        <div className="flex text-xl bg-white opacity-80 ">

                            <div className='flex items-center border-s border-t border-b border-e font-bold lg:p-2'>&nbsp;{myState.rating}&nbsp;
                                <img src="data:image/png;base64,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" alt="" style={{ width: "15px", height: "15px" }} />
                                {/* </div>
                            <div className='font-bold border-s-0 border-2 border-e border-t border-b '> */}
                                <span className='font-normal text-lg'>

                                    &nbsp;|&nbsp;{myState.ratings}&nbsp;Ratings
                                </span>
                            </div>

                        </div>
                        <br />
                        <hr />
                        <div className="flex items-center mt-4">
                            <div className='font-bold text-3xl'>&#8377; {myState.price} &nbsp;</div>
                            <div className='text-2xl opacity-70 px-2'>
                                MRP
                                <strike className='  '>&#8377; {myState.originalprice}</strike>
                            </div>
                            <div className='text-orange-500 text-2xl font-bold'>&nbsp;({myState.off}% OFF)</div>

                        </div>
                        <div className='text-green-700 mt-2 font-sm font-bold'>
                            inclusive of all taxes
                        </div>
                        <div className="flex lg:my-4">
                            <div className="text-lg font-bold">SELECT SIZE</div>
                            <div className="px-8 text-red-500 text-lg font-bold">SIZE CHART &gt;</div>
                        </div>
                        <div className="flex">

                            <button onClick={() => setisactive("39")} className={isactive == '39' ? 'border-[2px] bg-red-500 mr-4 p-[0.9vw] px-[1.1vw] font-bold text-white rounded-full' : ' border-[2px] hover:border-red-500 mr-4 p-[0.9vw] px-[1.1vw] font-bold rounded-full'} >39</button>

                            <button onClick={() => setisactive("40")} className={isactive == '40' ? 'border-[2px] bg-red-500 mr-4 p-[0.9vw] px-[1.1vw] font-bold text-white rounded-full' : ' border-[2px] hover:border-red-500 mr-4 p-[0.9vw] px-[1.1vw] font-bold rounded-full'}>40</button>

                            <button onClick={() => setisactive("42")} className={isactive == '42' ? 'border-[2px] bg-red-500 mr-4 p-[0.9vw] px-[1.1vw] font-bold text-white rounded-full' : ' border-[2px] hover:border-red-500 mr-4 p-[0.9vw] px-[1.1vw] font-bold rounded-full'}>42</button>

                            <button onClick={() => setisactive("44")} className={isactive == '44' ? 'border-[2px] bg-red-500 mr-4 p-[0.9vw] px-[1.1vw] font-bold text-white rounded-full' : ' border-[2px] hover:border-red-500 mr-4 p-[0.9vw] px-[1.1vw] font-bold rounded-full'}>44</button>

                        </div>
                        <div>{isactive === '0' &&
                            <div className='text-red-500'>"Please select a size"</div>}


                        </div>
                        <div className="flex py-8 items-center ">
                            <button onClick={() => {
                                isactive !== '0'&& dispatch(additem(myState, isactive))
                            }}

                                className="border-2 py-4 text-xl text-white px-16 bg-pink-600 flex items-center">
                                <ShoppingBagIcon />&nbsp;{added ? "ADD AGAIN" : "ADD TO BAG"}
                            </button>
                            <button className="border-2 py-4 mx-8 text-xl px-12  flex items-center">
                                <FavoriteBorderOutlinedIcon />&nbsp;WISHLIST
                            </button>
                        </div>
                    </div>
                </div>

            </div >

        </>
    )
}

export default Apparel