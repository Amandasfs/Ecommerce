import './index.css'
import Navbar from './components/nav';
import HeroCarousel from './components/hero';
import HomeProducts from './components/home';
import Footer from './components/footer';

 function App() {
  return (
    <div>
      <Navbar/>
      <HeroCarousel />
      <HomeProducts />
      <Footer />
    </div>
  );
}

export default App
