

$.getJSON("https://api.covidtracking.com/v1/states/in/current.json", 
function(data){

    //console.log(data);

    var state = data.state;
    var lastupdate = data.lastUpdateEt;
    var positive = data.positive - data.recovered - data.death;
    var incPos = data.positiveIncrease;
    var totalTests = data.totalTestResults;

    var currHospital = data.hospitalizedCurrently;
    var incHospital = data.hospitalizedIncrease;

    $(".state").append("<b>State: </b>" + state);
    $(".lastupdate").append("<b>Last Updated: </b>" + lastupdate);
    $(".positive").append("<b>Positive: </b>" + positive.toLocaleString());
    $(".incPos").append("<b>Latest New Cases in a Day: </b>" + incPos.toLocaleString());
    $(".totalTests").append("<b>Total Tests Conducted: </b>" + totalTests.toLocaleString());

    $(".currHospital").append("<b>Current Hospital Cases: </b>" + currHospital.toLocaleString());
    $(".incHospital").append("<b>Latest New Hospital Cases: </b>" + incHospital.toLocaleString());



})




//https://covidtracking.com/api/v1/states/ca/current.json
//https://covidtracking.com/data/api