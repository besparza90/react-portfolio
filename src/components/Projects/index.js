import React from 'react';


const Projects = (props) => {

    return (

        <div className={`tile image ${props.image}`}>
            <div className='middle'>
                <ul className='text'>
                    <li>
                        <h5>
                            <a href={props.url}>
                                {props.name}
                            </a>
                        </h5>
                    </li>
                    <li className='description-margin'>
                    <a href={props.github}>
                    {props.description}
                        </a>
                        
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Projects;