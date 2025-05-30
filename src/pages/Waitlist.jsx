import FriendsSection from "../features/friends/FriendsSection";
import InviteFriends from "../features/friends/InviteFriends";
import InvitePage from "../features/friends/InvitePage";
import MessageBar from "../features/friends/MessageBar";
import Tasks from "../features/friends/Tasks";
import CopyLink from "../features/friends/CopyLink";
import Login from "../features/friends/AirdropSignin";
import Signup from "../features/friends/AirdropSignup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Waitlist() {
  return (
    <div className="bg-[#1B0B29] min-h-screen relative font-main">      {/* Dotted background pattern with fade out */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_2px,transparent_2px)] bg-[length:20px_20px] [mask-image:linear-gradient(to_bottom,white,transparent_120vh)]" />
      
      {/* Content */}
      <div className="relative z-10 mx-auto pb-5">
        <Routes>
          <Route path="/" element={<FriendsSection />} />
          {/* <Route path="/invite" element={<InviteFriends />} /> */}
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/friends" element={<FriendsSection />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />        
        </Routes>
      </div>
    </div>
  );
}

export default Waitlist;
