import React from "react";
import axios from "axios";

function Apilogin(){
    return (
        axios.post('https://petsla-api.herokuapp.com/login/', {
            username: 'leoasher',
            password: 'leoasher'
          })
          .then(function (response) {
            console.log(response);
          })
    );
}
export default Apilogin