import { Navbar } from './components';
import { About, Header, Footer, Skills, Testimonial, Work } from './container';
import './App.scss';

// TODO : Find better fav icon
// TODO : Add context API
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