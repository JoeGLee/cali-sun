import NavBar from "./components/navBar";
import TitlePage from "./components/titlePage";
import About from "./components/about";
import Music from "./components/music";
import Footer from "./components/footer";
import "./styles.css"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <TitlePage/>
      <About />
      <Music />
      <Footer />
    </div>
  );
}

export default App;
