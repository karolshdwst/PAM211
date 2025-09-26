function verificaUsuario(usuario) {
    //retorna una promesa aquí
    return new Promise((resolve, reject) => {
        if (usuario === "admin") {
            resolve("Acceso concedido")
        } else {
            reject("Acceso denegado")
        }
    })
}
//usa .then() y catch() para manejar el resultado
verificaUsuario("admin")
    .then(res => console.log(res))//Acceso concedido
    .catch(err => console.error(err))

verificaUsuario("Iván")
    .then(res => console.log(res))
    .catch(err => console.error(err))//Acceso denegado