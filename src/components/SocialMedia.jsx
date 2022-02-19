import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => (
    <div className='app__social'>
        <div>
            <a href='https://twitter.com/johnch1p/' target='_blank' rel='noreferrer'>
                <BsTwitter />
            </a>
        </div>
        <div>
            <a href='https://www.facebook.com/johnchip1255/' target='_blank' rel='noreferrer'>
                <FaFacebookF />
            </a>
        </div>
        <div>
            <a href='https://www.instagram.com/johnch1p/' target='_blank' rel='noreferrer'>
                <BsInstagram />
            </a>
        </div>
        <div>
            <a href='https://github.com/jonoman55/' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>
        </div>
        <div>
            <a href='https://www.linkedin.com/in/john-chiappetta-ab4091143/' target='_blank' rel='noreferrer'>
                <FaLinkedin />
            </a>
        </div>
    </div>
);

export default SocialMedia;