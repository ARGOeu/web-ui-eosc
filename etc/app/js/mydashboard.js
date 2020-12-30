
$("#registerDash").on('click', function() {

var tabParameters=[];
var dashboardId=Date.now();
var formData = { 'id': dashboardId  } ;
var cpt=0;
var tenant=$('#tenant').val();

   $("div.cardParameters" ).each(function( index1 ) {
              $(this).find('input').each(function( index2 ) {
            if (tabParameters[index1]!= undefined)
                tabParameters[index1]=tabParameters[index1]+'___'+$(this).attr('name')+'='+$(this).val();
            else
                tabParameters[index1]=$(this).attr('name')+'='+$(this).val();
           });
           formData['widget_'+index1]=tabParameters[index1];
            cpt++;
   });


       if (cpt < 10) {

     // process the form
        $.ajax({
            type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url         : '/lavoisier/register_layout', // the url where we want to POST
            data        : formData, // our data object
            dataType    : 'xml', // what type of data do we expect back from the server,


            beforeSend: function () {
                $('#spinner').removeClass('d-none');
            },
            success : function(code_html, statut){
                     $("#resultsCard").removeClass('d-none');
                },

                error : function(resultat, statut, erreur){
                $("#resultsCard").removeClass('d-none');
                  $("#errorCard").removeClass('d-none');
                },
                 complete: function () { // Set our complete callback, adding the .hidden class and hiding the spinner.
                            $('#spinner').addClass('d-none');
                            $("#dashboards").html("<button type='button' class='m-1 p-1 btn btn-outline-dark'><a href='/"+tenant+"/mydashboard?id="+dashboardId+"' ><i class='fas fa-save m-1'></i> Dashboard "+dashboardId+"</a></button>");
                    },
        });
        }
        else {

           $("#dashboards").html("<div class='m-1 p-1 text-white badge badge-danger'>Your dashboard could not be registered . The number of widgets is exceding the maximum of 10. Please remove some of them and try again . </div></a>");

        }

 });

    var start1 = moment().subtract(29, 'days');
    var end1 = moment();


    function cb(start, end ) {
        $('#reportrange1 span').html(start.format('YYYY-MM-DDTHH:mm:ss') + '/' + end.format('YYYY-MM-DDTHH:mm:ss'));

    }

    $('#reportrange1').daterangepicker({
        startDate: start1,
        endDate: end1,
        ranges: {
           'Today': [moment(), moment()],
           'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
           'Last 7 Days': [moment().subtract(6, 'days'), moment()],
           'Last 30 Days': [moment().subtract(29, 'days'), moment()],
           'This Month': [moment().startOf('month'), moment().endOf('month')],
           'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
           'Last 3 Months': [moment().subtract(3, 'month').startOf('month'), moment().endOf('month')],
           'Last 6 Months': [moment().subtract(6, 'month').startOf('month'), moment().endOf('month')],
        }
    }, cb);

    cb(start1, end1);


        var start2 = moment().subtract(3, 'days');
        var end2 = moment();

        function cb2(start, end) {
       $('#reportrange2 span').html(start.format('YYYY-MM-DDThh:mm:ss') + '/' + end.format('YYYY-MM-DDThh:mm:ss'));

        }

        $('#reportrange2').daterangepicker({
            startDate: start2,
            endDate: end2,
            ranges: {
               'Today': [moment(), moment()],
               'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
               'Last 3 Days': [moment().subtract(3, 'days'), moment()]
            }
        }, cb2);

        cb2(start2, end2);



$('.selectReport').on('change', function() {
  var reportId= this.value ;
  $("div.group").addClass("d-none");
  $("#group__"+reportId).addClass("show");
   $("#group__"+reportId).removeClass("d-none");
});

 $('.subgroup_check').on('change',function(){
    var subgroup=$(this).val();
    console.log("subgroup"+subgroup);
    $("select.subgroup").addClass("d-none");
    $("select#subgroup__"+subgroup).removeClass("d-none");

 });

$('.selectResults').on('change', function() {
  var resultId= this.value ;

  $("div.results").addClass("d-none");
  $(".results_"+resultId).addClass("show");
   $(".results_"+resultId).removeClass("d-none");
   $("#submitF").removeClass("d-none");
});


$('span[data-toggle="tooltip"]').tooltip();
$("#refreshPage").click(function() {

    var view='status-egiCore';

    $.ajax({
    type: "POST",
    url: "/notify/"+view,
    success: function() {
        location.reload();
    }
    });

    });

$(".toggle-body").click(function() {
var id=$(this).attr('id');
var pid=id.split('toggle_')[1];
$("#body-"+pid).removeClass('d-none');

$(this).addClass('d-none');
});

$(".untoggle-body").click(function() {
var id=$(this).attr('id');
var pid=id.split('untoggle_')[1];
$("#body-"+pid).addClass('d-none');
$("#toggle_"+pid).removeClass('d-none');
});


$(".erase").click(function() {
var eraseid=$(this).attr('id').split('erase-')[1];
$("#"+eraseid).val('');

var elementStatus='<input value="'+$("#input-status-filter")+'"/>';
filterStatus(elementStatus);

var elementSite='<input value="'+$("#input-site-filter")+'"/>';
filter(elementSite);
});

$(".filter-status").click(function() {

var status=$(this).attr('id').split('status_')[1];
var elementStatus='<input value="'+status+'"/>';
filterStatus(elementStatus);
$("#input-status-filter").val(status);

});

      function filterStatus(element) {
            var status = $(element).val().toUpperCase();

            $("span.status").each(function() {
                if ($(this).text().search(status) > -1) {
                    $(this).parents( ".card" ).show();
                }
                else {
                    $(this).parents( ".card" ).hide();
                }
            });
        }



    $('[rel=popover]').popover({
       offset : 4,
       placement: 'right'
    });

       $('[rel=tooltip]').tooltip({
           placement: 'right'
        });

      function filter(element) {
            var value = $(element).val().toLowerCase();

            $("div.group").each(function() {
                if ($(this).text().toLowerCase().search(value) > -1) {
                    $(this).parents( ".card" ).show();
                }
                else {
                    $(this).parents( ".card" ).hide();
                }
            });
        }
