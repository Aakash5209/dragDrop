import { useState } from "react"
import './lift.css'


export const Elevator = ()=>{

    const [currentFloor,setCurrentFloor] = useState(1)
    const [targerFloor, setTargetFloor] = useState(null)
    const [ isMoving, setIsMoving] = useState(false)

    const floors = [1,2,3,4,5]

    const moveToFloor = (floor)=>{
        if(floor===currentFloor) return
        setTargetFloor(floor)
        setIsMoving(true)

        const timeToMove = Math.abs(floor - currentFloor)*1000

        setTimeout(() => {
            setCurrentFloor(floor)
            setIsMoving(false)

            
        }, timeToMove);



    }



    return <>
    <div className="elevatorContainer">

        <div className="elevatorShaft">

            <div className={`elevator ${isMoving? 'moving': ''}`}

            style={{bottom: `${(currentFloor-1)*20}%`}}
            
            >
                {isMoving? 'Moving...': `Floor ${currentFloor}`}

                

            </div>



        </div>

        <div className="controls">
            {
                floors.map(floor=>(
                    <button
                    onClick={()=>moveToFloor(floor)}
                    disabled = {isMoving}
                    className={floor ===currentFloor?'active' : ''}
                    >
                        {`Go to Floor ${floor}`}

                    </button>
                ))
            }

        </div>

    </div>
    </>
}