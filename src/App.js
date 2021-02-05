import original from './original.png';
import superia from './superia.jpg';
import dialog from './dialogtext.png';
import instagram from './ig-logo-black.svg'

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="top txt-cen">

        <div className="titlebar">
          <img className="dialog" src={dialog}></img>
        </div>

        <div className="subbar">
          <div className="tagline">Real analog film rendering</div>
          <div className="explore"><button type="button" class="btn btn-danger shop-now">Shop now</button></div>
        </div>

      </div>

      <div className="colorsquare txt-cen">
        <div className="container">
          <div className="blocktitle">Born from film</div>
          <div className="blocksubtitle">Real film stocks carefully digitised using the most advanced colour science and best equipment. RNI All Films 5 brings the magic touch of analogue film into your digital workflow and makes your photos look stunning in one click.</div>
        </div>
      </div>

      {/* <div className="second">
        <div className="container">
          <div className="overview txt-cen">Overview</div>
          <div className="overview-tagline txt-cen">Film rendering lookup tables</div>
          <div className="overview-text txt-cen">Manually tweaked to recreate the look of classic films, comes as .CUBE lookup tables which can be used in photo and video editing</div>
        </div>
      </div> */}



      <div className="container">

        <div className="card mb-3">
          <img className="card-img-top" src={superia} alt="Card image cap"></img>
          <div className="card-body">
            <h5 className="card-title">Fujifilm Superia 200</h5>
            <p className="card-text">Deep reds and softer highlights</p>
            <p className="card-text"><small className="text-muted">£3.99</small></p>
          </div>
        </div>

        <div className="card mb-3">
          <img className="card-img-top" src={superia} alt="Card image cap"></img>
          <div className="card-body">
            <h5 className="card-title">Fujifilm Superia 200</h5>
            <p className="card-text">Deep reds and softer highlights</p>
            <p className="card-text"><small className="text-muted">£3.99</small></p>
          </div>
        </div>

      </div>

      <div className="footer">More coming soon. kjk</div>

    </div>
  );
}

export default App;
