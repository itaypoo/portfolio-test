import {useParams} from "react-router";
import ImageList from "../components/ImageList";
import './ViewProjectsPage.css'

const wobblImg1: string = require("../images/project-images/wobbl1.png")
const wobblImg2: string = require("../images/project-images/wobbl2.png")
const wobblImg3: string = require("../images/project-images/wobbl3.png")
const wobblImg4: string = require("../images/project-images/wobbl4.png")
const wobblImg5: string = require("../images/project-images/wobbl5.png")

export default function ViewProjectPage(){
    const { projectname } = useParams()

    const list = [wobblImg1, wobblImg2, wobblImg3, wobblImg4, wobblImg5, wobblImg1, wobblImg2, wobblImg3, wobblImg4, wobblImg5, ]
    const linkIcon = require("../images/link.png")

    let title: string = "hello world"
    let desc: string = "project description project description project description"
    let platformIcon
    let platform
    let madeWithIcon
    let madeWith
    let linkText
    let linkHref

    switch (projectname) {
        case "wobbl": {
            title = "Wobbl - The Lost Wands"
            desc = "Wobbl is a charming platformer about editing the level while playing it, to your advantage. The level is your playground - use Edit Wands in a selection of colourful levels to help you carve a path."

            platformIcon = require("../images/keyboard.png")
            platform = "PC"
            madeWithIcon = require("../images/godot-icon.png")
            madeWith = "Godot (GDscript)"
            linkText = "Download Demo"
            linkHref = "https://store.steampowered.com/app/1919770/Wobbl__The_Lost_Wands/"
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
            linkHref = "https://github.com/itaypoo/photoblocks"
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
            linkHref = "https://github.com/itaypoo/portfolio-test"
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
                            <a href={linkHref}> <img src={linkIcon}/> {linkText} </a>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}