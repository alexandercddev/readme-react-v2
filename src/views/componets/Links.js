/** 
* @author: Alexander Chi
* @description:
* @date: 03/Julio/2021
**/
import React, { useState } from 'react'; 

export function Links (props) {
    const { routes } = props; 
    const handleWindows = (url) => {
        window.open(url)
    } 

    return (
        <> 
            <div className="body__routes">
                <div className="container__routes"> 
                    <div className = "content __links">
                        <h2 className="wavy"> 
                            <span style={{'--i': 1}}>B</span>
                            <span style={{'--i': 2}}>i</span>
                            <span style={{'--i': 3}}>e</span>
                            <span style={{'--i': 4}}>n</span>
                            <span style={{'--i': 5}}>v</span>
                            <span style={{'--i': 6}}>e</span>
                            <span style={{'--i': 7}}>n</span>
                            <span style={{'--i': 8}}>i</span>
                            <span style={{'--i': 9}}>d</span>
                            <span style={{'--i': 10}}>o</span>
                            <span style={{'--i': 11}}>.</span>
                            <span style={{'--i': 12}}>.</span>
                            <span style={{'--i': 13}}>.</span>
                        </h2>
                            
                        <h2>I'm <span className="name">Alexander Chi</span></h2>
                        <p>
                            Desarrollador frontend y backend lo que muchos conocen como 
                            fullstack con más de 3 años de experiencia en el mundo del 
                            desarrollo web.
                        </p> 
                    </div>
                    {routes.map((item, index) => {
                        return <a onClick={() => { handleWindows(item.url) }} className="box__routes" key={"route" + index}> 
                            <div className="content__routes">
                                <img src={item.icon}></img>
                                <span className="span__routes">{item.name}</span>
                            </div>
                        </a>
                    })}
                </div>
            </div>
        </>
    );
}

export default Links;