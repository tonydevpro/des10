let relogio = document.getElementById('clock');
let data = document.getElementById('date')

function atualizarRelogio(){
/*   data   */
let agora = new Date();
let horas = agora.getHours(); // Retorna as horas (0 a 23)
let minutos = agora.getMinutes(); // Retorna os minutos (0 a 59)
let segundos = agora.getSeconds(); // Retorna os segundos (0 a 59)

// Formatação para sempre mostrar dois dígitos
horas = horas.toString().padStart(2, '0');
minutos = minutos.toString().padStart(2, '0');
segundos = segundos.toString().padStart(2, '0');

// Obtendo a data
let dia = agora.getDate().toString().padStart(2, '0');
let mes = (agora.getMonth() + 1).toString().padStart(2, '0'); // Janeiro é 0
let ano = agora.getFullYear();

// Atualizando os elementos na página
relogio.innerHTML = `${horas}:${minutos}:${segundos}`;
data.innerHTML = `${dia}/${mes}/${ano}`;

}

// Atualiza o relógio imediatamente ao carregar
atualizarRelogio();

// Atualiza o relógio a cada segundo
setInterval(atualizarRelogio, 1000);