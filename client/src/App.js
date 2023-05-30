import './App.css';
import axios from "axios";

function App() {

  const fu = async()=> {
    const api = (await axios.get("https://rest-countries.up.railway.app/v3.1/all"));
    console.log(api);
  }
  fu();
  return (
    <div className="App">
      <h1>Henry Countries</h1>

    </div>
  );
}

export default App;
