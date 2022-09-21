
// slecciona el boton y muestra la lista
$("#boton").click(() => {
    let lista = document.querySelector("#lista")
    lista.innerHTML=" "

    $.get("http://localhost:5000/amigos", (data) => {
        for (let i = 0; i < data.length; i++) {
            let li = document.createElement("li")
            li.textContent = `Nombre: ${data[i].name}, Edad: ${data[i].age}`
            lista.appendChild(li)
            
        }
    })
})

// input que recibe id y se lo pide al servidor 
$("#search").click(() => {
     let input = document.querySelector("#input")

     $.get(`http://localhost:5000/amigos/${input.value}`, (data) => {
    let span = document.querySelector("#amigo")
     span.textContent = data.name
     input.value = ""
    })
})

// input que recibe id y lo borra al servidor 
$("#delete").click(() => {
    let inputDelete = document.querySelector("#inputDelete")

$.ajax({
    url: `http://localhost:5000/amigos/${inputDelete.value}`,
    type: 'DELETE',
    success: function (result) {
    $("#success").text("mueltit@")
    inputDelete.value = ""
    }
});

})