import FriendsSection from "../features/airdrop/FriendsSection";
import Tasks from "../features/airdrop/Tasks";
import Login from "../features/airdrop/AirdropSignin";
import Signup from "../features/airdrop/AirdropSignup";
import AirdropHome from "../features/airdrop/AirdropHome";
import VerifyEmail from "../features/airdrop/AirdropVerifyPassword";
import OtpVerify from "../features/airdrop/AirdropOtpVerify";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../lib/ProtectedRoute";
import { useAuth } from "../hooks/useAuthContext";

function Waitlist() {
  const { getUser, isAuthenticated, isLoading } = useAuth();

  const checkAuth = async () => {
    try {
      const result = await getUser();
      console.log('User:', result.user);
      console.log('Is Authenticated:', result.isAuthenticated);
      
      if (result.isAuthenticated) {
        // User is logged in
        console.log('Welcome back,', result.user.fullName);
      } else {
        // User is not logged in
        console.log('Please log in');
      }
    } catch (error) {
      console.error('Error checking auth:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="bg-[#1B0B29] min-h-screen flex items-center justify-center">
        <div className="text-white text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-[#1B0B29] min-h-screen relative font-main">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_2px,transparent_2px)] bg-[length:20px_20px] [mask-image:linear-gradient(to_bottom,white,transparent_120vh)]" />
      <div className="relative z-10 mx-auto pb-5">
          <Routes>
            <Route path="/" element={<AirdropHome />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <FriendsSection />
                </ProtectedRoute>
              }
            />
            <Route
              path="/verify-email"
              element={
                // <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <VerifyEmail />
                // </ProtectedRoute>
              }
            />
            <Route
              path="/verify-otp"
              element={
                // <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <OtpVerify />
                // </ProtectedRoute>
              }
            />
            <Route
              path="/tasks"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Tasks />
                </ProtectedRoute>
              }
            />
            <Route
              path="/friends"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <FriendsSection />
                </ProtectedRoute>
              }
            />
          </Routes>

      </div>
    </div>
  );
}

export default Waitlist;
