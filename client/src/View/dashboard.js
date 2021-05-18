import React from "react";
import { Link } from 'react-router-dom';
import { useQuery } from "@apollo/client"
import { ANNOUNCEMENT_QUERY } from "../Graphql/announcementQuery"
import Navbar from "../Components/Navbar.js";

const Dashboard = () => {
    const { loading, error, data } = useQuery(ANNOUNCEMENT_QUERY, {
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
                <h3 class="text-primary"><b><i class="fas fa-bullhorn"></i> ประกาศจากผู้ดูแลระบบ !!</b></h3>
                <hr></hr>
                <li class="h5 text-danger">ด่วน !! ให้ผู้อาศัยทุกคนดำเนินการชำระค่าส่วนกลางได้โดยสามารถดูรายการได้ในหน้าการเงิน</li>
                <li>ผู้อาศัยสามารถดูรายละเอียดเกี่ยวกับการเงินได้ในเมนู Management</li>
                <li>ผู้อาศัยสามารถดูรายละเอียดพัสดุของท่านได้ในเมนู Manage Post</li>
                {data.announcements.map((o) => {
                  return (
                  
                      <blockquote class="card px-3 py-2 blockquote mb-0">
                        <p class="textdash py-1">{o.topic}<br />{o.detail}</p>
                        <footer class="blockquote-footer textdash-time"> <i class="fas fa-history"></i>  {o.timestamp}</footer>
                      </blockquote>
                 
                  )
                })}
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
export default Dashboard;
