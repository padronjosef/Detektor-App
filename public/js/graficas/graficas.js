const type = 'horizontalBar'
const options = {
  legend: {
    labels: {
      fontColor: "white"
    }
  },
  scales: {
    xAxes: [{
      display: true,
      ticks: {
        min: 0,
        max: 10
      }
    }],
    yAxes: [{
      display: true,
      ticks: {
        min: 0,
        max: 30
      }
    }]
  }
}

const dataDistancias = [7, 23 , 4]
const dataVelocidades = [70, 120]

const dataMotor = [3, 4]
const dataPuertas = [8, 3]
const dataSospechosas = [1, 3]
var dataTorta = dataMotor.concat(dataPuertas,dataSospechosas);

var labelsMotor = ['No. de veces Encendidos', 'No. de veces apagados']
var labelspuertas = ['Puerta cabina', 'Puerta de carga']
var labelsSospechosas = ['Panico', 'Movimiento ilegal']
var labelsTorta = labelsMotor.concat(labelspuertas,labelsSospechosas);


console.log(dataTorta)

$("#btnGenerarInforme").click(function() {
  $("#gTortahtml-container").empty()
  $('<canvas  id="gTortahtml" style="position: relative"></canvas>').appendTo($('#gTortahtml-container'))
  var gTorta = document.getElementById('gTortahtml').getContext('2d');
  var chart = new Chart(gTorta, {
    type: 'doughnut',
    options: {
      title: {
        display: true,
        position: "top",
        text: 'Todos los registros',
        fontSize: 20,
        fontColor: 'white'
      },
      legend: {
        display: true,
        position: "right",
      }
    },
    data: {
      labels: labelsTorta,
      datasets: [{
        backgroundColor: ["#452103", "#210F04", "#7A9B76", "#4E6E58", "#FFA630", "#ECA400"],
        data: dataTorta
      }]
    },
  })
})

$("#btnGenerarInforme").click(function() {
  $("#gDistanciashtml-container").empty()
  if($("#distancias").is(':checked')) {
    $('<canvas  id="gDistanciashtml" style="position: relative; height:45vh; width:90vw"></canvas>').appendTo($('#gDistanciashtml-container'))
    var gDistancias = document.getElementById('gDistanciashtml').getContext('2d');
    var chart = new Chart(gDistancias, {
      type: 'bar',
      options: options,
      data: {
        labels: ['Distancia recorrida (km)', 'Horometro', 'Tiempo de actividad (Horas)'],
        datasets: [{
          backgroundColor: ["#D30B19", "#6C0214","#D30B19"],
          label: 'Medidor de distancias',
          data: dataDistancias
        }]
      },
    })
  }else{
    $("#gDistanciashtml-container").empty()
  }
})

$("#btnGenerarInforme").click(function() {
  $("#gMotorhtml-container").empty()
  if($("#motor").is(':checked')) {
    $('<canvas  id="gMotorhtml" style="position: relative; height:25vh; width:90vw"></canvas>').appendTo($('#gMotorhtml-container'))
    var gMotor = document.getElementById('gMotorhtml').getContext('2d');
    var chart = new Chart(gMotor, {
      type: type,
      options: options,
      data: {
        labels: labelsMotor,
        color: "white",
        datasets: [{
          backgroundColor: ["#452103", "#210F04"],
          label: 'Actividad de motor',
          data: dataMotor
        }]
      },
    })
  }else{
    $("#gMotorhtml-container").empty()
  }
})

$("#btnGenerarInforme").click(function() {
  $("#gPuertashtml-container").empty()
  if($("#puertas").is(':checked')) {
    $('<canvas  id="gPuertashtml" style="position: relative; height:25vh; width:90vw"></canvas>').appendTo($('#gPuertashtml-container'))
    var gPuertas = document.getElementById('gPuertashtml').getContext('2d');
    var chart = new Chart(gPuertas, {
      type: type,
      options: options,
      data: {
        labels: labelspuertas,
        datasets: [{
          backgroundColor: ["#7A9B76", "#4E6E58"],
          label: 'Actividad de puerta',
          data: dataPuertas
        }]
      },
    })
  }else{
    $("#gPuertashtml-container").empty()
  }
})

$("#btnGenerarInforme").click(function() {
  $("#gVelocidadesshtml-container").empty()
  if($("#velocidades").is(':checked')) {
    $('<canvas  id="gVelocidadesshtml" style="position: relative; height:25vh; width:90vw"></canvas>').appendTo($('#gVelocidadesshtml-container'))
    var gVelocidades = document.getElementById('gVelocidadesshtml').getContext('2d');
    var chart = new Chart(gVelocidades, {
      type: type,
      options: {
        legend: {
          labels: {
            fontColor: "white"
          }
        },
        scales: {
          xAxes: [{
            display: false,
            ticks: {
              min: 0,
              max: 140
            }
          }]
        }
      },
      data: {
        labels: ['V. Promedio Km/h', 'V. Maxima Km/h'],
        datasets: [{
          backgroundColor: ["#1871A1", "#005887"],
          label: 'Medidor de velocidades',
          data: dataVelocidades
        }]
      },
    })
  }else{
    $("#gVelocidadesshtml-container").empty()
  }
})

$("#btnGenerarInforme").click(function() {
  $("#gsospechosashtml-container").empty()
  if($("#sospechosas").is(':checked')) {
    $('<canvas  id="gsospechosashtml" style="position: relative; height:25vh; width:90vw"></canvas>').appendTo($('#gsospechosashtml-container'))
    var gSospechosas = document.getElementById('gsospechosashtml').getContext('2d');
    var chart = new Chart(gSospechosas, {
      type: type,
      options: options,
      data: {
        labels: labelsSospechosas,
        datasets: [{
          backgroundColor: ["#FFA630", "#ECA400"],
          label: 'Actividad sospechosas',
          data: [1, 3]
        }]
      },
    })
  }else{
    $("#gsospechosashtml-container").empty()
  }
})