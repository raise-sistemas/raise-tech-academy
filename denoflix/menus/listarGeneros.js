export async function listarGeneros() {
  const url =
    "https://api.themoviedb.org/3/genre/movie/list?api_key=f7935dbaf15738f81daed04b531c65fd&language=pt-BR";

  const resposta = await fetch(url);
  const json = await resposta.json();
  const generos = json.genres.map((genero) => genero.name);
  console.table(generos);
}
