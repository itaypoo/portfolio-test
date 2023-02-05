import {useParams} from "react-router";
import ImageList from "../components/ImageList";
import './ViewProjectsPage.css'

const wobblImg1: string = "https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg"
const wobblImg2: string = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
const wobblImg3: string = "https://www.purina.co.uk/sites/default/files/2020-12/Cat%20Hunting%20BehavioursHERO.jpg"

export default function ViewProjectPage(){
    const { projectname } = useParams()

    const list = [wobblImg1, wobblImg2, wobblImg3,wobblImg1, wobblImg2, wobblImg3,wobblImg1, wobblImg2, wobblImg3,wobblImg2, wobblImg3,wobblImg1, wobblImg2, wobblImg3,]
    const linkIcon = require("../images/link.png")

    let title: string = "hello world"
    let desc: string = "project description project description project description"
    let platformIcon
    let platform
    let madeWithIcon
    let madeWith
    let linkText

    switch (projectname) {
        case "wobbl": {
            title = "Wobbl - The Lost Wands"
            desc = "Wobbl is a charming platformer about editing the level while playing it, to your advantage. The level is your playground - use Edit Wands in a selection of colourful levels to help you carve a path."

            platformIcon = require("../images/keyboard.png")
            platform = "PC"
            madeWithIcon = require("../images/godot-icon.png")
            madeWith = "Godot (GDscript)"
            linkText = "Download Demo"
            break
        }
        case "photoblocks": {
            title = "Photoblocks"
            desc = "Share your memories easily with your friends and family with the photoblocks Android app. After you've signed up with your phone number, create a block and invite your friends to join in which you can upload photos that deserve to stay."

            platformIcon = require("../images/android.png")
            platform = "Android"
            madeWithIcon = require("../images/android-studio.png")
            madeWith = "Android Studio (Kotlin)"
            linkText = "Github Repo"
            break
        }
        case "website": {
            title = "This Website"
            desc = "Yes, this website that you're visiting right now. It is made in React and is a test of my React skills. While not being my actual portfolio, I'll probably make an actual one sometime."

            platformIcon = require("../images/web.png")
            platform = "Web"
            madeWithIcon = require("../images/react.png")
            madeWith = "React (Typescript)"
            linkText = "Github Repo"
            break
        }
    }

    return (
        <>
            <div className={"main-div2"}>
                <div className={"grid-vertical"}>
                    <div className={"grid-item"}>
                        <ImageList  list={list}/>
                    </div>
                    <div className={"grid-item"}>
                        <div className={"overflow-hider left"}/>
                        <div className={"overflow-hider right"}/>
                        <h1 className={"project-title"}>{title}</h1>
                        <span className={"project-desc"}>{  desc}</span>
                    </div>

                    <div className={"grid-item details-card-container"}>

                        <div className={"project-details-card"}>
                            <span className={"card-title"}>Platform</span>
                            <br/>
                            <span> <img src={platformIcon}/> {platform} </span>
                        </div>

                        <div className={"project-details-card"}>
                            <span className={"card-title"}>Made With</span>
                            <br/>
                            <span> <img src={madeWithIcon}/> {madeWith} </span>
                        </div>

                        <div className={"project-details-card"}>
                            <span className={"card-title"}>Links</span>
                            <br/>
                            <span> <img src={linkIcon}/> {linkText} </span>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}