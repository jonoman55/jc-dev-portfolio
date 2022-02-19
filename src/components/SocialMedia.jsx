import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

// TODO : Add more social icons and add my social links
const SocialMedia = () => (
    <div className='app__social'>
        <div>
            <BsTwitter />
        </div>
        <div>
            <FaFacebookF />
        </div>
        <div>
            <BsInstagram />
        </div>
    </div>
);

export default SocialMedia;