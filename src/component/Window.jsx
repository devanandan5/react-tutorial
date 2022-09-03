import React, { useState,useEffect } from "react";

function Window() {
    const [windows, setWindow] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    function handleResize() {
       setWindow(window.innerWidth);
       setWindowHeight(window.innerHeight);
    }
    useEffect(()=>{
       window.addEventListener("resize",handleResize)
       return ()=>{
              window.removeEventListener("resize",handleResize)
       }
    },[])
    return (
        <div>
            <h1>{windows} window width</h1>
            <h1>{windowHeight} window height</h1>
        </div>
    );
}

export default Window;
