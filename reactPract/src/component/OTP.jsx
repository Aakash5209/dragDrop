import { useState } from "react"


export const OTP = ()=>{
    const [otp,setOtp] = useState('')

   const handleOTP = ()=>{
    const newOtp = Math.floor(1000 + (Math.random()*9000))
    setOtp(newOtp)
   }



    return <>
    <h1>Your OTP is  {otp}</h1>
    <button onClick={handleOTP}>Generate Otp</button>
    </>
}