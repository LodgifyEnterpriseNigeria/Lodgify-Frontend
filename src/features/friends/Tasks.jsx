import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoTiktok } from "react-icons/io5";

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
  // State to manage each button's loading state and text
  const [buttons, setButtons] = useState(
    TASKS.map((task) => ({
      id: task.id,
      isLoading: false,
      text: task.button,
    }))
  );

  // Function to handle button click
  const handleClick = (id) => {
    // Update the clicked button's state
    setButtons((prevButtons) =>
      prevButtons.map(
        (button) =>
          button.id === id
            ? { ...button, isLoading: true, text: "Verfying..." } // Update the clicked button
            : button // Leave other buttons unchanged
      )
    );

    // Simulate an async operation (e.g., API call)
    setTimeout(() => {
      setButtons((prevButtons) =>
        prevButtons.map(
          (button) =>
            button.id === id
              ? { ...button, isLoading: false, text: "Claim!" } // Update the clicked button after loading
              : button // Leave other buttons unchanged
        )
      );
    }, 2000); // Simulate a 2-second delay
  };

  return (
    <div
      style={{ backgroundColor: "#1B0B29" }}

    >
      {TASKS.map((item) => {
        // Find the corresponding button state for the current task
        const buttonState = buttons.find((button) => button.id === item.id);

        return (
          <div
            key={item.id}
            style={{ backgroundColor: "#1B0B29" }}
            className="px-2 hover:bg-gradient-to-r from-yellow-800/50 via-transparent to-transparent border-white hover:border-yellow-600 my-10 border-[1.2px] flex items-center w-[65rem] mx-auto justify-between rounded-3xl text-white"
          >
            <div className="text-left flex items-center justify-between p-6">
              <p className="mr-10">
              {item.icon}
              </p>
              <div>
                <p className="text-purple-100 font-bold">{item.title}</p>
                {item.body && (
                  <p className="text-left w-[30rem] mt-3 text-xs">{item.body}</p>
                )}
                <p className="text-left text-xs mt-2">{item.number}</p>
              </div>
            </div>
            <button
              disabled={buttonState.isLoading} // Disable button during loading
              className={`px-4 py-2 transition-colors duration-200 text-xs font-bold rounded-md mr-5 ${
                buttonState.isLoading
                  ? "bg-gray-400 cursor-not-allowed w-22 h-10 text-xs text-purple-800" // Loading state styles
                  : buttonState.text === 'Claim!' ?"w-22 h-10 bg-green-950 text-green-600" 
                  :"hover:text-white w-22 h-10  bg-purple-600 text-xs"
              }`}
              onClick={() => handleClick(item.id)}
            >
              {buttonState.text}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Tasks;
