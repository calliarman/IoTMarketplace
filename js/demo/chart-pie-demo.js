// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Utilities", "Automative", "Agriculture", "Manufacturing", "Transportation"],
    datasets: [{
      data: [7.21, 9.58, 6.25, 8.32, 5.4],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745', "#AF78D2"],
    }],
  },
});
