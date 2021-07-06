/** 
* @author: Alexander Chi
* @description:
* @date: 28/Junio/2021
**/
import React, { useState } from 'react'; 
import { useParams } from 'react-router-dom';
import { Home } from './componets/Home';
import { Projects } from './componets/Projects';
import { AboutMe } from './componets/AboutMe';
import { Contact } from './componets/Contact';
import { Links } from './componets/Links';

const routes = [
    {
        name: 'Tiktok',
        icon: './svg/tiktok-icon.svg',
        url: 'https://www.tiktok.com/@alexandercds?',
        userName: 'alexandercds',
    },
    {
        name: 'YouTube',
        icon: './svg/youtube-icon.svg',
        url: 'https://www.youtube.com/channel/UCmXXKj2lTr8J1zh3KCTj2XQ?sub_confirmation=1',
        userName: 'Alexander CDs',
    },
    {
        name: 'Github',
        icon: './svg/github-icon.svg',
        url: 'https://github.com/AlexanderCDs',
        userName: 'AlexanderCDs',
    },
    {
        name: 'Instagram',
        icon: './svg/instagram-icon.svg',
        url: 'https://www.instagram.com/alexander_cd/?hl=es-la',
        userName: 'alexander_cd',
    },
    {
        name: 'Twitch',
        icon: './svg/twitch-purple.svg',
        url: 'https://www.twitch.tv/arthurreset',
        userName: 'ArthurReset',
    },
];

let navigations = [
    {
        key: 'home', 
        name: 'Home',  
        component: <Home/>
    },
    {
        key: 'about-me',
        name: 'Sobre mí', 
        component: <AboutMe/>  
    },
    {
        key: 'routes',
        name: 'Links', 
        component: <Links routes={routes}/>
    },
    {
        key: 'projects',
        name: 'Proyectos',  
        component: <Projects/>
    },
    {
        key: 'contact',
        name: 'Contacto',   
        component: <Contact/>
    },
    /*{
        key: 'language',
        name: 'Language', 
        items: [
            {
                key: 'es',
                name: 'Español', 
                active: true
            },
            {
                key: 'en',
                name: 'Ingles', 
                active: true
            }
        ]
    },*/
];

export function Portfolio (props) { 
    const pathName = window.location.pathname;
    const [active, setActive] = useState(''); 
    const [viewActive, setViewActive] = useState(pathName === '/links' ? navigations[2] : navigations[0]);
    const [socialMedial, setSocialMedial] = useState(pathName !== '/links'); 
    const handleClick = () => {
        if(active === '')
            setActive('active');
        else
            setActive('');
    } 
    const handleWindows = (url) => {
        window.open(url);
    } 
    const handleContent = (index) => { 
        const { key } = navigations[index];
        setViewActive(navigations[index]);
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
                        <img className="img__logo__banner" src="./img/logo.png" ></img>
                    </a>
                    <div id="toggle" onClick={handleClick}></div>
                </header>
                {viewActive.component}
                {socialMedial && (
                    <ul className="social__medial">
                        {routes.map((item, index) => {
                            return (<li key={'icon' + index}>
                                <a onClick={() => { handleWindows(item.url) }}>
                                    <img width="35" src={item.icon}></img>
                                </a>
                            </li>)
                        })}
                    </ul>
                )}
            </section>
            <div id="navigation" className={active}>
                <ul>
                    {navigations.map((item, index) => {
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