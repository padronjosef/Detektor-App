  //medidor distancias
$("#distancias").click(() => {
  let container = $('#actDistancias-todas')
  if($("#distancias").is(':checked')) {
    $('<label />', { text: 'Distancia recorrida'}).appendTo(container)
    $('<label />', { text: 'Horometro'}).appendTo(container)
    $('<label />', { text: 'Tiempo de actividad'}).appendTo(container)
  } else {  
    $("#actDistancias-todas").empty()
  }  
})

  //actividad del motor
$("#motor").click(() => {
  let container = $('#actMotor-todas')
  if($("#motor").is(':checked')) {
    $('<label />', { text: 'No. de veces encendido'}).appendTo(container)
    $('<label />', { text: 'No. de veces apagado'}).appendTo(container)
  } else {  
    $("#actMotor-todas").empty()
  }
})

  //actividad de puertas
$("#puertas").click(() => {
  let container = $('#actPuertas-todas')
  if($("#puertas").is(':checked')) {
    $('<label />', { text: 'Puerta cabina'}).appendTo(container)
    $('<label />', { text: 'Puerta de carga'}).appendTo(container)
  } else {  
    $("#actPuertas-todas").empty()
  }
})

  //medidor velocidad
$("#velocidades").click(() => {
  let container = $('#actVelocidades-todas')
  if($("#velocidades").is(':checked')) {
    $('<label />', { text: 'Velocidad promedio'}).appendTo(container)
    $('<label />', { text: 'Velocidad maxima'}).appendTo(container)
  } else {  
    $("#actVelocidades-todas").empty()
  }  
})

  //actividad sospechosas
$("#sospechosas").click(() => {
  let container = $('#actSospechosas-todas')
  if($("#sospechosas").is(':checked')) {
    $('<label />', { text: 'Panico'}).appendTo(container)
    $('<label />', { text: 'Movimiento ilegal'}).appendTo(container)
  } else {  
  $("#actSospechosas-todas").empty()
  }
})