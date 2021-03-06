Highcharts.chart('container', {
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ],
      crosshair: false
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Rainfall (mm)'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [{
      name: 'CHN',
      data: [20, 40, 15, 35, 25, 50, 30, 20]
  
    }, {
      name: 'USA',
      data: [40, 30, 20, 10, 50, 15, 35, 40]
  
    }, {
      name: 'UK',
      data: [70, 10, 30, 40, 25, 50, 15, 30]
  
    }, 
    ]
  });