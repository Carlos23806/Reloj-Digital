// Función para calcular el tiempo actual y actualizar el contenido del elemento con la clase "reloj"
function calcularTiempo() {
    // Obtener la fecha y hora actual
    let tiempo = new Date();
    
    // Obtener la hora, los minutos y los segundos actuales
    let hora = tiempo.getHours(); // Corregido: se añaden los paréntesis
    let minuto = tiempo.getMinutes(); // Corregido: se añaden los paréntesis
    let segundo = tiempo.getSeconds(); // Corregido: se añaden los paréntesis

    // Añadir ceros a la izquierda si es necesario para que siempre haya dos dígitos
    hora = hora < 10 ? "0" + hora : hora;
    minuto = minuto < 10 ? "0" + minuto : minuto;
    segundo = segundo < 10 ? "0" + segundo : segundo;

    // Formatear la hora actual en un formato legible HH:MM:SS
    let pantallaReloj = hora + ":" + minuto + ":" + segundo;

    // Seleccionar el elemento con la clase "reloj" en el documento HTML
    let relojDigital = document.querySelector(".reloj");

    // Actualizar el contenido del elemento con la hora formateada
    relojDigital.innerHTML = pantallaReloj;
}

// Llamar a la función calcularTiempo cada 1000 milisegundos (1 segundo) para actualizar el reloj
setInterval(calcularTiempo, 1000);
