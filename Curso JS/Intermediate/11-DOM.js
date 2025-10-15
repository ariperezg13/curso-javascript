// DOM (Document Object Mode)

// - Selección de elementos

// Métodos básicos

// Con getElementsById permite recuperar un único elemento que tenga ese identificador
const myElementById = document.getElementById("id")


// Con getElementsByClassName permite recuperar todos los elementos de la misma clase
const myElementsByClass = document.getElementsByClassName("class")


// con getElementsByTagName te permite recuperar todos los elementos de la misma etiqueta
const myElementsByTag = document.getElementsByTagName("tag")


// Métodos más modernos

// Con querySelector me permite hacer una consulta por ejemplo de un parrafo recuperar la primera frase de ese mismo. Con el "." es la selección
document.querySelector(".paragraph")

// Con query selector all me devuelve una lista de nodos
document.querySelectorAll(".paragraph")

// - Manipulación de elementos 

const title = document.getElementById("title")

//Ahora podria modificarlo
title.textContent = "Hola JS"

const container = document.querySelector(".container")

//Podria acabar cambiando el enorno interno. Ejemplo cambiar un boton por un parrafo

// Con innerHTML
container.innerHTML = "<p>Esto es un nuevo párrafo</p>"


// - Modificación de atributos

// De esta manera me meto en el primer "a" del html
const link = document.querySelector("a")

//con .getAttribute veo el valor del atributo
const url = link.getAttribute("href")

// Con setAttribute puedo establecerle otro
link.setAttribute("href","https://example.com")

// Comprobación de atributo

// Por ejemplo dentro del <a> puede que haya un target que sería si al clickear se mantiene en esa misma página o abre otra pestaña
const hasTarget = link.hasAttribute("target")

//Eliminación de atributos
link.removeAttribute("target")


// - Interacción con clases CSS

const box = document.querySelector(".box")

// Interactuar con los elementos de la misma clase
//Por ej agregarle que cuando esta selected haga algo
box.classList.add("selected")

box.classList.remove("selected")

// El toggle hace que si no existe la añade y si existe la elimina
box.classList.toggle("selected")


const button = document.querySelector("button")
// Con el style puedo entrar a cambiar lo que quiero de eso
button.style.backgroundColor = "blue"


// - Cración y eliminación de elementos

// - Creación 

const newParagraph = document.createElement("p")

newParagraph.textContent = "Este es un nuevo párrafo crado desde JS"

newParagraph.style.padding = "8px"

//Con appendChild puedo entrar en un container y agregarle este elemento
container.appendChild(newParagraph)

const itemsList = document.querySelector("ul")

const newItem = document.createElement("li")
newItem.textContent = "Nuevo item"

// Inserción en un lugar concreto

const secondItem = itemsList.children[1]
itemsList.insertBefore(newItem,secondItem)

//Con append me lo agrega al final
itemsList.append(newItem)
//Con prepend al principio
itemsList.prepend(newItem)

// Metodo mas moderno de insercion 
secondItem.before(newItem)
secondItem.after(newItem)


// Eliminación

newParagraph.remove()

// Elementos del DOM

//Que hace cuando a un botón le haces click

function showMsg() {
    alert("click!")
}

const sendButton = document.querySelector("#send")

sendButton.addEventListener("click",showMsg)


//con arrow function
sendButton.addEventListener("click", () =>{alert("click!")})

// Eventos comunes

document.addEventListener("DOMContentLoaded",() => {
    console.log("El DOM está completamente cargado")
})

sendButton.addEventListener("mouseenter",() =>{
    sendButton.style.backgroundColor = "green"
})

sendButton.addEventListener("mouseleave",() =>{
    sendButton.style.backgroundColor = "blue"
})


const form = document.querySelector("form")
form.addEventListener("submit",(event) => {
    //Código
})