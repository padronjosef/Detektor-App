  //actividad del motor checkboxes
$(document).ready(function(){  
  $("#motor").click(function() {
    var container = $('#actMotor-todas')
      if($("#motor").is(':checked')) {
        $('<label />', { 'for': 'motor1', text: 'No. de veces encendido'}).appendTo(container)
        $('<label />', { 'for': 'motor2', text: 'No. de veces apagado'}).appendTo(container)
      } else {  
        $("#actMotor-todas").empty()
      }  
  })
})
  //actividad de puertas checkboxes
$(document).ready(function(){  
  $("#puertas").click(function() {
    var container = $('#actPuertas-todas')
      if($("#puertas").is(':checked')) {
        $('<label />', { 'for': 'puertas1', text: 'Puerta cabina'}).appendTo(container)
        $('<label />', { 'for': 'puertas2', text: 'Puerta de carga'}).appendTo(container)
      } else {  
        $("#actPuertas-todas").empty()
      }  
  })
})
  //medidor velocidad checkboxes
$(document).ready(function(){  
  $("#velocidades").click(function() {
    var container = $('#actVelocidades-todas')
      if($("#velocidades").is(':checked')) {
        $('<label />', { 'for': 'velocidad1', text: 'Velocidad promedio'}).appendTo(container)
        $('<label />', { 'for': 'velocidad2', text: 'Velocidad Maxima'}).appendTo(container)
      } else {  
        $("#actVelocidades-todas").empty()
      }  
  })
})
  //medidor distancias checkboxes
$(document).ready(function(){  
  $("#distancias").click(function() {
    var container = $('#actDistancias-todas')
      if($("#distancias").is(':checked')) {
        $('<label />', { 'for': 'distancias1', text: 'Distancia recorrida'}).appendTo(container)
        $('<label />', { 'for': 'distancias2', text: 'Horometro'}).appendTo(container)
      } else {  
        $("#actDistancias-todas").empty()
      }  
  })
})
  //actividad sospechosas checkboxes
$(document).ready(function(){  
  $("#sospechosas").click(function() {
    var container = $('#actSospechosas-todas')
      if($("#sospechosas").is(':checked')) {
        $('<label />', { 'for': 'sospechosas1', text: 'Panico'}).appendTo(container)
        $('<label />', { 'for': 'sospechosas2', text: 'Movimiento Ilegal'}).appendTo(container)
      } else {  
        $("#actSospechosas-todas").empty()
      }  
  });  
})

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
    }]
  }
}

$("#motor").click(function() {
    if($("#motor").is(':checked')) {
      $('<canvas  id="gMotorhtml" style="position: relative; height:25vh; width:90vw"></canvas>').appendTo($('#gMotorhtml-container'))
      var gMotor = document.getElementById('gMotorhtml').getContext('2d');
      var chart = new Chart(gMotor, {
        type: type,
        options: options,
        data: {
          labels: ['No. de veces Encendidos', 'No. de veces apagados'],
          color: "white",
          datasets: [{
            backgroundColor: ["#D30B19", "#6C0214"],
            label: 'Actividad de motor',
            data: [3, 4]
          }]
        },
      })
    }else{
      $("#gMotorhtml-container").empty()
    }
})

$("#puertas").click(function() {
  if($("#puertas").is(':checked')) {
    $('<canvas  id="gPuertashtml" style="position: relative; height:25vh; width:90vw"></canvas>').appendTo($('#gPuertashtml-container'))
    var gPuertas = document.getElementById('gPuertashtml').getContext('2d');
    var chart = new Chart(gPuertas, {
      type: type,
      options: options,
      data: {
        labels: ['Pta cabina', 'Pta de carga'],
        datasets: [{
          backgroundColor: ["#D30B19", "#6C0214"],
          label: 'Actividad de puerta',
          data: [8, 3]
        }]
      },
    })
  }else{
    $("#gPuertashtml-container").empty()
  }
})

$("#velocidades").click(function() {
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
            display: true,
            ticks: {
              min: 0,
              max: 140
            }
          }]
        }
      },
      data: {
        labels: ['V. Promedio', 'V. Maxima'],
        datasets: [{
          backgroundColor: ["#D30B19", "#6C0214"],
          label: 'Medidor de velocidades',
          data: [70, 120]
        }]
      },
    })
  }else{
    $("#gVelocidadesshtml-container").empty()
  }
})

$("#distancias").click(function() {
  if($("#distancias").is(':checked')) {
    $('<canvas  id="gDistanciashtml" style="position: relative; height:45vh; width:90vw"></canvas>').appendTo($('#gDistanciashtml-container'))
    var gDistancias = document.getElementById('gDistanciashtml').getContext('2d');
    var chart = new Chart(gDistancias, {
      type: 'bar',
      options: options,
      data: {
        labels: ['Distancia recorrida', 'Horometro', 'Tiempo de actividad'],
        datasets: [{
          backgroundColor: ["#D30B19", "#6C0214","#D30B19"],
          label: 'Medidor de distancias',
          data: [7, 23, 32]
        }]
      },
    })
  }else{
    $("#gDistanciashtml-container").empty()
  }
})

$("#sospechosas").click(function() {
  if($("#sospechosas").is(':checked')) {
    $('<canvas  id="gsospechosashtml" style="position: relative; height:25vh; width:90vw"></canvas>').appendTo($('#gsospechosashtml-container'))
    var gSospechosas = document.getElementById('gsospechosashtml').getContext('2d');
    var chart = new Chart(gSospechosas, {
      type: type,
      options: options,
      data: {
        labels: ['Panico', 'Movimiento ilegal'],
        datasets: [{
          backgroundColor: ["#D30B19", "#6C0214"],
          label: 'Actividad sospechosas',
          data: [1, 3]
        }]
      },
    })
  }else{
    $("#gsospechosashtml-container").empty()
  }
})