import React from "react";
import { Link } from 'react-router-dom';
import { PRODUCTS_QUERY } from "../Graphql/productsQuery";
import { useQuery } from "@apollo/client";
import Navbar from "../Components/Navbar.js";

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
    <div class="container border-dashboard">
        <Navbar />
        <hr></hr>
        <div class="row">          
          <div class="mt-4 col-md-2 px-5 col-md-3">
          <Link to="/dashboard">
              <button class="btn btn-lg px-5 btn-primary">ดูประกาศจากผู้ดูแล</button>
            </Link>
            <br></br>
            <Link to="/management">            
              <button class="mt-4 btn btn-lg px-5 btn-primary">ค่าใช้จ่ายรายเดือน</button>
            </Link>
            <br></br>
            <Link to="/managepost">
              <button class="mt-4 btn btn-lg px-5 btn-primary">ดูรายการพัสดุทั้งหมด</button>
            </Link>
            <br></br>
            <Link to="/managecontact">
              <button class="mt-4 btn btn-lg px-5 btn-primary">เขียนข้อเสนอ ติดต่อผู้ดูแล</button>            
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
                    {data.products.map((o) => {
                        if (o.username == data.me.username) {
                        return (
                      <tr>
                        <td>0{o.timestamp}</td>
                        <td>พัสดุ : {o.quantity} ชิ้น</td>
                        {(o.status === "Received") 
                        ? <td class="text-success">รับแล้ว</td> : <td class="text-danger">ยังไม่ได้รับ</td>}
                      </tr>
                         )}
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
export default Managepost;
