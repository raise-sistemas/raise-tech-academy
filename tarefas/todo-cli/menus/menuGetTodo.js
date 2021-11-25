import { BASE_URL } from "../env.js";

export async function menuGetTodo(){
    const list = await fetch(`${BASE_URL}todo`);
    // const response = await list.json();
    console.log(await list.json());
    // console.table(response);
}