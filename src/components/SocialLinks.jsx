import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa';

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

export default SocialLinks;