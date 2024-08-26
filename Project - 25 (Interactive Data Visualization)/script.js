// Sample data for the bar chart
const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [{
        label: 'Monthly Sales',
        backgroundColor: 'rgba(0, 100, 255, 0.4)',
        borderColor: 'blue',
        borderWidth: 1,
        data: [59, 34, 85, 74, 98],
    }],
};

// Chart configuration
const config = {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Monthly Sales Data',
            },
        },
    },
};

// Create the chart
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, config);

// Add interactivity (e.g., tooltip) using Chart.js built-in features
myChart.options.plugins.tooltip = {
    callbacks: {
        label: function (context) {
            return `Sales: ${context.parsed.y}`;
        },
    },
};

// Apply smooth animations using Anime.js
const chartAnimation = anime({
    targets: myChart.data.datasets[0].data,
    easing: 'linear',
    delay: anime.stagger(200),
    duration: 1000,
    loop: true,
    direction: 'alternate',
    update: function (anim) {
        myChart.update();
    },
});