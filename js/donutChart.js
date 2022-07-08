var xValues = ["Search Engines", "Direct Click", "Bookmarks Click"];
var yValues = [30, 30, 40];
var barColors = [
  "#6CA2DA",
  "#6CDA8F",
  "#DA6C6C",

];

new Chart("myChart", {
  type: "doughnut",
  data: {
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }],
    labels: xValues,
  },
  options: {
    title: {
      display: true,
      
    }
  }
});