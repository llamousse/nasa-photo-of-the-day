import React from "react";
import { Container, Title, Image, Video, Date, Explanation } from "./StyledWidgets.js";

function PhotoCard(props) {
    console.log(props);

    const media = props.media;

    return (
        <Container>
            <Title>{props.title}</Title>

            { media === "image" 
            ? 
                <Image src={props.url} alt="NASA's Img of the Day" />
            :   
                <Video src={props.url} width="500" height="300"></Video>
            }

            <Date>Date: {props.date}</Date>
            
            <Explanation>
                {props.explanation}
            </Explanation>

        </Container>
    );
}

export default PhotoCard;