import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa';
import { images } from '../../constants'
import './Navbar.scss';

const menuItems = ['home', 'about', 'work', 'skills', 'contact'];

// TODO : Add better navbar-logo image
const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <img src={images.jcDevLogo} alt='logo' />
            </div>
            <ul className='app__navbar-links'>
                {menuItems.map((item) => (
                    <li className='app__flex p-text' key={`link-${item}`}>
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>
            <div className='app__navbar-menu'>
                <HiMenuAlt4 onClick={() => setToggle(true)} />
                {toggle && (
                    <motion.div
                        whileInView={{ x: [250, 0] }} // 250 fixes bug on xs screens 
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                    >
                        <HiX onClick={() => setToggle(false)} />
                        <ul>
                            {menuItems.map((item) => (
                                <li key={item}>
                                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <SocialLinks onClick={() => setToggle(false)} />
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

const SocialLinks = ({ onClick }) => (
    <span className='app__navbar-social'>
        <p className='app__flex'>Social Links</p>
        <span className='app__social'>
            <li>
                <a href='https://twitter.com/johnch1p/' target='_blank' rel='noreferrer' onClick={onClick}>
                    <BsTwitter />
                </a>
            </li>
            <li>
                <a href='https://www.facebook.com/johnchip1255/' target='_blank' rel='noreferrer' onClick={onClick}>
                    <FaFacebookF />
                </a>
            </li>
            <li>
                <a href='https://www.instagram.com/johnch1p/' target='_blank' rel='noreferrer' onClick={onClick}>
                    <BsInstagram />
                </a>
            </li>
            <li>
                <a href='https://github.com/jonoman55/' target='_blank' rel='noreferrer' onClick={onClick}>
                    <FaGithub />
                </a>
            </li>
            <li>
                <a href='https://www.linkedin.com/in/john-chiappetta-ab4091143/' target='_blank' rel='noreferrer' onClick={onClick}>
                    <FaLinkedin />
                </a>
            </li>
        </span>
    </span>
);

export default Navbar;