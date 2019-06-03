$(() => {    

  const objAuth = new Autenticacion()

  $("#btnRegistroEmail").click(() => {
    // const nombres = $('#nombreContactoReg').val()
    // const email = $('#emailContactoReg').val()
    // const password = $('#passwordReg').val()
    // const auth = new Autenticacion()
    // auth.crearCuentaEmailPass(email, password, nombres)
    $('#modalRegistro').modal('close')
  })

  $('#btnRegistrarse').click(() => {
    $('#modalSesion').modal('close')
    $('#modalRegistro').modal('open')
  })

  $('#btnIniciarSesion').click(() => {
    $('#modalRegistro').modal('close')
    $('#modalSesion').modal('open')
  })

  $("#authGoogle").click(() => objAuth.authCuentaGoogle())
  $("#authFB").click(() =>objAuth.authCuentaFacebook())
  $("#authTwitter").click(() =>objAuth.authCuentaTwitter())
});