import React from "react";
import { Link } from 'react-router-dom';
import { useQuery } from "@apollo/client"
import { BILLS_QUERY } from "../Graphql/billQuery"
import Navbar from "../Components/Navbar.js";

const Management = () => {
  const { loading, error, data } = useQuery(BILLS_QUERY, {
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
                <h3 class="text-primary"><b><i class="fas fa-money-bill-alt"></i> ข้อมูลการเงิน</b></h3>
                <hr></hr>
                <div class="table-responsive-sm">
                  <table class="table">
                  <thead>
                      <tr class="table-light h5">
                        <th scope="col"><i class="fas fa-calendar"></i> Date</th>
                        <th scope="col"><i class="fas fa-info-circle"></i> Details</th>
                        <th scope="col"><i class="fas fa-sticky-note"></i> Status</th>
                      </tr>
                    </thead>
                    <tbody class="font-weight-bold">
                      {data.bills.map((o) => {
                        if (o.username == data.me.username) {
                        return (
                        <tr>
                        <td><br></br>{o.timestamp}</td>
                        <td>ค่าห้อง : {o.roombill} บาท<br></br> ค่าไฟ : {o.elecbill} บาท<br></br> ค่าน้ำ : {o.waterbill} บาท</td>
                        {(o.status === "Paid") 
                        ? <td class="text-success"><br></br>ชำระแล้ว</td> : <td class="text-danger"><br></br>ค้างชำระ</td>}
                      </tr>
                        )}
                      })}
                      
                      {/* <tr>
                        <td><br></br>19/01/64</td>
                        <td>ค่าห้อง : 6000 บาท<br></br> ค่าไฟ : 1500 บาท<br></br> ค่าน้ำ : 200บาท</td>
                        <td class="text-success"><br></br>ชำระแล้ว</td>
                      </tr>
                      <tr>
                        <td><br></br>19/12/63</td>
                        <td>ค่าห้อง : 6000 บาท<br></br >ค่าไฟ : 1200 บาท<br></br> ค่าน้ำ : 250บาท</td>
                        <td class="text-success"><br></br>ชำระแล้ว</td>
                      </tr>
                      <tr>
                        <td><br></br>19/11/63</td>
                        <td>ค่าห้อง : 6000 บาท<br></br >ค่าไฟ : 1100 บาท<br></br> ค่าน้ำ : 280บาท</td>
                        <td class="text-success"><br></br>ชำระแล้ว</td>
                      </tr>                     */}
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
export default Management;
