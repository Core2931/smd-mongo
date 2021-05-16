import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "../../../src/Components/Navbar.js";

const AdminDashboard = () => {
  return (
    //form
    <section className="#">
    <div class="container border-dashboard">
        <Navbar/>   
        <hr></hr>
        <div class="row">          
          <div class="mt-4 col-md-2 px-5 col-md-3">
          <Link to="/adminddashboard">
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
                <h3 class="text-primary"><b><i class="fas fa-bullhorn"></i> ประกาศจากผู้ดูแลระบบ !!</b></h3>
                <hr></hr>
                <li class="h5 text-danger">ด่วน !! ให้ผู้อาศัยทุกคนดำเนินการชำระค่าส่วนกลางได้โดยสามารถดูรายการได้ในหน้าการเงิน</li>
                <li>ผู้อาศัยสามารถดูรายละเอียดเกี่ยวกับการเงินได้ในเมนู Management</li>
                <li>ผู้อาศัยสามารถดูรายละเอียดพัสดุของท่านได้ในเมนู Manage Post</li>

                <button type="button" class="mt-4 btn btn-dark" data-toggle="modal" data-target="#exampleModal">
                  Press here for add annoucement.
                </button>
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Add annoucement.</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <form>
                          <div class="form-group">
                            <label for="topic">Topic</label>
                            <input type="text" class="form-control" id="topic" aria-describedby="topic" placeholder="Topic name."/>
                          </div>
                          <div class="form-group mt-3">
                            <label for="details">Details</label>
                            <textarea type="text" rows="5" class="form-control" id="details" placeholder="Details"/>
                          </div>
                          <div class="mt-3 modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-success">Save changes</button>
                          </div>                          
                        </form>  
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
    </section>
  );
};
export default AdminDashboard;
