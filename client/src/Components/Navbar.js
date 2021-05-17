import React from "react";
import { useQuery } from "@apollo/client";
import { ME_QUERY } from "../Graphql/meQuery";

const Navbar = () => {
    const { loading, error, data } = useQuery(ME_QUERY, {
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

  <div class="px-2 mt-5">
    <div class="row">
      <div class="col-md-2"><img class="mt-3 logo-dash" src={'./logo.png'}></img></div>
      <div class="mt-3 col text-center textdorm h4 text-warning">
        <b><i class="mt-5 fas fa-users"></i> Dorm : <span class="text-secondary">V-Condo</span> | <i class="fas fa-home"></i> Room : <span class="text-secondary">{data.me.username}</span></b>
        <br></br>
        <br></br>
      </div>
    </div>
  </div>
  
  
  );
};
export default Navbar;