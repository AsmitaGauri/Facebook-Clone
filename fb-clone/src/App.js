import React from 'react';
import Header from './components/Header';
import './App.css';
import SideBar from './components/SideBar';
import Feed from './components/Feed';
import Widget from './components/Widget';
import Login from './components/Login';
import {useStateValue} from './ReactContextApi/StateProvider'
function App() {
  const [{user},dispatch]=useStateValue();
  return (
    <div className="app">
      {
        !user?(<Login/>):(
          <>
         
          <Header/>
          <div className="app__body">
          <SideBar/>
          <Feed/>
            <Widget/>
          </div>
          </>
        )
      }
     
     
    </div>
  );
}

export default App;
