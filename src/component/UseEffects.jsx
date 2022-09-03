import React, { useState, useEffect } from "react";

function UseEffects() {
    const [res, setRes] = useState("posts");
    const [item, setItems] = useState([]);
    // useEffect(()=>{
    //   console.log("rendered")
    // },[res])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${res}`)
            .then((response) => response.json())
            .then((json) => setItems(json));
    }, [res]);
    return (
        <>
            <div>
                <button
                    className="btn btn-primary "
                    style={{ "margin-left": "1rem", marginTop: "1rem" }}
                    onClick={() => setRes("posts")}
                >
                    posts
                </button>
                <button
                    className="btn btn-primary"
                    style={{ "margin-left": "1rem", marginTop: "1rem" }}
                    onClick={() => setRes("users")}
                >
                    user
                </button>
                <button
                    className="btn btn-primary"
                    style={{ "margin-left": "1rem", marginTop: "1rem" }}
                    onClick={() => setRes("comments")}
                >
                    comment
                </button>
            </div>
            <div
                style={{
                    "margin-left": "1rem",
                    marginTop: "1rem",
                    fontSize: "5rem",
                    fontWeight: "bold",
                }}
            >
                {res}
            </div>
            {item.map((halo) => {
                return <pre>{JSON.stringify(halo)}</pre>;
            })}
        </>
    );
}

export default UseEffects;
