/** 
* @author: Alexander Chi
* @description:
* @date: 30/Junio/2021
**/
import React, { useState } from 'react'; 
import * as Constants from '../utils/Information'; 

export function Projects (props) {
    let { projects } = Constants; 
    const len = projects.length/100;
    const handleWindows = (url) => { window.open(url) } 

    return (
        <div className="body">
            <div className="container__projects_v2"> 
                {projects.map((item, index) => {
                    return <div className="projects__card" key={item.key}>
                        <img 
                            alt={item.key} 
                            src={item.img}
                            onClick={() => {handleWindows(item.urls[0].value)}}
                            ></img>
                        <h4 className="projects__title">{item.title}</h4>
                        <p className="projects__description">{item.description}</p>
                        <div className="projects__btns">
                            {item.urls.map((url, index) => { 
                                return <a key={`url-${index}`} className="projects__url" onClick={() => {handleWindows(url.value)}}>{url.text}</a>
                            })} 
                        </div> 
                    </div>
                 })}
            </div>
        </div>
    );
}

export default Projects;