import React from 'react'
import { InlineIcon } from '@iconify/react'
import linkedinRect from '@iconify/icons-brandico/linkedin-rect'
import githubFill from '@iconify/icons-ant-design/github-fill'

const Socials = () => {
    return (
        <div className="socials">
            <ul>
                <li>
                    <a href="https://github.com/utamovita">
                        <InlineIcon icon={githubFill} />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/micha%C5%82-kowalski-215b53193/">
                        <InlineIcon icon={linkedinRect} />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Socials