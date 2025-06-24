
import SignIn from '../features/users/SignIn'
import SignUp from '../features/users/SignUp'
import { useState } from 'react'
import VerifyEmail from '../features/users/VerifyEmail'
import Forgot from '../features/users/ForgotPassword'
import SetNewPassword from '../features/users/SetNewPassword'
import Congratulation from '../features/agents/Congratulation'

function Earn() {
  const [isSignIn, setIsSignIn] = useState(true)

  return (
    <div>
      <SignIn />  
      <SignUp />
      <SetNewPassword />
      <Forgot />
      <VerifyEmail />
       
    </div>
  )
}

export default Earn
