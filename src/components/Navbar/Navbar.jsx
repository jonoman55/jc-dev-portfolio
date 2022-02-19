import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { images } from '../../constants'
import './Navbar.scss';

const menuItems = ['home', 'about', 'work', 'skills', 'contact'];

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
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;