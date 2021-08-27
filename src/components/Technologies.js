/** 
* @author: Alexander Chi
* @description:
* @date: 03/Julio/2021
**/
import React, { useState } from 'react';  
import { Technology } from './Components';
import * as Constants from '../utils/Information'; 
import profile from '../assets/img/profile.jpg'

export function Technologies (props) { 
    const { technologies, description } = Constants; 
    return (
        <> 
            <div className="body__routes technology">
                <div className="container__routes"> 
                    <div className="content__logo">
                        <img alt="Logo" className="img__logo" src={profile} ></img>
                    </div>
                    <div className = "content __links"> 
                        <p>@<span className="name">{description.name}</span></p>
                         
                    </div>
                    {technologies.map((item, index) => {
                        return <Technology key={'link' + index} item={item} index={index}/>
                    })} 
                </div>
            </div>
        </>
    );
}

export default Technologies;