
document.querySelector('.btn-danger').addEventListener(('click'), () => {
    const contenedor = document.getElementById('contenedor')
    const descripcion = document.querySelector('.descripcion')

    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
        // console.log(data.results['0'])
        // console.log(data.results['0'].email)
        // contenedor.innerHTML = `${data}`

        contenedor.innerHTML = `<img src="${data.results['0'].picture.large}" width ="100px" alt="" class="img-fluid rounded-circle mb-3">`

        descripcion.innerHTML = `<p>Nombre: ${data.results['0'].name.first}</p>
        <p>Celular: ${data.results['0'].cell}</p>
        <p> Correo: ${data.results['0'].email}</p>`
    })

})
