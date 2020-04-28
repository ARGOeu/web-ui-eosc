$("#refreshPage").click(function() {

    var view='status-egiCore';

    $.ajax({
    type: "POST",
    url: "/notify/"+view,
    success: function() {
        location.reload();
    }
    });

    });





    $('[rel=popover]').popover({
       offset : 4,
       placement: 'right'
    });

       $('[rel=tooltip]').tooltip({
           placement: 'right'
        });

      function filter(element) {
            var value = $(element).val();

            $("span.group").each(function() {
                if ($(this).text().search(value) > -1) {
                    $(this).parents( ".card" ).show();
                }
                else {
                    $(this).parents( ".card" ).hide();
                }
            });
        }
 function filter2(element) {
            var value = $(element).val();

            $("span.status").each(function() {
                if ($(this).text().search(value) > -1) {
                    $(this).parents( ".card" ).show();
                }
                else {
                    $(this).parents( ".card" ).hide();
                }
            });
        }