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
                       $('body').Layout('fixLayoutHeight');
                 },

            error : function(resultat, statut, erreur){
                       $("#resultsCard").removeClass('d-none');
                        $("#errorCard").removeClass('d-none');

                       },
             complete: function () { // Set our complete callback, adding the .hidden class and hiding the spinner.
                    $('#spinner').addClass('d-none');
                    formData=null;
                               },
         });



 };

$('body').on('click', 'rect.rect_clickable', function(e){
var tabParameters = $(this).attr('id').split('metrics_')[1].split('__');
var timestamp=tabParameters[0];
var status=tabParameters[1];
var metric=tabParameters[2];
var tenant=tabParameters[3];
var endpoint=tabParameters[4];

  var formData = {
            'exec_time'  :  timestamp,
            'status'     :  status,
            'metric_name':  metric,
            'tenant'     : tenant,
            'endpoint'   : endpoint
        };


// process the form
         $.ajax({
             type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
             url         : '/lavoisier/report-metrics?accept=html', // the url where we want to POST
             data        : formData, // our data object
             dataType    : 'html', // what type of data do we expect back from the server,

             beforeSend: function () {
                 $('#spinner').removeClass('d-none');
             },
             success : function(code_html, statut){
                      $("#resultsCard").removeClass('d-none');
                      $("#resultsCard").prepend($(code_html).find('#resultMetric'));
                       $('body').Layout('fixLayoutHeight');
                 },

            error : function(resultat, statut, erreur){
                       $("#resultsCard").removeClass('d-none');
                        $("#errorCard").removeClass('d-none');
                       },
             complete: function () { // Set our complete callback, adding the .hidden class and hiding the spinner.
                        $('#spinner').addClass('d-none');
                      }
         });

 });
$('body').on('click', 'div.submit_card', function(e){

var id = $(this).attr('id').split("sub_")[1];
console.log(id);
 event.preventDefault();
var form=$("#form_"+id);
var formData= form.serialize();

//console.log(formData);
submitResults(formData);

});



       $('[rel=tooltip]').tooltip({
                placement: 'right'
             });




