import React from "react";

function PhotoCard(props) {
    console.log(props);

    const media = props.media;

    return (
        <div>
            <h2>{props.title}</h2>

            { media === "image" ? <img src={props.url} style={{ maxWidth: "50%" }} />
            : <iframe src={props.url} width="500" height="300"></iframe>
            }
            <div>{props.date}</div>
            <p style={{ margin: "auto", width: "80%" }}>
                {props.explanation}
            </p>
        </div>
    );
}

export default PhotoCard;