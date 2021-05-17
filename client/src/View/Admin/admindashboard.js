import React, {useState, useCallback} from "react";
import { Link } from 'react-router-dom';
import Navbar from "../../../src/Components/Navbar.js";
import { useQuery } from "@apollo/client"
import { ANNOUNCEMENT_QUERY } from "../../Graphql/announcementQuery"
import { gql, useMutation } from '@apollo/client'
import { useHistory} from "react-router";

const CREATE_ANNOUNCEMENT_MUTATION = gql`
mutation ($record:CreateOneAnnoucementInput!) {
  createAnnoucement (record:$record) {
      record {
        _id
        topic
        detail
        url
        ownerName
      }
    }
  }
  `

const AdminDashboard = () => {
  const { loading, error, data } = useQuery(ANNOUNCEMENT_QUERY, {
    fetchPolicy: "network-only",
  });

  const [values, setValues] = useState({
    topic: "",
    datail: "",
  });
  const onChange = (event) => {
    console.log(values);
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const [addAnnouncement] = useMutation(CREATE_ANNOUNCEMENT_MUTATION, {
    update(proxy, result) {
      console.log(result);
    },
    variables: {
      record: {
        topic: values.topic,
        detail: values.detail,
      },
    },
  });
  const history = useHistory();
  const redirect = useCallback(() => {
    history.push("/admindashboard");
  }, [history]);
  const onSubmit = (event) => {
    event.preventDefault();
    addAnnouncement();
    redirect();
    alert("Create Announcement Success");
    window.location.reload();
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
                <h3 class="text-primary"><b><i class="fas fa-bullhorn"></i> ประกาศข่าวสารจากผู้ดูแล</b></h3>
                <hr></hr>
                </div>
                {data.announcements.map((o) => {
                  return (
                  <div class="dash-over overflow-auto">
                    <div class="card-header h6 text-primary">
                    <i class="fas fa-newspaper"></i> {o.topic}
                    </div>
                      <blockquote class="card px-3 py-2 blockquote mb-0">
                        <p class="textdash py-1">{o.detail}</p>
                        <footer class="blockquote-footer textdash-time"> <i class="fas fa-history"></i> {o.timestamp}</footer>
                      </blockquote>
                  </div>
                  )
                })}
                <div class="text-center">
                <button type="button" class="mt-3 btn btn-warning mb-2" data-toggle="modal" data-target="#exampleModal">
                <i class="fas fa-bullhorn"></i> เพิ่มประกาศข่าวสาร
                </button>
                </div>
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle"><i class="fas fa-bullhorn"></i> เพิ่มประกาศข่าวสาร</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <form onSubmit={onSubmit} >
                          <div class="form-group">
                            <label for="topic">หัวข้อ</label>
                            <input 
                            name="topic"
                            type="text"
                             class="form-control" 
                             onChange={onChange}
                             id="topic" aria-describedby="topic" 
                             placeholder="หัวข้อข่าวสาร"
                             required
                             />
                          </div>
                          <div class="form-group mt-3">
                            <label for="details">รายละเอียด</label>
                            <textarea 
                            name="detail"
                            type="text" 
                            onChange={onChange} 
                            rows="5" 
                            class="form-control" 
                            id="details" 
                            placeholder="รายละเอียดข่าวสาร"
                            required
                            />
                          </div>
                          <div class="mt-3 modal-footer">
                            <button type="submit" class="btn btn-success" >บันทึก</button>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>                            
                          </div>                          
                        </form> 
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
