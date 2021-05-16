import React,{ useState, useCallback} from "react";
import { Link } from 'react-router-dom';
import Navbar from "../../../src/Components/Navbar.js";
import { CUSTOMER_QUERY } from "../../Graphql/userQuery";
import { useHistory} from "react-router";
import { useQuery, useMutation, gql} from "@apollo/client";


const CREATE_BILL_MUTATION = gql`
mutation ($record:CreateOneBillInput!) {
    createBill (record:$record) {
      record {
        _id
        waterbill
        elecbill
        roombill
        status
        url
        username
        ownerName
      }
    }
  }
`

const AdminManagement = () => {
  const { loading, error, data } = useQuery(CUSTOMER_QUERY, {
    fetchPolicy: "network-only",
  });
  const [values, setValues] = useState({
    waterbill: 0,
    elecbill: 0,
    roombill: 0,
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
  const [addBill] = useMutation(CREATE_BILL_MUTATION, {
    update(proxy, result) {
      console.log(result);
    },
    variables: {
      record: {
        username: values.username,
        waterbill: parseInt(values.waterbill),
        elecbill: parseInt(values.elecbill),
        roombill: parseInt(values.roombill),
        status: values.status
      },
    },
  });
  const history = useHistory();
  const redirect = useCallback(() => {
    history.push("/adminmanage");
  }, [history]);
  const onSubmit = (event) => {
    event.preventDefault();
    addBill();
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
                <h3 class="text-primary"><b><i class="fas fa-money-bill-alt"></i> ข้อมูลการเงิน</b></h3>
                <hr></hr>
                <div class="table-responsive-sm">
                  <table class="table">
                  <thead>
                      <tr class="table-light h5">
                        <th scope="col"><i class="fas fa-home"></i> Room</th>
                        <th scope="col"><i class="fas fa-user"></i> Fullname</th>
                        <th scope="col"><i class="fas fa-sticky-note"></i> Status</th>
                        <th scope="col"><i class="far fa-edit"></i> Edit</th>
                      </tr>
                    </thead>
                    <tbody class="font-weight-bold">
                    {data.customers.map((o) => {
                        return (
                      
                      <tr>
                        <td>{o.username}</td>
                        <td>{o.fullname}</td>
                        <td class="text-danger">ยังไม่ชำระ</td>
                        <td>
                          <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#exampleModal">
                            Edit
                          </button>
                          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5 class="modal-title" id="exampleModalLongTitle">Add Bill.</h5>
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div class="modal-body">
                                  <form onSubmit={onSubmit}>
                                    <div class="orm-group">
                                      <label class="h4 py-2" for="topic"> <i class="fas fa-home"></i> ห้อง {o.username}</label>
                                    </div>
                                    <hr></hr>                                   
                                    <div class="form-group mt-2">
                                      <label for="room">ค่าห้อง</label>
                                      <input 
                                      type="text" 
                                      name="roombill"
                                      onClick={handleClick}
                                      onChange={onChange}
                                      class="form-control" 
                                      id="room" 
                                      placeholder="ค่าห้อง"
                                      />
                                    </div>
                                    <div class="form-group mt-2">
                                      <label for="electro">ค่าไฟ</label>
                                      <input 
                                      type="text" 
                                      name="elecbill"
                                      onClick={handleClick}
                                      onChange={onChange}
                                      class="form-control" 
                                      id="electro" 
                                      placeholder="ค่าไฟ"/>
                                    </div>              
                                    <div class="form-group mt-2">
                                      <label for="water">ค่าน้ำ</label>
                                      <input 
                                      type="text" 
                                      name="waterbill"
                                      onClick={handleClick}
                                      onChange={onChange}
                                      class="form-control" 
                                      id="water" 
                                      placeholder="ค่าน้ำ"
                                      />
                                    </div>
                                    <div class="form-group mt-4">
                                      <label class="mr-sm-2 px-3" for="status">สถานะชำระเงิน</label>
                                      <select class="custom-select btn"
                                      name="status"
                                      onChange={onChange}
                                      onClick={handleClick}
                                      >
                                        <option selected>เลือกสถานะชำระเงิน</option>
                                        <option value="Paid">ชำระแล้ว</option>
                                        <option value="Overdue">ยังไม่ชำระ</option>
                                      </select>                                      
                                    </div>                                                                                            
                                    <div class="mt-3 modal-footer">
                                      <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                      <button 
                                      type="submit" 
                                      class="btn btn-success"
                                      name="username"
                                      onClick={handleClick}
                                      value={o.username}
                                      >Save changes</button>
                                    </div>                          
                                  </form>  
                                </div>                   
                              </div>
                            </div>
                          </div>  
                      </td>
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
export default AdminManagement;
