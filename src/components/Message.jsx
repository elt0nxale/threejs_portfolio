import React, { useState } from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
 

const Message = () => {
    const [visibility, setVisibility] = useState(true)

    return (
    <motion.div 
        className={`absolute right-[25%] bottom-[35%] z-10 flex flex-col items-end opacity-50 hover:cursor-pointer hover:scale-105 hover:opacity-90 transition-all ${!visibility && "hidden"} animate-bounce`}
    >
        <div className="w-0 h-0 mb-0 mr-5
            border-l-[9px] border-l-transparent
            border-b-[10px] border-b-tertiary
            border-r-[9px] border-r-transparent">
        </div>
        <div className="bg-tertiary p-2 rounded-xl mt-0 w-100 flex flex-row items-center">
            <p className="pl-3 px-1 text-gray-400 text-[12px] text-center">drag me with left & right click   
            </p>
            <svg 
            onClick={() => setVisibility(!visibility)}
            className="w-4 h-4 text-gray-400 mx-1 hover:text-white hover:stroke-[2px]"
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke="currentColor" 
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>
    </motion.div>
    )
}

export default Message
