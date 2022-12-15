import React from "react";
import "./Home.css";
import castle from "../castle.png";

const Home = () => {
    return (
        <div>
            <img src={castle} className="castle-image" alt="castle" />
            <h1>The Why</h1>
            <h3>
                This page was created with the purpose of learning React. It's something simple, but done with love.
                This is a work that will be improved, because I know that there is still a lot to learn.
            </h3>
            <h3>
                The API chosen to be used was https://harry-potter-api-en.onrender.com/.
            </h3>
        </div>


    )
}
export default Home;