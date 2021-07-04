/** 
* @author: Alexander Chi
* @description:
* @date: 30/Junio/2021
**/
import React, { useState } from 'react'; 

const items = [
    {
        key: "miel-roche",
        img: "miel-roche.jpg",
        description: "Sitio web con WordPress y elementor",
        url: 'https://www.mielroche.com.mx/',
    },
    {
        key: "miel-roched",
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
                    return <a className="box__projects" onClick={() => {handleWindows(item.url)}} key={item.key}>
                        <div className="content__projects">
                            <img width="250" src={"./img/projects/" + item.img}></img>
                            <p>{item.description}</p>
                        </div>
                    </a>
                 })}
            </div>
        </div>
    );
}

export default Projects;