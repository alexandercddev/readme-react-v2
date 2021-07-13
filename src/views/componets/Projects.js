/** 
* @author: Alexander Chi
* @description:
* @date: 30/Junio/2021
**/
import React, { useState } from 'react'; 

export function Projects (props) {
    let { projects } = props; 
    const handleWindows = (url) => { window.open(url) } 

    return (
        <div className="body">
            <div className="container__projects"> 
                {projects.map((item, index) => {
                    return <a className="box__projects" onClick={() => {handleWindows(item.url)}} key={item.key}>
                        <div className="content__projects">
                            <img className="img__projects" width="250" src={"./img/projects/" + item.img}></img>
                            <p className="p_projects">{item.description}</p> 
                        </div>
                    </a>
                 })}
            </div>
        </div>
    );
}

export default Projects;