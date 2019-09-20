import React from 'react'
import { InlineIcon } from '@iconify/react'
import envelopeIcon from '@iconify/icons-ei/envelope'
import phoneIcon from '@iconify/icons-et/phone'

const Contact = () => {
    return (
        <div className="contact">
            <ul>
                <li>
                    <a href="mailto:michal.kowalski@focusite.pl">
                        <InlineIcon className="mail" icon={envelopeIcon} />
                        michal.kowalski@focusite.pl
                            </a>
                </li>
                <li>
                    <a href="tel:+48732009546">
                        <InlineIcon className="phone" icon={phoneIcon} />
                        +48 732 009 546
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Contact;