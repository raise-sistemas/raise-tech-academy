import { buildChangePlayerView } from "./components/buildChangePlayerVier.js"

export function changePlayerView(player){
  console.clear()
  prompt(buildChangePlayerView(player))
  
}