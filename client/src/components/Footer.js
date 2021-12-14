import React from 'react'
// import Footer from 'react-bootstrap/Footer'

function Footer() {
    return (
        <div className="bg-grey-transparent w-100 mt-15p">
        <footer>
            <ul className="nav justify-content-center pt-3 mb-3">
                <li className="nav-item"><a href="#" className="nav-link px-2 text-almost-black">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-almost-black">Search</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-almost-black">Submit</a></li>
            </ul>
            <div className="nav justify-content-center text-almost-black pb-3">
                <div className="nav-item"><a href="#" className="nav-link px-2 text-almost-black">GithubIcon</a></div>
            </div>
        </footer>

        </div>
    )
}

export default Footer
