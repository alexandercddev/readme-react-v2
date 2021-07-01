/** 
* @author: Alexander Chi
* @description:
* @date: 30/Junio/2021
**/
import React, { useState } from 'react'; 

const items = [
    {
        key: "alexandercd-v2",
        img: "background.jpg",
        description: "Desarrollador frontend y backend lo que muchos conocen como",
    },
    {
        key: "miel-roche",
        img: "background.jpg",
        description: "Desarrollador frontend y backend lo que muchos conocen como",
    },
    {
        key: "alexandercd-v1",
        img: "background.jpg",
        description: "Desarrollador frontend y backend lo que muchos conocen como",
    },
    {
        key: "alexandercd-v21",
        img: "background.jpg",
        description: "Desarrollador frontend y backend lo que muchos conocen como",
    },
    {
        key: "miel-roche1",
        img: "background.jpg",
        description: "Desarrollador frontend y backend lo que muchos conocen como",
    }, 
];

export function Projects (props) {
    const [active, setActive] = useState(''); 
    const handleClick = () => { } 
    const handleWindows = (url) => { window.open(url) } 

    return (
        <div className="body">
            <div className="container__projects"> 
                {items.map((item, index) => {
                    return <div className="box__projects" key={item.key}> 
                        <div className="content__projects">
                            <img width="250" src={"./img/" + item.img}></img>
                            <p>{item.description}</p>
                        </div>
                    </div>
                 })}
            </div>
        </div>
    );
}

export default Projects;