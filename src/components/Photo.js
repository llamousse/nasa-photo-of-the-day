import React from "react";

export default function Photo(props)  {
    return(
        <div>
            <img src={props.pic} alt="NASA img of the day"
                 style={{ maxWidth: "50%" }} />
        </div>
    );
}