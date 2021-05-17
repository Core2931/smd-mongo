import React from "react";
import './App.css';
import { BrowserRouter, Route, Switch  } from "react-router-dom";
// ///////////////////////////
import LoginForm from './View/index.js';
import Dashboard from './View/dashboard.js';
import Management from './View/management.js';
import ManagePost from './View/managepost.js';
import ManageContact from './View/managecontact.js';
import { useSession } from "./Contexts/SessionContext";
import AdminDashboard from "./View/Admin/admindashboard";
import AdminManagecontact from "./View/Admin/admincontact";
import AdminManagement from "./View/Admin/adminmanage";
import AdminManagepost from "./View/Admin/adminpost";
import AdminEditUser from "./View/Admin/adminedituser";


function App() {
    return (      
        <div>
            <Switch>
             <Route path="/" exact component={LoginForm}/>
             <Route path="/dashboard" exact component={Dashboard}/>
             <Route path="/management" exact component={Management}/>
             <Route path="/managepost" exact component={ManagePost}/>
             <Route path="/managecontact" exact component={ManageContact}/>

             <Route path="/admindashboard" exact component={AdminDashboard}/>
             <Route path="/admincontact" exact component={AdminManagecontact}/>
             <Route path="/adminpost" exact component={AdminManagepost}/>
             <Route path="/adminmanage" exact component={AdminManagement}/>
             <Route path="/adminedituser" exact component={AdminEditUser}/>

            <Route component={Error}/>
           </Switch>
        </div> 
    );
  }

export default App;
