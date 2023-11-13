import './App.css';
import Features from './components/Features';
import Services from './components/services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
        <section id="home">
            <Home/>
        </section>

        <section id="feature"><Features/></section>
        <section id="service"><Services/></section>
        <section id="testimonial"><Testimonials/></section>
        <section id="footer"><Footer/></section>
    </div>
  );
}

export default App;
