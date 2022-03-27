import React from 'react';

const Resume = () => {

    return (
        <section className='my-5 text-background'>
             <p>Download my <a href={require(`https://besparza90.github.io/react-portfolio/static/media/reactresume.pdf`).default}>resume</a></p>
        </section>
    )
}

export default Resume;