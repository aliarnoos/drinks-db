import React from 'react';
import NavBar from './NavBar';

function About() {
    return ( 
        <>
        <NavBar/>
        <div className='about-sec'>
            <h1>About Us</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus nemo error
                molestias facilis animi! Odit, omnis consequatur distinctio corporis officia, 
                iure minus quis dolor ad tenetur qui hic provident explicabo!
            </p>
        </div>
        </>
     );
}

export default About;