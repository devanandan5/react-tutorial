import React, { useState } from "react";

function Theme() {
    const [theme, setTheme] = useState(false);
    return (
        <div>
            {theme ? (
                <h1 style={{ backgroundColor: "red" }}>hi</h1>
            ) : (
                <h1 style={{ backgroundColor: "green" }}>theme</h1>
            )}
            <button onClick={() => setTheme(false)}>change to green</button>
            <button onClick={() => setTheme(true)}>change to red</button>
        </div>
    );
}

export default Theme;
