  $('.flappingTable').DataTable();

        $('#calendar').datepicker({
        format: 'yyyy-mm-dd'
        });

  $('#calendar').on('change', function () {
           var urlI=window.location.href;
        var baseUrl=urlI.split('?');
        window.location = baseUrl[0]+'?date='+$('#calendar').val();
        $("#spinner").removeClass('d-none');


  });