import { BASE_URL } from "../env.js";

export async function menuRoutes(){
  const search = await fetch(`${BASE_URL}routes`)
  const response = await search.json();

  console.table(response);
}