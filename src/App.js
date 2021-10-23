import Navbar from './components/Navbar';
import BoxContainer from './components/BoxContainer';
import GetUser from './components/GetUser';
import {Route, Switch} from 'react-router-dom';
function App() {
  return (
    <>
    <Navbar/>
      <Switch>
        <Route exact path='/' component={GetUser}/>
        <Route path='/getuser' component={BoxContainer}/>
      </Switch>
    </>
  );
}


export default App;