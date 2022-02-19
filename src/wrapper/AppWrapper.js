import { NavigationDots, SocialMedia } from '../components';

// TODO : convert the name p tag into an a tag with a link to my github
const AppWrap = (Component, idName, classNames) => function HOC() {
    return (
        <div id={idName} className={`app__container ${classNames}`}>
            <SocialMedia />
            <div className='app__wrapper app__flex'>
                <Component />
                <div className='copyright'>
                    <p className='p-text'>&copy; John Chiappetta {new Date().getFullYear()}</p>
                    <p className='p-text'>All rights reserved</p>
                </div>
            </div>
            <NavigationDots active={idName} />
        </div>
    );
};

export default AppWrap;