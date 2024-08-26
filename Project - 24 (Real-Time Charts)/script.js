const ctx = document.getElementById('realTimeChart').getContext('2d');

    let label = [];
    let data = [];

    let chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: label,
        datasets: [{
          label: '# of Votes',
          data: data ,
          backgroundColor: 'rgb(0, 150, 255, 0.4) ',
          borderColor: 'blue',
          fill: true,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            
          },
          x: {
            autoSkip: true,
            maxRotation: 90,
            minRotation: 90
          },
        },
        animations: {
        duration: 1000,
        easing: 'linear',
      }
    }
    });


    function addData(){
      label.push(new Date().toLocaleTimeString());
      data.push(Math.floor(Math.random() * 100) + 1);
      chart.update();
    }

    setInterval(addData, 1500);