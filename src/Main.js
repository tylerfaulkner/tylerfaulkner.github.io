import React from 'react';
import './main.css';
import me from './images/me.jpg';
import {
    Link
} from "react-router-dom";

class Main extends React.Component {
    render(){
        return(
            <div id="Center">
                <img src={me} alt="Self Portait"/>
                    <h1><span>Tyler Faulkner</span></h1>
                    <div>
                        <Link to="/posts">Posts</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/about">About</Link>
                    </div>
            </div>
        );
    }
}
export default Main;