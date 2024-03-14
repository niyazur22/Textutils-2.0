import React, { useState } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';


function App() {
  const[mode, setMode] = useState('light');
  const[alert,setAlert] = useState(null);

  const showAlert = (messege, type)=>{
        setAlert({
          msg: messege,
          type: type
        })
        setTimeout(() =>{
           setAlert(null);
        },3000);

  }
  const toggleMode = ()=>{
    if(mode=== 'light'){
     setMode('dark');
     document.body.style.backgroundColor = '#042743';
     showAlert("Dark Mode has been enabled","Success");
    }    
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","Success");
    }
}
  return (
  <>
  <Router>
  <Navbar title = "Textutils2.0" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className ="container my-3">
    <Routes>
      <Route path='/about' element={<About mode={mode}/>} />
  <Route path='/' element={ <TextForm showAlert={showAlert} heading="Enter The Text to Analyze" mode={mode}/>}/>
      </Routes>
      </div>
      </Router>
    
  </>
  );
}
export default App;
