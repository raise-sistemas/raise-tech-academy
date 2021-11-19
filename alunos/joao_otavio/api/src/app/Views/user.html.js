export const randomUser = (user) => {
  return `
    <html>
      <body>
        <h4>Dados do usuario ${user.name}</h4>
      
        <p>ID: ${user.id}</p>
        <p>E-mail: ${user.email}</p>
        <p>Senha: ${user.password}</p>
      
        <a href="/">Home</a>
      </body>
    </html>
  `;
}

