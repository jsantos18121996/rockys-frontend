import React, { useState } from 'react';
import Routes from './routes';
import LoginForm from './component/LoginForm';
import Navbar from './component/commons/Navbar';
import '../src/App.css';


const App = () => {
  const adminUser = {
    name: 'jsantos',
    password : '123456'
  }

  const [user, setUser] = useState({name: "", password: ""});
  const [error, setError] = useState("");

  //funcion para loggearse
  const Login = details => {
    console.log(details);

    if(details.name === adminUser.name && details.password === adminUser.password) {
      console.log("USUARIO LOGGEUADO CORRECTAMENTE");
      setUser({name: details.name, password: details.password})
      console.log("STATE USER", user);

    } else {
      setError("USUARIO NO ENCONTRADO!!!")
      console.log("USUARIO NO ENCONTRADO")
    }
  }

  const Logout = () => {
    setUser({name: "", password: "" })
    console.log("Logout");
  }

  return (
    <div className="App">
      {(user.name !== "") ? 
        (<div>
          <Navbar userName={user.name} Logout={Logout}/>
          <Routes />
          </div>) : <LoginForm Login={Login} error={error}/>
      }
    </div>
      
  );
}

export default App;
