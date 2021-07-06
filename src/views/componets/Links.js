/** 
* @author: Alexander Chi
* @description:
* @date: 03/Julio/2021
**/
import React, { useState } from 'react'; 

const moreRoutes = [ 
    /*{
        name: 'Twitch',
        icon: './svg/twitch-purple.svg',
        url: 'https://www.twitch.tv/arthurreset',
        userName: 'ArthurReset',
    },
    {
        name: 'Instagram',
        icon: './svg/instagram-icon.svg',
        url: 'https://www.instagram.com/alexander_cd/?hl=es-la',
        userName: 'alexander_cd',
    },*/
];

export function Links (props) {
    const { routes } = props; 
    const handleWindows = (url) => {
        window.open(url)
    } 

    return (
        <> 
            <div className="body__routes">
                <div className="container__routes"> 
                    <div className="content__logo">
                        <img className="img__logo" src="./img/logo.png" ></img>
                    </div>
                    <div className = "content __links"> 
                        <p>@<span className="name">alexandercds</span></p>
                        <p className="box__routes" style={{textAlign: 'justify'}}>
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