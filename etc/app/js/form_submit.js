 $(function() {

 $( "#target" ).submit(function( event ) {


    event.preventDefault();
    var sendOk=true;
    $('#errorSub').addClass('d-none');


    if ($('.selectReport').val()!=0)
    {
    var results=$('.selectReport').val().split('_');
    var tenant=results[0];
    var report=results[1];
    var group_type= $("input[name='subgroup_"+report+"']:checked").val().split('_')[1];

    var string1= "#subgroup_"+report+"_"+group_type;
    var group_name= $("#subgroup_"+report+"_"+group_type).val();
    var type_results=$("#selectResults").val();
    var format_results=$("#selectFormat_"+type_results).val();

    var topology1=$("#"+report+"_topology1").val();
    var topology2=$("#"+report+"_topology2").val()
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
    var range=$("#reportrange1 span").text().trim();
    }
     if (type_results=='dash_avre')
     {
        var range=$("#reportrange1").text().trim();
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
            'topology1'       :  topology1,
            'topology2'      :  topology2

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
                            },
        });

}

 });