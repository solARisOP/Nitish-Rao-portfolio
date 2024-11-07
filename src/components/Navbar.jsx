import logo from '../assets/kevinRushLogo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

function Navbar() {
    return (
        <nav className='mb-20 flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                <h1 className='text-4xl mx-4'>Snr</h1>
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <FaGithub/>
                <FaLinkedin/>
            </div>
        </nav>
    )
}

export default Navbar