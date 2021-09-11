
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App =()=>{
  const pageSize=12
  const apiKey=process.env.REACT_APP_NEWS_API
    const [progress,setProgress]=useState(0)
   
  
  

 
    return (
      <Router>

      <div>
         <Navbar/> 
         <LoadingBar color='#f11946' progress={progress}/>
        <Switch>
          <Route exact path="/sports">
            <News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key="sports" contry="in" category="sports"/>
          </Route>
          <Route exact path="/business">
            <News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="business" contry="in" category="business"/>
          </Route>
          <Route exact path="/entertainment">
            <News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="entertainment" contry="in" category="entertainment"/>
          </Route>
          <Route exact path="/health">
            <News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="health" contry="in" category="health"/>
          </Route>
          <Route exact path="/science">
            <News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="science" contry="in" category="science"/>
          </Route>
          <Route exact path="/technology">
            <News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="technology" contry="in" category="technology"/>
          </Route>
          <Route exact path="/">
              <News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="general" contry="in" category="general"/>
          </Route>
        
        </Switch>
      </div>

      </Router>
    )
  }
  export default App
