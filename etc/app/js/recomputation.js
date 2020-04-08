    $(function() {

    $('#baseUrl').val(window.location.origin);

    if ($('#start_time').val()!=0)
        var start = moment($('#start_time').val().slice(0, -1));
    else
        var start = moment().subtract(29, 'days').startOf('second');

    if ($('#end_time').val()!=0)
        var end = moment($('#end_time').val().slice(0, -1));
    else
        var end =  moment().startOf('second');

    function cb(start, end) {
        $('#reportrange input').val(start.format('YYYY-MM-DDThh:mm:ss') + 'Z / ' + end.format('YYYY-MM-DDThh:mm:ss')+ 'Z') ;
    }

    $('#reportrange').daterangepicker({
      timePicker: true,
      timePicker24Hour: true,
      timePickerIncrement: 10,
        startDate: start,
        endDate: end,
        locale: {
        format: 'YYYY-MM-DDThh:mm:ss'
    }

    }, cb);

    cb(start, end);



});

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {

            var sites='';
            $('#services :selected').each(function(){
            if (sites=='')
             sites='\"'+$(this).text()+'\"';
             else
             sites=sites+','+'\"'+$(this).text()+'\"';
            });
            $("#entity").val(sites);


            var period=$('#reportrange input').val().split(' / ')
            $('#start_time').val(period[0]);
            $('#end_time').val(period[1]);


        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();