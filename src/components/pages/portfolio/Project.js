import React from "react";
import './Project.css';

const Project = (props)=>{

    return (
        <div>
            <h2>{props.title}</h2>
            <img src={props.img.url} alt={props.img.alt}/>
            <p>{props.decs}</p>
        </div>
    );
};

export default Project;