var res = [];
$(document).ready(function () {
    $("button[name='confirm']").on('click',function(event) {
      if (document.getElementById("selectedType").value === "4004842"){
        document.getElementById("dayStops").style.display = "block";
        document.getElementById("eveningStops").style.display = "none";
      } else {
        document.getElementById("eveningStops").style.display = "block";
        document.getElementById("dayStops").style.display = "none";
      }
    });
    $("button[name='submit']").on('click',function(event) {
      var selectedVan = document.getElementById("selectedType").value;
      var selectedStop;
      if (document.getElementById("dayStops").style.display === "block"){
        selectedStop = document.getElementById("selectedStopD").value;
      } else {
        selectedStop = document.getElementById("selectedStopE").value;
      }
      $.ajax({
               url:"https://transloc-api-1-2.p.mashape.com/arrival-estimates.json?agencies=483",
               type:"GET",
               headers: {
                 "X-Mashape-Key": "86AEb09Skcmsho1ePNIfntZuwRjPp1ywZqkjsnH74xl90S0OWI",
                 "Accept": "application/json"
               },
               data: {
                 callback: "call",
                 routes: selectedVan,
                 stops: selectedStop
               },
               dataTypeL: 'json',
               success: function(result){
                 console.log(result.data);
                 if (result.data !== undefined &&
                   result.data[0] !== undefined){
                   for (var i = 0; i < result.data[0].arrivals.length; i++){
                     res.push(result.data[0].arrivals[i].arrival_at);
                   }
                 }
                 document.getElementById("result").style.display = "block";
                 if (res.length > 0){
                   document.getElementById("arrivalTime").innerHTML = res[0];
                 } else {
                   document.getElementById("arrivalTime").innerHTML = "No current arrivals";
                 }
              },
               error: function(err){
                 console.log(err);
              }
      });
    });
});
