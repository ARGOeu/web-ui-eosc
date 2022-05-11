var urlI=window.location.href;
var uriL=encodeURIComponent(urlI).replace(/[!'()]/g, escape).replace(/\*/g, "%2A");
var now = new Date();
var jsDate = now.getDate()+'-'+(now.getMonth()+1)+'-'+now.getFullYear();
var messageB = 'Report Generated on ' + jsDate.toString() +  '- Copyright ARGO ' +now.getFullYear();

function my_link(service){
var baseUrl=urlI.split('?');
 if (urlI.indexOf('services')!=-1) {
    if (urlI.indexOf(service)!=-1)
    {
       window.location=baseUrl[0]+ '/endpoints?'+baseUrl[1];

    }
     else
       window.location=baseUrl[0]+ '/' + service +'/endpoints?'+baseUrl[1];
}
else
window.location=baseUrl[0]+ '/services?'+baseUrl[1];
}

function my_export(format){
var baseUrl=urlI.split('?');
       window.location=baseUrl[0]+ '/' + format +'?'+baseUrl[1];

}

$('#console_status').DataTable({

    "dom": '<f<t>lip>',
    "paging": true,
    "autoWidth": true,
    "lengthMenu": [[5,20, -1], [ 5, 20, "All"]],
    "order": [[ 0, "asc" ]]
});

$('#console_ar').DataTable({
    "dom": '<f<t>lip>',
    "paging": true,
    "autoWidth": true,
    "lengthMenu": [[5,20, -1], [ 5, 20, "All"]],
    "order": [[ 0, "asc" ]]

});

$('#reportMonitor').DataTable({
    "dom": "lftip",
    "paging": true,
    "autoWidth": true,
    "lengthMenu": [[25, 10, -1], [ 25, 10, "All"]],
    "order": [[ 3, "desc" ]]
});

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

if (~urlI.indexOf('egi')) {
    $('.ar').DataTable(
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
    $('.ar').DataTable(
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
