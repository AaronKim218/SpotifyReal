import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Feed from './components/Feed';
import AddSongModal from "./components/AddSongModal";

function App() {
  return (
    <div className="App">
      <AddSongModal />
      <Feed />
    </div>
  );
}

export default App; 
