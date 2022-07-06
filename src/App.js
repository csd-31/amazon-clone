import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home';
import Header from './Header';
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
    <Header/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='checkout' element={<Checkout/>}/> 
        <Route path='login' element={<Login/>}/> 
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
{/* <BrowserRouter>
<Routes>
  <Route path="/" element={<App />} />
  <Route path="expenses" element={<Expenses />} />
  <Route path="invoices" element={<Invoices />} />
</Routes>
</BrowserRouter> */}