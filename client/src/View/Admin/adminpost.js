import { useQuery, useMutation } from "@apollo/client";
import React, {useState, useCallback} from "react";
import { Link } from 'react-router-dom';
import Navbar from "../../../src/Components/Navbar.js";
import { CUSTOMER_QUERY } from "../../Graphql/userQuery";
import { useHistory} from "react-router";
import { CREATE_PRODUCT_MUTATION } from "../../Graphql/productMutation";

const AdminManagepost = () => {
  const { loading, error, data } = useQuery(CUSTOMER_QUERY, {
    fetchPolicy: "network-only",
  });
  const [values, setValues] = useState({
    quantity: 0,
    url: "",
    status: "",
    username: "",
  });
  const handleClick = (e) => {
    console.log(e.target.value)
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values)
  }
  const onChange = (event) => {
    console.log(values);
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const [addPost] = useMutation(CREATE_PRODUCT_MUTATION, {
    update(proxy, result) {
      console.log(result);
    },
    variables: {
      record: {
        username: values.username,
        quantity: parseInt(values.quantity),
        url: values.url,
        status: values.status
      },
    },
  });
  const history = useHistory();
  const redirect = useCallback(() => {
    history.push("/adminpost");
  }, [history]);
  const onSubmit = (event) => {
    event.preventDefault();
    addPost();
    redirect();
    alert("Create Parcel Success");
    // window.location.reload();
  };
  
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
            <button class="btn btn-lg px-5 py-4 btn-primary">ประกาศข่าวสาร</button>
            </Link>
            <br></br>
            <Link to="/adminmanage">            
              <button class="mt-2 btn btn-lg px-5 btn-primary">จัดการสัญญาเช่า</button>
            </Link>
            <br></br>
            <Link to="/adminpost">
              <button class="mt-2 btn btn-lg px-5 py-4 btn-primary">&nbsp;&nbsp;&nbsp; จัดการพัสดุ &nbsp;&nbsp;&nbsp;</button>
            </Link>
            <br></br>
            <Link to="/adminedituser">
            <button class="btn mt-2 btn-lg px-5 py-2 btn-primary">แก้ไขข้อมูลผู้เช่า,ซื้อ</button>
            </Link>
            <br></br>             
            <Link to="/admincontact">
              <button class="mt-2 btn btn-lg px-5 py-2 btn-primary">ดูความคิดเห็น,ติดต่อ</button>            
            </Link>
            <br></br>    
            <Link to="/">
              <br></br>
              <br></br>
              <button class="mt-5 btn btn-lg px-5 py-2 btn-danger"><i class="px-5 fas fa-sign-out-alt"></i>ออกจากระบบ</button>
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
                        <th scope="col"><i class="fas fa-home"></i> ห้อง</th>
                        <th scope="col"><i class="fas fa-user"></i> ชื่อเต็ม</th>
                        <th scope="col"><i class="fas fa-envelope"></i> อีเมลล์</th>
                        <th scope="col"><i class="fas fa-phone-alt"></i> เบอร์โทรศัพท์</th>
                        <th scope="col"><i class="fas fa-edit"></i> จัดการ</th>
                      </tr>
                    </thead>
                    <tbody class="font-weight-bold">
                      {data.customers.map((o) => {
                        return (
                          <tr>
                          <td><br></br>{o.username}</td>
                          <td><br></br>{o.fullname}</td>
                          <td><br></br>{o.email}</td>
                          <td><br></br>{o.tel}</td>
                          <td>                          
                            <button type="button" class="btn btn-warning mt-3" data-toggle="modal" data-target="#exampleModal">
                              จัดการพัสดุ
                            </button>
                            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                              <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLongTitle"><i class="fas fa-shipping-fast"></i> จัดการพัสดุให้ผู้เช่า,ซื้อ</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">&times;</span>
                                    </button>
                                  </div>
                                  <div class="modal-body">
                                    <a class="btn btn-lg form-control btn-success" data-toggle="collapse" href="#collapse1" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    <i class="fas fa-caret-down"></i> เพิ่มพัสดุ
                                    </a>
                                  <div class="collapse" id="collapse1">
                                    <div class="card card-body">
                                    <form onSubmit={onSubmit}>
                                      <div class="orm-group">
                                        <label class="h4 py-2" for="topic"> <i class="fas fa-home"></i> ห้อง {o.username}</label>
                                      </div>
                                      <hr></hr>                                 
                                      <div class="form-group mt-2">
                                        <label for="details">รายละเอียดพัสดุ</label>
                                        <input 
                                        type="number" 
                                        name="quantity"
                                        onChange={onChange} 
                                        onClick={handleClick}
                                        class="form-control" 
                                        id="details" 
                                        placeholder="Ex : พัสดุกี่ชิ้น"
                                        required
                                        />                                    
                                      </div>
                                      <div class="form-group mt-2">
                                        <label for="exampleFormControlFile1">เลือกรูปภาพพัสดุ</label>
                                        <br></br>
                                        <input 
                                        type="text" 
                                        name="url"
                                        onChange={onChange}
                                        
                                        class="py-2 form-control" 
                                        id="exampleFormControlFile1" 
                                        placeholder="Past link image"
                                        required
                                        />
                                      </div>                                    
                                      <div class="form-group mt-4">
                                        <label class="mr-sm-2 px-3" for="status">สถานะการรับพัสดุ</label>
                                        <select 
                                        class="custom-select btn"                                         
                                        name="status"
                                        onChange={onChange} 
                                        required>
                                          <option selected>เลือกสถานะรับพัสดุ</option>
                                          <option value="Received">รับแล้ว</option>
                                          <option value="Not_Received">ยังไม่ได้รับ</option>
                                        </select>                                      
                                      </div>                                                                                      
                                      <div class="mt-3 modal-footer">
                                      <button 
                                        type="submit"
                                        name="username"
                                        onClick={handleClick}
                                        value={o.username}
                                        class="btn btn-success" >
                                          บันทึก
                                        </button>                                        
                                        <button type="button"  class="btn btn-danger" data-dismiss="modal" >ยกเลิก</button>
                                      </div>                          
                                    </form>  
                                    </div>
                                  </div>
                                  <a class="btn btn-lg form-control btn-primary" data-toggle="collapse" href="#collapse3" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    <i class="fas fa-caret-down"></i> แก้ไขสถานะ
                                  </a>
                                  <div class="collapse" id="collapse3">
                                    <div class="card card-body">
                                      <div class="form-group ">
                                      <div class="orm-group">
                                        <label class="h4 py-2" for="topic"> <i class="fas fa-home"></i> ห้อง {o.username}</label>
                                      </div>
                                      <hr></hr>
                                      <label class="mr-sm-2 px-3" for="status">เลือกพัสดุที่ต้องการแก้ไขสถานะ : </label>
                                      <select class="custom-select btn"
                                      name="status"
                                      onChange={onChange}
                                      onClick={handleClick}
                                      required
                                      >
                                        <option selected>เลือกพัสดุที่ต้องการแก้ไข</option>
                                        <option value="Paid">พัสดุ:1</option>
                                        <option value="Overdue">พัสดุ:2</option>
                                      </select>                                      
                                    </div>  
                                      <button type="button"  class="btn btn-primary py-2 px-5 mt-4" data-dismiss="modal" >แก้ไขสถานะ</button>
                                    </div>
                                    
                                  </div> 

                                  <button class="btn btn-lg  form-control btn-danger" type="button" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapseExample">
                                  <i class="fas fa-caret-down"></i> ลบพัสดุ
                                    </button>
                                  <div class="collapse" id="collapse2">
                                    <div class="card card-body">
                                      <div class="form-group ">
                                      <div class="orm-group">
                                        <label class="h4 py-2" for="topic"> <i class="fas fa-home"></i> ห้อง {o.username}</label>
                                      </div>
                                      <hr></hr>
                                      <label class="mr-sm-2 px-3" for="status">เลือกพัสดุที่ต้องการลบ : </label>
                                      <select class="custom-select btn"
                                      name="status"
                                      onChange={onChange}
                                      onClick={handleClick}
                                      required
                                      >
                                        <option selected>เลือกพัสดุที่ต้องการลบ</option>
                                        <option value="Paid">พัสดุ:1</option>
                                        <option value="Overdue">พัสดุ:2</option>
                                      </select>                                      
                                    </div>  
                                      <button type="button"  class="btn btn-danger py-2 px-5 mt-4" data-dismiss="modal" >ลบพัสดุ</button>
                                    </div>
                                    
                                  </div>                                      
                                    
                                  </div>                   
                                </div>
                              </div>
                            </div>  </td>
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
export default AdminManagepost;


{/* <tr>
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
                      </tr>    */}