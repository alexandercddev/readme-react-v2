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
                        <img alt={'icon' + index} width="35" height="35" src={item.icon}></img>
                    </a>
                </li>)
            })}
        </ul>
    );
}

const ProgressBar = ({ progress, name, color}) => {
    const [value, setValue] = useState(0);
    const [number, setNumber] = useState(0);
    const load = () => {
        while (value < progress) {
            return new Promise((resolve, reject) => {
                setTimeout(() => { 
                    setValue(value + 1)
                    resolve(value); 
                }, 50);
            }).then(res => res);
        } 
    }
    load();
    return (
        <>
            <span className="span__routes">{`${name} ${value}%`}</span>
            <div 
            className={`technology__progress progress-bar-striped color__${color}`}
            style={{width: `${value}%`}}>

            </div>
        </> 
    );
}

export function Technology (props) { 
    const { item, index } = props; 
    const handleWindows = (url) => {
        window.open(url)
    } 
    const isNew = (isNew) => (!isNew ? <span className="span__new">new</span> : null) 
    
    return (
        <div className="box__routes">
            <img className="technology__img" alt={item.name} src={item.src}></img>
            <div className="technology__content"> 
                <ProgressBar progress={item.value} name={item.name} color={item.color}/>
            </div>
        </div>
    );
}

export default Link;