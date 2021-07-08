/** 
* @author: Alexander Chi
* @description:
* @date: 03/Julio/2021
**/
import React, { useState } from 'react';  

export function Links (props) {
    const { routes, moreRoutes } = props; 
    const handleWindows = (url) => {
        window.open(url)
    } 

    return (
        <> 
            <div className="body__routes">
                <div className="container__routes"> 
                    <div className="content__logo">
                        <img className="img__logo" src="./img/profile.jpg" ></img>
                    </div>
                    <div className = "content __links"> 
                        <p>@<span className="name">alexandercds</span></p>
                        <p className="box__routes" style={{textAlign: 'justify'}}>
                            Developer frontend y backend lo que muchos conocen como 
                            Developer Fullstack con más de 3 años de experiencia en el mundo del 
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
                    {moreRoutes.map((item, index) => {
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