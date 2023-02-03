import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import "./App.css"
import ProjectsPage from "./pages/ProjectsPage";

function App() {
    return (<>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,700,0,0" />
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<WelcomePage/>}/>
                <Route path={"/projects"} element={<ProjectsPage/>}/>
            </Routes>
        </BrowserRouter>
    </>);
}

export default App;
