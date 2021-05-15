import React from "react";
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    //form
    <section className="#">
    <div class="container">
        <div class="px-2 mt-5 border-index">
        <div class="row justify-content-center">          
          <div class="mt-3 col-md-4 px-5 col-md-4">
            <img class="mt-5 px-2" src={'./logo.png'}></img>
          </div>
          <div class="mt-5 px-5 col-md-4">
            <form>
              <div class="mt-5 form-group">
                <br></br>
                <label for="Username">Username</label>
                <input type="username" class="form-control" id="Username" placeholder="Enter your room number" required/>
                <br></br>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required/>
              </div>
              <br></br>
              <Link to="/dashboard">
              <button type="submit" class="btn btn-warning">Login</button>
              </Link>
            </form>            
          </div>          
        </div>
      </div>
    </div>
    </section>
  );
};
export default Index;
