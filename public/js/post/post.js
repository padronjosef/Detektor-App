class Post {
  constructor() {
    this.db = firebase.firestore()
    const settings = { timestampsInSnapshots: true }
    this.db.settings(settings)
  }

  crearPost(uid, emailUser, titulo, descripcion, imagenLink, videoLink) {
    return this.db.collection('posts').add({
      uid: uid,
      autor: emailUser,
      titulo: titulo,
      descripcion: descripcion,
      imagenLink: imagenLink,
      videoLink: videoLink,
      fecha: firebase.firestore.FieldValue.serverTimestamp()
    })
      .then(refDoc => {
        console.log(`Id del post => ${refDoc.id}`)
      })
      .catch(error => {
        console.log(`error creando el post => ${error}`)
      })
  }

  consultarTodosPost() {
    this.db
      .collection('actividades')
      .orderBy('titulo', 'asc')
      .onSnapshot(querySnapshot => {
        $('#posts').empty()
          querySnapshot.forEach(actividades => {
            let postHtml = this.obtenerPostTemplate(
              actividades.data().titulo,
              actividades.data().actividad1,
              actividades.data().actividad2,
              actividades.data().valor1,
              actividades.data().valor2,
            )
            $('#posts').append(postHtml)
          })
      })
  }

  obtenerPostTemplate(
    titulo,
    actividad1,
    actividad2,
    valor1,
    valor2
  ) {
    var gMotorhtml = document.getElementById('prueba').getContext('2d');
    var chart = new Chart(gMotorhtml, {
      type: 'pie',
      options: options,
      data: {
        labels: [actividad1, actividad2],
        datasets: [{
          backgroundColor: ["#D30B19", "#6C0214"],
          label: titulo,
          data: [valor1, valor2]
        }]
      }
    })
  }
}

