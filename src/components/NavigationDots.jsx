const navOptions = ['home', 'about', 'work', 'skills', 'testimonials', 'contact'];

const NavigationDots = ({ active }) => (
    <div className='app__navigation'>
        {navOptions.map((item, index) => (
            // eslint-disable-next-line jsx-a11y/anchor-has-content
            <a
                key={item + index}
                href={`#${item}`}
                className='app__navigation-dot'
                style={active === item ? { backgroundColor: '#313BAC' } : {}}
            />
        ))}
    </div>
);

export default NavigationDots;