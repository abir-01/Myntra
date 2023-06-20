import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeitem } from '../actions';

const Baglist = ({ item, index }) => {
    
    const dispatch = useDispatch();

  return (
      <>
          <div className="my-8 flex">
              <div className="w-1/4 flex">

                  <img src={item.poster} alt="" className='w-[9vw]' />
              </div>
              <div className="w-1/2 flex flex-col">
                  <div className="font-bold text-xl">{item.name}</div>
                  <div className='opacity-70 font-normal'>{item.desc}</div>
                  <div className='pt-4 font-semibold'>Size: {item.size}</div>
                  <div className="flex my-2">
                      <div className='font-bold'>&#8377;{item.price}</div>
                      <strike className='mx-2'>&#8377;{item.originalprice}</strike>
                      <div className='text-red-500'>({item.off}% OFF)</div>

                  </div>
                  <button onClick={() => dispatch(removeitem( index))} className='py-1 my-2 text-white  w-[75px] bg-pink-700'>Remove</button>
              </div>
          </div>
      </>
  )
}

export default Baglist