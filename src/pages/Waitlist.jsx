import FriendsSection from "../features/friends/FriendsSection";
import InviteFriends from "../features/friends/InviteFriends";
import InvitePage from "../features/friends/InvitePage";
import MessageBar from "../features/friends/MessageBar";
import Tasks from "../features/friends/Tasks";
import CopyLink from "../features/friends/CopyLink";

function Waitlist() {
  return <div className="bg-[#1B0B29]" >
    
    <InvitePage title={'5,000+ Points Per Referral'} message={'Refer a friend, both get 5k points. if they refer someone, you get 1k more points'}/>

    <div className="container mx-auto">
    <FriendsSection />
    {/* <InviteFriends /> */}
    <MessageBar />
    <Tasks/>
    </div>

  </div>;
}
export default Waitlist;
