


let item1 = {
    titulo: "Python Fullstack",
    cod: 1,
    miniinfo: "Sincronico",
    etiquetas: ["HTML", "CSS", "JavaScript", "BDD"],
    precio: 20,
    cantidad: 1
}

let item2 = {
    titulo: "Python 2",
    cod: 2,
    miniinfo: "Sincronico2",
    etiquetas: ["HTML", "CSS", "JavaScript", "BDD"],
    precio: 11,
    cantidad: 1
}

// Carrito

let carrito = {
    items: [],
    total: 0
}

// Popup agregar al carrito
let popup = document.getElementById("popup1")
let popup2 = document.getElementById("popup2")

let tabla = document.getElementById("Tbcarrito")

function abririnfo(id) {
    id.classList.add("open-popup")
}
function cerrarinfo(id) {
    id.classList.remove("open-popup")
}

function vermas(id) {
    var name = id.titulo
    document.getElementById("titulo" + id.cod).innerHTML = name

    var desc = id.miniinfo
    document.getElementById("descripción" + id.cod).innerHTML = desc 

    var price = id.precio
    document.getElementById("precio" + id.cod).innerHTML = "Precio por unidad: $" + price 

}

function agregar(id){
    carrito.items.push(id);
    console.log(carrito.items.length)
    carrito.total = carrito.total + id.precio * id.cantidad;
    var pagar = carrito.total
    document.getElementById("total").innerHTML = pagar 

    itemscarrito()
}

function limpiarcarrito(){
    limpiartabla()
    carrito.items = [];
    carrito.total = 0;
    document.getElementById("total").innerHTML = 0 
}

function vercarrito() {
    document.getElementById("carrito").style.display = "block";

    var pagar = carrito.total
    document.getElementById("total").innerHTML = pagar 
  }
  
  function cerrarcarrito() {
    document.getElementById("carrito").style.display = "none";
  }

  function itemscarrito() {
    if (carrito.items.length == 0) {
        var row = tabla.insertRow(-1);
    
        var nombre = row.insertCell(0);
        nombre.innerHTML = "Tu carrito esta vacio";
    } else if (carrito.items.length > 0){
        limpiartabla()
        for (var i = 0; i <= carrito.items.length; i++) {
            var row = tabla.insertRow(-1)
        
            var nombre = row.insertCell(0);
            var precio = row.insertCell(1);
            var cantidad = row.insertCell(1);
            nombre.innerHTML = carrito.items[i].titulo;
            cantidad.innerHTML = carrito.items[i].cantidad;
            precio.innerHTML = carrito.items[i].precio * carrito.items[i].cantidad;
        }
    }
    }

    function limpiartabla() {
        var rows = tabla.rows;
        var i = rows.length;
        while (--i){
        tabla.deleteRow(i);
        }
      }