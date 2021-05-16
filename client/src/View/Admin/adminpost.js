import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "../../../src/Components/Navbar.js";

const AdminManagepost = () => {
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
                <h3 class="text-primary"><b><i class="fas fa-shipping-fast"></i> รายการพัสดุ</b></h3>
                <hr></hr>
                <div class="table-responsive-sm">
                  <table class="table">
                  <thead>
                      <tr class="table-light h5">
                        <th scope="col"><i class="fas fa-calendar"></i> Room</th>
                        <th scope="col"><i class="fas fa-calendar"></i> Date</th>
                        <th scope="col"><i class="fas fa-envelope"></i> Details</th>
                        <th scope="col"><i class="fas fa-sticky-note"></i> Status</th>
                        <th scope="col"><i class="far fa-edit"></i> Edit</th>
                      </tr>
                    </thead>
                    <tbody class="font-weight-bold">
                      <tr>
                        <td><br></br>Room : 250</td>
                        <td><br></br>05/01/64</td>
                        <td>พัสดุ : 2 ชิ้น<br></br><img style={{width: 60, height: 60}} src="https://www.bti.live/wp-content/uploads/2019/02/Binance-Coin.png"></img></td>
                        <td class="text-danger"><br></br>ยังไม่ได้รับ</td>
                        <td>                          
                          <button type="button" class="btn btn-warning mt-3" data-toggle="modal" data-target="#exampleModal">
                            Edit
                          </button>
                          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5 class="modal-title" id="exampleModalLongTitle">Add Post.</h5>
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div class="modal-body">
                                  <form>
                                    <div class="orm-group">
                                      <label class="h4 py-2" for="topic"> <i class="fas fa-home"></i> ห้อง 250</label>
                                    </div>
                                    <hr></hr>                                 
                                    <div class="form-group mt-2">
                                      <label for="details">รายละเอียดพัสดุ</label>
                                      <input type="text" class="form-control" id="details" placeholder="Ex : พัสดุกี่ชิ้น"/>                                    
                                    </div>
                                    <div class="form-group mt-2">
                                      <label for="exampleFormControlFile1">เลือกรูปภาพพัสดุ</label>
                                      <br></br>
                                      <input type="text" class="py-2 form-control" id="exampleFormControlFile1" placeholder="Past link image"/>
                                    </div>                                    
                                    <div class="form-group mt-4">
                                      <label class="mr-sm-2 px-3" for="status">สถานะการรับพัสดุ</label>
                                      <select class="custom-select btn">
                                        <option selected>เลือกสถานะรับพัสดุ</option>
                                        <option value="1">รับแล้ว</option>
                                        <option value="2">ยังไม่ได้รับ</option>
                                      </select>                                      
                                    </div>                                                                                            
                                    <div class="mt-3 modal-footer">
                                      <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                      <button type="button" class="btn btn-success">Save changes</button>
                                    </div>                          
                                  </form>  
                                </div>                   
                              </div>
                            </div>
                          </div>  </td>
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
    </section>
  );
};
export default AdminManagepost;
