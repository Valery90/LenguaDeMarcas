const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['0-9 años', '10-19 años', '20-29 años', '30-39 años', '40-49 años', '50-59 años', '60-69 años', '70-79 años', '80-89 años', '+90 años'],
        datasets: [{
            label: 'COVID por Edad',
            data: [20811, 38854, 39523, 33972, 43043, 38813, 24532, 15706, 12162, 5157],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 244, 38, 0.2)',
                'rgba(38, 247, 255, 0.2)',
                'rgba(255, 38, 233, 0.2)',
                'rgba(255, 38, 143, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 244, 38, 1)',
                'rgba(38, 247, 255, 1)',
                'rgba(255, 38, 233, 1)',
                'rgba(255, 38, 143, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: false
    }
});