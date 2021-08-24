/** 
* @author: Alexander Chi
* @description:
* @date: 03/Julio/2021
**/
import React, { useState } from 'react';  
import { Link, SocialMedial } from './Components';
import * as Constants from '../utils/Information'; 
import profile from '../assets/img/profile.jpg'

export function Links (props) {
    const { routes, moreRoutes, description } = Constants; 
    return (
        <> 
            <div className="body__routes">
                <div className="container__routes"> 
                    <div className="content__logo">
                        <img alt="Logo" className="img__logo" src={profile} ></img>
                    </div>
                    <div className = "content __links"> 
                        <p>@<span className="name">{description.name}</span></p>
                        <p className="box__routes" style={{textAlign: 'justify'}}>
                            {description.main}
                        </p> 
                    </div>
                    {routes.map((item, index) => {
                        return <Link key={'link' + index} item={item} index={index}/>
                    })}
                    {moreRoutes.map((item, index) => {
                        return <Link key={'link' + index} item={item} index={index}/>
                    })}
                </div>
            </div>
        </>
    );
}

export default Links;