//OBJETOS
const mascota={
    animal:"perro",
    raza:"pug",
    color:"crema",
    edad:"2 años",
    sexo:"hembra"

}
const universidad={
    nombre:"UNS",
    carreras:20,
    años:30,
    ubicacion: "Chimbote",

}
console.log("mascota",mascota.color);
console.log("universidad",universidad.años);

const usuario={
    nickname:"sabrosito",
    email:"eduarrlop96@gmail.com",
    password:"*******",
    carnetVacunacion: true,
    location: "italia",
    level: "Pro",
    edad: "18",
};
const evaluar=(usuarioObjeto)=>{
    const {location,nickname}=usuarioObjeto;
    if(location==="italia"){
        return nickname+" usted no es de peru";
    }
};
console.log(evaluar(usuario));



