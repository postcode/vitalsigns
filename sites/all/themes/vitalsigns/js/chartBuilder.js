function simpleChart(dataUrl) {
  (function ($) {
      // Get the CSV and create the chart

      var options = {
            chart: {
                renderTo: 'chartContainer',
                defaultSeriesType: 'line'
                },

            series: [{
           name: 'val1',
           data: []
       }],

            title: {
                text: 'test chart'
            },
            xAxis: {
                tickInterval: 7 * 24 * 3600 * 1000, // one week
                tickWidth: 0,
                gridLineWidth: 1,
                labels: {
                    align: 'left',
                    x: 3,
                    y: -3
                }
            },

            yAxis: [{ // left y axis
                title: {
                    text: null
                },
                labels: {
                    align: 'left',
                    x: 3,
                    y: 16,
                    format: '{value:.,0f}'
                },
                showFirstLabel: false
            }, { // right y axis
                linkedTo: 0,
                gridLineWidth: 0,
                opposite: true,
                title: {
                    text: null
                },
                labels: {
                    align: 'right',
                    x: -3,
                    y: 16,
                    format: '{value:.,0f}'
                },
                showFirstLabel: false
            }],

            legend: {
                align: 'left',
                verticalAlign: 'top',
                y: 20,
                floating: true,
                borderWidth: 0
            },

            tooltip: {
                shared: true,
                crosshairs: true
            }
        }
    jQuery.getJSON(dataUrl, function (data) {
      val1 = [];
      $.each(data, function(key,value) {
        val1.push([value.amount]);
      });
      console.log(val1)
      options.series[0].data = val1;
      chart = new Highcharts.Chart(options);
    })
  }(jQuery));
}
