var charts = {

    makeBarChart: (chartId, name) => {
        var ctx = document.getElementById(chartId).getContext('2d');
                                var chart = new Chart(ctx, {
                                // The type of chart we want to create
                                type: 'horizontalBar',
                            
                                // The data for our dataset
                                data: {
                                    labels: TrulieveAPI.chartLocations,
                                    datasets: [{
                                        label: name,
                                        backgroundColor: 'rgb(255, 99, 132)',
                                        borderColor: 'rgb(255, 99, 132)',
                                        data: TrulieveAPI.chartstocks
                                    }]
                                },
                            
                                // Configuration options go here
                                options: {

                                }
                                });
    }


}