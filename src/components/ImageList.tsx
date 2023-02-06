import "./ImageList.css"
import React, {useState} from "react";

type props = {
    list: Array<string>
}

export default function ImageList(props: props){
    const [popupImage, setPopupImage] = useState('')
    let lastImage = ''

    if(popupImage !== lastImage){
        lastImage = popupImage
        document.documentElement.style.setProperty("--popup-opacity", "1")
        document.documentElement.style.setProperty("--popup-z", "5")
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
        </>
    )
}