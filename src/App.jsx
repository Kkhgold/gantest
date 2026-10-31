import Exposure from './components/Exposure.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ThemeRail from './components/ThemeRail.jsx';
import Facts from './components/Facts.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Learning from './components/Learning.jsx';
import Connect from './components/Connect.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <a className="skip" href="#main">본문 바로가기</a>
      <Header />
      <main id="main">
        <Hero />
        <ThemeRail />
        <Facts />
        <Exposure />
        <About />
        <Experience />
        <Learning />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
