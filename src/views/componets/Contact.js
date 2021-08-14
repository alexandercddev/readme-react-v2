/** 
* @author: Alexander Chi
* @description:
* @date: 03/Julio/2021
**/
import React, { useState } from 'react'; 

export function Contact (props) {  
    return (
        <div className="body__contact">
            <div className="container__contact"> 
                <div className="box__contact">
                    <div className="content__contact"> 
                        <img className="img__contact" src="./img/contacto.png" ></img>
                        <div className="p__contact">
                            <a>Abrir CV</a>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
}

export default Contact;