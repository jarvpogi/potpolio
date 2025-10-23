document.addEventListener('DOMContentLoaded', function () {
 
  const container = document.querySelector('.testimonial-container');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');
  const scrollStep = 340;

  if (nextBtn && prevBtn && container) {
    nextBtn.addEventListener('click', () => {
      container.scrollBy({ left: scrollStep, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
      container.scrollBy({ left: -scrollStep, behavior: 'smooth' });
    });
  }

  const chartCanvas = document.getElementById('myChart');
  if (chartCanvas && typeof Chart !== 'undefined') {
    const ctx = chartCanvas.getContext('2d');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }
});
