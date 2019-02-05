

      // bind change event to select
      $('#filter_select').on('change', function () {
          var url = window.location.href + '?filter=' + $(this).val(); // get selected value
          if (url) { // require a URL
              window.location = url; // redirect
          }
          return false;
      });

      $('#reset-filter').click(function (){
        window.location = removeParams('filter');
    });


   function removeParams(sParam)
   {
            var url = window.location.href.split('?')[0]+'?';
            var sPageURL = decodeURIComponent(window.location.search.substring(1)),
                sURLVariables = sPageURL.split('&'),
                sParameterName,
                i;

            for (i = 0; i < sURLVariables.length; i++) {
                sParameterName = sURLVariables[i].split('=');
                if (sParameterName[0] != sParam) {
                    url = url + sParameterName[0] + '=' + sParameterName[1] + '&'
                }
            }
            return url.substring(0,url.length-1);
   }


