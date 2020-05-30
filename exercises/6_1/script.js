// to give state options

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
  for (let i = 0; i < todosEstados.length; i += 1) {
    const novoEstado = document.createElement('option');
    novoEstado.innerText = todosEstados[i][0];
    novoEstado.value = todosEstados[i][1];
    inputEstado.appendChild(novoEstado);
  }
}
window.onload = function () {
  criarEstados();
}


//to change date pattern

let padrao = /^(0[1-9]|[12][0-9]|3[01])[- /.]/; //regex for dd/mm/aaaa pattern found online

let dataInput = document.getElementById('data');

function formatoData() {
  if (dataInput.value.match(padrao) === null) {
    alert("Digite data no seguinte formato: DD/MM/AAAA");
  }
}
dataInput.addEventListener("change", formatoData);

//to verify, consolidate and export all form into extra div
let consolidateButton = document.getElementById('consolidar');
let divResult = document.getElementById('div-form');
//function to verify
//function to send all input, textarea and select value into divResult
//consolidateButton.addEventListener("click", function);

//to clear form
let clearButton = document.getElementById('limpar');
let allInputs = document.getElementsByTagName('input'); //will return array
let allTextArea = document.getElementsByTagName('textarea')[0];//will return the first and unique
let allSelect = document.getElementsByTagName('select')[0];//will return the first and unique

function clearAll() {
  for (i = 0; i < allInputs.length; i += 1) {
    allInputs[i].value = "";
  }
  allTextArea.value = "";
  allSelect.value = "";
  divResult.value = "";
}
clearButton.addEventListener("click", clearAll);