import './WelcomePage.css'
import '../App.css'
import {useState} from "react";

const bgpic = require('../images/bgpic.png');

export default function WelcomePage(){
    const initialName = 'Itaypoo'
    const [name, setName] = useState(initialName)
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const nameAnim = () => {
        let text = ''
        let times = 0
        const delay = 70

        const id = setInterval(() =>{
            times += 1
            text = ''
            for(let i = 0; i<initialName.length; i++){
                let at = times + i
                if(at >= initialName.length) {at -= initialName.length}
                text += initialName[at]
            }
            setName(text)
            if(times > initialName.length-1) {
                clearInterval(id)
                setName(initialName)
            }
        }, delay)
    }

    return (
        <>
            <div className={"container"}>

                <div className={"column"}>
                    <h1 onMouseEnter={nameAnim}> {name}</h1>
                    <h2>Fullstack Developer</h2>
                    <button className={"projects-button"}>View Projects</button>
                </div>

                <div className={"column wave-anim"}>
                    <img src={bgpic} className={"bg-pic"}/>
                </div>

            </div>
        </>
    )
}