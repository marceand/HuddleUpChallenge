var MAILGUN_USERNAME = "api";
var MAILGUN_PASSWORD_API = "";
var BASE_URL_MESSAGE = "";
var TO_EMAIL = "";
var SUBJECT = "react native feedback";
var base64 = require('base-64');
var form = new FormData();
module.exports = {
  postEmail: function (fromEmail, message){
    return fetch(BASE_URL_MESSAGE, {
      method: 'POST',
      headers: {
        'Authorization': "Basic " + base64.encode(MAILGUN_USERNAME+":"+MAILGUN_PASSWORD_API),
        'Content-Type': 'multipart/form-data',
      },
      body:getForm(fromEmail, message)
    }).then((response) => response.json());
  }
};

function getForm(email, message){
  form.append("from", email);
  form.append("to", TO_EMAIL);
  form.append("subject", SUBJECT);
  form.append("html", message);
  return form;
}
