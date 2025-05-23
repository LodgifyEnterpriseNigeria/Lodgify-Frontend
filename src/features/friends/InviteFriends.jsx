import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoTiktok } from "react-icons/io5";
import { useState } from "react";

function InviteFriends() {
  const Tasks = [
    {
      id: 1,
      icon: <FaInstagram size={50} />,
      title: "Follow LodgifyNG on Instagram",
      number: "+5,000 LP",
      button: "Follow",
    },
    {
      id: 2,
      icon: <FiYoutube size={50} />,
      title: "Subscribe to LodgifyNG on YouTube",
      number: "+10,000 LP",
      button: "Subscribe",
    },
    {
      id: 3,
      icon: <BsTwitterX size={40} />,
      title: "Tweet and Mention LodgifyNG",
      number: "+100,000 LP",
      body: "Tweet and mention @LodgifyNG in a post about why you are excited about the platform using our hashtag #getlodgified",
      button: "Go",
    },
    {
      id: 4,
      icon: <IoLogoTiktok size={40} />,
      title: "Like and Share LodgifyNG Post on TikTok",
      number: "+7,000 LP",
      button: "Go",
    },
  ];

  // State to manage each button's loading state and text
  const [buttons, setButtons] = useState(
    Tasks.map((task) => ({
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
            ? { ...button, isLoading: true, text: "Loading..." } // Update the clicked button
            : button // Leave other buttons unchanged
      )
    );

    // Simulate an async operation (e.g., API call)
    setTimeout(() => {
      setButtons((prevButtons) =>
        prevButtons.map(
          (button) =>
            button.id === id
              ? { ...button, isLoading: false, text: "Done!" } // Update the clicked button after loading
              : button // Leave other buttons unchanged
        )
      );
    }, 2000); // Simulate a 2-second delay
  };

  return (
    <div
      style={{ backgroundColor: "#1B0B29" }}
      className="p-3 border-white border-[3px] rounded-2xl m-5"
    ></div>
  );
}

export default InviteFriends;
