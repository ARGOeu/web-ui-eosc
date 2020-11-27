
    var start1 = moment().subtract(29, 'days');
    var end1 = moment();

    function cb(start, end) {
        $('#reportrange1 span').html(start.format('YYYY-MM-DD') + ' / ' + end.format('YYYY-MM-DD'));
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
            $('#reportrange2 span').html(start.format('YYYY-MM-DD') + ' / ' + end.format('YYYY-MM-DD'));
        }

        $('#reportrange2').daterangepicker({
            startDate: start2,
            endDate: end2,
            ranges: {
               'Today': [moment(), moment()],
               'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
               'Last 3 Days': [moment().subtract(3, 'days'), moment()]
            }
        }, cb);

        cb2(start2, end2);


$('#selectTenant').on('change', function() {
  var tenantId= this.value ;
  $("div.report").addClass("d-none");

  $("#report_"+tenantId).addClass("show");
   $("#report_"+tenantId).removeClass("d-none");
});

$('.selectReport').on('change', function() {
  var reportId= this.value ;
  $("div.group").addClass("d-none");

  $("#group_"+reportId).addClass("show");
   $("#group_"+reportId).removeClass("d-none");
});

$('#selectResults').on('change', function() {
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
