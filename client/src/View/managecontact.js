import React, { useState, useCallback } from "react";
import { Link } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client'
import { useHistory} from "react-router";

const CREATE_SUGGEST_MUTATION = gql`
mutation ($record:CreateOneSuggestInput!) {
    createSuggest (record:$record) {
      record {
        _id
        fullname
        detail
        tel
        username
        ownerName
      }
    }
  }
  `
const Managecontact = () => {
  // const [values, setValues] = useState({
  //   fullname: "",
  //   datail: "",
  //   tel: "",
  //   username: "",
  // });
  // const onChange = (event) => {
  //   console.log(values);
  //   setValues({ ...values, [event.target.name]: event.target.value });
  // };
  // const [addSuggest] = useMutation(CREATE_SUGGEST_MUTATION, {
  //   update(proxy, result) {
  //     console.log(result);
  //   },
  //   variables: {
  //     record: {
  //       fullname: values.fullname,
  //       detail: values.detail,
  //       tel: values.tel,
  //       username: values.username,
  //     },
  //   },
  // });
  // const history = useHistory();
  // const redirect = useCallback(() => {
  //   history.push("/managecontact");
  // }, [history]);
  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   addSuggest();
  //   redirect();
  //   alert("Suggest Success");
  //   window.location.reload();
  // };
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
                <h3 class="text-primary"><b><i class="fas fa-headset"></i> ติดต่อผู้ดูแลระบบ</b></h3>
                <hr></hr>
                <form >
                  <div class="row justify-content-center">
                    <div class="col-9">
                      <label>ชื่อผู้ติดต่อ</label>
                      <input 
                      type="text"
                      name="fullname"
                   
                      class="form-control" 
                      placeholder="ชื่อผู้ติดต่อ" 
                      required/>
                    </div>
                    <div class="col-9">
                      <label>เลขที่ห้อง</label>
                      <input type="number" 
                      class="form-control" 
                      name="username"
                      
                      placeholder="เลขที่ห้อง" 
                      required/>
                    </div>                    
                    <div class="col-9">
                    <label>เบอร์โทรติดต่อ</label>
                      <input 
                      type="text" 
                      name="tel"
                      
                      class="form-control" 
                      placeholder="เบอร์โทรศัพท์" 
                      required/>
                    </div>
                    <div class="col-9">
                      <label>รายละเอียดที่ต้องการแจ้ง</label>
                      <textarea 
                      rows='5' 
                      type="text" 
                      name="detail"
                      
                      class="form-control" 
                      placeholder="รายละเอียดที่ต้องการติดต่อ ตัวอย่าง แจ้งเรื่องปัญหาที่ห้อง 205" 
                      required/>
                    </div>
                    <div class="col-9">
                      <br></br>
                      <button type="submit" class="btn btn-warning btn-md">ส่งข้อมูล</button>
                    </div>
                  </div>
                </form>
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
export default Managecontact;
