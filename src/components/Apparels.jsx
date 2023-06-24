import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setitem } from '../actions/index'
import Apparel from './Apparel'
import { Link } from 'react-router-dom'

const Apparels = () => {

    const myState = useSelector((state) => state.setitem)
    const dispatch = useDispatch();

    const [apparels, setapparels] = useState([
        {
            name: "Hubberholme",
            desc: "Men Casual Shirt",
            price: "399",
            originalprice: "999",
            off: "60",
            rating: "2.7",
            ratings: "12",
            // key:1,
            poster: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19047398/2022/7/11/0b33ce4b-34c3-4303-b657-c88ac0c67a8d1657525874817Shirts1.jpg"
        },
        {
            name: "High Star",
            desc: "Men Slim Fit Jeans",
            price: "408",
            originalprice: "1859",
            off: "78",
            rating: "3",
            ratings: "19",
            // key:"2",
            poster:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19488582/2022/8/12/85f69563-f0d4-4cbb-b712-e8ec73331a101660310792989HighStarMenBlueSlimFitJeans1.jpg"
        },
        {
            name: "Hubberholme",
            desc: "Men Casual Shirt",
            price: "399",
            originalprice: "999",
            off: "60",
            rating: "2.7",
            ratings: "12",
            // key: "2",
            poster:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/6633393/2022/4/11/6097e51e-5391-4d63-91a8-13ea308ef13d1649616810915HubberholmeMenGreyMelangeSolidSlimFitJoggers1.jpg"
        },
        {
            name: "Hubberholme",
            desc: "Men Solid Slim Fit Joggers",
            price: "399",
            originalprice: "999",
            off: "60",
            rating: "4.1",
            ratings:"258",
            poster:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/18460730/2022/5/26/bf4b7cd7-cec2-4774-9ee1-f4636ca335f31653584878464HighStarMenBlueRegularFitCasualShirt1.jpg"
        },
        {
            name: "High Star",
            desc: "Men Checked Casual Shirt",
            price: "431",
            originalprice: "2399",
            off: "82",
            rating: "4",
            ratings:"5",
            poster:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/6633372/2022/4/11/05d0bdb7-fe98-4ea8-8e3f-1a8fb61e8e511649616079014HubberholmeMenNavyBlueSolidSlimFitJoggers1.jpg"
        },
    ])



    return (
        <div className="flex flex-wrap">
            {apparels.map((item) => (
                //   console.log(item),
                <Link to="/apparel" onClick={() => {
                    // <Apparel />
                    dispatch(setitem(item))
                }} className="flex flex-col py-8 mx-auto">
                    <div className="image relative">
                        <img src={item.poster} alt="" style={{ maxWidth: "15vw" }} />
                        <div className="flex absolute bottom-3 left-2 bg-white opacity-80 ">

                            <div className='flex items-center font-bold'>&nbsp;{item.rating}&nbsp;
                                <img src="data:image/png;base64,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" alt="" style={{ width: "15px", height: "15px" }} />
                            </div>
                            <div className='font-bold'>&nbsp;|&nbsp;{item.ratings}&nbsp; </div>
                        </div>
                    </div>
                    <div className="px-3">

                        <div className='font-bold text-lg'>{item.name}</div>
                        <div className='opacity-80 pb-2'>{item.desc}</div>
                        <div className="flex items-center ">
                            <div className='font-bold'>Rs. {item.price}</div>
                            <strike className='opacity-70 text-xs px-2'>Rs. {item.originalprice}</strike>
                            <div className='text-red-500'>({item.off}% OFF)</div>

                        </div>

                    </div>

                </Link>
            ))}
        </div>
    )
}

export default Apparels