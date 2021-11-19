import { even } from './numbers/even.js'
import { odd } from './numbers/odd.js'
import { prime } from './numbers/prime.js'
import { multipleOfFive } from './numbers/multipleOfFive.js'
import { fibonacci } from './numbers/fibonacci.js'
import { perfect } from './numbers/perfect.js'
import { intSquareRoot } from './numbers/intSquareRoot.js'
import { triangular } from './numbers/triangular.js'

const numbers = [
  'Numbers',
  {
    Types: [
      'even',
      'odd',
      'prime_numbers',
      'multipleOfFive',
      'fibonacci',
      'perfect',
      'squareRoot',
      'triangular',
      'prime'
    ]
  },
  {
    even: even(),
    odd: odd(),
    prime: prime(),
    multipleOfFive: multipleOfFive(),
    fibonacci: fibonacci(),
    perfect: perfect(),
    squareRoot: intSquareRoot(),
    triangular: triangular()
  }
]

const json = JSON.stringify(numbers)
await Deno.writeTextFile('numbers.json', json)
