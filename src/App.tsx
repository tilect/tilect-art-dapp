import "./App.css";
import Icon from "./components/Icons/Icon";

function App() {
  return (
    <div className="App">
      <main>
        <img src="/logo512.png" className="App-logo" alt="Tilect Logo" />
      </main>
      <footer>
        <div className="App-socials">
          <a href="https://t.me/tilectartpublic" target="_blank">
            <Icon icon="telegram" />
          </a>
          <a href="https://instagram.com/tilect.art" target="_blank">
            <Icon icon="instagram" />
          </a>
          <a href="https://github.com/tilect" target="_blank">
            <Icon icon="github" />
          </a>
          <a href="#" target="_blank">
            <Icon icon="soundcloud" color="gray" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
