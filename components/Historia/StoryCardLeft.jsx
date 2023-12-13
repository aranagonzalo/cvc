"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const StoryCardLeft = ({ logo, text, date, title }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleExit = () => {
        setIsHovered(false);
    };

    return (
        <div className="w-full flex h-[320px] items-center">
            <div
                className={`flex w-full relative transition-all ${
                    isHovered ? "h-full" : "h-[80%]"
                } gap-60 top-0`}
            >
                <div className="mb-10 absolute -top-[15%] left-1/2 h-1/2 z-10 w-[2.5px] -translate-x-1/2 bg-custom-grey"></div>
                <div
                    onMouseEnter={handleHover}
                    onMouseLeave={handleExit}
                    className={`absolute top-1/2 left-1/2 ${
                        isHovered ? "w-12 h-12" : "w-6 h-6"
                    } transition-all rounded-full bg-custom-blue -translate-x-1/2 -translate-y-1/2`}
                ></div>
                <div className="mt-10 absolute top-1/2 left-1/2 h-1/2 z-10 w-[2.5px] -translate-x-1/2 bg-custom-grey"></div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        transition: {
                            duration: 0.4,
                            delay: 0.1,
                        },
                    }}
                    className="w-1/2 flex flex-col justify-center items-end gap-3 text-right"
                >
                    <h3 className="font-light text-4xl text-custom-blue">
                        {date}
                    </h3>
                    <h1 className="font-normal text-5xl text-custom-blue w-1/2 text-right leading-tight">
                        {title}
                    </h1>
                </motion.div>
                <div
                    className="relative w-1/2 p-0  justify-center flex flex-col transition-all duration-500"
                    style={{
                        transitionDuration: "0.6s",
                        opacity: isHovered ? 1 : 0,
                    }}
                >
                    {logo && (
                        <Image
                            width={180}
                            height={48}
                            alt="Logo CVC"
                            src="/images/logo/logo-black.png"
                            className="pb-4"
                        ></Image>
                    )}
                    <p className="text-xl font-extralight w-3/4">{text}</p>
                </div>
            </div>
        </div>
    );
};

export default StoryCardLeft;
