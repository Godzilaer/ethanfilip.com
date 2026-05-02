import { BsEnvelope, BsGithub, BsLinkedin } from 'react-icons/bs'

export default function Footer() {
    return (
        <footer className="mt-4 py-1">
            <div className='row p-4'>
                <div className="col-sm-4 d-flex justify-content-center ">
                    <a href="/"><img width="100px" src='/images/logo.png' /></a>
                </div>

                <div className="col-sm-4">
                    <h5>Contact</h5>
                    <ul className="list-unstyled">
                        <li><a className='text-break' href="mailto:ethan.alexander.filip@gmail.com"><span></span><BsEnvelope /> ethan.alexander.filip@gmail.com</a></li>
                    </ul>
                </div>

                <div className="col-sm-4">
                    <h5>Social</h5>
                    <ul className="list-unstyled">
                        <li><a href="https://github.com/Godzilaer" target="_blank" rel="noopener noreferrer"><BsGithub /> Github</a></li>
                        <li><a href="https://www.linkedin.com/in/ethan-filip/" target="_blank" rel="noopener noreferrer"><BsLinkedin /> LinkedIn</a></li>
                    </ul>
                </div>
            </div>

            <p id="copyright" className="text-center small">© {new Date().getFullYear()} Ethan Filip. All rights reserved.</p>
        </footer>
    )
}

