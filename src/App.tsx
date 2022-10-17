import "./App.css";
import Icon from "./components/Icons/Icon";

function App() {
  return (
    <div className="App">
      <video autoPlay loop muted>
        <source src="/tilect_prueba02.mp4" type="video/mp4" />
      </video>
      <div>
        <div className="App-socials-grid">
          <div>
            <a
              href="https://t.me/tilectartpublic"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="telegram" />
            </a>
          </div>
          <div>
            <a
              href="https://instagram.com/tilect.art"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="instagram" />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/tilect"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="github" />
            </a>
          </div>
          <div>
            <a
              href="https://soundcloud.com/tilect"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="soundcloud" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
