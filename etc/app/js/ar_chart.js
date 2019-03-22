$(function () {

$( ".ARdata" ).each(function( index ) {

    var id =$(this).attr('id');
    var group=$(this).attr('id').split("table_")[1];
    idChart = 'myChart_' +group;

    var ctx = document.getElementById(idChart).getContext('2d');

    var dataAvailability =[];
    var dataReliability =[];
    var dataTimestamp =[];

    $(this).find( "div.dataAvailability").each(function( index ) {
          dataAvailability.push($( this ).text());
        });

    $(this).find( "div.dataReliability" ).each(function( index ) {
          dataReliability.push($( this ).text());
        });

    $(this).find( "div.dataTimestamp" ).each(function( index ) {
            dataTimestamp.push($( this ).text());
         });


    var myBarChart = new Chart(ctx, {
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
                    display : true,
                     text : "Availability/Reliability for "+group

                },
         layout: {
            padding: {        // Any unspecified dimensions are assumed to be 0
                left: 5,
                 bottom: 5
                 }

                }
                scale: {
                            ticks: {
                                min: 0,
                                max: 100
                            }
                        }
                }
    });


});

});