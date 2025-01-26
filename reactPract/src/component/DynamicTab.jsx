import { useState } from "react"

const DynamicTab = ()=>{

    const [tabs,setTabs] = useState(['Tab 1'])
    const [activeTab,setActiveTab] = useState(0)




    const handleAddTab = ()=>{
        setTabs([...tabs,`Tab ${tabs.length +1} `])


    }

    const handleRemove = (index)=>{
        if(index==0){
            alert('cannot remove first tab')
        }
        else{
            setTabs(tabs.filter((__,i)=>i!=index))
            setActiveTab(index-1)

        }

        
        


    }




    return <>
    <h1>Dynamic tabs</h1>
    <div>
        <button onClick={handleAddTab}> Add Tab</button>
        <div>
            {
                tabs.map((tab,index)=>(
                    <button
                    onClick = {()=>setActiveTab(index)}
                    style = {{fontWeight:index===activeTab?'bold':'normal'}}
                    
                    >
                        {tab}
                       

                    </button>
                ))
            }

            <button onClick={()=>handleRemove(activeTab)}>Remove</button>



        </div>

        <div> {`you are viewing ${tabs[activeTab]}`}</div>
    </div>


    </>
}

export default DynamicTab