
$(function () {


    $('.flappingTable').DataTable().columns(-1).order('desc').draw();
    $('.statusTable').DataTable().columns(-1).order('desc').draw();



    $('#calendar').datepicker({
        format: 'yyyy-mm-dd'
    });

    $('#calendar-range').click(function () {
        $("input[value='range']").prop("checked", true);


    });

    $('#calendar').click(function () {
        $("input[value='date']").prop("checked", true);

    });


    if ($("#start_date").val() != undefined)
        var start = new Date($("#start_date").val());
    else
        var start = moment().subtract(3, 'days');

    if ($("#end_date").val() != undefined)
        var end = new Date($("#end_date").val());
    else
        var end = moment();

    function cb(start, end) {
        if ($("#start_date").val() == undefined)
            $('#calendar-range').val(start.format('YYYY-MM-DD') + ' - ' + end.format('YYYY-MM-DD'));
        else
            $('#calendar-range').val(start.toISOString().split('T')[0] + ' - ' + end.toISOString().split('T')[0]);
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


    $(".parametersF").click(function () {

        var trend = $('input[name="trends"]:checked').val();
        var checkings=true;

        if (trend === 'tags' && $("#tag").val()==0) {
            $("#no-data").removeClass('d-none');
            checkings=false;
        }

        if (trend === 'status' && $("#type").val()==0) {
            $("#no-data").removeClass('d-none');
            checkings=false;
        }


       if ( checkings) {
            var urlI = window.location.href;
            var baseUrl = urlI.split('?');


            if ($('input[name="period"]:checked').val() == 'date') {

                var wlocation = baseUrl[0] + '?date=' + $('#calendar').val() + '&top=' + $("#top").val() + '&trends=' + trend;

                if (trend === 'tags') {
                    var tag = $("#tag").val();
                    wlocation = wlocation + '&tag=' + tag;
                }

                if (trend === 'status') {
                    var type = $("#type").val();
                    wlocation = wlocation + '&type=' + type;
                }
                window.location = wlocation;
                $("#spinner").removeClass('d-none');

            } else {
                var granularity = $("input[name='granularity']:checked").val();
                var range = 'start_date=' + $('#calendar-range').val().replace(' - ', '&end_date=');
                var wlocation = baseUrl[0] + '?' + range + '&top=' + $("#top").val() + '&trends=' + $('input[name="trends"]:checked').val();

                if (granularity == 1)
                    wlocation = wlocation + '&granularity=monthly';

                if (trend === 'tags') {
                    var tag = $("#tag").val();
                    wlocation = wlocation + '&tag=' + tag;
                }

                if (trend === 'status') {
                    var type = $("#type").val();
                    wlocation = wlocation + '&type=' + type;
                }

                window.location = wlocation;
                $("#spinner").removeClass('d-none');
            }
        }

    });
})