import { BASE_URL } from "../env.js";

export async function menuHome(){
  const search = await fetch(`${BASE_URL}`);
  const body = await search.text(); 

  console.log(body)
}
