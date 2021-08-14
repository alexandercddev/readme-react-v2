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

export default Link;