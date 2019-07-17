import React, { useState, useEffect } from "react";
import axios from "axios";
import Photo from "./Photo.js";

export default function APOData() {

    const [pic, setPic] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=K7SdmvHQGueDQQSc6206ptFF9e8HnKllnXaGHITC&date=2012-03-14`)
            .then(res => {
                console.log(res.data);
                const photo = res.data.url;
                setPic(photo);
            })
            .catch(err => {
                console.log('Error: ', err);
            })
    }, []);

    return (
        <div>
            <Photo pic={pic} />
        </div>
    );
}