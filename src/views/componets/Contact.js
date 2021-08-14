/** 
* @author: Alexander Chi
* @description:
* @date: 03/Julio/2021
**/
import React, { useState } from 'react'; 

export function Contact (props) {  
    const {contact} = props
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
                                    {contact.file}
                                </div>
                            </div>
                            <div className="card__content">
                                <div className="card__export"> <span className="color__green">module</span>.<span className="color__blue">export</span><span> = </span><span  className="color__green"> Portafolio</span>; </div>
                                <div> <span className="color__rose">funtion </span><span className="color__green">CardFormat</span>() {'{'} </div>
                                <div className="card__margin_1"> <span className="color__rose">return </span> {'{'} </div>
                                <div className="card__margin_2"> <span className="color__blue">name</span>: <span className="color__yellow">'{contact.name}'</span>, </div>
                                <div className="card__margin_2"> <span className="color__blue">email</span>: <span className="color__yellow">'{contact.email}'</span>, </div>
                                <div className="card__margin_2"> <span className="color__blue">job</span>: <span className="color__yellow">'{contact.job}'</span>, </div>
                                <div className="card__margin_2"> <span className="color__blue">resume</span>: <span className="color__yellow">'<a onClick={() => {handleWindows(contact.resume)}}>{contact.nameResume}</a>'</span>, </div>
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

export default Contact;