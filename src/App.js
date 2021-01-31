import original from './original.png';
import superia from './superia.png';
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
        <div className="explore">Explore <i className="fa fa-chevron-down"></i></div>
      </div>
      <div className="second container">
        <div className="overview txt-cen">Overview</div>
        <div className="overview-tagline txt-cen">Digital Tools Born from Film Emulsions</div>
        <div className="overview-text txt-cen">Manually tweaked to recreate the look of clasic films, comes as .CUBE lookup tables which can be used in photo and video editing</div>
      </div>

      <div className="superia">
        <div className="film-title txt-cen">Fujifilm Superia 200</div>
        <div className="row">
          <div className="img col">
          </div>
          <div className="img col">
          </div>
        </div>
        <p>If you are going for stunning portraits outdoors or indoors with flash, you have to try Fuji Superia 200 35mm color negative film. Youll get clear photos with naturally beautiful colors and fine-grained smoothness!</p>
      </div>

      <div className="superia">
        <div className="film-title txt-cen">Fujifilm Superia 200</div>
        <div className="row">
          <div className="img col">
          </div>
          <div className="img col">
          </div>
        </div>
        <p>If you are going for stunning portraits outdoors or indoors with flash, you have to try Fuji Superia 200 35mm color negative film. Youll get clear photos with naturally beautiful colors and fine-grained smoothness!</p>
      </div>

      <div className="footer">kjk</div>
    </div>
  );
}

export default App;
