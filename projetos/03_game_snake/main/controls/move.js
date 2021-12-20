import { goDown, goRight, goLeft, goUp } from './index.js'

export function move(game) {
  switch (game.state) {
    case 'goingRight':
      return goRight(game)

    case 'goingDown':
      return goDown(game)

    case 'goingLeft':
      return goLeft(game)

    case 'goingUp':
      return goUp(game)
  }
}
