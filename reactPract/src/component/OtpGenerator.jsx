import { useEffect, useState } from "react"


export const OtpGenerator = ()=>{
    const [otp,setOtp] = useState('')
    const [counter,setCounter] = useState(20)

    const generateOtp = ()=>{
        const newOtp = Math.floor( 1000 + (Math.random() * 9000))
        setOtp(newOtp)
    }

    useEffect(()=>{
        generateOtp()

       let timerId =  setInterval(() => {
            generateOtp()
            setCounter(20)
            
        }, 20000);

       let counterId = setInterval(()=>{
            setCounter((prev)=>prev>0?prev-1:prev)

        },1000)

        return ()=>{
            console.log('going to clr resource')
            clearInterval(counterId)
            clearInterval(timerId)
        }

    },[])

    return <>
    <h1>Your OTP is - {otp}</h1>
    <h2>New Otp generates in - {counter}</h2>
    </>
}