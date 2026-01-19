let manejador;

function mostrarFecha(){
    let fecha = new Date();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1;
    let diasemana = fecha.getDay();

    let spanHora = document.getElementById("horas");
    let spanMinutos = document.getElementById("minutos");
    let spanSegundos = document.getElementById("segundos");
    let spanDiaMes = document.getElementById("diaMes");
    let spanMes = document.getElementById("mes");
    let spanDiaSemana = document.getElementById("diaSemanaaa");

    spanHora.innerHTML = hora.toString().padStart(2,"0");
    spanMinutos.innerHTML = minutos.toString().padStart(2,"0");
    spanSegundos.innerHTML = segundos.toString().padStart(2,"0");
    spanDiaMes.innerHTML = dia.toString().padStart(2,"0");
    spanMes.innerHTML = mes.toString().padStart(2,"0");
    spanDiaSemana.innerHTML = diaSemana(diasemana);

}

function iniciar(){
    mostrarFecha();
    manejador = setInterval(mostrarFecha,1000);
}

function parar(){
    clearInterval(manejador);
}

function diaSemana(numDia){
    let semana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
    return semana[numDia].toUpperCase();
}

