/** 
* @author: Alexander Chi
* @description:
* @date: 28/Junio/2021
**/
import React, { useState } from 'react'; 
import { Home } from './componets/Home';
import { Projects } from './componets/Projects';

const icons = [
    {
        name: 'Tiktok',
        icon: './svg/tiktok-icon.svg',
        url: 'https://www.tiktok.com/@alexandercds?'
    },
    {
        name: 'YouTube',
        icon: './svg/youtube-icon.svg',
        url: 'https://www.youtube.com/channel/UCmXXKj2lTr8J1zh3KCTj2XQ?sub_confirmation=1'
    },
    {
        name: 'Github',
        icon: './svg/github-icon.svg',
        url: 'https://github.com/AlexanderCDs'
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
    },
    {
        key: 'services',
        name: 'Servicios', 
    },
    {
        key: 'projects',
        name: 'Proyectos',  
        component: <Projects/>
    },
    {
        key: 'contact',
        name: 'Contacto',   
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
    const [active, setActive] = useState(''); 
    const [viewActive, setViewActive] = useState(navigations[0])
    const handleClick = () => {
        if(active === '')
            setActive('active')
        else
            setActive('')
    } 
    const handleWindows = (url) => {
        window.open(url)
    } 
    const handleContent = (index) => {
        setViewActive(navigations[index])
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
                    <a href="#" className="logo" >LOGO</a>
                    <div id="toggle" onClick={handleClick}></div>
                </header>
                {viewActive.component}
                <ul className="social__medial">
                    {icons.map((item, index) => {
                        return (<li key={'icon' + index}>
                            <a onClick={() => { handleWindows(item.url) }}>
                                <img width="35" src={item.icon}></img>
                            </a>
                        </li>)
                    })}
                </ul>
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