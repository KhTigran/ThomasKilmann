document.addEventListener("DOMContentLoaded", function() {
  var answers = JSON.parse(localStorage.getItem("answers"));
  var result1Element = document.getElementById("result1");
  var result2Element = document.getElementById("result2");
  var result3Element = document.getElementById("result3");
  var result4Element = document.getElementById("result4");
  var result5Element = document.getElementById("result5");
  var resultElement = document.getElementById("myChart");

  var res1A = [3, 8, 10, 17, 25, 28];
  var res1B = [6, 9, 13, 14, 16, 22];
  var forc1 = 0;
  var forc2 = 0;

  var res2A = [5, 11, 14, 19, 20, 23];
  var res2B = [2, 8, 21, 26, 28, 30];
  var probl1 = 0;
  var probl2 = 0;

  var res3A = [2, 4, 13, 22, 26, 29];
  var res3B = [7, 10, 12, 18, 20, 24];
  var compr1 = 0;
  var compr2 = 0;

  var res4A = [1, 6, 7, 9, 12, 27];
  var res4B = [5, 15, 17, 19, 23, 29];
  var izbeg1 = 0;
  var izbeg2 = 0;

  var res5A = [15, 16, 18, 21, 24, 30];
  var res5B = [1, 3, 4, 11, 25, 27];
  var sglaz1 = 0;
  var sglaz2 = 0;


  answers.forEach(function(answer, index) {
    if (res1A.includes(index + 1) && answer === "0") {
      forc1 += 1;
    } else if (res1B.includes(index + 1) && answer === "1") {
      forc2 += 1;
    }
  });
  answers.forEach(function(answer, index) {
    if (res2A.includes(index + 1) && answer === "0") {
      probl1 += 1;
    } else if (res2B.includes(index + 1) && answer === "1") {
      probl2 += 1;
    }
  });
  answers.forEach(function(answer, index) {
    if (res3A.includes(index + 1) && answer === "0") {
      compr1 += 1;
    } else if (res3B.includes(index + 1) && answer === "1") {
      compr2 += 1;
    }
  });
  answers.forEach(function(answer, index) {
    if (res4A.includes(index + 1) && answer === "0") {
      izbeg1 += 1;
    } else if (res4B.includes(index + 1) && answer === "1") {
      izbeg2 += 1;
    }
  });
  answers.forEach(function(answer, index) {
    if (res5A.includes(index + 1) && answer === "0") {
      sglaz1 += 1;
    } else if (res5B.includes(index + 1) && answer === "1") {
      sglaz2 += 1;
    }
  });

  var forc = forc1 + forc2;
  var probl = probl1 + probl2;
  var compr = compr1 + compr2;
  var izbeg = izbeg1 + izbeg2;
  var sglaz = sglaz1 + sglaz2;






  result1Element.textContent = forc;
  result2Element.textContent = probl;
  result3Element.textContent = compr;
  result4Element.textContent = izbeg;
  result5Element.textContent = sglaz;



  var chart = document.getElementById("myChart").getContext("2d");
  chart.canvas.parentNode.style.height="600px"
  chart.canvas.parentNode.style.width="1000px"
  var data = {
    labels: ["Форсирование", "Решение проблем", "Компромисс", "Избегание", "Сглаживание"],
    datasets: [
      {
        type: "line",
        label: "Верхний предел",
        data: [7.5,9,8.5,7.5,6,12],
        
        borderColor: "rgba(0, 0, 0, 1)",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        borderWidth: 2,
        fill: false
      },
      {
        label: "Нижний предел",
        data: [3.5,5.5,4.5,4.5,3,0],
        borderColor: "rgba(0, 0, 0, 1)",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        borderWidth: 2,
        fill: false
      },
      {
        label: "Результат",
        data: [forc, probl, compr, izbeg, sglaz],
        backgroundColor: ["none"],
        borderColor: ["rgba(0, 146, 166, 1)", "rgba(0, 146, 166, 1)", "rgba(0, 146, 166, 1)", "rgba(0, 146, 166, 1)", "rgba(0, 146, 166, 1)", ],
        borderWidth: 3,
        fill: false
      }
      
    ]
  };
  
  var options = {
    maintainAspectRatio:false,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        suggestedMax: 20
      }
    }
  };
  
  new Chart(chart, {
    type: "line",
    data: data,
    options: options
  });
  }); 

  resultElement.parentNode.insertBefore(chartCanvas, resultElement);




