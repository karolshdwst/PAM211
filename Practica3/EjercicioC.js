function simularPeticionAPI() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Datos recibidos correctamente de la API");
        }, 3000);
    });
}
async function obtenerDatos() {
    //usa await para esperar la promesa de simularPeticionAPI
    await simularPeticionAPI();
    //Imprime el resultado
    console.log("Datos recibidos correctamente de la API");
}
obtenerDatos();z