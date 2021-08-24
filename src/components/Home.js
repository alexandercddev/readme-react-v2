/** 
* @author: Alexander Chi
* @description:
* @date: 30/Junio/2021
**/
import React, { useState } from 'react'; 
import * as Constants from '../utils/Information'; 
import { SocialMedial } from './Components';

export function Home (props) {
    const {description, routes} = Constants; 
    return (<>
        <div className = "content">
            <h2 className="wavy"> 
            {description.title.split('').map((caracter, index) => {
                return <span style={{'--i': index+1}} key={'b'+index}>{caracter}</span>
            })} 
            </h2> 
            <h2>Hola, soy <span className="name">Alexander Chi</span></h2>
            <p>
                {description.main}
            </p> 
        </div>
        <SocialMedial routes={routes}></SocialMedial>
    </>);
}

export default Home;