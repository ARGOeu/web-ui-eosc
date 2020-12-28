 $(function() {

 $( "#target" ).submit(function( event ) {


    event.preventDefault();
    var sendOk=true;
    $('#errorSub').addClass('d-none');


    if ($('.selectReport').val()!=0)
    {
    var results=$('.selectReport').val().split('__');
    var tenant=results[0];
    var report=results[1];
    var group_type= $("input[name='subgroup__"+report+"']:checked").val().split('__')[1];

    var group_name= $("#subgroup__"+report+"__"+group_type).val();
    var type_results=$("#selectResults").val();
    var format_results=$("#selectFormat_"+type_results).val();

    var topology1=$("#"+report+"_topology1").val();
    var topology2=$("#"+report+"_topology2").val();
    var granularity=$("input[name='granularity']:checked").val();

    }
    else
    {
    $('#errorSub').removeClass('d-none');
    $('#errorSub').html('<div class="small alert alert-critical m-1">Please select a report !</div>')
     sendOk=false;
    }

    if (type_results==0)
    {
    $('#errorSub').removeClass('d-none');
        $('#errorSub').html('<div class="small alert alert-critical m-1">Please select a type of results!</div>')
        sendOk=false;
    }

    if (group_name==0)
    {
    $('#errorSub').removeClass('d-none');
        $('#errorSub').html('<div class="small alert alert-critical m-1">'+group_type+' is missing !</div>')
        sendOk=false;
    }


    var av_threshold=$("#av_threshold").val();
    var re_threshold=$("#re_threshold").val();

    if (type_results=='dash_status')
    {
    var range=$("#reportrange2 span").text().trim();
    }
     if (type_results=='dash_avre')
     {
        var range=$("#reportrange1 span").text().trim();
     }
        var dates=range.split('/')
        var start_date=dates[0]+'Z';
        var end_date=dates[1]+'Z';


        if (sendOk==true)
        {
        $('#settingsModal').modal('toggle');
        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formData = {
            'group_type'     :  group_type,
            'group_name'     :  group_name,
            'tenant'         :  tenant,
            'start_date'     :  start_date,
            'end_date'       :  end_date,
            'report'         :  report,
            'type_results'   :  type_results,
            'format_results' :  format_results,
            'av_threshold'   :  av_threshold,
            're_threshold'   :  re_threshold,
            'granularity'    :  granularity,
            'topology1'      :  topology1,
            'topology2'      :  topology2,
            'call'           : 1

        };
        console.log(formData);
        submitResults(formData);
        }
    });




function submitResults(formData) {

        // process the form
        $.ajax({
            type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url         : '/lavoisier/results?accept=html', // the url where we want to POST
            data        : formData, // our data object
            dataType    : 'html', // what type of data do we expect back from the server,


            beforeSend: function () {
                $('#spinner').removeClass('d-none');
            },
            success : function(code_html, statut){
                     $("#resultsCard").removeClass('d-none');
                     $("#resultsCard").prepend(code_html);
                      $(".dataTable").DataTable();
                },

                error : function(resultat, statut, erreur){
                $("#resultsCard").removeClass('d-none');
                  $("#errorCard").removeClass('d-none');
                },
                 complete: function () { // Set our complete callback, adding the .hidden class and hiding the spinner.
                                $('#spinner').addClass('d-none');
                                completeSub();
                            },
        });

}


function completeSub() {

      $( ".arTable" ).each(function( index ) {

    var id =$(this).attr('id').split("data_")[1];


    var type_result=$("#type_result_"+id).val();
    var av_threshold=$("#av_threshold_"+id).val();
    var re_threshold=$("#re_threshold_"+id).val();


   if (type_result=='table_ar'){
   $("#card_"+id).removeClass("d-none");

   }
    if (type_result=='bar_ar'){
        var idChart = 'myBarChart_' +id;
        var ctx = document.getElementById(idChart).getContext('2d');


    }

    if (type_result=='line_ar'){
        var idChart = 'myLineChart_' +id;
        var ctx = document.getElementById(idChart).getContext('2d');
    }


 if (type_result=='line_ar' || type_result=='bar_ar') {
         var horizonalLinePlugin = {
           afterDraw: function(chartInstance) {
             var yScale = chartInstance.scales["y-axis-0"];
             var canvas = chartInstance.chart;

             var index;
             var line;
             var style;
             if (chartInstance.options.horizontalLine) {
               for (index = 0; index < chartInstance.options.horizontalLine.length; index++) {
                 line = chartInstance.options.horizontalLine[index];
                 if (!line.style) {
                   style = "rgba(169,169,169, .6)";
                 } else {
                   style = line.style;
                 }
                 if (line.y) {
                   yValue = yScale.getPixelForValue(line.y);
                 } else {
                   yValue = 0;
                 }
                 ctx.lineWidth = 1;
                 if (yValue) {
                   ctx.setLineDash([10, 10]);
                   ctx.beginPath();
                   ctx.moveTo(0, yValue);
                   ctx.lineTo(canvas.width, yValue);
                   ctx.strokeStyle = style;
                   ctx.stroke();
                 }
                 if (line.text) {
                   ctx.fillStyle = style;
                   ctx.fillText(line.text, 0, yValue + ctx.lineWidth);
                 }
               }
               return;
             };
           }
         };
         Chart.pluginService.register(horizonalLinePlugin);
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
        "horizontalLine": [{
                 "y": re_threshold,
                 "style": "#3e95cd",

               }, {
                 "y": av_threshold,
                 "style": "#8e5ea2",


               }],
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
     var myLineChart = new Chart(ctx, {
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
       "horizontalLine": [{
                     "y": re_threshold,
                     "style": "#3e95cd",

                   }, {
                     "y": av_threshold,
                     "style": "#8e5ea2",

                   }
                   ],
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

 };


});

