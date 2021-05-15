import React from "react";
import './App.css';
import { BrowserRouter, Route, Switch  } from "react-router-dom";
// ///////////////////////////
import Index from './View/index.js';
import Dashboard from './View/dashboard.js';
import Management from './View/management.js';
import ManagePost from './View/managepost.js';
import ManageContact from './View/managecontact.js';

class App extends React.Component{
  render() {
    return (      
       <BrowserRouter>
        <div>
            <Switch>
             <Route path="/" component={Index} exact/>
             <Route path="/dashboard" component={Dashboard}/>
             <Route path="/management" component={Management}/>
             <Route path="/managepost" component={ManagePost}/>
             <Route path="/managecontact" component={ManageContact}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;
