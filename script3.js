function vercarrito() {
    document.getElementById("carrito").style.display = "block";
  }
  
  function cerrarcarrito() {
    document.getElementById("carrito").style.display = "none";
  }


let item1 = {
    titulo: "Python Fullstack",
    miniinfo: "Sincronico",
    etiquetas: ["HTML", "CSS", "JavaScript", "BDD"],
    precio: 46,
    cantidad: 1
}

let item2 = {
    titulo: "Python 2",
    miniinfo: "Sincronico2",
    etiquetas: ["HTML", "CSS", "JavaScript", "BDD"],
    precio: 45,
    cantidad: 2
}

// Carrito

let carrito = {
    items: [],
    total: 0
}

// Popup agregar al carrito
let popup = document.getElementById("popup")

function abririnfo() {
    popup.classList.add("open-popup")
}
function cerrarinfo() {
    popup.classList.remove("open-popup")
}

function vermas(id) {
    var name = id.titulo
    document.getElementById("titulo").innerHTML = name

    var desc = id.miniinfo
    document.getElementById("descripción").innerHTML = desc 

    var price = id.precio
    document.getElementById("precio").innerHTML = "Precio por unidad: $" + price 

}

function agregar(id){
    carrito.items.push(id);
    carrito.total = carrito.total + id.precio * id.cantidad;
    console.log(id.precio)
    var pagar = carrito.total
    document.getElementById("total").innerHTML = pagar 
}

function limpiarcarrito(){
    carrito.items = []
    carrito.total = 0
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
