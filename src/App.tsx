import "./App.css";
import Icon from "./components/Icons/Icon";

function App() {
  return (
    <div className="App">
      <main>
        <img src="/logo1000.png" className="App-logo" alt="Tilect Logo" />
      </main>
      <footer>
        <div className="App-socials">
          <a href="https://t.me/tilect.art">
            <Icon icon="telegram" />
          </a>
          <a href="https://soundcloud.com/tilect.art">
            <Icon icon="soundcloud" />
          </a>
          <a href="https://instagram.com/tilect.art">
            <Icon icon="instagram" />
          </a>
          <a href="https://instagram.com/tilect.art">
            <Icon icon="github" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
