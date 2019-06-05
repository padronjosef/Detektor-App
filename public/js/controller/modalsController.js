$(() => {
  $('.tooltipped').tooltip({ delay: 50 })
  $('.modal').modal()

  $(document).ready(function(){
    $('#modalSesion').modal('open'); 
  })

  $("#btnInicioSesion").click(() => {
    $('#modalSesion').modal('open')
  })

  $("#btnGenerarInforme").click(() => {
    $('#modalActividades').modal('close')
  })

  $('#btnSiguiente').click(() => {
    $('#modalSesion').modal('close')
    $('#modalActividades').modal('open')
  })

  $('#btnAtras').click(() => {
    $('#modalActividades').modal('close')
    $('#modalSesion').modal('open')
  })
});