const personas = [
    { nombre: "Ana", edad: 22},
    {nombre: "Luis", edad: 35},
    {nombre: "María", edad: 28},
];

const buscarLuis = personas.find(persona => persona.nombre === "Luis");
console.log(buscarLuis);

personas.forEach(element => {
    console.log(element.nombre + " " + element.edad);
});

const totalEdades = personas.reduce((acumulador, persona) => acumulador + persona.edad, 0);
console.log("La suma de todas las edades es: " + totalEdades);