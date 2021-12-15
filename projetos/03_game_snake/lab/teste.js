import { gridFromLeft } from './assets/defaultGrid.js'
import { newCarrot } from './functions/newCarrot.js';


setInterval(() => {
  console.clear()
  newCarrot(gridFromLeft)
}, 250);


