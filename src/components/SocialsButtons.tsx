import './SocialsButtons.css'

const githubLogo = require('../images/github.png');
const twitterLogo = require('../images/twitter.png');
const youtubeLogo = require('../images/youtube.png');
export default function SocialsButtons(){
    const githubLink = "https://github.com/itaypoo"
    const twitterLink = "https://twitter.com/itaypooDev"
    const youtubeLink = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"

    return (
        <div className={"socials-position"}>
            <div className={"socials-div"}>
                <a href={githubLink}><button className={"icon-button"}><img src={githubLogo} style={{width: '25px'}} alt={"Github Link"}/></button></a>
                <a href={twitterLink}><button className={"icon-button"}><img src={twitterLogo} style={{width: '25px'}} alt={"Github Link"}/></button></a>
                <a href={youtubeLink}><button className={"icon-button"}><img src={youtubeLogo} style={{width: '25px'}} alt={"Github Link"}/></button></a>
            </div>
        </div>
    )
}