function CallMenu() {
    let nro_ejercicio = parseInt(
        prompt("ingrese el numero de ejercicio que quiere ejecutar: \r\n 1.suma. \r\n 2.Promedio de Examanes \r\n 3. Calcular el area del rectangulo \r\n 4.Calcular el area del triangulo \r\n 5.calcular el area del Circulo \r\n 6. Calcular salario semanal \r\n 7. convertir pulgadas \r\n 8. cambiar a dolares")
    );
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
        case 4:
            let baset = parseFloat(prompt("Ingrese Base: "));
            let alturat = parseFloat(prompt("Ingrese altura: "));
            alert(ej4_calcularAreaTriangulo(baset, alturat));
        case 5:
            let radio = parseFloat(prompt("Ingrese Radio del círculo: "));
            alert(ej5_calcularAreaCirculo(radio));
        case 6:
            let sueldohora = parseFloat(prompt("Ingrese Suelto por hora: "));
            alert(ej6_calcularsalario(sueldohora));
        case 7:
            let metros = parseFloat(prompt("Ingrese metros a convertir: "));
            alert(ej7_convertirpulgadas(metros));
        case 8:
            let soles = parseFloat(prompt("Ingrese monto en soles: "));
            alert(ej8_cambiardolares(soles));
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
        return m * 39.3701 + " pulgadas";
    }
}
function ej8_cambiardolares(sol) {
    if (isNaN(sol)) {
        return "Porfavor ingrese valor";
    } else {
        return sol/3.885 + " Dolares al 05/08/2022";
    }
}
