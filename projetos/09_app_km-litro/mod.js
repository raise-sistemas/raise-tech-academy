const km = Number(prompt('Digite a quilometragem atual:'));
const price = Number(prompt('Digite o preço da gasolina:'));
const liter = Number(prompt('Digite a quantidade de litros abastecido:'));
const newKm = Number(prompt('Digite a quilometragem após:'));

const autonomy = liter/(newKm-km);
console.log(autonomy);