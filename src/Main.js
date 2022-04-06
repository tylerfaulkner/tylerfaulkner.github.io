import React from 'react';
import './css/main.css';
import me from './images/me.jpg';
import {
    Link
} from "react-router-dom";

class Main extends React.Component {
    render(){
        return(
            <div className="Center">
                <img className={"main-img"} src={me} alt="Self Portait"/>
                    <h1><span>Tyler Faulkner</span></h1>
                    <div>
                        <Link className={'main-a'} to="/posts">Posts</Link>
                        <Link className={'main-a'} to="/projects">Projects</Link>
                        <Link className={'main-a'} to="/about">About</Link>
                    </div>
            </div>
        );
    }
}
export default Main;