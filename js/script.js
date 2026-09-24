// a) Variables y salida - Al pulsarse muestra los datos del alumno usando template literals
document.getElementById('btnDatos').addEventListener('click', function () {
    const nombre = 'Erick Ulises Penagos Padilla';
    const matricula = '100030386';
    const carrera = 'LSC';
    const semestre = 5;
    const mensaje = `Nombre: ${nombre} | Matrícula: ${matricula} \nCarrera: ${carrera} | Semestre: ${semestre}`;
    document.getElementById('parDatos').textContent = mensaje;
    console.log('Datos del alumno mostrados:', nombre, matricula);
});

// b) Calculadora de calificaciones - Captura 3 calificaciones, calcula el promedio, indica si aprobó y cambia de color
document.getElementById('btnCalc').addEventListener('click', function () {
    const p1 = parseFloat(document.getElementById('p1').value);
    const p2 = parseFloat(document.getElementById('p2').value);
    const p3 = parseFloat(document.getElementById('p3').value);
    if (isNaN(p1) || isNaN(p2) || isNaN(p3)) {
        alert('Por favor ingresa los tres parciales.');
        return;
    }
    const promedio = (p1 + p2 + p3) / 3;
    const parCalc = document.getElementById('parCalc');
    console.log('Promedio calculado:', promedio.toFixed(2));
    if (promedio >= 6) {
        parCalc.textContent = `Promedio: ${promedio.toFixed(2)} — Aprobado`;
        parCalc.style.color = '#198754';
    } else {
        parCalc.textContent = `Promedio: ${promedio.toFixed(2)} — Reprobado`;
        parCalc.style.color = '#DC3545';
    }
});

// c) Lista dinámica - Agrega un elemento a la lista o limpia todos los elementos
document.getElementById('btnAgregar').addEventListener('click', function () {
    const valor = document.getElementById('inputItem').value.trim();
    if (valor === '') return
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = valor;
    document.getElementById('miLista').appendChild(li);
    document.getElementById('inputItem').value = '';
    console.log('Elemento agregado a la lista dinámica:', valor);
});
document.getElementById('btnLimpiar').addEventListener('click', function () {
    document.getElementById('miLista').innerHTML = '';
    console.log('Lista dinámica limpiada');
});

// d) Cambio de estilos - Modifica el color de fondo usando la propiedad style.backgroundColor
function cambiarFondo(color) {
    document.getElementById('sec-estilos').style.backgroundColor = '#' + color;
}