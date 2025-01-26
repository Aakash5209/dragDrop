import { useState } from "react"
import './modal.css'


const Modal = () =>{

    const [isOpen, setIsOpen] = useState(false)



    return <>
    {/* <h1>i m modal</h1> */}
    <div className="madalContainer">
        <button onClick={()=>setIsOpen(true)}> Open Modal</button>
        {
            isOpen && (
                <div className="modalOverlay" onClick={()=>setIsOpen(false)}>

                    <div className="modal" onClick={(e)=>e.stopPropagation()}>
                        <h1> modal title</h1>
                        <p>this is the modal</p>
                        <button onClick={()=>setIsOpen(false)}> Close</button>
                    </div>

        
                </div>
            )
        }

    </div>
    </>
}

export default Modal