
//Items
let item1 = {
    titulo: "Alimento para perros",
    cod: 1,
    precio: 2500,
    miniinfo: "Nutritivo alimento balanceado para perros de todas las edades (2kg).",
    encuotas: calcuotas(2500)
}

let item2 = {
    titulo: "Cama para mascotas",
    cod: 2,
    precio: 16500,
    miniinfo: "Cama de 56cm suave y cómoda para que tu mascota duerma plácidamente.",
    encuotas: calcuotas(16500)
}

let item3 ={
    titulo: "Columpio para pájaros",
    cod: 3,
    precio: 3500,
    miniinfo: "Colorido columpio con campanas para mantener entretenidas a las aves.",
    encuotas: calcuotas(3500)
}

let item4 = {
    titulo: "Collar canino (Star Wars)",
    cod: 4,
    precio: 2500,
    miniinfo: "Collar ajustable y resistente de Star Wars para tu perro (18-35cm).",
    encuotas: calcuotas(2500)
}

let item5 = {
    titulo: "Pecera de vidrio mediana",
    cod: 5,
    precio: 7800,
    miniinfo: "Un acuario de vidrio elegante, con capacidad para 5.6 lts (25x15x15 cm).",
    encuotas: calcuotas(7800)
}

let item6 = {
    titulo: "Kit para gatos",
    cod: 6,
    precio: 4000,
    miniinfo: "Kit sanitario para gatos: bandeja sanitaria con palita, comedero, cepillo y piedras sanitarias absorbentes de 2kg.",
    encuotas: calcuotas(4000)
}

let item7 = {
    titulo: "Comedero automático",
    cod: 7,
    precio: 27000,
    miniinfo: "Comedero Automático para perros pequeños y gatos. Excelente diseño y capacidad para 3.5lts",
    encuotas: calcuotas(27000)
}

let item8 = {
    titulo: "Cepillo de cardinas",
    cod: 8,
    precio: 7200,
    miniinfo: "Cepillo suave para mantener el pelaje de tu mascota impecable, con botón expulsor de pelo.",
    encuotas: calcuotas(7200)
}

let item9 = {
    titulo: "Kits juguetes de goma",
    cod: 9,
    precio: 4500,
    miniinfo: "Kit de tres juguetes resistentes y seguros, de caucho natural e ideal para mascotas grandes.",
    encuotas: calcuotas(4500)
}

let item10 = {
    titulo: "Mochila transportadora",
    cod: 10,
    precio: 126000,
    miniinfo: "Diseño ergonómico y con varios agujeros de ventilación, para mascotas de hasta 6kg (45x35x30cm)",
    encuotas: calcuotas(126000)
}

let item11 = {
    titulo: "Comida para peces",
    cod: 11,
    precio: 2600,
    miniinfo: "Alimento completo balanceado para Carassius y otros peces omnívoros.",
    encuotas: calcuotas(2600)
}

let item12 = {
    titulo: "Correa retractible",
    cod: 12,
    precio: 35000,
    miniinfo: "Mango ergonómico con soporte de agarre adicional para una sujeción cómoda y una cinta ancha.",
    encuotas: calcuotas(35000)
}

let item13 =  {
    titulo: "Jaula para hámsters",
    cod: 13,
    precio: 47500,
    miniinfo: "Jaula espaciosa con bebedero, comdero, casa, tubos y ruedita. (45x30x45cm)",
    encuotas: calcuotas(47500)
}

let item14  = {
    titulo: "Shampoo y acondiconador",
    cod: 14,
    precio: 3300,
    miniinfo: "Shampoo y acondicionador 2 en 1. Contiene Pro-Vitamina B que nutre y fortalece el pelo, dejandolo suave, brilloso y facil de cepillar (500ml)",
    encuotas: calcuotas(3300)
}

let item15 = {
    titulo: "Filtro de pecera",
    cod: 15,
    precio: 10500,
    miniinfo: "Filtro de alta eficiencia, silencioso y económico para peceras/acuarios pequeños (300lts/hr).",
    encuotas: calcuotas(10500)
}

let item16 = {
    titulo: "Comida para gatos",
    cod: 16,
    precio: 8900,
    miniinfo: "Alimento balanceado rico en proteína animal, vitaminas y hierro para gatos adultos (3kg).",
    encuotas: calcuotas(8900)
}

let item17 = {
    titulo: "Comedero doble",
    cod: 17,
    precio: 6000,
    miniinfo: "Comedero doble con platos de acero inoxidable desmontables y con gomas antideslizantes en su base (38.4x22x6cm).",
    encuotas: calcuotas(6000)
}

let item18 = {
    titulo: "Rascador para gatos",
    cod: 18,
    precio: 6500,
    miniinfo: "Su mascota podrá jugar con su pluma colgante mientras se frota contra el rascador (45cm alto, 75mm diámetro, base de 30x30cm)",
    encuotas: calcuotas(6500)
}

let item19 = {
    titulo: "Rata a cuerda",
    cod: 19,
    precio: 1500,
    miniinfo: "Ratón a fricción ideal para jugar con tu gato y no perder el humor (19cm).",
    encuotas: calcuotas(1500)
}

let item20 = {
    titulo: "Jaula para aves",
    cod: 20,
    precio: 14500,
    miniinfo: "Jaula en forma de arco compacta ideal para pajaros pequeños-medianos. Incluye dos comederos, recogerdos de suciedad, 2 perchas y comlumpio (28x35x49cm).",
    encuotas: calcuotas(14500)
}


function calcuotas(precio){
    return (precio * 1.5)
}

let inventario = [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12,
                 item13,item14, item15, item16, item17, item18, item19, item20]

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

// Lo de abajo

const api_url1 = `https://api.thecatapi.com/v1/images/search?category_ids=15`
const api_url2 = `https://api.thedogapi.com/v1/images/search`
const api_url3 = `https://api.thecatapi.com/v1/images/search?category_ids=15`
const api_url4 = `https://api.thedogapi.com/v1/images/search`

clientes = [api_url1, api_url2, api_url3, api_url4]

async function obtenerimg() {
    for (i of clientes) {
        const response = await fetch(i)
    
        const data=await response.json()
        let img = document.createElement("img")
        let imagen = data[0].url
    
        img.setAttribute("src", imagen)
    
        let divider = document.getElementById("mascotas")
        divider.appendChild(img)


    }
}

obtenerimg()



//----------------------------------------------------------------
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})