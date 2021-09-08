  $('.flappingTable').DataTable().columns(-1).order('desc').draw();

   $('.statusTable').DataTable().columns(-1).order('desc').draw();



           $('#togglePreferences').click(function () {
                 $("#preferences > .card-body").removeClass('d-none');
                 $("#preferences > .card-footer").removeClass('d-none');
                 $("#togglePreferences").addClass('d-none');
                  $("#untogglePreferences").removeClass('d-none');
          });

            $('#untogglePreferences').click(function () {
                           $("#preferences > .card-body").addClass('d-none');
                           $("#preferences > .card-footer").addClass('d-none');
                           $("#togglePreferences").removeClass('d-none');
                            $("#untogglePreferences").addClass('d-none');
                    });

        $('#calendar').datepicker({
        format: 'yyyy-mm-dd'
        });

         $('#calendar-range').click(function () {
            $("input[value='range']").prop("checked", true);


         });

           $('#calendar').click(function () {
                 $("input[value='date']").prop("checked", true);

          });


                    if ($("#start_date").val()!= undefined )
                        var start = new Date($("#start_date").val());
                    else
                        var start = moment().subtract(3, 'days');

                    if ($("#end_date").val()!= undefined )
                        var end = new Date($("#end_date").val());
                    else
                        var end = moment();

                    function cb(start, end) {
                    if ($("#start_date").val()== undefined)
                        $('#calendar-range').val(start.format('YYYY-MM-DD') + ' - ' + end.format('YYYY-MM-DD'));
                    else
                        $('#calendar-range').val(  start.toISOString().split('T')[0] + ' - ' + end.toISOString().split('T')[0]    );
                    }


                    $('#calendar-range').daterangepicker({
                        startDate: start,
                        endDate: end,
                        locale: {
                                    format: 'YYYY-MM-DD',
                                },
                       ranges: {
                                         'Last 3 Days': [moment().subtract('days', 3), moment()],
                                         'Last 10 Days': [moment().subtract('days', 10), moment()],
                                         'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')],
                                         'Last 3 Months': [moment().subtract('month', 3).startOf('month'), moment().subtract('month', 1).endOf('month')],
                                         'Last 6 Months': [moment().subtract('month', 6).startOf('month'), moment().subtract('month', 1).endOf('month')]

                           },
                    }, cb);

                    cb(start, end);



 $("#parametersF").click(function () {

        if ( $('input[name="period"]:checked').val()=='date' )
        {
        var urlI=window.location.href;
        var baseUrl=urlI.split('?');

         window.location = baseUrl[0]+'?date='+$('#calendar').val()+'&top='+$("#top").val()+'&trends='+$('input[name="trends"]:checked').val();


        $("#spinner").removeClass('d-none');
        }
        else
        {
        var granularity=$("input[name='granularity']:checked").val();

          var range = 'start_date=' + $('#calendar-range').val().replace(' - ','&end_date=');
          var urlI=window.location.href;
          var baseUrl=urlI.split('?');

          if (granularity==0)
           window.location = baseUrl[0]+'?'+range+'&top='+$("#top").val()+'&trends='+$('input[name="trends"]:checked').val();
                  else
           window.location = baseUrl[0]+'?'+range+'&top='+$("#top").val()+'&granularity=monthly'+'&trends='+$('input[name="trends"]:checked').val();


          $("#spinner").removeClass('d-none');
        }


  });