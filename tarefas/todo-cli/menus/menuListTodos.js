import { BASE_URL } from "../env.js";

export async function menuListTodos(){
    const list = await fetch(`${BASE_URL}todos`);
    const response = await list.json();
  
    console.table(response);
}