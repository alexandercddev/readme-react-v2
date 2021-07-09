/** 
* @author: Alexander Chi
* @description:
* @date: 03/Julio/2021
**/
import React, { useState } from 'react'; 

export function AboutMe (props) {
    const {description} = props;
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
        <div className="body__about">
            <div className="container__about"> 
                <div className="box__about">
                    <div className="content__about"> 
                        <h2 className="p__about">Alexander Chi Domínguez</h2>
                        <p className="p__about">
                            {description.main}
                        </p>
                        <p className="p__about">
                            {description.sub}
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