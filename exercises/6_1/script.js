const inputEstado = document.getElementById('estado');
const todosEstados = [
  ['Acre', 'AC'],
  ['Alagoas', 'AL'],
  ['Amapá', 'AP'],
  ['Amazonas', 'AM'],
  ['Bahia', 'BA'],
  ['Ceará', 'CE'],
  ['Distrito Federal', 'DF'],
  ['Espírito Santo', 'ES'],
  ['Goiás', 'GO'],
  ['Maranhão', 'MA'],
  ['Mato Grosso', 'MT'],
  ['Mato Grosso do Sul', 'MS'],
  ['Minas Gerais', 'MG'],
  ['Pará', 'PA'],
  ['Paraíba', 'PB'],
  ['Paraná', 'PR'],
  ['Pernambuco', 'PE'],
  ['Piauí', 'PI'],
  ['Rio de Janeiro', 'RJ'],
  ['Rio Grande do Norte', 'RN'],
  ['Rio Grande do Sul', 'RS'],
  ['Rondônia', 'RO'],
  ['Roraima', 'RR'],
  ['Santa Catarina', 'SC'],
  ['São Paulo', 'SP'],
  ['Sergipe', 'SE'],
  ['Tocantins', 'TO']
];

function criarEstados() {
  for (let i=0; i < todosEstados.length; i+=1){
    const novoEstado = document.createElement('option');
    novoEstado.innerText = todosEstados[i][0];
    novoEstado.value = todosEstados[i][1];
    inputEstado.appendChild(novoEstado);
  }    
}
window.onload = function () {
  criarEstados();
}


let padrao = /^(0[1-9]|[12][0-9]|3[01])[- /.]/; //regex for dd/mm/aaaa pattern found online

let dataInput = document.getElementById('data');

function formatoData(){
  if (dataInput.value.match(padrao) === null){
    alert("Digite data no seguinte formato: DD/MM/AAAA");
  }
}
dataInput.addEventListener("change", formatoData);

