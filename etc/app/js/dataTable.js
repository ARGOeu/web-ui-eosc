var urlI=window.location.href;
var uriL=encodeURIComponent(urlI).replace(/[!'()]/g, escape).replace(/\*/g, "%2A");
var now = new Date();
var jsDate = now.getDate()+'-'+(now.getMonth()+1)+'-'+now.getFullYear();
var messageB = 'Report Generated on ' + jsDate.toString() +  '- Copyright ARGO ' +now.getFullYear();


if (~urlI.indexOf('egi')) {
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


                        if (~urlI.indexOf('?')) {
                            var url = urlI.split('?');

                            var Newurl = url[0] + '/pdf?' + url[1] + '&uri=' + uriL;
                            window.location = Newurl;
                        } else {
                            window.location = urlI + '/pdf'+ '?uri=' + uriL;
                        }
                    }
                }
            ]

        });
}
else {
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
                    extend: 'pdfHtml5',
                    footer: true,
                    title: $("#titlePDF").val() + '\n' + $("#subtitlePDF").val() + '\n' ,
                    filename: 'argo_ar_report.pdf',
                    pageSize: 'A4',

                    exportOptions: {
                        columns: ':visible'
                    }
                }

            ]

        });


}
