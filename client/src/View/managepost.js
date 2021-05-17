import React from "react";
import { Link } from 'react-router-dom';
import { PRODUCTS_QUERY } from "../Graphql/productsQuery";
import { useQuery } from "@apollo/client";


const Managepost = () => {
  const { loading, error, data } = useQuery(PRODUCTS_QUERY, {
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
    <div class="container">
        <div class="px-2 mt-5 border-dashboard">
          <div class="row">
            <div class="col-md-2"><img class="mt-3 logo-dash" src={'./logo.png'}></img></div>
            <div class="mt-3 col-md-4 h4 text-primary">
              <b><i class="mt-5 fas fa-users"></i> Dorm : V-Condo | <i class="fas fa-home"></i> Room : 250</b>
              <br></br>
              <br></br>
            </div>
          </div>
        <hr></hr>
        <div class="row">          
          <div class="mt-4 col-md-2 px-5 col-md-3">
            <Link to="/dashboard">
              <button class="btn btn-lg px-5 py-1 btn-primary">Main Dashboard</button>
            </Link>
            <br></br>
            <Link to="/management">            
              <button class="mt-4 btn btn-lg px-5 py-3 btn-warning">Management</button>
            </Link>
            <br></br>
            <Link to="/managepost">
              <button class="mt-4 btn btn-lg px-5 btn-primary">Manage Post</button>
            </Link>
            <br></br>
            <Link to="/managecontact">
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
                <h3 class="text-primary"><b><i class="fas fa-shipping-fast"></i> รายการพัสดุ</b></h3>
                <hr></hr>
                <div class="table-responsive-sm">
                  <table class="table">
                  <thead>
                      <tr class="table-light h5">
                        <th scope="col"><i class="fas fa-calendar"></i> Date</th>
                        <th scope="col"><i class="fas fa-envelope"></i> Details</th>
                        <th scope="col"><i class="fas fa-sticky-note"></i> Status</th>
                      </tr>
                    </thead>
                    <tbody class="font-weight-bold">
                      <tr>
                        <td>05/01/63</td>
                        <td>พัสดุ : 3 ชิ้น</td>
                        <td class="text-danger">ยังไม่ได้รับ</td>
                        </tr>                     
                        <tr>
                        <td>01/01/63</td>
                        <td>พัสดุ : 5 ชิ้น</td>
                        <td class="text-success">รับแล้ว</td>
                        </tr>   
                      
                      <tr>
                        <td>03/11/62</td>
                        <td>พัสดุ : 2 ชิ้น</td>
                      <td class="text-success">รับแล้ว</td>
                      </tr> 
                      <tr>
                        <td>25/10/63</td>
                        <td>พัสดุ : 1 ชิ้น</td>
                      <td class="text-success">รับแล้ว</td>
                      </tr> 
                      <tr>
                        <td>15/10/63</td>
                        <td>พัสดุ : 1 ชิ้น</td>
                      <td class="text-success">รับแล้ว</td>
                      </tr> 
                      <tr>
                        <td>09/10/63</td>
                        <td>พัสดุ : 1 ชิ้น</td>
                      <td class="text-success">รับแล้ว</td>
                      </tr>                                   
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
    </div>
    </section>
  );
};
export default Managepost;
