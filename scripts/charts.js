var charts = {

    chart: {}, //refernce to chart
    makeBarChart: (chartId, labelData, dataData) => {
        var ctx = document.getElementById(chartId).getContext('2d');

        charts.chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'horizontalBar',
        
        // The data for our dataset
        data: {
            labels: labelData,
            datasets: [{
                label: TrulieveAPI.getProductName("FINP-ROS-1G-I-15"),
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: dataData
            }]
        },
        
        // Configuration options go here
        options: {

        }
        });
    },
    updateChart: (SKU) => {
        //clear out data
        TrulieveAPI.clear();
        //Lookup and populate chart
        TrulieveAPI.getItemMultiInventory(SKU)
        .done((d) => {
            var deets = JSON.parse(d);
            deets.forEach(element => {
                 if (document.getElementById('chkHideNegative').checked && element.stock <= 0 )
                {

                }
                else
                {
                    TrulieveAPI.chartLocations.push(TrulieveAPI.getLocationName(element.id));
                    TrulieveAPI.chartstocks.push(element.stock); 
                }                          
            });
        })
        .always(() => {
            charts.chart.data = {
                labels: TrulieveAPI.chartLocations,
                datasets: [{
                    label: TrulieveAPI.getProductName(SKU),
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: TrulieveAPI.chartstocks
                }]
            };
            charts.chart.update();
        })
    }
}