import React from "react";
import "./Home.css";
import castle from "../castle.png";

const Home = () => {
    return (
        <div>
            <img src={castle} className="castle-image" alt="castle" />
        </div>
    )
}
export default Home;