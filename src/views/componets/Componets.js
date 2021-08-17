/** 
* @author: Alexander Chi
* @description:
* @date: 12/Julio/2021
**/
import React, { useState } from 'react';  

export function Link (props) {
    const { item, index } = props; 
    const handleWindows = (url) => {
        window.open(url)
    } 
    const isNew  = (isNew) => {
        return (isNew 
            ? <span className="span__new">new</span>
            : null
        )
    }

    return (
        <> 
            <a onClick={() => { handleWindows(item.url) }} className="box__routes" key={"route" + index}> 
                <div className="content__routes">
                    <img alt={item.name} src={item.icon}></img>
                    <span className="span__routes">{item.name} {isNew(item.isNew)}</span>
                </div>
            </a>
        </>
    );
}

export function SocialMedial(props) {
    const {routes} = props; 
    const handleWindows = (url, index) => window.open(url); 
    return (
        <ul className="social__medial">
            {routes.map((item, index) => { 
                return (<li key={'icon' + index}>
                    <a onClick={() => { handleWindows(item.url, index) }}>
                        <img alt={'icon' + index} width="35" src={item.icon}></img>
                    </a>
                </li>)
            })}
        </ul>
    );
}
export default Link;