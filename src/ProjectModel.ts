  export class ProjectModel {
      constructor(title: string, description: string, imageList: string[], platformName: string, platformIcon: string, madeWithName: string, madeWithIcon: string, linkName: string, linkRef: string) {
          this.title = title;
          this.description = description;
          this.imageList = imageList;
          this.platformName = platformName;
          this.platformIcon = platformIcon;
          this.madeWithName = madeWithName;
          this.madeWithIcon = madeWithIcon;
          this.linkName = linkName;
          this.linkRef = linkRef;
      }

      title: string;
    description: string;
    imageList: string[];
    platformName: string;
    platformIcon: string;
    madeWithName: string;
    madeWithIcon: string;
    linkName: string;
    linkRef: string;
}


export const wobblProjectModel = new ProjectModel(
    "Wobbl - The Lost Wands",
    "Wobbl is a charming platformer about editing the level while playing it, to your advantage. The level is your playground - use Edit Wands in a selection of colourful levels to help you carve a path.",
[require("./images/project-images/wobbl1.png"), require("./images/project-images/wobbl2.png"), require("./images/project-images/wobbl3.png"), require("./images/project-images/wobbl4.png"), require("./images/project-images/wobbl5.png"), require("./images/project-images/wobbl1.png"), require("./images/project-images/wobbl2.png"), require("./images/project-images/wobbl3.png"), require("./images/project-images/wobbl4.png"), require("./images/project-images/wobbl5.png")],
    "PC",
    require("./images/keyboard.png"),
    "Godot (GDScript)",
    require("./images/godot-icon.png"),
    "Donwload Demo",
    "https://store.steampowered.com/app/1919770/Wobbl__The_Lost_Wands/"
  )

export const photoblocksProjectModel = new ProjectModel(
  "Photoblocks",
  "Share your memories easily with your friends and family with the photoblocks Android app. After you've signed up with your phone number, create a block and invite your friends to join in which you can upload photos that deserve to stay.",
  [require("./images/project-images/photoblocks1.png"), require("./images/project-images/photoblocks3.png"), require("./images/project-images/photoblocks4.png"), require("./images/project-images/photoblocks5.png"), require("./images/project-images/photoblocks1.png"), require("./images/project-images/photoblocks3.png"), require("./images/project-images/photoblocks4.png"), require("./images/project-images/photoblocks5.png")],
  "Android",
  require("./images/android.png"),
  "Android Studio (Kotlin)",
  require("./images/android-studio.png"),
  "Github Repository",
  "https://github.com/itaypoo/photoblocks"
)

  export const websiteProjectModel = new ProjectModel(
      "This Website",
      "This website that you're currently visiting right now. It is made in React and is a test of my React skills. While not being my actual portfolio, I'll probably make an actual one sometime.",
      [require("./images/project-images/website1.png"), require("./images/project-images/website2.png"), require("./images/project-images/website3.png"), require("./images/project-images/website4.png"), require("./images/project-images/website1.png"), require("./images/project-images/website2.png"), require("./images/project-images/website3.png"), require("./images/project-images/website4.png")],
      "Web",
      require("./images/web.png"),
      "React (Typescript)",
      require("./images/react.png"),
      "Github Repository",
      "https://github.com/itaypoo/portfolio-test"
  )