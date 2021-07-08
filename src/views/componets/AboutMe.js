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
        <div className="body">
            <div className="container__about"> 
                <div className="box__about">
                    <div className="content__about"> 
                        <h2 className="p__about">Alexander Chi Domínguez</h2>
                        <p className="p__about">
                            Developer frontend y backend lo que muchos conocen como 
                            Fullstack Developer con más de 3 años de experiencia en el mundo del 
                            desarrollo web.
                        </p>
                        <p className="p__about">
                            Me gusta hacer sitios webs como por ejemplo este sitio
                            el cual está construido con React.
                        </p>
                    </div>
                </div>
                <div className="box__about">
                    <div className="content__about"> 
                        <img className="img__about" src="./img/profile.jpg" ></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;