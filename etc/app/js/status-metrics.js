
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

            $("div.status").each(function() {
                if ($(this).text().search(status) > -1) {
                    $(this).parents( ".card" ).show();
                }
                else {
                    $(this).parents( ".card" ).hide();
                }
            });
        }





      function filter(element) {
            var value = $(element).val().toUpperCase();

            $("div.group").each(function() {
                if ($(this).text().toUpperCase().search(value) > -1) {
                    $(this).parents( ".card" ).show();
                }
                else {
                    $(this).parents( ".card" ).hide();
                }
            });
        }

$("#metric").change(function() {
var url1=$(this).val();
window.location = url1;

});

