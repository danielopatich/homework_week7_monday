import $ from "jquery";

let token = '3ad9f559791f3e9ce8bf39d73a0c7fc55816ece3';

$.ajaxSetup({
  headers: {
    "Authorization": "token " + token
  }
});

export default $;
