  //actividad del motor checkboxes
$(document).ready(function(){  
  $("#motor").click(function() {
    var container = $('#actMotor-todas');
      if($("#motor").is(':checked')) {   
          $('<input />', { type: 'checkbox', id: 'motor1', value: 'motor1' }).appendTo(container);
          $('<label />', { 'for': 'motor1', text: 'Encendidos'}).appendTo(container);
          $('<input />', { type: 'checkbox', id: 'motor2', value: 'motor2' }).appendTo(container);
          $('<label />', { 'for': 'motor2', text: 'Apagados'}).appendTo(container);
      } else {  
          $("#actMotor-todas").empty();
      }  
  });  
});

  //actividad de puertas checkboxes
$(document).ready(function(){  
  $("#puertas").click(function() {
    var container = $('#actPuertas-todas');
      if($("#puertas").is(':checked')) {   
          $('<input />', { type: 'checkbox', id: 'puertas1', value: 'puertas1' }).appendTo(container);
          $('<label />', { 'for': 'puertas1', text: 'Pta cabina'}).appendTo(container);
          $('<input />', { type: 'checkbox', id: 'puertas2', value: 'puertas2' }).appendTo(container);
          $('<label />', { 'for': 'puertas2', text: 'Pta de carga'}).appendTo(container);
      } else {  
          $("#actPuertas-todas").empty();
      }  
  });  
});

  //medidor velocidad checkboxes
$(document).ready(function(){  
  $("#velocidades").click(function() {
    var container = $('#actVelocidades-todas');
      if($("#velocidades").is(':checked')) {   
          $('<input />', { type: 'checkbox', id: 'velocidad1', value: 'velocidad1' }).appendTo(container);
          $('<label />', { 'for': 'velocidad1', text: 'V. promedio'}).appendTo(container);
          $('<input />', { type: 'checkbox', id: 'velocidad2', value: 'velocidad2' }).appendTo(container);
          $('<label />', { 'for': 'velocidad2', text: 'V. Maxima'}).appendTo(container);
      } else {  
          $("#actVelocidades-todas").empty();
      }  
  });  
});

  //medidor distancias checkboxes
$(document).ready(function(){  
  $("#distancias").click(function() {
    var container = $('#actDistancias-todas');
      if($("#distancias").is(':checked')) {   
          $('<input />', { type: 'checkbox', id: 'distancias1', value: 'distancias1' }).appendTo(container);
          $('<label />', { 'for': 'distancias1', text: 'Distancia recorrida'}).appendTo(container);
          $('<input />', { type: 'checkbox', id: 'distancias2', value: 'distancias2' }).appendTo(container);
          $('<label />', { 'for': 'distancias2', text: 'Horometro'}).appendTo(container);
      } else {  
          $("#actDistancias-todas").empty();
      }  
  });  
});

  //actividad sospechosas checkboxes
$(document).ready(function(){  
  $("#sospechosas").click(function() {
    var container = $('#actSospechosas-todas');
      if($("#sospechosas").is(':checked')) {   
          $('<input />', { type: 'checkbox', id: 'sospechosas1', value: 'sospechosas1' }).appendTo(container);
          $('<label />', { 'for': 'sospechosas1', text: 'Panico'}).appendTo(container);
          $('<input />', { type: 'checkbox', id: 'sospechosas2', value: 'sospechosas2' }).appendTo(container);
          $('<label />', { 'for': 'sospechosas2', text: 'Movimiento Ilegal'}).appendTo(container);
      } else {  
          $("#actSospechosas-todas").empty();
      }  
  });  
});