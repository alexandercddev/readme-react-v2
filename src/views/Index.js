/** 
* @author: Alexander Chi
* @description:
* @date: 28/Junio/2021
**/
import React, { useState } from 'react';  
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom'; 
import * as Constants from '../utils/Information'; 
import { Home } from './componets/Home';
import { Projects } from './componets/Projects';
import { AboutMe } from './componets/AboutMe';
import { Contact } from './componets/Contact';
import { Links } from './componets/Links';
import { NotFound } from './componets/NotFound'; 

export function Portfolio (props) { 
    const {navigations, routes} = Constants; 
    const [active, setActive] = useState('');  
    const [socialMedial, setSocialMedial] = useState(true); 
    const handleClick = () => {
        if(active === '') setActive('active');
        else setActive('');
    } 
    const handleWindows = (url, index) => window.open(url); 
    const handleContent = (index) => { 
        console.info(navigations[index])
        const { key } = navigations[index]; 
        setActive('');
        setSocialMedial( key !== 'routes' && key !== 'projects' && key !== 'links');
    }

    return (
        <>
            <section 
                className={'banner ' + active} 
                id="sec" 
                style={{
                    backgroundImage: `url("./img/background.jpg")` 
                }}
                >
                <header>
                    <Link to="/" onClick={() => {handleContent(0)}} className="logo" >
                        <img alt="Logo porfile" className="img__logo__banner" src="./img/profile.jpg" ></img>
                    </Link>
                    <div id="toggle" onClick={handleClick}>
                        <div className="toggle__md"></div>
                    </div>
                </header>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/home" component={Home}></Route>
                    <Route exact path="/projects" component={Projects}></Route>
                    <Route exact path="/about-me" component={AboutMe}></Route>
                    <Route exact path="/contact" component={Contact}></Route>
                    <Route exact path="/links" component={Links}></Route>
                    <Route exact path="/routes" component={Links}></Route>
                    <Route component={NotFound}></Route>
                </Switch> 
            </section>
            <div id="navigation" className={active}>
                <ul>
                    {navigations.map((item, index) => {
                        return (<li key={item.key + index}>
                            <Link to={"/" + item.key} onClick={() => { handleContent(index) }}>
                                {item.name}
                            </Link>
                        </li>)
                    })}
                </ul>
            </div>
        </>
    );
}

export default Portfolio;