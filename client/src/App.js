import './App.css';
// import Home from './views/Home/Home.jsx';
// import Landing from './views/Landing/Landing.jsx';
// import Detail from './views/Detail/Detail.jsx';
// import Form from './views/Form/Form.jsx';

import {Home,Landing,Detail,Form} from './views/index.js';
import NavBar from './components/NavBar/NavBar.jsx';

import {Route,useLocation} from 'react-router-dom';

function App() {
  const {pathname}=useLocation();
   return (
    <div className="App">
      {/*<h1>Henry Countries</h1>*/}
      {(pathname!=='/') &&<NavBar/>}
      <Route exact path = '/' component = {Landing} />
      <Route exact path = '/home' component = {Home} />
      <Route exact path = '/detail/:id' component = {Detail} />
      <Route path = '/form' render  ={ ()=> <Form/> }/>
    </div>
  );
}

export default App;
