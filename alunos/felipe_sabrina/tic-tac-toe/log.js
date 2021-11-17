export function log(data) {
  if (Number.isNaN(data)) {
    console.log(NaN);
  } else {
    console.log(JSON.stringify(data, null, 2));
  }

  return data;
}
