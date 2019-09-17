import React from 'react'
import { ReactComponent as Logo } from './logo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

// TO DO: Skończyć i podpiąć stopke po skończeniu portfolio

const Footer = () => {
    return (
        <footer>
            <div className="powered-by">
                <span>Created by</span>
                <a href="https://focusite.pl"><Logo /></a>

            </div>
            <ul className="socials">
                <li><a href="https://github.com/utamovita"><FontAwesomeIcon icon={faGithub} /></a></li>
                <li><a href="https://www.linkedin.com/"><FontAwesomeIcon icon={faGithub} /></a></li>
                <li><a href="https://focusite.pl"><FontAwesomeIcon icon={faGithub} /></a></li>
            </ul>
        </footer>
    )
}

export default Footer