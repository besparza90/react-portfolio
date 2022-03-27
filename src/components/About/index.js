import React from 'react';
import ProfilePhoto from '../../assets/images/brianspicture.jpg'

const About = () => {
    return (
        <section className='my-5 about' name='container' style={{'textAlign': 'center'}}>
            <div className=''>
                <img className='bio-photo' alt='Brian' src={ProfilePhoto}/>
            </div>
            <h1 id='about'>About Me</h1>
            <p className='text-background' id='aboutText'>
             Brian is currently enrolled in the UCB Coding Boot Camp. He is excited to learn new skills and hopes to open up new career paths. 
            <br />
            Please take a look at my various projects.
            </p>
        </section>
    )
};

export default About;