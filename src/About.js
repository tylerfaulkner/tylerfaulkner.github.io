import React from 'react';
import "./css/about.css";

class About extends React.Component {
    render() {
        return (
            <div className="Center-about">
                <p>
                    My Name is Tyler Faulkner and I am a programmer.
                    I am pursuing a Bachelor's of Computer Science with a minor in Mathematics at the Milwaukee School of Engineering.
                    This is my personal website to showcase my projects and personal posts about my experience in code.
                </p>
                <br></br>
                <p>
                    This website was created 100% by me using the Javascript React Framework.
                    I used Sanity IO to host the database for the articles for my projects and posts.
                </p>
            </div>
        );
    }
}

export default About;