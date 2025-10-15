//try-catch
let myObject
try {
    console.log(myObject.name);
    console.log("Esto se ejecuta correctamente");
} catch (error) {
    console.log("Ha ocurrido un error");
    console.log(error.message);
} finally {
    console.log("Esto se ejecuta siempre");
}