/*
Clase 71 - DOM
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=23010
*/

// 1. Crea un elemento (por ejemplo, un <h1 id="title">) y cambia su contenido a "¡Hola Mundo!"" al cargar la página

const newTitulo = document.getElementById("title")

newTitulo.textContent = "Hola mundo"



// 2. Inserta una imagen con id="myImage" y cambia su atributo src a otra URL

const newImagen = document.getElementById("myImage")
newImagen.setAttribute("src","logo-torneo.png")

// 3. Crea un <div id="box"> sin clases y agrega la clase resaltado cuando se cargue la página

const newClassBox = document.getElementById("box")
newClassBox.setAttribute("class","resaltado")

// 4. Crea un párrafo con id="paragraph" y cambia su color de texto a azul

const myParagraph = document.getElementById("paragraph")
myParagraph.style.color = "blue"


// 5. Agrega un botón que, al hacer clic, cree un nuevo elemento <li> con el texto "Nuevo elemento y lo agregue a una lista <ul id="list">
const myTextInput = document.getElementById("text")
const myButton = document.querySelector("button")
const myList = document.getElementById("list")


function agregarItem() {
    if (myTextInput.value === "") return

    const newElement = document.createElement("li")
    newElement.textContent = myTextInput.value

    newElement.addEventListener("click",()=>{newElement.remove()})
    myList.appendChild(newElement)

    myTextInput.value = ""
}

myButton.addEventListener("click",agregarItem)

// 6. Crea un párrafo con id="deleteParagraph" y un botón. Al hacer clic en el botón, elimina el párrafo del DOM
const secondParagraph = document.getElementById("deleteParagraph")
const secondButton = document.getElementById("delete-button")

function buttonDelete() {
    if (secondParagraph){
        secondParagraph.remove()
    }
}

secondButton.addEventListener("click",buttonDelete)
// 7. Crea un <div id="content"> con algún texto y reemplaza su contenido por un <h2> con el mensaje "Nuevo Contenido"

const myDiv = document.getElementById("content")

if (myDiv) {
    const newHeader = document.createElement("h2")
    newHeader.textContent = "Nuevo Contenido"

    myDiv.innerHTML = ""
    myDiv.appendChild(newHeader)
}


// 8. Crea un botón con id="greetBtn" y añade un evento que muestre una alerta con el mensaje "¡Hola!" al hacer clic
const greetButton = document.querySelector("#greet-BTN")

greetButton.addEventListener("click",()=>{alert("¡Hola!")})
// 9. Crea un <input id="textInput"> y un <div id="result">. Al escribir en el input, el <div> se debe actualizarse mostrando lo que se escribe

// 10. Crea un botón con id="backgroundBtn" y, al hacer clic, cambia el color de fondo del <body> a un color diferente