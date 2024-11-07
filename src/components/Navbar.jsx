import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { CONTACT } from '../constants'

function Navbar() {
    return (
        <nav className='mb-20 flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                <h1 className='text-4xl'>Snr</h1>
            </div>
            <div className='flex items-center justify-center gap-6 text-2xl'>
                <a className='font-thin text-2xl' href={`https://mail.google.com/mail/?view=cm&fs=1&su=Hey%20Nitish,%20We%20wanna%20hire%20you&to=${CONTACT.email}`} target='_blank'>HIRE ME</a>
                <a href="https://github.com/solARisOP" target='_blank'>
                    <FaGithub/>
                </a>
                <a href="https://linkedin.com/in/seema-nitish-rao" target="_blank">
                    <FaLinkedin/>
                </a>
            </div>
        </nav>
    )
}

export default Navbar