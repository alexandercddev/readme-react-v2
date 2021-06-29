/** 
* @author: Alexander Chi
* @description:
* @date: 28/Junio/2021
**/
import React, { useState } from 'react'; 

const icons = [
    {
        name: 'Tiktok',
        icon: './svg/tiktok-icon.svg',
        url: 'https://www.tiktok.com/@alexandercds?'
    },
    {
        name: 'YouTube',
        icon: './svg/youtube-icon.svg',
        url: 'https://www.youtube.com/channel/UCmXXKj2lTr8J1zh3KCTj2XQ'
    },
    {
        name: 'Github',
        icon: './svg/github-icon.svg',
        url: 'https://github.com/AlexanderCDs'
    },
];

const navigations = [
    {
        key: 'home', 
        name: 'Home', 
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
        key: 'portfolio',
        name: 'Portafolio', 
    },
    {
        key: 'contact',
        name: 'Contacto', 
    },
];

export function Portfolio (props) {
    const [active, setActive] = useState(''); 
    const handleClick = () => {
        if(active === '')
            setActive('active')
        else
            setActive('')
    } 
    const handleWindows = (url) => {
        window.open(url)
    }

    return (
        <>
            <section className={'banner ' + active} id="sec" >
                <header>
                    <a href="#" className="logo" >LOGO</a>
                    <div id="toggle" onClick={handleClick}></div>
                </header>
                <div className = "content">
                    <h2>Hello World,</h2>
                    <h2>I'm <span>Alexander Chi</span></h2>
                    <p>
                        Desarrollador frontend y backend lo que muchos conocen como 
                        fullstack con más de 3 años de experiencia en el mundo del 
                        desarrollo web.
                    </p>
                    <a href="#" >Más información</a>
                </div>
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
                            <a href="#">
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