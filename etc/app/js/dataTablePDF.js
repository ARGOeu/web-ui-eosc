var now = new Date();
var jsDate = now.getDate()+'-'+(now.getMonth()+1)+'-'+now.getFullYear();
var messageB = 'Report Generated on ' + jsDate.toString() +  '- Copyright ARGO ' +now.getFullYear();

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
        title: $("#titlePDF").val()+ '\n' + $("#subtitlePDF").val(),
        filename: 'argo_ar_report.pdf',
        pageSize: 'A4',

    exportOptions: {
         columns: ':visible'
    },
    customize: function (doc) {

        doc.pageMargins = [10,40,10,20];
        doc.defaultStyle.fontSize = 8;
        doc.styles.tableHeader.fontSize = 9;
        doc.styles.title.fontSize = 10;
        // Remove spaces around page title
        doc.content[0].text = doc.content[0].text.trim();


		var logo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAuCAYAAADeIbxeAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gkbCh0M5h0HJwAAFb9JREFUeNrtXHmUXFWZ/333bbV0VXV3ekl3J52EBBKysYcgywACCiKyiFFQNhdw3BmOcoYZRhwHdfQoR5HBUSN6hJFNUQEdFgkCB0jCHpKQEDrpztZ719JV9ZZ7v/mjln716lUnHBB0pM7pk+6qV+/d+/2+37ffEP7KX8wMIqr+/dRA2rytL5OwiI4aduTRzZY41PG4ydKE54L7k7r2ZIulPTKa94a+cWx3ofLdwZE8Ottif+3bBeFv5PW7V0aiT427MwziczZlnFVjjrfAUzCLkk1dQHjMYCYvqpEd08Vwh6nd1xPT70gYYstXjpiZIyIJALduGsGFB7e9A8gbYcaPnt/bOmirS58btz+1o+AuMAWJhC4gKjtg304YyEsFWzE3G5pzcNK674gW66ZDUtajpzw74A1/YMk7DNkvAHJFUFOk+vdNz+9NTUiaM5B1zt0+6Z4/4am5OiFmaQRBDGICqIwHAxWrxiAwGASCqxiTnpJRjbIdpnh8WUv07i0Z5w9XL5mRXtLVVGxkFt8BBADwXQBX4kcvDFpMtHBLxrl8Q9o+O+OpZktQzCSCEABxiRA1Kw8wBCgBxACYCRIKRY8lgPzsmPHK0mZrddb17mjXjfRVK2Z67wBSZ56U+PiaAfPghHnIQMH71Mtp52PjjjISJiEqBBhcYkHdiglTH0yBUaVO9Y3SdQpA1lWQzKozovfPjxurl7dF7+hP2zu+urLbJiL+uwaEbal/ef2eVNLSVm5J2x/cnfdOLzA3m0SWLgiCAOGXcxUUAjNDMYF9gicwRJkaVL6mgmLJkJXwUwy4zFCMXFyniQVx8x4B3J4waePXV/ZkiMj7uwHklucHcUl/DpM9MfFLQ/vA+tHiP25IF49XIKPJIKFXTYdf+6coQAwoAK5iFBXDUyX2gABdECKCYJTB9BOkdstcBg0oSEbOVapJF87ilPnHlW3R1Rdp2n20flDdvKQVVxzW+f8HkKBt3jqUj964ZSwVF3Rqf8G7bPukc6QjEU0YpOmirNkVXSaqAsBlbIpSIesqCAAzIjo6LQ1JU0BAAATkXInBosRI0YXDjCZdQ1QnCKJqMAaugwaMEsg5l6VGnJ+fMNbNjpq/yDjygVXzUunjepP5yndGhgpo64j+bQLyg8f68bnje/F4X1pfM5JvNgR95KmRwqphWy5hRjKiQWg0pc1VZ80E+CIpWymMFT2kDIEjZsSwoiOKJa1RdMcNaEQV7KAAjBQ8bBgtYP1IHuuGCxiyJZojGiJ+UAKhchUYJnjMKEqldKJMqyE2H9EW/XVUo1+RwuA/HTnT+ZtiSJAR16/bo/fG9LYdBXnputHCpX05Z37C0ERMK4HAVZMS9MolnhARxmwJ25U4tSeBCxY0Y3l7FAIEpRiSeQrI8mY0QRCCwAy8mi7irtcm8Ou+DFgjdFgCzKLMwECU5hcKlfxMUTFynuJuS99zQJP+856o8VOlUf/Vh3V6lQBgz1gBXa3Rv26GXP34zkRGqlmGoI/0TbrnDxa9Hl2IREwjCFStUdkhB8LW8q+SgRHbQ5up45MHteC0OUmkTA25goddwwVsGkijf7iAnO1BqpIzj5oaelqjWDQ7iXldMSSjOiYlY+3ePG7aOILNWRtd0RKruIJkvS7UmDfJgM0MpXgyZYjhOU3mw71R/bZtGfuFH588J/1mBwBvKiD/9fyI1hIRS/53V+6iYce7bNiWCVMjPaYTiMmniAFvW6EKlaIjAWB33kWnpeE/V3RhaVsMBGDrQA6/fXon1m0dx0TehaERyGeKmBmuZMRMDcvnNeOsFV047MAWEBEGcjb+be0ePDthY2bMgODXLwFHMTKOkk2GcHos/aGV7dHVo676/XUruuSN/Wl8tjf19gBy8M3PYtMVh5dk6RTFtc+NpAyhLd5b8C57Neecl5cc1wHdFFRvkWrsd0A9ywZ+zJFoMwS+c0w3FrVE4LgS9z29B3c9sRPjky6am3SYula3FaJSxOVIhUzehS4I7z+yGx8+qReJqI7RvIvPPLELm7IOeqJGKb8JOpRKZNeAPawACaComAVQmBXVX1qcMm/ZmnXvOTRppK88qrvwtjAkky5oVz0zFGuP6scMO97FWzPOaVmPE3FdWJYfCA55Goc8ufxe3mPkbA/fXtGFk3uTcByFXzy8HXc+PoBY1EAyqpWiJn8gUJZgxX8xM5gZeVsik/dw7KI2fOHsA5FqMrBprIAvPbkbGclIGsL37JobhkuIKxWAkgP0AORdBSGQ7rL011oNcVtvwvz9TEvv/8Ty9sJfDJA7Nw7j/MXtAIBnd2fFtowTHS5671kzmL90yFHvLUilx3UBQyt7w7DSRqMnl4EohbeM3XkPF85rxueXt8MShNsfHcDqB/vQ2RqBoQuw4n1sY+pzAYIjFQZG8jj76Fm44n0HwDAEfr0tjWuf24tZcROGCCyvEoYRh5dlggChxJiCp1gB1GJqE8tS5uruiP6Tgby79dpDOmQiYTEAfOL+bfjJGfPfHIas2TYWWd2fTc1vMk7fOGFfuLcoD2cgqQvSNaDqrLnBwqd9UvnzjKvQZgjccmIvWqM6nn81jWtvfQm6RkjFzVLmHUo1rk/8QOWrGLbHyEy6+PQZ8/G+o7swYUt87rEBbM65aLU01BRMiPZpthrlMgDBLlWaC3FDTMyJ6vfPbTLuLnr8zFmd8fGV85vd6pYdF2QadaIQ04WwlX+veqw//vBQ4WLb49/fuyv3w75J992GoNaoRrpBgCD/mikcd/ZthANaJkoyyDgKJ3Y1oTWqIz3p4o4/90MqhUTU8IFRywRGSBZe/kSBwQRYhoDQCHc9MYCJSRdJS8N5c5uhlIJUZeFTCJ0bZvu+bflyGQIjohFShhYFo2tj2rn4wT3524ds+ct79mTP+ucnBqy7t44IALjmmnWvjyG3bhqOvZh22yHVRzek7VXjDh9ExFZcFyVb7RcQUXjkRGj8XkC+rgJsT+GGd3XjyI4Ynnx5BNffuRnNCQM6EXifPKf6VNx/f8kYThdxxXvn4/1Hd6OoFC5ZM4BBW6JJF3W6Q3XMa8CYUBM8JVaPGZOeYkFw5sSMlw9tidxmCtweFRi94pCZhWAOp9dl18/tjY04cu7zE84FG8bsCzOenGFqlIgbJR0Q5adyHaQVpxjiQ8C1gkMtMAqlptKBSQNzkyYAYO3WcTiSoVXpF6auHBAON2ALoAsgYmpY/+oYTj6sE81xAwemLGzbnUPcEBBcq+11+2CfOQsxXeHIMXQCErogANbApHf4tlx2fk9Uv3hOTL/rC4/tvGNhyhr49LK2SSLC9uFsCZB0xsY3XhqhpE4Hbc97n3xp3P74sCObm3SBhCHKoWEACARozg1U12+PwzSbCIoZtlSYlzBhagKeq9A/PImYpflIxSGOmxqoav17BCAW0bBrpIiJtI3muIE5SQtyIFsKRPx2lxo9ivftC6dUvmo9KqWhuAHEIVJDtrdsV8Fb1mZqX7R0uvOOV0ZvemnnxIaf9WWl/pUnd3Z8b/PY8jFXfmjduH1mXqHFJIq0WSXTxI3Ap7C8IvheGBgc4q8AxYzOiAZTEMazDibyHixd1BYbOeDEqRE7UM0w/DiZmoZ03sNQxsHcbqDTErA0gqIQQvvD4Lo9BNbQSEZ+M01ULQnFNQHWGHmpWv48mL/k2bHCuSbT4+fOTXxbZ4Xr7tmdOcfSqTWhCyOpUS01K4Jl1Jsdv/nxAzUdeGGglYVnaQKCgIIjIaUCCd/FvA+NDDXpvrJ9WeiKFYqeBACYgqAF11TdO1eLnPW+isOdPgUCF6o33VOPIVgCsASZY45s8xQf1xEzfyh6YvoanciLkDB0EuHUrDGufu0oA8W+J/M+nJ//PlQf/of5Bg6GaDTdzYOSqC3YMDCVK/mBDnt2dX+orz7uK5EIKibXh2uCSuWYosfOmd2JKxda4hGxsiN272k98W9mXFUoSjWlENxI6wOLDPMj1GCBHPAt/movEWyPoRiImho0jRqH0bw/iU2NowJzSfg6lZx7pTYlucFXKVSGgdalXz40fZ7qr1hSyXjZCsh6yj6jp+nmU7vjv1nYk5Ti6J7kpOmqnx2WNH4wasuCpKq5a6A1YWEevz7t8Tn0CtEECIMFD45ktMRNNMdM2K4EgxsnSzXPoxBm+H6Y4UiFZNRCR6o03TJkS9hcMpfEPt9BFN5oDEtMOND5YoSzyvcV4lLdbdTx5AxNu7e3yfji8b3JHACIyx/ajq8eN3uyKyKuW94c+d1oQUqPfRljne8ISJWmt+XhySBPbYIBAUZEB/pyLhyloBsCvR0x5G1ZynkIQXWsj2ZCHzT1UgDyRYnutgiay6H19owNTZQqxrWoB9jrNzscuIYaaBz5Aa6NATxmDOYl5kaN5xalzKs+s7yDK3U44TLjUw/14T+On5OfYYqvzI0bjw0VpfJUSG2AUOvEmWvNGk3jNBomVKUWa0wTeC1rY3um1JRbsaAFpiYglQpEUhwIwGka/+EDRDGKjsKRC1oQNzVkHQ9b0g6adFHajvKFttwInDCSUL0laWAkKoZk3JFoNui1c+cmV91wwqztNaWT1afOw3+fMg8A8P0TZu94T0/83PlNxlMjtldrqQn1fc9Qs+0TCPkm2fyO22cWUM1QCROOxJ935wAAi+emsKw3hbG0AzVNVLmv8KsS0WQKLnpaLbz7sE5ohsDDAznsmHQQ0aixUw6a3zBTFCSmn1G+aJUIYCLsLXhI6LT58oNaP3DRohl9wXmwGqK2rX4Rly/rGJ8X1z82N27cP1zwXFdxiFugegtCDXI3vx/k8MSNmcECSJoa1uzJYSzvIRU38KETZkNoApm8V7MG2le1l2oZaLsKUgIfPHY2muMGMrbE3dvTEETQSNTnGvQ6IijicJACob7HjLSjZG/UeOGEjthFqxbN2EBEHKxe1wAyfOky4Pvr8N3jZr92ZGvsomPbY/ePOcpzFFdrp1NOstGCfeWTYPmBQmx+xXYCSBgCO/Iefrx5FAVPYfkBKVx4wmxk8y5cySBB+1eg5kqZh+B6jF2jeZxySAdOPrQDnmI80J/ButEiUoaAIJ4qU9eZVQ4vCnAIY/xmnKbAorL/mnCVSmr40zeOmnn611b2VCuLJKZhCBEBnz8KVz62C9esmDk20zI+emBM/17OVWOTngIz1ZWuQn/CtKwRg8ob4PJwW7MpcHvfBJ7YnQMJwjnHzsKq42djaNzGeNaBUlxjDUMqMSAwFDOyRRfD6SLevawTl502D1FLw9aJIlZvGUdrRIdeCa2rle2geaJ6K9AowAgAU4naipKRcVV+edL6n4OT5seWtMf2eI58ff2QTz4yAEsj3HjCLNz5yljz7oJ76a/60tdJEokWo1wAmKbWh7pqcAgqXDvy4wdrzFaYYQl8d2U3FrZEYLsS91dbuA5STQYsXdQtv3J3t9LCJcL7jurCR06aU9vCzTiYFTegmGuqMY06y6FVbQ5x5tX6QCmfynuMolSZk7pi388X+Vs3njgrt68Z4v1qUD3alxGbs8VjH9gzefPWrLOwLaJppqD6ZhRPX17gsMpLwO5Smba7C17IkEMWv316V3nIwYGhiTIjSjdS1SEHHYfMS+H9dUMOe8tDDjoEpmEzh1elQ5tVNWsv7VuCMWYrbrW0weNaI1+4dvGMu/5144j6+jGz3ngL954tYzj7oFYwM33rmb3zt2Tcqzdm7PM0oua4QdWkKpwxgVYoGvfSg4tSChiujAEtDBsDyqB/OI+cLaGUAhEQNfXyGFAC87rivjGgSdy0cRSbMw66YgY0UWYGNxA670fGHZJycHmWK+/KzNLm6INxDf/y+YWt2xbObHL3d8J+vxjiv9m/PLnbSpji/LVjhX/fnnN7m3QhYhpB+VcaVnIPjdQ40MfyhcKipHHBQblD2qOg1zsotz0DFoSOiF6K6KZTCJ4mpKcg3aeaYh4z0q7CDEsbP64t8tX5cfPnFyxpT78lUyfMLK5fv3fma1nnyp1F78KMp9qignRdlFtYzIFmTmD+qqH2UU10UzFvtuLqKOnhM6I4uiOOJa2R6ihplVUARooeNowUsX5kEmuHCxi2JZpNHRHNJ7+gD0Og/IN9dAV9nykAeY+VLmhibkz/7aKk+Z2jWiNbT5nf4r6lY0AA8M21u5KKxBEbM85nt2WdUxU4kTRE9UhAWEGIfYlSeEJVW86vDluDUfRQHrbm6rB1yhRgIhADk57CoC0xUigNW8d1DVFdQKOAWd3XrhtNNPq6iuVRUwYjPzOiPXlMW+yHr2WdP934D7MzAPDeuzfjj+ctemsBqbxWPbiNjm2Ln7Ux7Vy9MeOscMAUE4IMgcaxb5i95pDJjxpfNBUOOeVpeE9VqgBUatP6jyM0rK1RSI9n+nmxymUuM/Ies0ZwuyPa8/Ni5g0LEvrdQ65yrzmy+w0f+HnDgHz8kR346UlzwMzal5/c2epIftdgUV00aMvjikqlooIsAapWS4RfLrx/kVcwCqt8T1WP4ZT9DlBiJwVHFHj61nJQAarLKR8MKl+Wl8rTQememPZsu6HdWlT44zndsbEzFra5AHDvq2M4c0Hr2wtI8PVCf1p8b1vaeldb9OhNGefSlyeKZ4zbqlXXQFGtzJqQZty0q5rW8QYnWoIHfXj/5sJCSCxRYmHRY47rZC9ujjy4NGne8tyE/cBpbbHih5a2lQatV9wCrL3kTZHfmw5IJSJjZrp+3ZDhKK87YepnvzRePHOP7R2adlRUEEeimhBaWZODIX9972F/xm64Rtt5mhZGKBblio8EUJDMzFyM68KeYdIri5OR+01BvymAtn7tqM6/6FnEv8hxhP7hPHrbp/7XhFeGJ2M3bBpt6raMBRlPnry76J04UpSH5SVbnlKGqQlTI0ATAlSuvzBXJttrD3w2bN4GSxf+6ozf1NHU1JXiUseQAbiKPTDZMZ2cVkvb3BPRH40IemQg77344bmp3BkLmnN4C15v2RnD7FgRidZSp+6JneO0IyMXbcs5K7KeOrEv5xzlMBaO2FIT5cOaLoOadAEqoyFAIadwpzNLU0xRZeYKIkxKBTAhqhOnHYUWUyCpix0zI9r6hC7WzGsynzq9K/5c79kPKcQJePAsvJWvt/UU7tP9afOp0ULkmdGC1R0z5mQ9NV8DLd1rewfENbFgqOjNyEmOGYJ0TUAoBTHuSI0ImiFIMIMNItI1ElIp9kr+l6QCu4pVi6V5uoCSiqWrIE1Bxc6IlvYY20iqbUtbo9sl8EJfzu3rsrT84oRRvGBpe/HtPLP+tjy5URnhD1tH9VfSrrEh6+gxjTTJnDhmZtOBIzmn+8WJ4oxhRyUWt1g9GqMz7ciYLsibdGUs63FTTBOFJl3kJVg06aIY0cT4+vHijpigzKFJa+SAFnNo3Uhxa9HjUQZL8qT3paXt3oGdcTfoE9Zun8CKuc1vCyD/B10/J4J5eIh1AAAAAElFTkSuQmCC";

				doc['header']=(function() {
							return {
								columns: [
									{
										image: logo,
										width: 36
									},
									{
										alignment: 'left',
										italics: true,
										text: 'ARGO',
										fontSize: 18,
										margin: [10,10]
									}

								],
								margin: 10
							}
						});


        // Create a footer
                doc['footer']=(function(page, pages) {
                    return {
                        columns: [
                                  //This is left column
                            {
                            text:messageB,
                                fontSize: 8,

                            },

                            {
                                // This is the right column
                                alignment: 'right',
                                text: ['page ', { text: page.toString() },  ' of ', { text: pages.toString() }]
                            }
                        ],
                        margin: [10, 10]
                    }
                    });

        // Styling the table: create style object
        var objLayout = {};
        // Horizontal line thickness
        objLayout['hLineWidth'] = function(i) { return .5; };
        // Vertikal line thickness
        objLayout['vLineWidth'] = function(i) { return .5; };
        // Horizontal line color
        objLayout['hLineColor'] = function(i) { return '#aaa'; };
        // Vertical line color
        objLayout['vLineColor'] = function(i) { return '#aaa'; };
        // Left padding of the cell
        objLayout['paddingLeft'] = function(i) { return 3; };
        // Right padding of the cell
        objLayout['paddingRight'] = function(i) { return 3; };
        // Inject the object in the document
        doc.content[1].layout = objLayout;
    }
    } ]
    		});
