import { run } from "./game/run.js"
import { endView } from "./display/index.js"
import { setup } from "./game/start/setup.js"

export function init(){

const game = setup()

run(game)

endView(game)

}
