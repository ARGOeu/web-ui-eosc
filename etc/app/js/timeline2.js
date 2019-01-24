


            var newgroup = [];
            var colorsgroup = [];
            var links = [];
            var excludedIndexes =[];

            var local_groups = document.getElementById('local_groups').getElementsByTagName('div');
            var local_links = document.getElementById('local_links').getElementsByTagName('div');


            for (j = 0; j < local_groups.length; j++) {



                var tempArray = local_groups[j].textContent.split(",");
                var color = tempArray.pop();
                var bg;

                bg=tempArray[1].split("_")[0];

                if (tempArray[1].split("_")[0]=='OK')
                    bg='success';

                if (tempArray[1].split("_")[0]=='CRITICAL')
                    bg='danger';

                if (tempArray[1].split("_")[0]=='MISSING')
                     bg='dark';

                if (tempArray[1].split("_")[0]=='UNKNOWN')
                                          bg='light';



                tempArray[4]= '<div class="card card-'+ bg +'">' +
                '<div class="card-header">'+ tempArray[0] +'</div>'
                + '<div class="card-body">' +
                '<label> Status: &nbsp;<span class="badge bg-'+ bg +'">'+tempArray[1].split("_")[0] + '</span></label>' +
                '<br/><label>Start Time : &nbsp;</label>' + tempArray[2] +
                '<br/><label>End Time : &nbsp;</label>' + tempArray[3] + '</div>' +
                '<div class="card-footer text-muted">Click on the bar to access the next granularity level</div></div>';



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


