import { getShip } from "./getShip.js"
import { changeEmoji } from "../../utils/changeEmoji.js"
import { view } from "../../display/view.js"

export function setShips(player){
  for(const ship in player.ships){
    player.ships[ship].coordinates = getShip(player.ships,player.ships[ship].size,prompt)

    for (const coordinate of player.ships[ship].coordinates){
      changeEmoji(player.grid,"🟨",coordinate)
    }

    console.clear()
    view(player)
  }

}