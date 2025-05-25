import React from 'react';
import PropTypes from 'prop-types';
import awardsAndExperiences from '/src/data/awards-and-experiences';

export default function Header() {    
    return (
        <header className='navbar navbar-expand-sm py-2 mb-4'>
            <div className='container-fluid'>
                <a href='/' className="navbar-brand">
                    <img src='/images/logo.png' height='40px' />
                </a>
            
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbar-collapse-section' aria-controls='navbar-collapse-section' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
            
                <nav className='collapse navbar-collapse' id='navbar-collapse-section' >
                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-item px-3'>
                            <div className="dropdown">
                                <a className="btn dropdown-toggle" href="/projects">Projects</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/projects#websites">Websites</a></li>
                                    <li><a className="dropdown-item" href="/projects#games">Games</a></li>
                                    <li><a className="dropdown-item" href="/projects#tools-other">Tools/Other</a></li>
                                </ul>
                            </div>           
                        </li>

                        <li className='nav-item px-3'>
                            <div className="dropdown">
                                <a className="btn dropdown-toggle" href="/extracurriculars">Extracurriculars</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/extracurriculars#clubs">Clubs</a></li>
                                    <li><a className="dropdown-item" href="/extracurriculars#hobbies">Hobbies</a></li>
                                </ul>
                            </div>           
                        </li>

                        <li className='nav-item px-3'>
                            <div className="dropdown">
                                <a className="btn dropdown-toggle" href="/awards-and-experiences">Awards and Experiences</a>
                                <ul className="dropdown-menu" id="awards-experiences-dropdown">
                                    {awardsAndExperiences.map(section => <AwardExperienceDropdownItem key={section[0]} sectionName={section[0]}/>)}
                                </ul>
                            </div>           
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

function AwardExperienceDropdownItem(props) {
    return (
        <li><a className="dropdown-item" href={`/awards-and-experiences#${props.sectionName}`}>{props.sectionName}</a></li>
    )
}

AwardExperienceDropdownItem.propTypes = {
    sectionName: PropTypes.string.isRequired,
}