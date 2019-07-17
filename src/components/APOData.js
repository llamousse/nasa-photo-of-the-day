import React, { useState, useEffect } from "react";
import axios from "axios";

import Title from "./Title.js";
import Photo from "./Photo.js";
import Copyright from "./Copyright.js";
import Explanation from "./Explanation.js";

export default function APOData() {

    const [title, setTitle] = useState([]);
    const [pic, setPic] = useState([]);
    const [cr, setCr] = useState([]);
    const [ex, setEx] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=K7SdmvHQGueDQQSc6206ptFF9e8HnKllnXaGHITC&date=2012-03-14`)
            .then(res => {
                console.log(res.data);
                
                const photo = res.data.url;
                setPic(photo);

                const theTitle = res.data.title;
                setTitle(theTitle);

                const theEx = res.data.explanation;
                setEx(theEx);

                const theCr = res.data.copyright;
                setCr(theCr);
            })
            .catch(err => {
                console.log('Error: ', err);
            })
    }, []);

    return (
        <div>
            <Title title={title} />
            <Photo pic={pic} />
            <Copyright copyright={cr} />
            <Explanation explain={ex} />
        </div>
    );
}