export function getName(email) {
  const users = Object.values(localStorage)
  let name =''

  for (let i = 0; i < users.length; i++) {

    if (users.email[i] === email){
      name = users[i].name
      break
      
  }
  return name
}}
