<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      p,
      label {
        font: 1rem "Fira Sans", sans-serif;
      }

      input {
        margin: 0.4rem;
      }
      body{
          background-color: rgb(63, 63, 63);
      }
    </style>
  </head>
  <body>
    <h1 style="color: rgb(4, 65, 7);">Álcool ou Gasolina:</h1>

    <div>
      <input type="range" id="Gasolina" name="Gasolina" min="0" max="11" />
      <label for="Gasolina">Gasolina</label>
    </div>

    <div>
      <input
        type="range"
        id="Álcool"
        name="Álcool"
        min="0"
        max="100"
        value="90"
        step="10"
      />
      <label for="Álcool">Álcool</label>
    </div>
    <script></script>
  </body>
</html>
