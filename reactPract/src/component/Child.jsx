import { useEffect, useState } from "react"


export const Child = ()=>{

    const [count, SetCount] = useState(0)
    const [count2, SetCount2] = useState(0)
    


    console.log("Child fxn is exe")

    const handelIncre = ()=>{

       SetCount(count+1)
       SetCount2(count+1)
       

       console.log("count value-",count) // 1
      
       


    }
    console.log("count value is after fxn-", count)
    



    return <div>

    <h1>hi i US {count}</h1>
    <h1>hi i US {count2}</h1>
   
    {/* <h1>hi i m {count}</h1> */}
    <button onClick={handelIncre}>Increment</button>
    </div>
}