import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoTiktok } from "react-icons/io5";
import InvitePage from "./InvitePage";
import { motion } from "framer-motion";

const TASKS = [
  {
    id: 1,
    icon: <FaInstagram size={30} />,
    title: "Follow LodgifyNG on Instagram",
    number: "+5,000 LP",
    button: "Follow",
  },
  {
    id: 2,
    icon: <FiYoutube size={30} />,
    title: "Subscribe to LodgifyNG on YouTube",
    number: "+10,000 LP",
    button: "Subscribe",
  },
  {
    id: 3,
    icon: <BsTwitterX size={30} />,
    title: "Tweet and Mention LodgifyNG",
    number: "+100,000 LP",
    body: "Tweet and mention @LodgifyNG in a post about why you are excited about the platform using our hashtag #getlodgified",
    button: "Go",
  },
  {
    id: 4,
    icon: <IoLogoTiktok size={30} />,
    title: "Like and Share LodgifyNG Post on TikTok",
    number: "+7,000 LP",
    button: "Go",
  },
];

function Tasks() {
  const [buttons, setButtons] = useState(
    TASKS.map((task) => ({
      id: task.id,
      isLoading: false,
      text: task.button,
    }))
  );

  const handleClick = (id) => {
    setButtons((prevButtons) =>
      prevButtons.map(
        (button) =>
          button.id === id
            ? { ...button, isLoading: true, text: "Verfying..." }
            : button
      )
    );

    setTimeout(() => {
      setButtons((prevButtons) =>
        prevButtons.map(
          (button) =>
            button.id === id
              ? { ...button, isLoading: false, text: "Claim!" }
              : button
        )
      );
    }, 2000);
  };

  return (
    <>
      <InvitePage title={'Earn Points Per Task'} message={'Get rewarded for completing tasks! Earn points and level up as you complete more tasks and unlock exciting rewards.'}/>
      <div className="container mx-auto px-4 md:px-8">
        <div style={{ backgroundColor: "#1B0B29" }}>
          {TASKS.map((item) => {
            const buttonState = buttons.find((button) => button.id === item.id);

            return (
              <motion.div
                key={item.id}
                style={{ backgroundColor: "#1B0B29" }}
                className="px-2 hover:bg-gradient-to-r from-yellow-800/50 via-transparent to-transparent border-white hover:border-yellow-600 my-4 md:my-10 border-[1.2px] flex flex-col sm:flex-row items-start sm:items-center mx-auto justify-between rounded-xl md:rounded-3xl text-white"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                  bounce: 0.4
                }}
              >
                <div className="text-left flex items-start sm:items-center flex-col sm:flex-row gap-4 sm:gap-0 p-4 md:p-6 w-full sm:w-auto">
                  <div className="sm:mr-10">
                    {React.cloneElement(item.icon, { size: 24 })}
                  </div>
                  <div className="w-full sm:w-auto">
                    <p className="text-purple-100 font-bold text-sm md:text-base">{item.title}</p>
                    {item.body && (
                      <p className="text-left w-full sm:w-[30rem] mt-2 md:mt-3 text-xs">
                        {item.body}
                      </p>
                    )}
                    <p className="text-left text-xs mt-2">{item.number}</p>
                  </div>
                </div>
                <motion.button
                  disabled={buttonState.isLoading}
                  className={`px-4 py-2 transition-colors duration-200 text-xs font-bold rounded-md mx-4 sm:mr-5 mb-4 sm:mb-0 w-[calc(100%-2rem)] sm:w-22 h-10 ${
                    buttonState.isLoading
                      ? "bg-gray-400 cursor-not-allowed text-purple-800"
                      : buttonState.text === 'Claim!'
                        ? "bg-green-950 text-green-600"
                        : "hover:text-white bg-purple-600"
                  }`}
                  onClick={() => handleClick(item.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 15,
                    bounce: 0.4
                  }}
                >
                  {buttonState.text}
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Tasks;
