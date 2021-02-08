import ig from './ig-logo-black.svg';
import superia from './superia.jpg';
import dialog from './dialogtext.png';
import rooftop from './rooftop.jpg';
import duomo1 from './duomo1.jpg';
import duomo2 from './duomo2.jpg';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="top txt-cen">

        <div className="titlebar">
          <img className="dialog" src={dialog}></img>
        </div>

        <div className="subbar">
          <div className="tagline container">Analog magic from digital images</div>
          <div className="explore"><a class="btn btn-danger" href="#our-films" role="button">Shop now</a></div>
        </div>

      </div>

      <div className="colorsquare bg-black txt-cen">
        <div className="container">
          <div className="blocktitle">Hand-made</div>
          <div className="blocksubtitle">Dialog film rendering lookup tables are carefully studies to faithfully recreate the color and contrast of classic cnalog films, using manual adjustments. In one click, apply these extensive adjustments to your images.</div>
        </div>
      </div>

      <div className="rediscover txt-cen">
        <div className="blocktitle blocktitle-big">Recreate the organic, tactile and magical qualities of analog film</div>
      </div>

      <div className="colorsquare bg-black txt-cen">
        <div className="container">
          <div className="blocktitle">A Flexible Workflow</div>
          <div className="blocksubtitle">Dialog uses lookup table files which are supported in most photo and video editors, including Photoshop and Davinci. With photoshop you can use adjustment layers and make it part of a totally seamless workflow.</div>
        </div>
      </div>

      <div className="colorsquare colorsquare-sm bg-green txt-cen" id="our-films">
        <div className="container">
          <div className="blocktitle-big">Films Available</div>
        </div>
      </div>


      <div className="film bg-black">
        <div className="film-container txt-cen">
          <div className="film-title">Fujifilm Superia 200</div>
          <div className="film-subtitle">Holidays and sunny snaps</div>
          <div className="film-slideshow">
            <div id="superiacarousel" class="carousel slide" data-ride="carousel" data-interval="false">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <ToggleDivImage className="d-block w-100" img1={duomo1} img2={duomo2} />
                </div>
                <div class="carousel-item">
                  <ToggleDivImage className="d-block w-100" img1={superia} img2={rooftop} />
                </div>
              </div>
              <a class="carousel-control-prev" href="#superiacarousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              </a>
              <a class="carousel-control-next" href="#superiacarousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
              </a>
            </div>
          </div>
          <div className="film-comments">Deeper reds and soft highlights</div>
        </div>
      </div>

      <div className="film bg-darkblack">
        <div className="film-container txt-cen">
          <div className="film-title">Fujifilm Superia 200</div>
          <div className="film-subtitle">Holidays and sunny snaps</div>
          <div className="film-slideshow">
            <div id="agfacarousel" class="carousel slide" data-ride="carousel" data-interval="false">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <ToggleDivImage className="d-block w-100" img1={superia} img2={rooftop} />
                </div>
                <div class="carousel-item">
                  <ToggleDivImage className="d-block w-100" img1={superia} img2={rooftop} />
                </div>
              </div>
              <a class="carousel-control-prev" href="#agfacarousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              </a>
              <a class="carousel-control-next" href="#agfacarousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
              </a>
            </div>
          </div>
          <div className="film-comments">Deeper reds and soft highlights</div>
        </div>
      </div>


      <div className="colorsquare bg-black txt-cen">
        <div className="container">
          <div className="blocktitle">See our image samples</div>
          <div className="blocksubtitle">Follow @<a href="https://www.instagram.com/shootdialog">shootdialog</a> on Instagram to see photos created from all our filters</div>
          <a href="https://www.instagram.com/shootdialog"><img className="ig-logo" src={ig} /></a>
        </div>
      </div>

      <div className="colorsquare colorsquare-sm bg-green txt-cen">
        <div>More coming soon. &copy; kjk</div>
      </div>

    </div>
  );
}

const ToggleDivImage = (props) => {

  const [toggled, setToggled] = React.useState(true);
  const toggleImage = () => setToggled(!toggled);

  if (toggled) {
    return (
      <div>
        {<img src={props.img2} onClick={toggleImage} />}
      </div>
    );
  } else {
    return (
      <div>
        {<img src={props.img1} onClick={toggleImage} />}
      </div>
    );
  }
};

export default App;
