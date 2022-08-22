const form = document.getElementById('formulario');

form.addEventListener('submit', async(event) => {
    event.preventDefault();
    let mensaje = {
        comercio: event.target.comercio.value,
        titular: event.target.titular.value,
        celular: event.target.celular.value,
    }
    console.log(mensaje);

    await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            body: JSON.stringify(mensaje),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(response => response.json())
        .then(res => {
            console.log(res);
            alertify.alert('Su registro fue un exito!', `Pronto lo contactaremos Sr./Sra.: ${res.titular}, su numero de solicitud es: ${res.id}`, function() { alertify.success('Exito'); });
        })
        .catch(error => console.log(error));

    form.reset();
});