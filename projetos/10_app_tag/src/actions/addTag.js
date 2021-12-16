export default function addTag() {
  let data = localStorage.getItem('tags');
  console.log('Data', data);
  console.log(typeof data);
  if (data) {
    data = data.split(';');
    //FIXME Só utilize a função map quando necessitar de seu retorno, que é um array.
    //Utilize forEach caso queira apenas percorrer um array.
    data.map((tag, index) => {
      data[index] = JSON.parse(tag);
    });
    return data;
  }

  return false;
}
