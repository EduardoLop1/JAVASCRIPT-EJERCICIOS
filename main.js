function CallMenu() {
    let nro_ejercicio = parseInt(
        prompt("ingrese el numero de ejercicio que quiere ejecutar: \r\n 1.suma. \r\n 2.Promedio de Examanes \r\n 3. Calcular el area del rectangulo \r\n 4.Calcular el area del triangulo \r\n 5.calcular el area del Circulo \r\n 6. Calcular salario semanal \r\n 7. convertir pulgadas \r\n 8. cambiar a dolares \r\n 9.Edad del empleado \r\n 10. Persona con menor edad \r\n 11. Bono por antiguedad \r\n 12. Incremento de salario \r\n 13. Aprobados y Desaprobados\r\n 14. Cantidad de Focos\r\n 15. Votaciones"));
    if (isNaN(nro_ejercicio)) {
        alert("porfavor ingresa valores numericos");
    } else {
        MenuEjercicios(nro_ejercicio);
    }
}

function MenuEjercicios(nro_ejercicio) {
    switch (nro_ejercicio) {
        case 1:
            let valor1 = parseFloat(prompt("Ingrese el valor 1 a sumar: "));
            let valor2 = parseFloat(prompt("Ingrese el valor 1 a sumar: "));
            alert(ej1_sumarValores(valor1, valor2));
            break;
        case 2:
            let ex1 = parseFloat(prompt("ingrese la primera nota: "));
            let ex2 = parseFloat(prompt("ingrese la segunda nota: "));
            let ex3 = parseFloat(prompt("ingrese la tercera nota: "));
            let ex4 = parseFloat(prompt("ingrese la cuarta nota: "));
            alert(ej2_calcularPromedio(ex1, ex2, ex3, ex4));
            break;
        case 3:
            let base = parseFloat(prompt("Ingrese Base: "));
            let altura = parseFloat(prompt("Ingrese altura: "));
            alert(ej3_calcularAreaRectangulo(base, altura));
            break;
        case 4:
            let baset = parseFloat(prompt("Ingrese Base: "));
            let alturat = parseFloat(prompt("Ingrese altura: "));
            alert(ej4_calcularAreaTriangulo(baset, alturat));
            break;
        case 5:
            let radio = parseFloat(prompt("Ingrese Radio del círculo: "));
            alert(ej5_calcularAreaCirculo(radio));
            break;
        case 6:
            let sueldohora = parseFloat(prompt("Ingrese Suelto por hora: "));
            alert(ej6_calcularsalario(sueldohora));
            break;
        case 7:
            let metros = parseFloat(prompt("Ingrese metros a convertir: "));
            alert(ej7_convertirpulgadas(metros));
            break;
        case 8:
            let soles = parseFloat(prompt("Ingrese monto en soles: "));
            alert(ej8_cambiardolares(soles));
            break;
        case 9:
            let anionacimiento=parseInt(prompt("CALCULO DE LA EDAD CON FECHA DE NACIMIENTO \r\nIngrese año de nacimiento"));
            alert(ej9_calcularedad(anionacimiento));
            break;
        case 10:
            let nombre=[];
            let edad=[];
            for(var i=0; i<3; i++){
                nombre[i]=prompt("Ingrese nombre:");
                edad[i]=parseInt(prompt("Ingrese edad"));
            }
            alert(ej10_personamenor(nombre,edad));
            break;
        case 11:
            let anioingreso=parseInt(prompt("CALCULO DE BONO SEGUN ANTIGUEDAD \r\nIngrese año de ingreso"));
            alert(ej11_calcularbono(anioingreso));
            break;
        case 12:
            alert(ej12_calcularsalario());
            break;
        case 13:
            let notas=[];
            let n = parseFloat(prompt("Ingrese cantidad de alumnos: "));
            for(var i=0;i<n;i++){
                notas[i]= parseInt(prompt("Ingrese edad : "));
            }
            alert(ej13_calificaciones(notas));
            break;
        case 14:
            let focos=[];
            let nf = parseFloat(prompt("Ingrese cantidad de focos: "));
            for(var i=0;i<nf;i++){
                focos[i]=parseInt(prompt("Ingrese color de foco donde: \r\nVerde es 1\r\nBlanco es 2\r\nRojo es 3"));
            }
            alert(ej14_cantidadfocos(focos));
            break;
        case 15:
            let edadd=parseInt(prompt("\r\nIngrese su edad: "));
            alert(ej15_votar(edadd));
            break;

    
    }
}
function ej1_sumarValores(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return "Porfavor ingrese valores";
    } else {
        return a + b;
    }
}
function ej2_calcularPromedio(exa1, exa2, exa3, exa4) {
    if (isNaN(exa1) || isNaN(exa2) || isNaN(exa3) || isNaN(exa4)) {
        return "Porfavor ingrese valores";
    } else {
        return (exa1 + exa2 + exa3 + exa4) / 4;
    }
}
function ej3_calcularAreaRectangulo(b, h) {
    if (isNaN(b) || isNaN(h)) {
        return "Porfavor ingrese valores";
    } else {
        return b * h;
    }
}
function ej4_calcularAreaTriangulo(b, h) {
    if (isNaN(b) || isNaN(h)) {
        return "Porfavor ingrese valores";
    } else {
        return (b * h) / 2;
    }
}
function ej5_calcularAreaCirculo(r) {
    if (isNaN(r)) {
        return "Porfavor ingrese valor";
    } else {
        return Math.pow(r, 2) * 3.14;
    }
}
function ej6_calcularsalario(s) {
    if (isNaN(s)) {
        return "Porfavor ingrese valor";
    } else {
        return s * 40;
    }
}

