/** 
* @author: Alexander Chi
* @description:
* @date: 03/Julio/2021
**/
import React, { useState } from 'react'; 

export function AboutMe (props) {
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
             
        </>
    );
}

export default AboutMe;