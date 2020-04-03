  $(document).ready(function() {
        $('#arEndpoints').on( 'processing.dt', function ( e, settings, processing ) {
            $('#loadertable').css( 'display', processing ? 'block' : 'none' );
        } ).dataTable({
            "order": [[1, "desc"]],
            initComplete: function () {
                var cpt=0;
                this.api().columns([0,1,2]).every(function () {
                    var column = this;
                    cpt++;

                        var select = $("<select><option value=''></option></select>")
                            .appendTo($(column.footer()).empty())
                            .on('change', function () {
                                var val = $.fn.dataTable.util.escapeRegex(
                                    $(this).val()
                                );

                                column
                                    .search(val ? '^' + val + '$' : '', true, false)
                                    .draw();
                            });

                        column.data().unique().sort().each(function (d, j) {
                            var val = $('<div/>').html(d).text();
                            select.append( '<option value="' + val + '">' + val + '</option>' );
                        //    select.append('<option value="' + d + '">' + d + '</option>')
                        });

                    });

            }});

    })