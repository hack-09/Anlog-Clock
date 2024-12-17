document.addEventListener('DOMContentLoaded', function() {
  // Sample data for climate change facts
  const data = {
    labels: ['CO2 Emissions', 'Global Temperature', 'Sea Level Rise', 'Extreme Weather Events'],
    datasets: [{
      label: 'Impact of Climate Change',
      data: [35, 2, 8, 20],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      borderWidth: 1
    }]
  };

  const isMobileView = window.innerWidth <= 768; 

  const chartHeight = isMobileView ? window.innerWidth * 1 : 500;

  const config = {
    type: 'bar',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false, 
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Percentage (%)'
          }
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'Impact of Climate Change',
          fontSize: 10
        },
        legend: {
          display: false
        }
      }
    }
  };

  var myChart = new Chart(
    document.getElementById('climateChart'),
    config
  );

  // Set the custom height for the chart canvas
  document.getElementById('climateChart').style.height = chartHeight + 'px';
});
