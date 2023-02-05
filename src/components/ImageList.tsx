import "./ImageList.css"
import React, {useState} from "react";

type props = {
    list: Array<string>
}

export default function ImageList(props: props){
    const [popupImage, setPopupImage] = useState('')
    let imagePos = 0
    let lastImage = ''

    if(popupImage !== lastImage){
        lastImage = popupImage
        document.documentElement.style.setProperty("--popup-opacity", "1")
        document.documentElement.style.setProperty("--popup-z", "5")
    }

    const moveRight = () => {
        imagePos -= 15
        document.documentElement.style.setProperty("--image-pos", imagePos + "vw")
    }
    const moveLeft = () => {
        imagePos += 15
        document.documentElement.style.setProperty("--image-pos", imagePos + "vw")
    }

    const onImageClick = (link: string) => {
        setPopupImage(link)
    }
    const hidePopup = () => {
        document.documentElement.style.setProperty("--popup-opacity", "0")
        document.documentElement.style.setProperty("--popup-z", "-1")
    }

    return(
        <>
            <div className={"image-popup-container"}>
                <img src={popupImage} className={"image-popup"}/>
                <button className={"close-button"} onClick={hidePopup}>X</button>
            </div>
            <div className={"images-container"}>
                {
                    props.list.map((link, i) => {
                        return <img className={"image"} src={link} key={i} onClick={() => {onImageClick(link)} }/>
                    })
                }
            </div>
            <button className={"move-button right"} onClick={moveRight}>
                <span className={"material-symbols-rounded flip"}>arrow_back</span>
            </button>
            <button className={"move-button left"} onClick={moveLeft}>
                <span className={"material-symbols-rounded"}>arrow_back</span>
            </button>
        </>
    )
}