$('#selectTenant').on('change', function() {
  var tenantId= this.value ;
  $("div.report").addClass("d-none");

  $("#report_"+tenantId).addClass("show");
   $("#report_"+tenantId).removeClass("d-none");
});

$('.selectReport').on('change', function() {
  var reportId= this.value ;
  console.log(reportId);
  $("div.group").addClass("d-none");

  $("#group_"+reportId).addClass("show");
   $("#group_"+reportId).removeClass("d-none");
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
