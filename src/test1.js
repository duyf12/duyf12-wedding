
import React, { useRef, useEffect, useState } from "react";
const slises = [
    { url: 'https://imagev3.vietnamplus.vn/Uploaded/2024/mzdic/2020_04_23/kaka-ac_milanreal_madrid_1.jpg' },
    { url: 'https://media.bongda.com.vn/files/phuc.tran/2017/11/15/kaka-0822.jpg' },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKh2KVMK8OE1V88Cse1LhPq_nU-vz0aNlusQ&s' }
]
const Background = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slises.length);
        }, 10000);
        return () => clearTimeout(timeoutId);
    }, [currentIndex]);
    return (
        <div className=" relative  h-screen bg-[#4d5271] ">

            <div className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl text-white bg-red-500  absolute z-40">
                <div className="flex justify-center items-center">
                    Save the Date
                </div>
                <div className="flex justify-center items-center">
                    Kiến Văn & Việt Hoài
                </div>
                <div className="flex justify-center items-center">
                    04 Tháng 4 2024
                </div>
            </div>

            <div
                style={{
                    backgroundImage: `url(${slises[currentIndex].url})`,

                }}
                className=" z-10 h-full rounded-2xl bg-center bg-cover duration-1000 opacity-50 flex justify-center items-center"
            >

            </div>

        </div>
    )
}