import './App.css';
import Header from "./component/layout/Header/Header.js"
import { BrowserRouter as Router,Route} from "react-router-dom";
import WebFont from "webfontloader";
import React from 'react';
import Footer from './component/layout/Footer/Footer';
import Home from './component/Home/Home';

function App() {
    React.useEffect(()=>{
      
      WebFont.load({
    
        google: {
          families: ["Roboto", "Droid Sans", "Chilanka"],
        },
      })
    })
  return (
    <Router>
      <Header/>
      {/* <Route extact path="/" component={Home}/> */}
      {/* <Route exact path="/" component={Home} /> */}
      <Home/>
      <Footer/>
    </Router>
  );
}

export default App;
