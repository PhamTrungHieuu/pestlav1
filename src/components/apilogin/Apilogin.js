import React from "react";
import axios from "axios";

function Apilogin(username, password){
    return (
         axios.post('https://petsla-api.herokuapp.com/login/', {
            username: username,
            password: password
          })
          .then(function (res) {
            let refresh = res.data.refresh;
            let access = res.data.access;
            let username = res.data.username;
            let email = res.data.email;
            let name = res.data.name;
            let token = res.data.token;
            let user =[];
            user.push({
              refresh: refresh,
              access: access,
              username: username,
              email:email,
              name:name,
              token: token
            })
            localStorage.setItem("User",JSON.stringify(user))
        })
    );
}
export default Apilogin