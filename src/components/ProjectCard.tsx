import './ProjectsCard.css'
import {useNavigate} from "react-router";

type ProjectCardProps = {
    title: string,
    desc: string,
    href: string
}
export default function ProjectCard(props: ProjectCardProps){
    const navigate = useNavigate()

    return(
        <>
            <div className={"card-div project-card"} onClick={() => {navigate(props.href)}}>
                <div>
                    <span className={"title"}>{props.title}</span>
                    <br/>
                    <br/>
                    <span>{props.desc}</span>
                </div>
                <div className={"arrow-div"}>
                    <span className="material-symbols-rounded flip">arrow_back</span>
                </div>
            </div>
        </>
    )
}