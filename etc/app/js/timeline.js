  function drawChart() {
                var container = document.getElementById('div_timeline');
                var chart = new google.visualization.Timeline(container);



                google.visualization.events.addListener(chart, 'select', function () {
                    var selectedItem = chart.getSelection()[0].row;
                    window.location = links[selectedItem];

                });


                var dataTable = new google.visualization.DataTable();
                dataTable.addColumn({type: 'string', id: 'Service Flavour'});
                dataTable.addColumn({type: 'string', id: 'Status'});
                dataTable.addColumn({type: 'date', id: 'Start'});
                dataTable.addColumn({type: 'date', id: 'End'});
                dataTable.addColumn({'type': 'string', 'role': 'tooltip', 'p': {'html': true}});

                dataTable.addRows(newgroup);

                var options = {
                    title: 'Status report',
                    backgroundColor: '#fff',
                    colors : colorsgroup,
                    timeline: {
                        groupByRowLabel: true,
                        showBarLabels : false

                    },
                    hAxis: {
                        format: 'dd.MM HH:MM'
                    }

                };


                function myHandler(e){
                    if(e.row != null){
                        $(".google-visualization-tooltip").html(dataTable.getValue(e.row,4)).css({width:"auto",height:"auto"});
                    }
                }

                google.visualization.events.addListener(chart, 'onmouseover', myHandler);

                chart.draw(dataTable, options);
            }