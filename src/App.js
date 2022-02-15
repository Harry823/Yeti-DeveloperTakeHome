import './App.css';
import image from './img/apple/image.png';
import lemur from './img/lemur/lemur-676967-unsplash.png';
import hamburger from './img/hamburger-menu.svg';
import logo from './img/logo-black.svg';

function App() {
  return (
    <div className="App">
      <div className="top-bar">
        <img className="logo-black" src={logo} alt=""/>
        <div className="menu-bar">
          <span className="Menu-text">MENU</span>
          <img className="hamburger-menu" src={hamburger} alt="Dropdown Menu"/>
        </div>
      </div>
      <div className="About-section">
        <div className="about-header">
          <h1 className="About">
            About
          </h1>
            <img className="image"
              src= {image}
              srcSet="apple/image@2x.jpg 2x,
                apple/image@3x.jpg 3x"
              alt=""/>
            <div className="Mask-image"/>
        </div>
        <section className="about-text">
          <h2>
            Andy Griffith turned us down.
          </h2>
          <p>
            Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his nice trailer. That's why you always leave a note!
          </p>
        </section>
      </div>

      <div className="Vision-section">
          <h1 className="Our-vision">
            Our vision
          </h1>
        <h2>
          Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer.
        </h2>
        <p>
          Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer.
          That's why you always leave a note! Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer.
            That's why you always leave a note! No… but I'd like to be asked! Oh, you're gonna be in a coma, all right.
        </p>
      </div>

      <div className="Values-section">
        <div className="image-set">
            <img src={lemur}
              srcSet="lemur/lemur-676967-unsplash@2x.png 2x,
                      lemur/lemur-676967-unsplash@3x.png 3x"
              className="lemur-image"
              alt=""/>
              <div className="Mask-lemur"/>
        </div>

        <h1 className="Our-values">
          Our values
        </h1>

        <h2>
          Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer.
        </h2>
        <div className="values-content">
          <p>
            Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer.
            That's why you always leave a note! Army had half a day. Bad news. Andy Griffith turned us down.
              He didn't like his trailer. That's why you always leave a note! No… but I'd like to be asked!
              Oh, you're gonna be in a coma, all right.
          </p>
          <p>
            Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer.
            That's why you always leave a note! Army had half a day. Bad news. Andy Griffith turned us down.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
