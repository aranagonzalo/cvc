"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const StoryCardRight = ({ text, date, title, first, last }) => {
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
                className={`flex w-full relative transition-all h-full gap-60 top-0`}
            >
                {!first && (
                    <div className="absolute top-0 left-1/2 h-1/2 z-10 w-[2.5px] -translate-x-1/2 bg-custom-grey"></div>
                )}
                <div
                    onMouseEnter={handleHover}
                    onMouseLeave={handleExit}
                    className={`z-20 absolute top-1/2 left-1/2 ${
                        isHovered && !first ? "w-24 h-24" : "w-16 h-16"
                    } transition-all rounded-full bg-custom-blue -translate-x-1/2 -translate-y-1/2 z-20 border-[20px] border-custom-cream`}
                ></div>
                {!last && (
                    <div className="absolute bottom-0 left-1/2 h-1/2 z-10 w-[2.5px] -translate-x-1/2 bg-custom-grey"></div>
                )}
                <div
                    className="rounded-r-[60px] relative w-1/2 p-0 items-center justify-end flex transition-all duration-500"
                    style={{
                        transitionDuration: "0.6s",
                        opacity: isHovered ? 1 : 0,
                    }}
                >
                    <p className="text-xl font-extralight w-3/4">{text}</p>
                </div>
                <motion.div
                    initial={{ scale: 0.5 }}
                    whileInView={{
                        scale: 1,
                        transition: {
                            duration: 0.4,
                            delay: 0.1,
                        },
                    }}
                    className="w-1/2 flex flex-col justify-center gap-3 text-left"
                >
                    <h3 className="font-light text-4xl text-custom-blue">
                        {date}
                    </h3>
                    <h1 className="font-normal text-5xl text-custom-blue w-1/2">
                        {title}
                    </h1>
                </motion.div>
            </div>
        </div>
    );
};

export default StoryCardRight;
