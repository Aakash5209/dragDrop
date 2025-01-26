import { useState } from "react"



const Accordian = ()=>{

    const [activeIndex,setActiveIndex] = useState(null)

    const data = [
        { title:'section 1', des: "this is the section 1"},
        { title:'section 2', des: "this is the section 2"},
        { title:'section 3', des: "this is the section 3"},
        { title:'section 4', des: "this is the section 4"},
    ]

    const handleToggle = (i)=>{
        setActiveIndex(activeIndex===i?null:i)



    }



    return <>
    <h1>hi i m accordian</h1>
    <div className="conatiner">
        {
            data.map((item,index)=>(
                <>
                <button onClick={()=>handleToggle(index)}>
                    {item.title}

                </button>

                {
                activeIndex ===index && ( <p> {item.des}</p>)

                }
                </>
            ))
        }

    </div>
    </>
}

export default Accordian