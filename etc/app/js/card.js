
       $('[rel=tooltip]').tooltip({
                placement: 'right'
             });


      $( ".arTable" ).each(function( index ) {

    var id =$(this).attr('id').split("data_")[1];

    var type_result=$("#type_result_"+id).val();
    var av_threshold=$("#av_threshold_"+id).val();
    var re_threshold=$("#re_threshold_"+id).val();



   if (type_result=='table_ar'){
   $("#card_"+id).removeClass("d-none");

   }
    if (type_result=='bar_ar'){
        var idChart1 = 'myBarChart_' +id;
        var ctx1 = document.getElementById(idChart1).getContext('2d');
    }

    if (type_result=='line_ar'){
        var idChart2 = 'myLineChart_' +id;
        var ctx2 = document.getElementById(idChart2).getContext('2d');
    }

    var dataAvailability =[];
    var dataReliability =[];
    var dataTimestamp =[];

    $(this).find( "td.ar").each(function( index ) {
      if (type_result=='table_ar'){

          if (Number($( this ).text()) > av_threshold)
            $(this).html("<span class='badge badge-success'>"+$( this ).text()+"</span>");
            else
            $(this).html("<span class='badge badge-danger'>"+$( this ).text()+"</span>");
      }
      else
          dataAvailability.push($( this ).text());
        });

    $(this).find( "td.re" ).each(function( index ) {
      if (type_result=='table_ar'){
              if (Number($( this ).text()) > re_threshold)
            $(this).html("<span class='badge badge-success'>"+$( this ).text()+"</span>");
                else
            $(this).html("<span class='badge badge-danger'>"+$( this ).text()+"</span>");
          }
          else
          dataReliability.push($( this ).text());
        });

    $(this).find( "td.timestamp" ).each(function( index ) {
            dataTimestamp.push($( this ).text());
         });

if (type_result=='bar_ar'){
    var myBarChart = new Chart(ctx1, {
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
                     text : "Availability/Reliability"

                },
         layout: {
            padding: {        // Any unspecified dimensions are assumed to be 0
                left: 5,
                 bottom: 5
                 }

                },
               scales : {
               						yAxes: [{
               							ticks: {
               								beginAtZero:true,
               								min:0,
               								max:100
               								}
               							}],
               						}

                },


    });
    }

if (type_result=='line_ar'){
     var myLineChart = new Chart(ctx2, {
    type: 'line',
    data: {
      labels: dataTimestamp,
          datasets: [
            {
             label: 'Availability',
             backgroundColor: "#3e95cd",
             borderColor: "#3e95cd",
             fill: false,
             data: dataAvailability,
            }, {
              label: "Reliability",
              backgroundColor:"#8e5ea2",
               borderColor: "#8e5ea2",
               fill: false,
              data: dataReliability,
            }
          ]
        },
    options: {
         title: {
                    display : true,
                     text : "Availability/Reliability"

                },
         layout: {
            padding: {        // Any unspecified dimensions are assumed to be 0
                left: 5,
                 bottom: 5
                 }

                },
               scales : {
               						yAxes: [{
               							ticks: {
               								beginAtZero:true,
               								min:0,
               								max:100
               								}
               							}],
               						}

                }
    });
    }


});
