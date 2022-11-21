import React from "react";

function Card1(props){
    return (
        <div>
            <h1>Class Component</h1>
            <h2>{ props.name }</h2>
            <p>{ props.desc }</p>
        </div>
    );
};

export default Card1;
