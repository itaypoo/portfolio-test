import {useParams} from "react-router";
import ImageList from "../components/ImageList";
import './ViewProjectsPage.css'
import * as pmodels from "../ProjectModel";

const linkIcon: string = require("../images/link.png")

export default function ViewProjectPage(){
    const { projectname } = useParams()

    let project: pmodels.ProjectModel = pmodels.wobblProjectModel

    switch (projectname) {
        case "wobbl": {
            project = pmodels.wobblProjectModel
            break
        }
        case "photoblocks": {
            project = pmodels.photoblocksProjectModel
            break
        }
        case "website": {
            project = pmodels.websiteProjectModel
            break
        }
    }

    return (
        <>
            <div className={"main-div2"}>
                <div className={"grid-vertical"}>
                    <div className={"grid-item"}>
                        <ImageList  list={ project.imageList }/>
                    </div>
                    <div className={"grid-item"}>
                        <div className={"overflow-hider left"}/>
                        <div className={"overflow-hider right"}/>
                        <h1 className={"project-title"}>{ project.title }</h1>
                        <span className={"project-desc"}>{ project.description }</span>
                    </div>

                    <div className={"grid-item details-card-container"}>

                        <div className={"project-details-card"}>
                            <span className={"card-title"}>Platform</span>
                            <br/>
                            <span> <img src={ project.platformIcon }/> { project.platformName } </span>
                        </div>

                        <div className={"project-details-card"}>
                            <span className={"card-title"}>Made With</span>
                            <br/>
                            <span> <img src={ project.madeWithIcon }/> { project.madeWithName } </span>
                        </div>

                        <div className={"project-details-card"}>
                            <span className={"card-title"}>Links</span>
                            <br/>
                            <a href={ project.linkRef }> <img src={linkIcon}/> { project.linkName } </a>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}