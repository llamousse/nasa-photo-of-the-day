import React from "react";
import { Title, Image, Video, Explanation } from "./StyledWidgets.js";

function PhotoCard(props) {
    console.log(props);

    const media = props.media;

    return (
        <div>
            <Title>{props.title}</Title>

            { media === "image" 
            ? 
                <Image src={props.url} alt="NASA's Img of the Day" />
            :   
                <Video src={props.url} width="500" height="300"></Video>
            }

            <div>{props.date}</div>
            
            <Explanation>
                {props.explanation}
            </Explanation>

        </div>
    );
}

export default PhotoCard;