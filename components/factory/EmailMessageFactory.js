module.exports = {
  makeEmailMessage: function (name, rate, feedback){
    let header = "<p>Feedback sent by: "+name+"</p>";
    let body = "<p>Rate: "+rate+"</p>"+"<p>Feedback: "+feedback+"</p>";

    return "<html>"+header+body+"</html>";
  }
};
