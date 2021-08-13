/** 
* @author: Alexander Chi
* @description:
* @date: 28/Junio/2021
**/
import React, { useState } from 'react'; 
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { Router, Route, browserHistory } from 'react-router';
import * as Constants from '../utils/Information';


export function Portfolio (props) { 
    const pathName = window.location.pathname;
    const [active, setActive] = useState(''); 
    const [viewActive, setViewActive] = useState(pathName === '/links' ? Constants.navigations[2] : Constants.navigations[0]);
    const [socialMedial, setSocialMedial] = useState(pathName !== '/links'); 
    const handleClick = () => {
        if(active === '')
            setActive('active');
        else
            setActive('');
    } 
    const handleWindows = (url, index) => {
        window.open(url);
    } 
    const handleContent = (index) => { 
        const { key } = Constants.navigations[index];
        setViewActive(Constants.navigations[index]);
        setActive('');
        setSocialMedial( key !== 'routes' && key !== 'projects'  );
    }

    return (
        <>
            <section 
                className={'banner ' + active} 
                id="sec" 
                style={{
                    backgroundImage: `url("./img/${viewActive.background ?? "background.jpg"}")` 
                }}
                >
                <header>
                    <a onClick={() => {handleContent(0)}} className="logo" >
                        <img className="img__logo__banner" src="./img/profile.jpg" ></img>
                    </a>
                    <div id="toggle" onClick={handleClick}>
                        <div className="toggle__md"></div>
                    </div>
                </header>
                {viewActive.component}
                {socialMedial && (
                    <ul className="social__medial">
                        {Constants.routes.map((item, index) => {
                            return (<li key={'icon' + index}>
                                <a onClick={() => { handleWindows(item.url, index) }}>
                                    <img width="35" src={item.icon}></img>
                                </a>
                            </li>)
                        })}
                    </ul>
                )}
            </section>
            <div id="navigation" className={active}>
                <ul>
                    {Constants.navigations.map((item, index) => {
                        return (<li key={item.key}>
                            <a onClick={() => { handleContent(index) }}>
                                {item.name}
                            </a>
                        </li>)
                    })}
                </ul>
            </div>
        </>
    );
}

export default Portfolio;