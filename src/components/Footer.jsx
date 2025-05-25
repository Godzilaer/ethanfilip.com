import React from "react"

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
                        <li><a href="mailto:ethie.alexandru@gmail.com"><i className="bi bi-envelope"></i> Email</a></li>
                    </ul>
                </div>

                <div className="col-sm-4">
                    <h5>Social</h5>
                    <ul className="list-unstyled">
                        <li><a href="https://github.com/Godzilaer" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i> Github</a></li>
                    </ul>
                </div>
            </div>

            <p id="copyright" className="text-center text-muted small">© 2024 Ethan Filip. All rights reserved.</p>
        </footer>
    )
}