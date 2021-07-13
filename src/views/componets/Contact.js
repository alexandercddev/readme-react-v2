/** 
* @author: Alexander Chi
* @description:
* @date: 03/Julio/2021
**/
import React, { useState } from 'react'; 

export function Contact (props) {  
    return (
        <div className="body__routes">
            <div className="container__routes"> 
                <div className="box__routes">
                    <div className="content__routes" style={{textAlign: 'center'}}> 
                        <img className="img__not__found" src="./img/nyan-cat.gif" ></img>
                        <h2 className="wavy"> 
                            <span style={{'--i': 1}}>C</span>
                            <span style={{'--i': 2}}>O</span>
                            <span style={{'--i': 3}}>N</span>
                            <span style={{'--i': 4}}>S</span>
                            <span style={{'--i': 5}}>T</span>
                            <span style={{'--i': 6}}>R</span>
                            <span style={{'--i': 7}}>U</span>
                            <span style={{'--i': 8}}>C</span>
                            <span style={{'--i': 9}}>Í</span>
                            <span style={{'--i': 10}}>O</span>
                            <span style={{'--i': 11}}>N</span>
                            <span style={{'--i': 12}}>.</span>
                            <span style={{'--i': 13}}>.</span>
                            <span style={{'--i': 14}}>.</span>
                        </h2>
                    </div>
                </div> 
            </div>
        </div>
    );
}

export default Contact;