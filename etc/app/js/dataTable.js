

$('#ar').DataTable(
    {
        "dom": "Blftip",
        "paging": true,
        "autoWidth": true,
        "lengthMenu": [[50, 25, 10, -1], [50, 25, 10, "All"]],
        buttons: [
            'copyHtml5',
            'excelHtml5',
            'csvHtml5',
            {
                text: 'PDF',
                action: function (e, dt, node, config) {

                    var urlI=window.location.href;

                    if (~urlI.indexOf('?')) {
                        var url = urlI.split('?');
                        var Newurl = url[0] + '/pdf?' + url[1];
                        window.location = Newurl;
                    }
                    else
                    {
                        window.location = urlI + '/pdf';
                    }
                }
            }
            ]

    });
