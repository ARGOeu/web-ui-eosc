$(function () {






$("[data-widget='pushmenu']").click(function (){
 $("#profiles").toggle();
  $("#servicesGroup").toggle();

});


  $('.showModal').click(function () {
        var selector =  $(this).data("target");
               $(selector).modal('show');
                        });




   $("#servicesGroup").change(function () {
            window.location.href =   this.value.replace("+", "%252B");

    });


    // Tables for the whole page
     $('.widgetTable').dataTable({
      "paging": true,
      "ordering": true
    });

    ////////////////////////////
    // Dognhut chart : statuses
    //////////////////////////

    var dataStatuses = [];
    var labelStatuses= [];
    var colors = [];
    var tabColors = { "Ok" : "#28A745", "Warning" :"#B5892E" , "Critical": "#FF0000", "Unknown" : "#bcbcbc","Missing" : "#76A3D6" };


    $( ".dataStatuses" ).each(function( index ) {
      dataStatuses.push($( this ).text());
    });

    $( ".labelStatuses" ).each(function( index ) {
      labelStatuses.push($( this ).text());
      colors.push(tabColors[$( this ).text()]);
    });

    data = {
        datasets: [{
            data: dataStatuses,
             backgroundColor: colors,
        }],
        labels: labelStatuses

    };


if(document.getElementById("myChart1") && document.getElementById("myChart1").getContext('2d')) {

    var ctx = document.getElementById("myChart1").getContext('2d');

          var cOptions     = {
                  title: {
                             display: false,
                           },
                  legend: false

                   };


       var myDoughnutChart = new Chart(ctx, {
           type: 'doughnut',
           data: data,
           options: cOptions
           });

}




        

    /////////////////////////
    // barchart chart : ar
    /////////////////////////


if(document.getElementById("myChart2") && document.getElementById("myChart2").getContext('2d')) {


    var ctx2 = document.getElementById("myChart2").getContext('2d');
    
    var dataAvailability =[];
    var dataReliability =[];
    var dataTimestamp =[];
    
    $( ".dataAvailability" ).each(function( index ) {
          dataAvailability.push($( this ).text());
        });            
        
    $( ".dataReliability" ).each(function( index ) {
          dataReliability.push($( this ).text());
        });  
          
    $( ".dataTimestamp" ).each(function( index ) {
            dataTimestamp.push($( this ).text());
         });


    var myBarChart = new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: dataTimestamp,
          datasets: [
            {
              label: "Availability",
              backgroundColor: "#3e95cd",

              data: dataAvailability
            }, {
              label: "Reliability",
              backgroundColor: "#8e5ea2",
              data: dataReliability
            }
          ]
        },
    options: {
         title: {
                     display: false,
                },
         layout: {
            padding: {        // Any unspecified dimensions are assumed to be 0
                left: 5,
                 bottom: 5
                 }

                }
                }
    });


}

});

