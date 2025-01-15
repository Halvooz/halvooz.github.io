// Enkelt eksempel på bruk av Chart.js
// Det første eksemeplet er eit såkalla bar chart, dette er ein type søylediagram
// Sjå ein nærare forklaring her: https://www.chartjs.org/docs/latest/getting-started/ 

// const knapp = document.getElementById("btnLever");
// knapp.addEventListener("click", leverData());

// function leverData() {
//   let antallEplerMandag = document.getElementById("skjema").value;
//   console.log(antallEplerMandag);
// }

const knapp = document.getElementById("btnLever");
knapp.addEventListener("click", leverData());

function leverData() {
  resultat = document.getElementById("kuk1").value;
  console.log(resultat);
}

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag'],
    datasets: [{
      label: 'Antall epler spist av Halvard',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Det andre eksempelet er eit såkalla line chart, dette er ein type linjediagram
// Sjå ein nærare forklaring her: https://www.chartjs.org/docs/latest/charts/line.html

const ctx2 = document.getElementById('myChart2');

new Chart(ctx2, {
    type: 'line',
    data: {
      labels: ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag'],
      datasets: [{
        label: 'Antall kilo boss',
        data: [12, 19, 3, 5, 2, 3, 16],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


const ctx3 = document.getElementById('myChart3');

const data = {
  labels: [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 90, 81, 56, 55, 40],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }, {
    label: 'My Second Dataset',
    data: [28, 48, 40, 19, 96, 27, 100],
    fill: true,
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgb(54, 162, 235)',
    pointBackgroundColor: 'rgb(54, 162, 235)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(54, 162, 235)'
  }]
};

new Chart(ctx3, {
  type: 'radar',
  data: {
    labels: ['Attack', 'Defense', 'Speed', 'Magic'],
    datasets: [12, 1, 3, 4],
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Radar Chart'
      }
    }
  },
});