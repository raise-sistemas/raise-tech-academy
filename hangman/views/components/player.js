import { character } from "../../assets/character.js"

export function player(chances) {
  return character[6 - chances];
}