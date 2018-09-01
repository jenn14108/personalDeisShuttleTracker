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
      console.log(selectedVan);
    });
});
