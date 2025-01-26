import React, { useEffect, useState } from 'react';


const Counter = () => {

    const [count, setCount] = useState(() => {
        const saveCount = localStorage.getItem('counter')
        return saveCount ? parseInt(saveCount, 10) : 0;
    })

    let obj = { count1: 0 }



    // useEffect(()=>{
    //     ////Added val in LS
    //     console.log("count vale is going to be chnages in LS",count)
    //     localStorage.setItem('counter',count)

    // },[count])



    const handleIncre = () => {
        // setCount(count+1)
        obj.count1++
        console.log(obj.count1)


    }

    const handleDecre = () => {
        if (count === 0) {
            // alert("count cant be -ve")

        }
        else {
            setCount(count - 1)


        }
    }



    return <>
        <h1>counter value - {count}</h1>
        <button onClick={()=>setCount(count + 1) }>Increment</button>
        <button
            onClick={handleDecre}

        >Dcrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
    </>

}
export default Counter