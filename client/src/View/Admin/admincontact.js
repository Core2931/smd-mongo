import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "../../../src/Components/Navbar.js";
import { useQuery } from "@apollo/client"
import { SUGGEST_QUERY } from "../../Graphql/suggestQuery"


const AdminManagecontact = () => {
  const { loading, error, data } = useQuery(SUGGEST_QUERY, {
    fetchPolicy: "network-only",
  });
  
    if (loading) {
      return "Loading ...";
    }
    if (error) {
      return "Error !!";
    }
    console.log(data)
  return (
    //form
    <section className="#">
    <div class="container border-dashboard">
        <Navbar/>  
        <hr></hr>
        <div class="row">          
          <div class="mt-4 col-md-2 px-5 col-md-3">
          <Link to="/admindashboard">
              <button class="btn btn-lg px-5 py-1 btn-primary">Edit Dashboard</button>
            </Link>
            <br></br>
            <Link to="/adminmanage">            
              <button class="mt-4 btn btn-lg px-5 py-3 btn-warning">Manage Bill</button>
            </Link>
            <br></br>
            <Link to="/adminpost">
              <button class="mt-4 btn btn-lg px-5 btn-primary">Create Post</button>
            </Link>
            <br></br>
            <Link to="/admincontact">
              <button class="mt-4 btn btn-lg px-5 btn-warning">Manage Contact</button>            
            </Link>
            <br></br>
            <Link to="/">
              <br></br>
              <br></br>
              <button class="mt-5 btn btn-lg px-5 py-2 btn-danger"><i class="px-5 fas fa-sign-out-alt"></i>Logout</button>
            </Link>
          </div>  
          <div class="mt-4 col px-5">
            <div class="main-border">
              <div class="text-center">
                <br></br>
                <h3 class="text-primary"><b><i class="fas fa-headset"></i> ดูคำติดต่อถึงผู้ดูแลระบบ</b></h3>
                <hr></hr>
                <div class="table-responsive-sm">
                  <table class="table">
                  <thead>
                      <tr class="table-light h5">                        
                        <th scope="col"><i class="fas fa-home"></i> Room</th>
                        <th scope="col"><i class="fas fa-calendar"></i> Date</th>
                        <th scope="col"><i class="fas fa-info-circle"></i> Details</th>
                      </tr>
                    </thead>
                    <tbody class="font-weight-bold">
                      {data.suggests.map((o) => {
                        return (
                          <tr>
                          <td>{o.username}</td>
                          <td>{o.timestamp}</td>
                          <td>{o.detail}</td>
                        </tr> 
                        )
                      })}                           
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>  
        </div>
        <br></br>
        <hr></hr>
        <center><b>Design by : System Manage Dorm Team</b></center>
      </div>
    </section>
  );
};
export default AdminManagecontact;
