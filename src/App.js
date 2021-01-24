import logo from './logo.svg';
import original from './original.png';
import superia from './superia.png';
import vista from './vista.jpg';
import vistaoriginal from './vistaoriginal.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="top container">Photoshop Film Emulations</div>
      <div className="intro container">
        <h2>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</h2>
        <h3><a href="https://www.instagram.com/keshkaushal/">Instagram</a></h3>
      </div>
      <div className="film-wrapper0">
      <div className="container">
          <div className="film-title">Fujifilm Superia 200</div>
          <div className="row">
                <div className="img col-sm">
                  <img src={original}></img>
                </div>
                <div className="img col-sm">
                  <img src={superia}></img>
                </div>
          </div>
                  <p>If you are going for stunning portraits outdoors or indoors with flash, you have to try Fuji Superia 200 35mm color negative film. Youll get clear photos with naturally beautiful colors and fine-grained smoothness!</p>
        </div>

      </div>
      <div className="film-wrapper1">
      <div className="container">
          <div className="film-title">Agfa Vista 200</div>
          <div className="row">
                <div className="img col-sm">
                  <img src={vistaoriginal}></img>
                </div>
                <div className="img col-sm">
                  <img src={vista}></img>
                </div>
          </div>
                  <p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
        </div>

      </div>
      <div className="film-wrapper0">
      <div className="container">
          <div className="film-title">Fujifilm Velvia 50</div>
          <div className="row">
                <div className="img col-sm">
                  <img src={original}></img>
                </div>
                <div className="img col-sm">
                  <img src={superia}></img>
                </div>
          </div>
                  <p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
        </div>

      </div>
    <div className="footer">kjk</div>
    </div>
  );
}

export default App;
