// =================
// === Libreria "Chart.js"
// === https://www.chartjs.org/docs/latest/
// =================

var chExpenses = document.getElementById("myChartExpenses").getContext("2d");

var myChartExp = new Chart(chExpenses, {
  type: "bar",
  options: {
    responsive: true,
    indexAxis: "y",
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
  data: {
    labels: [
      "Terreno",
      "Excavación y cimentación",
      "Cimentación",
      "Construcción",
      "Acabados",
      "Administrativo",
      "Licencias y permisos",
    ],
    datasets: [
      {
        label: "Distribución de gastos",
        data: [46, 5, 8, 19, 14, 7, 4],
        backgroundColor: ["rgba(0, 44, 129, .9)"],
        borderColor: ["#002c81"],
        borderWidth: 2,
      },
    ],
  },
});

var chFinancing = document.getElementById("myChartFinancing").getContext("2d");

var myChartFinan = new Chart(chFinancing, {
  type: "bar",
  options: {
    responsive: true,
    indexAxis: "y",
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
  data: {
    labels: [
      "Deuda senior",
      "Capital desarrollador",
      "Preventas",
      "Capital / Deuda preferente",
      "Deuda junior",
    ],
    datasets: [
      {
        label: "Fuentes de financiamiento",
        data: [0, 33, 45, 0, 27],
        backgroundColor: ["rgba(25, 168, 243, .9)"],
        borderColor: ["#19a8f3"],
        borderWidth: 2,
      },
    ],
  },
});

var chVs = document.getElementById("myChartVs").getContext("2d");

var myChartVersus = new Chart(chVs, {
  type: "bar",
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
  data: {
    labels: [
      "Pagaré bancario",
      "Cetes",
      "Ipc",
      "Georgia 38, Nápoles",
    ],
    datasets: [
      {
        label: "Comparación",
        data: [2.5, 5, 7.9, 16],
        backgroundColor: [
          "rgba(255, 255, 255, .9)",
          "rgba(255, 255, 255, .9)",
          "rgba(255, 255, 255, .9)",
          "rgba(0, 216, 89, 1)",
        ],
        borderColor: [
          "#bbbbbb",
          "#bbbbbb",
          "#bbbbbb",
          "#349e55",
        ],
        borderWidth: 2,
      },
    ],
  },
}); 

