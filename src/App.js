import "./App.css";
// import { BrowserRouter,Switch,Route,Routes } from 'react-router-dom';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate
} from "react-router-dom";

import { useAuthContext } from "./hooks/useAuthContext";
// import {authIsReady,user} from "./hooks/useAuthContext"

// import { BrowserRouter } from 'react-router-dom';

//pages
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

//comoponents
import Navbar from "./components/Navbar";




function App() {
  const { authIsReady,user } = useAuthContext();

  // const {user} = useAuthContext()

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        {/* <Route 
          index 
          // element={ user ? <Home /> : <Login />}
          element={user ? <Navigate to= <Home /> replace />: <Login /> } 
          /> */}
        <Route  path="/" element={user ? <Home /> : <Login />} />
        <Route path="login" element={user ? <Home /> : <Login />} />
        <Route path="signup" element={user ? <Home />:<Signup />} />
        <Route path="*" element=<p>Not found</p> />
      </Route>
    )
  );

  if (authIsReady) {
    return <RouterProvider router={router} />;
  }
}

export default App;
