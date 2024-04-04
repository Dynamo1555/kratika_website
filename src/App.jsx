import Test from "./Test";
import "./app.scss"
import Hero from "./navbar/components/hero/Hero";
import Navbar from "./navbar/components/NavBar";
import Parallax from "./navbar/components/parallax/Parallax";
import Services from "./navbar/components/services/Services";
import Portfolio from "./navbar/components/portfolio/Portfolio";
import Contact from "./navbar/components/contact/Contact";

const App = () => {
  return (<div>
      <section id="Homepage">
       <Navbar/>
       <Hero/>
      </section>
       <section id = "Services"><Parallax type="services"/></section>
       <section><Services /></section>
       <section id = "Portfolio"><Parallax type="portfolio" /></section>
       <Portfolio />
       <section id="Contact">
         <Contact />
       </section>
      {/* <Test/> */}
    </div>
  );

  
};

export default App;