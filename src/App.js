import original from './original.png';
import superia from './superia.jpg';
import dialog from './dialogtext.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="top txt-cen">
        <div className="titlebar row">
          <div className="col txt-l"><img className="dialog" src={dialog}></img></div>
          <div className="col txt-r"><a href="https://www.instagram.com/shootdialog/"><i className="fa fa-instagram insta-title"></i></a></div>
        </div>
        <div className="tagline">Recreate the organic look of analog films</div>
        <div className="explore"><i className="fa fa-chevron-down"></i></div>
      </div>
      <div className="second">
        <div className="container">
          <div className="overview txt-cen">Overview</div>
          <div className="overview-tagline txt-cen">Film rendering lookup tables</div>
          <div className="overview-text txt-cen">Manually tweaked to recreate the look of clasic films, comes as .CUBE lookup tables which can be used in photo and video editing</div>
        </div>
      </div>

      <div className="container">
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
