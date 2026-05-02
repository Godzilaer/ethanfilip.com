import awardExperienceSections from '../data/awards-and-experiences';
import { BsList } from 'react-icons/bs';

export default function Header() {
    const sortedAwardYears = Object.keys(awardExperienceSections)
        .sort((a, b) => Number(b) - Number(a))

    return (
        <header className='navbar navbar-expand-md py-2 mb-4'>
            <div className='container-fluid'>
                <a href='/' className="navbar-brand d-flex align-items-center">
                    <img src='/images/logo.png' height='40px' />
                    <span className='ms-3 text-white' style={{"fontSize": "32px"}}>Ethan Filip</span>
                </a>

                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbar-collapse-section' aria-controls='navbar-collapse-section' aria-expanded='false' aria-label='Toggle navigation'>
                    <BsList className='text-white' size={"40px"} />
                </button>

                <nav className='collapse navbar-collapse' id='navbar-collapse-section' >
                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-item px-3'>
                            <div className="dropdown">
                                <a className="btn dropdown-toggle text-white" href="/projects">Projects</a>
                                <ul className="dropdown-menu bg-black border p-0">
                                    <li><a className="dropdown-item text-white" href="/projects#websites">Websites</a></li>
                                    <li><a className="dropdown-item text-white" href="/projects#games">Games</a></li>
                                    <li><a className="dropdown-item text-white" href="/projects#tools/other">Tools/Other</a></li>
                                </ul>
                            </div>
                        </li>

                        <li className='nav-item px-3'>
                            <div className="dropdown">
                                <a className="btn dropdown-toggle text-white" href="/extracurriculars">Extracurriculars</a>
                                <ul className="dropdown-menu bg-black border p-0">
                                    <li><a className="dropdown-item text-white" href="/extracurriculars#clubs">Clubs</a></li>
                                    <li><a className="dropdown-item text-white" href="/extracurriculars#hobbies">Hobbies</a></li>
                                </ul>
                            </div>
                        </li>

                        <li className='nav-item px-3'>
                            <div className="dropdown">
                                <a className="btn dropdown-toggle text-white" href="/awards-and-experiences">Awards and Experiences</a>
                                <ul className="dropdown-menu bg-black border p-0" id="awards-experiences-dropdown">
                                    {sortedAwardYears.map(year => <AwardExperienceDropdownItem key={year} sectionName={year} />)}
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

interface AwardExperienceDropdownItemProps {
    sectionName: string
}

function AwardExperienceDropdownItem(props: AwardExperienceDropdownItemProps) {
    return (
        <li><a className="dropdown-item text-white" href={`/awards-and-experiences#${props.sectionName}`}>{props.sectionName}</a></li>
    )
}