function ej7_convertirpulgadas(m) {
    if (isNaN(m)) {
        return "Porfavor ingrese valor";
    } else {
        return ((m * 39.3701).toFixed(2))+ " pulgadas";
    }
}
function ej8_cambiardolares(sol) {
    if (isNaN(sol)) {
        return "Porfavor ingrese valor";
    } else {
        return sol/3.885 + " Dolares al 05/08/2022";
    }
}
function ej9_calcularedad(anio){
    if(isNaN(anio)){
        return "Porfavor ingrese valor";
    }else{
        return "La edad actual es de "+ (2022-anio) +" años";
    }
}
function ej10_personamenor(nombre, edad){
    let menor=9999;
    let posicion=0;
    for(var i=0; i<3;i++){
        if(edad[i]<menor){
            menor=edad[i];
            posicion=i;
        }
    }
    return "La persona de menor edad es " + nombre[posicion]+ " y tiene "+ menor+ " años";
    
}
function ej11_calcularbono(a){
    let bonos=[100,200,300,400,500,1000];
    let año=2022-a;
    if(isNaN(a)){
        return "Porfavor ingrese valor";
    }else{
        for(var i=0;i<bonos.length;i++){
            if(año===i && año<bonos.length){
                if(año===0){
                    return "La bono que le corresponde es $0";
                }
                else{
                    return "El bono que le corresponde es $"+bonos[i-1];
                }
                
            }
            else if(año>=bonos.length){
                return "El bono que le corresponde es $"+bonos[bonos.length-1];
            }
        }
        
    }
}
function ej12_calcularsalario(){
    let si=1500;
    let sp=0;
    let respuesta="";
    for(var i=0; i<6;i++){
        sp=(10/100)*si + si;
        if(i===0){
        respuesta=respuesta+ `\r\n${i+1} año: ${sp.toFixed(2)}`;}
        else{
            respuesta=respuesta+ `\r\n${i+1} años: ${sp.toFixed(2)}`;    
        }
        si=sp;
    }
    respuesta=respuesta+`\r\n Salario al cabo de 6 meses es ${si.toFixed(2)}`;
    return respuesta;
    
}
function ej13_calificaciones(notas){
    let aprob=0;
    let desaprob=0;
    let respuesta=`Se ingresaron las siguientes notas: `;
    for(var i=0;i<notas.length;i++){
        if(notas[i]>10){
            aprob++;
        }
        else{
            desaprob++;
        }
        respuesta=respuesta+`\r\nNota ${i+1}: ${notas[i]}`;
    }
    respuesta=respuesta+`\r\nSe determina aprobado si la nota es mayor a 11 \r\nCantidad de aprobados es ${aprob} \r\nCantidad de desaprobados es ${desaprob}`;
    return respuesta;
}

function ej14_cantidadfocos(focos){
    let rojo=0;
    let blanco=0;
    let verde=0;
    let respuesta="";
    respuesta=respuesta+`Se ingresaron ${focos.length} focos`;
    for(var i=0;i<focos.length;i++){
        if(focos[i]===1){
            verde++;
        }
        else if(focos[i]===2){
            blanco++;
        }
        else{
            rojo++;
        }
    }
    respuesta=respuesta+`\r\nSe tiene los siguiente focos \r\nCantidad de focos Verde:  ${verde} \r\nCantidad de focos Blancos:  ${blanco}\r\nCantidad de focos Rojos:  ${rojo}`;
    return respuesta;
}
function ej15_votar(edad){
    if(edad>=18){
        return "Ud puede votar en las elecciones";
    }
    else{
        return "Ud. no puede votar en las elecciones";
    }
}



