import { useEffect, useState } from "react"

const Stopwatch = () => {

    const [time,setTime] = useState(0)
    const [isRunning,setIsRunning] = useState(false)

    useEffect(()=>{
        let timerId;

       if(isRunning){
        
        timerId = setInterval(()=>{
            setTime((prev)=>prev+10)

        },10)
       }
       else{
        clearInterval(timerId)

       }

        return ()=>clearInterval(timerId)

    },[isRunning])


    const formatTime = (time)=>{

        const ms = `0${(time%1000)/10}`.slice(-2)
        const sec = `0${Math.floor((time/1000)%60)}`.slice(-2)
        const min = `0${Math.floor((time/60000)%60)}`.slice(-2)

        return `${min} : ${sec} : ${ms}`
    }



    return <>
    <h1>Stop watch</h1>
    <h2>current time is  {formatTime(time)}</h2>
    <button onClick={()=>setIsRunning(true)}>Start</button>
    <button onClick={()=>setIsRunning(false)}>Stop</button>
    </>
}
export default Stopwatch