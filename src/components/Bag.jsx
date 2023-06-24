import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeitem } from '../actions';
import Baglist from './Baglist';

const Bag = () => {
    // const myState = useSelector((state) => state.setitem)
    const dispatch = useDispatch();

    const myState = useSelector((state) => state.addremoveitem)
    // const first = myState.shift();
    // const [items, setitems] = useState(myState)
    // console.log(myState);

    

    return (
        <div className="container mx-auto">
            <div className='my-8 font-bold text-4xl'>ITEMS</div>
            <div className="w-1/2 flex flex-col">
                {myState.map((item, index) => (
                    // console.log("index = ",index),
                    // console.log(index,item),
                    
                    index!==0 && <Baglist item={ item} index={index} />
                ))}
            </div>
            <div className="w-1/2"></div>
        </div>
    )
}

export default Bag