var options = {
          series: [3287, 3000, 1200],
          chart: {
          width: 400,
          type: 'donut',
          dropShadow: {
            enabled: true,
            color: '#111',
            top: -1,
            left: 3,
            blur: 3,
            opacity: 0.2
          }
        },
        stroke: {
          width: 0,
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: false,
                total: {
                  showAlways: false,
                  show: false
                }
              }
            }
          }
        },
        labels: ["Wells Fargo Student Loan", "My Fed Loan", "Heartland (Primary)"],
        dataLabels: {
          dropShadow: {
            blur: 3,
            opacity: 0.8
          }
        },
        states: {
          hover: {
            filter: 'none'
          }
        },
        theme: {
          palette: 'palette1'
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 300
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();