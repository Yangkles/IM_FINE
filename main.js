const barChart = document.getElementById('barChart');
const data = [75, 20, 80, 100, 70];

data.forEach((value) => {
    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.height = value + '%';
    barChart.appendChild(bar);
})