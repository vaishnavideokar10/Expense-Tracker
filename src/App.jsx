import { useEffect, useState } from 'react'
import Signin from './components/Signin/Signin';
import Dashboard from './components/Dashboard/Dashboard';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import './App.css'
import { gapi } from 'gapi-script';

const clientId = '949936098006-hblta500v948358n1htrm7qnvlcaf49k.apps.googleusercontent.com';

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      })
    };
    gapi.load('client:auth2', initClient)

  });
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Dashboard />}>
      {/* <Route index element={<Dashboard/>}/> */}
   <Route path ='dashboard' element={<Dashboard/>}/>
    </Route>
    </Routes>
    </BrowserRouter>

  )
}

export default App
