/** 
* @author: Alexander Chi
* @description:
* @date: 116/Agosto/2021
**/
import React, { useState } from 'react';  
import { Link } from 'react-router-dom'; 

export function NotFound (props) { 
    const handleWindows = (url) => { window.open(url) } 

    return (
        <div className="body__contact">
            <div className="container__contact"> 
                <div className="box__contact">
                    <div className="content__contact">  
                        <div className="card__container">
                            <div className="card__header">
                                <div className="card__options">
                                    <div className="card__circule"> </div>
                                    <div className="card__circule"> </div>
                                    <div className="card__circule"> </div> 
                                </div>
                                <div className="card__name">
                                    P-404.js
                                </div>
                            </div>
                            <div className="card__content">
                                <div className="card__export"> <span className="color__green">module</span>.<span className="color__blue">export</span><span> = </span><span  className="color__green"> Portafolio</span>; </div>
                                <div> <span className="color__rose">funtion </span><span className="color__green">NotFound</span>() {'{'} </div>
                                <div className="card__margin_1"> <span className="color__rose">return </span> {'{'} </div>
                                <div className="card__margin_2"> <span className="color__blue">code</span>: <span className="color__yellow">'404'</span>, </div>
                                <div className="card__margin_2"> <span className="color__blue">title</span>: <span className="color__yellow">'Ocurrió un error'</span>, </div>
                                <div className="card__margin_2"> <span className="color__blue">message</span>: <span className="color__yellow">'Página no encontrada'</span>, </div>
                                <div className="card__margin_2"> <span className="color__blue">go</span>: <span className="color__yellow">'<Link to="/">alexandercds.dev/home</Link>'</span>, </div>
                                <div className="card__margin_1"> {'};'} </div>
                                <div> {'}'} </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
}

export default NotFound;