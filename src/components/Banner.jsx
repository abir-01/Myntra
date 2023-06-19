import React from 'react'
import banner from "../assets/Banner.jpeg"


const Banner = () => {
    return (
        <>
            <div className="container mx-auto my-8">
                <img src={banner} alt="" className="h-full w-full"/>
            </div>
        </>
    )
}

export default Banner