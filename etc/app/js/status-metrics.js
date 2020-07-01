$(".m-details").click(function() {
var id=$(this).attr('id').split('minus_')[1];
  var element = document.getElementById("content_"+id);
   $(element).html("<div><span  id="+$(this).attr('id')+" class='m-2 m-details fa fa-search-minus'></span></div>");
 $(element).addClass('d-none');
});

$(".details").click(function() {

var id=$(this).attr('id');
var tabDetails=id.split('_');

var tenant=tabDetails[0];
var report=tabDetails[1];
var metrics=tabDetails[2];
var endpoint=tabDetails[3];
var timestamp=tabDetails[4];
var status=tabDetails[5];

//$("#content_"+id).removeClass('d-none');


  var element = document.getElementById("content_"+id);

    $.ajax({
       url : '/lavoisier/report-metrics?report='+report+'&tenant='+tenant+'&exec_time='+timestamp+'&endpoint='+endpoint+'&metric_name='+metrics+'&status='+status+'&accept=html',
       type : 'GET',
       dataType : 'html',
       success : function(code_html, statut){ // success est toujours en place, bien sûr !
        $(element).append($(code_html).find("code"));
        $(element).removeClass('d-none');
       },

       error : function(resultat, statut, erreur){
          $(element).append('No output');
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

