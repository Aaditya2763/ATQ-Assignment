import { useState } from 'react';
import './App.css';
import NavbarBox from './components/Navbar/navbar';
import Dashboard from './components/dashboard/dashboard';
import Signup from './components/auth/Signup';

function App() {
  const [login, setlogin] = useState(true);

  const showAuthHandler = () => {
    login(true);
    console.log(true);
  };

  const hideAuthHandler = () => {
    setlogin(false);
    console.log(false);
  };

  return (
    <div style={{overflow:'hidden'}}>
      <NavbarBox showAuthHandler={showAuthHandler} hideAuthHandler={hideAuthHandler}  login={login}/>
      
      <Dashboard login={login}/>
    </div>
  );
}

export default App;
