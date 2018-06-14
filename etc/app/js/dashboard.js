$(function () {

    // Tables for the whole page
     $('.dataTable').dataTable({
      "paging": true,
      "ordering": true
    });

    ////////////////////////////
    // Dognhut chart : statuses
    //////////////////////////

    var dataStatuses = [];
    var labelStatuses= [];

    $( ".dataStatuses" ).each(function( index ) {
      dataStatuses.push($( this ).text());
    });

    $( ".labelStatuses" ).each(function( index ) {
      labelStatuses.push($( this ).text());
    });

    data = {
        datasets: [{
            data: dataStatuses,
             backgroundColor: ["#28A745","#B5892E", "#ADB5BD","#FF0000","#76A3D6"]
        }],
        labels: labelStatuses

    };

    var ctx = document.getElementById("myChart1").getContext('2d');

    var myDoughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {

          title: {
            display: true,
            text: 'Distribution of last statuses'
          }
        }});

    /////////////////////////
    // barchart chart : ar
    /////////////////////////

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
            display: true,
            text: 'Availability/Reliability of the infrastructure - last 10 days'
          }
        }
    });



});

