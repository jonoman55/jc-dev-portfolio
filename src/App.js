import { About, Header, Footer, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
import './App.scss';

// TODO : Add context API
// TODO : Add back scroll buttons
// TODO : Add social links to mobile menu
const App = () => (
    <div className='app'>
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <Footer />
    </div>
);

export default App;