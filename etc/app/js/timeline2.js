


            $( ".urlenc" ).each(function( index ) {
            var urlsN=decodeURIComponent(unescape($(this).text()));
            $(this).text(urlsN);
            });


            var newgroup = [];
            var colorsgroup = [];
            var links = [];
            var excludedIndexes =[];

            var local_groups = document.getElementById('local_groups').getElementsByTagName('div');
            var local_links = document.getElementById('local_links').getElementsByTagName('div');


            for (j = 0; j < local_groups.length; j++) {

                var tempArray = local_groups[j].textContent.split(",");
                var color = tempArray.pop();
                var original_status = tempArray.pop();
                var thresholdsRaw= tempArray.pop();
                var performances = tempArray.pop().split(';')[0];

                threshold=thresholdsRaw.split(";")
                warning=String(threshold[1]);
                warning=warning.replace(':',' to ');

                critical=String(threshold[2]);
                critical=critical.replace(':',' to ');

                var bg;

                try {
                    tempArray[0] = decodeURIComponent(unescape(tempArray[0]));
                }
                catch (e)
                {
                    tempArray[0]='Unrecognized_Name_'+j;
                }

                bg=tempArray[1].split("_")[0];

                if (tempArray[1].split("_")[0]=='OK')
                    bg='success';

                if (tempArray[1].split("_")[0]=='CRITICAL')
                    bg='danger';

                 if (tempArray[1].split("_")[0]=='WARNING')
                    bg='warning';

                if (tempArray[1].split("_")[0]=='MISSING')
                    bg='dark';

                if (tempArray[1].split("_")[0]=='UNKNOWN')
                    bg='light';

                if (tempArray[1].split("_")[0]=='DOWNTIME')
                    bg='downtime';


                    if (performances!='' && performances!=undefined && original_status!='' && original_status!=undefined) {

                        tempArray[4] = '<div class="card card-' + bg + '">' +
                            '<div class="card-header">' + tempArray[0] + ' <i class="ml-2 fas fa-user-tag" style="font-size:1.4em"></i></div>'
                            + '<div class="card-body">' +
                            '<label> Status: &nbsp;<span class="badge bg-' + bg + '">' + tempArray[1].split("_")[0] + '</span></label>' +
                            '<br/><label>Start Time : &nbsp;</label>' + tempArray[2] +
                            '<br/><label>End Time : &nbsp;</label>' + tempArray[3] +
                            '<br/><label>Actual Data : &nbsp;</label>' + performances +
                            '<br/><label>Applied Threshold : &nbsp;</label><ul><li>label/value/uom : ' + threshold[0] + '</li><li>warning : ' + warning + '</li><li>critical : ' + critical  + '</li><li>min : ' + threshold[3] + '</li><li>max : ' + threshold[4] + '</li></ul>' +
                            '<label>Original Status: &nbsp;<span class="badge bg-' + original_status.toLowerCase() + '">' + original_status + '</span></label></div>' +
                            '<div class="card-footer text-muted">Click on the bar to access the next granularity level</div></div>';
                    } else {
                        tempArray[4] = '<div class="card card-' + bg + '">' +
                            '<div class="card-header">' + tempArray[0] + '</div>'
                            + '<div class="card-body">' +
                            '<label> Status: &nbsp;<span class="badge bg-' + bg + '">' + tempArray[1].split("_")[0] + '</span></label>' +
                            '<br/><label>Start Time : &nbsp;</label>' + tempArray[2] +
                            '<br/><label>End Time : &nbsp;</label>' + tempArray[3] + '</div>' +
                            '<div class="card-footer text-muted">Click on the bar to access the next granularity level</div></div>';
                    }


                tempArray[2] = new Date(tempArray[2].substr(0,19));
                tempArray[3] = new Date(tempArray[3].substr(0,19));


                if (tempArray[2] < tempArray[3]) {
                    newgroup.push(tempArray);
                    colorsgroup.push(color);
                }
                else
                {
                    excludedIndexes.push(j);
                }
            }


            for (m = 0; m < local_links.length; m++) {
                if (excludedIndexes.indexOf(m) == -1)
                links.push(local_links[m].textContent);
            }

       google.charts.load('current', {packages: ['timeline'] , 'language':'en'});
       google.charts.setOnLoadCallback(drawChart);

