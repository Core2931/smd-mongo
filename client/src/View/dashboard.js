import React from "react";
import { Link } from 'react-router-dom';
import { useQuery } from "@apollo/client"
import { ANNOUNCEMENT_QUERY } from "../Graphql/announcementQuery"

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
    <div class="container">
        <div class="px-2 mt-5 border-dashboard">
          <div class="row">
            <div class="col-md-2"><img class="mt-3 logo-dash" src={'./logo.png'}></img></div>
            <div class="mt-3 col-md-4 h4 text-primary">
              <b><i class="mt-5 fas fa-users"></i> Dorm : V-Condo | <i class="fas fa-home"></i> Room : {data.me.username}</b>
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
                <h3 class="text-primary"><b><i class="fas fa-bullhorn"></i> ประกาศจากผู้ดูแลระบบ !!</b></h3>
                <hr></hr>
                <li class="h5 text-danger">ด่วน !! ให้ผู้อาศัยทุกคนดำเนินการชำระค่าส่วนกลางได้โดยสามารถดูรายการได้ในหน้าการเงิน</li>
                <li>ผู้อาศัยสามารถดูรายละเอียดเกี่ยวกับการเงินได้ในเมนู Management</li>
                <li>ผู้อาศัยสามารถดูรายละเอียดพัสดุของท่านได้ในเมนู Manage Post</li>
              
                   <div class="row">
                    <div class="col-sm-12">
                      <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">ฉีดพ่นฆ่าเชื้อ</h5>
                          <p class="card-text">เนื่องจากมีสถานะการณ์โควิดจึงทำให้ทางเรา มีการฉีดฆ่าเชื้อทุกๆ วันพุธของสัปดาห์</p>
                          <p>08/05/64</p>
                        </div>
                      </div>
                    </div>
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
export default Dashboard;
