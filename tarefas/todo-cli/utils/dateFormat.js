export function dateFormat(date){
  const dateFormatted = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
  const hours = `${date.getHours()}:${date.getMinutes()}`;

  return `${dateFormatted} - ${hours}`;
}
