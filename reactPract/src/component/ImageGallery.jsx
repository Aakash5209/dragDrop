import { useState } from "react"



const ImageGallery = ()=>{

   
    const ImagesUrl = [
        'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
        'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
        'https://fastly.picsum.photos/id/14/2500/1667.jpg?hmac=ssQyTcZRRumHXVbQAVlXTx-MGBxm6NHWD3SryQ48G-o'
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const handleNext = ()=>{
        setCurrentIndex((currentIndex+1)% ImagesUrl.length)

        
    }
    const handleprev = ()=>{
        setCurrentIndex((currentIndex-1 + ImagesUrl.length)% ImagesUrl.length)

    }

    return <>
    <h1>i m gallery</h1>
    <div >
        <img src={ImagesUrl[currentIndex]} alt="random IMg" height='200px' width='200px'/>
        <h1>current index- {currentIndex}</h1>
        <button onClick={handleNext}>Next</button>
        <button onClick={handleprev}>Prevoius</button>

    </div>
    </>
}

export default ImageGallery