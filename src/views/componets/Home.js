/** 
* @author: Alexander Chi
* @description:
* @date: 30/Junio/2021
**/
import React, { useState } from 'react'; 

export function Home (props) {
    const {description} = props; 
    return (
        <>
            <div className = "content">
                <h2 className="wavy"> 
                {description.title.split('').map((caracter, index) => {
                    return <span style={{'--i': index+1}} key={'b'+index}>{caracter}</span>
                })} 
                </h2> 
                <h2>I'm <span className="name">Alexander Chi</span></h2>
                <p>
                    {description.main}
                </p> 
            </div>
        </>
    );
}

export default Home;