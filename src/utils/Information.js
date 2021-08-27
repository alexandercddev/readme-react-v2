/** 
* @author: Alexander Chi
* @description:
* @date: 28/Junio/2021
**/ 
import React, { lazy } from 'react';
import tiktok from '../assets/svg/tiktok-icon.svg';
import youtube from '../assets/svg/youtube-icon.svg';
import github from '../assets/svg/github-icon.svg';
import instagram from '../assets/svg/instagram-icon.svg';
import twitch from '../assets/svg/twitch-purple-icon.svg';
import facebook from '../assets/svg/facebook-icon.svg';
import discord from '../assets/svg/discord-icon.svg';
import twitter from '../assets/svg/twitter-icon.svg';
import miel from '../assets/img/projects/miel-roche.jpg';
import alexandercd1 from '../assets/img/projects/alexandercdsv1.jpg';
import alexandercd2 from '../assets/img/projects/alexandercds.jpg';
import sunnyside from '../assets/img/projects/sunnyside.jpg';
import blogr from '../assets/img/projects/blogr-landing-page.jpg';
import javaScript from '../assets/svg/javascript-icon.svg';
import nodejs from '../assets/svg/nodejs-icon.svg';
import react from '../assets/svg/react-icon.svg';
import jquery from '../assets/svg/jquery-icon.svg';
import sap from '../assets/svg/sap-icon.svg';
/*import  from '../assets/svg/.svg';
import  from '../assets/svg/.svg';*/

export const description = {
    name: "alexandercds",
    title: 'Bienvenido...',
    main: "Desarrollador frontend y backend lo que muchos conocen como desarrollador Fullstack con más de 3 años de experiencia en el mundo del desarrollo web." ,
    sub: "Me gusta hacer sitios webs como por ejemplo este sitio el cual está construido con React."
};

export const routes = [
    {
        name: 'Tiktok',
        icon: tiktok,
        url: 'https://www.tiktok.com/@alexandercds?',
        userName: 'alexandercds',
    },
    {
        name: 'YouTube',
        icon: youtube,
        url: 'https://www.youtube.com/channel/UCmXXKj2lTr8J1zh3KCTj2XQ?sub_confirmation=1',
        userName: 'Alexander CDs',
    },
    {
        name: 'Github',
        icon: github,
        url: 'https://github.com/AlexanderCDs',
        userName: 'AlexanderCDs',
    }, 
    {
        name: 'Instagram',
        icon: instagram,
        url: 'https://www.instagram.com/alexandercds.cs/?hl=es-la',
        userName: 'alexander_cd',
    },
    
];

export const moreRoutes = [ 
    {
        name: 'Twitch',
        icon: twitch,
        url: 'https://www.twitch.tv/arthurreset',
        userName: 'ArthurReset',
        isNew: true,
    }, 
    {
        name: 'Facebook',
        icon: facebook,
        url: 'https://www.facebook.com/alexandercds.cs',
        userName: 'Alexandercds.cs',
        isNew: true,
    },
    {
        name: 'Discord',
        icon: discord,
        url: 'https://discord.gg/XBE59Ws4pA',
        userName: 'CD Devs',
        isNew: true,
    },
    {
        name: 'Twitter',
        icon: twitter,
        url: 'https://twitter.com/alexandercddev',
        userName: 'alexandercddev',
        isNew: true,
    },
];

export const projects = [
    {
        key: "miel-roche",
        img: miel,
        title: 'Miel Roche',
        description: "Sitio web elaborado con CMS WordPress y plugin elementor",
        urls: [
            {
                value: 'https://www.mielroche.com.mx/',
                text: 'Ir al sitio',
            }
        ],
    },
    {
        key: "alexandercds1",
        img: alexandercd1,
        title: 'Portafolio v1',
        description: "Sitio web con ReactJS, Material UI,Material Icons, SwetAlert2",
        urls: [
            {
                value: 'https://alexandercds.github.io/readme-react/',
                text: 'Ir al sitio',
            },
            {
                value: 'https://github.com/AlexanderCDs/readme-react',
                text: 'Ir al código',
            }
        ]
    },
    {
        key: "alexandercds2",
        img: alexandercd2,
        title: 'Portafolio v2',
        description: "Sitio web con ReactJS y CSS",
        urls: [
            {
                value: 'https://alexandercd.herokuapp.com/',
                text: 'Ir al sitio',
            },
            {
                value: 'https://github.com/AlexanderCDs/readme-react-v2',
                text: 'Ir al código',
            } 
        ]
    },
    {
        key: "sunnyside-agency-landing-page",
        img: sunnyside,
        title: 'Sunnyside Agency',
        description: "Sitio web con ReactJS, ejercicio de FrontEnd Mentor",
        urls: [
            {
                value: 'https://alexandercds.github.io/sunnyside-agency-landing-page/',
                text: 'Ir al sitio',
            }, 
            {
                value: 'https://github.com/AlexanderCDs/sunnyside-agency-landing-page',
                text: 'Ir al código',
            }, 
        ],
    }, 
    
    {
        key: "blogr-landing-page",
        img: blogr,
        title: 'Blogr Landing',
        description: "Sitio web con ReactJS, ejercicio de FrontEnd Mentor",
        urls: [
            {
                value: 'https://alexandercds.github.io/blogr-landing-page/',
                text: 'Ir al sitio',
            }, 
            {
                value: 'https://github.com/AlexanderCDs/blogr-landing-page',
                text: 'Ir al código',
            }, 
        ],
    },
];

export const contact = {
    file: 'contacto.js',
    name: 'Alexander Chi',
    email: 'arturochi2@hotmail.com',
    job: 'WebDeveloper',
    resume: 'https://drive.google.com/file/d/13bfMZafxHaAN-5YJaVESYsp-o1dizq7l/view?usp=sharing',
    nameResume: '/anexos/cv.pdf',
}

export const navigations = [
    {
        key: 'home', 
        name: 'Home',   
        /*component: <Home description={description}/>*/
    },
    {
        key: 'about-me',
        name: 'Sobre mí', 
        /*component: <AboutMe description={description} />  */
    },
    {
        key: 'routes',
        name: 'Links', 
        /*component: <Links routes={routes} moreRoutes={moreRoutes} description={description}/>*/
    },
    {
        key: 'projects',
        name: 'Proyectos',  
        /*component: <Projects projects = {projects}/>*/
    },
    {
        key: 'technologies',
        name: 'Tecnologias',  
        /*component: <Projects projects = {projects}/>*/
    },
    {
        key: 'contact',
        name: 'Contacto',   
        /*component: <Contact contact={contact}/>*/
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

export const technologies = [
    {
        name: 'JavaScript',
        value: 90,
        src: javaScript
    },
    {
        name: 'NodeJS',
        value: 70,
        src: nodejs
    },
    {
        name: 'ReactJS',
        value: 80,
        src: react
    },
    {
        name: 'JQuery',
        value: 90,
        src: jquery
    },
    /*{
        name: 'CSharp',
        value: 90,
        src: react
    },
    {
        name: 'SQL Server',
        value: 80,
        src: null
    },*/
    {
        name: 'ServiceLayer (SAP B1)',
        value: 55,
        src: sap
    },
    {
        name: 'DI API (SAP B1)',
        value: 55,
        src: sap
    },
];

export default description;