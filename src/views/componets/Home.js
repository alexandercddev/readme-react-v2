/** 
* @author: Alexander Chi
* @description:
* @date: 30/Junio/2021
**/
import React, { useState } from 'react'; 

export function Home (props) {
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
        <>
            <div className = "content">
                <h2 className="wavy"> 
                    <span style={{'--i': 1}}>B</span>
                    <span style={{'--i': 2}}>i</span>
                    <span style={{'--i': 3}}>e</span>
                    <span style={{'--i': 4}}>n</span>
                    <span style={{'--i': 5}}>v</span>
                    <span style={{'--i': 6}}>e</span>
                    <span style={{'--i': 7}}>n</span>
                    <span style={{'--i': 8}}>i</span>
                    <span style={{'--i': 9}}>d</span>
                    <span style={{'--i': 10}}>o</span>
                    <span style={{'--i': 11}}>.</span>
                    <span style={{'--i': 12}}>.</span>
                    <span style={{'--i': 13}}>.</span>
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