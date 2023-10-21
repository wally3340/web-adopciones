

let item1 = {
    titulo: "Python Fullstack",
    cod: 1,
    miniinfo: "Sincronico",
    etiquetas: ["HTML", "CSS", "JavaScript", "BDD"],
    precio: 2000,
    encuotas: 2000 * 1.5
}

let item2 = {
    titulo: "Python 2",
    cod: 2,
    miniinfo: "Sincronico2",
    etiquetas: ["HTML", "CSS", "JavaScript", "BDD"],
    precio: 11,
    encuotas: 11 * 1.5
}

let inventario = [item1, item2]


window.onload = defitems()

function defitems() {
    for (var i = 1; i <= inventario.length; i++){
        var x = i-1
        var item = inventario[x]

        var name = item.titulo
        document.getElementById("nombre" + i).innerHTML = name

        var precio = item.precio
        document.getElementById("precios" + i).innerHTML = "$" + precio

        var cuotas = item.encuotas /12
        document.getElementById("cuotas" + i).innerHTML = "en 12x $" + cuotas


}}

// Carrito

let carrito = {
    items: [],
    cantidades: [],
    precio: [],
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
    var cant = document.getElementById("cantidad" + id.cod).value
    var cant = parseInt(cant) 
    if (cant <= 0 || cant % 1 != 0) {
        alert("Por favor, ingrese un valor entero y mayor que 0")
    } else {
        for (i of carrito.items) { 
            if (i == id.titulo) {
                x = carrito.items.indexOf(i)
                cantviejas = carrito.cantidades[x]
                carrito.cantidades[x] = carrito.cantidades[x] + cant
                carrito.total = carrito.total + id.precio * (carrito.cantidades[x] - cantviejas)
                var pagar = carrito.total
                document.getElementById("total").innerHTML = pagar
                itemscarrito()
                return
            }
        }

    carrito.items.push(id.titulo);
    carrito.cantidades.push(cant)
    carrito.precio.push(id.precio)
    carrito.total = carrito.total + id.precio * carrito.cantidades[carrito.cantidades.length -1];
    var pagar = carrito.total
    document.getElementById("total").innerHTML = pagar 

    itemscarrito()
    
    }
}

function limpiarcarrito(){
    limpiartabla()
    var row = tabla.insertRow(-1);
    var nombre = row.insertCell(0);
    nombre.innerHTML = "Tu carrito esta vacio"
    carrito.items = [];
    carrito.total = 0;
    carrito.cantidades = [];
    carrito.precio = []
    document.getElementById("total").innerHTML = 0 
}

function vercarrito() {
    document.getElementById("carrito").style.display = "block";

    var pagar = carrito.total
    document.getElementById("total").innerHTML = pagar 
    itemscarrito()
  }
  
function cerrarcarrito() {
    document.getElementById("carrito").style.display = "none";
}

function itemscarrito() {
   // if (carrito.items.length == 0) {
    //   var row = tabla.insertRow(1);
    //
    //    var nombre = row.insertCell(0);
    //    nombre.innerHTML = "Tu carrito esta vacio";
    if (carrito.items.length > 0){
        limpiartabla()
        for (var i = 1; i <= carrito.items.length; i++) { 
            var x = i-1
            var row = tabla.insertRow(-1)
        
            var nombre = row.insertCell(0);
            var precio = row.insertCell(1);
            var cantidad = row.insertCell(1);
            nombre.innerHTML = carrito.items[x];
            cantidad.innerHTML = carrito.cantidades[x];
            precio.innerHTML = carrito.precio[x] * carrito.cantidades[x];
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

