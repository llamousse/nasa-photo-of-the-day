import React, { useState, useEffect } from "react";
import axios from "axios";

export default function APIData() {

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=K7SdmvHQGueDQQSc6206ptFF9e8HnKllnXaGHITC&date=2012-03-14`)
            .then(res => {
                console.log(res.data);
            });
    }, []);

    return(null);
}