import ProjectCard from "../components/ProjectCard";
import './ProjectsPage.css'

export default function ProjectsPage(){
    const wobbleDesc = "Wobbl is a charming platformer about editing the level while playing it, to your advantage. The level is your playground - use Edit Wands in a selection of colourful levels to help you carve a path."
    const photoblocksDesc = "Share your memories easily with your friends and family with the photoblocks Android app. After you've signed up with your phone number, create a block and invite your friends to join in which you can upload photos that deserve to stay."
    const websiteDesc = "Yes, this website that you're visiting right now. It is made in React and is a test of my React skills. While not being my actual portfolio, I'll probably make an actual one sometime."

    return (
        <div className={"main-div"}>
            <h1 className={"title-text"}>Projects</h1>
            <div className={"projects-div"}>
                <ProjectCard title={"Wobbl - The Lost Wands"} desc={wobbleDesc}/>
                <ProjectCard title={"Photoblocks"} desc={photoblocksDesc}/>
                <ProjectCard title={"This website"} desc={websiteDesc}/>
            </div>
        </div>
    )
}