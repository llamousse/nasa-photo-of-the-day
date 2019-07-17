import React from "react";

export default function Explanation(props)  {
    return(
        <div>
            <p style={{ width: "90%", margin: "auto", paddingTop: "3%" }}>{props.explain}</p>
        </div>
    );
}