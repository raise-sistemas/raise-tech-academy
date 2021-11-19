import { serve } from 'https://deno.land/std@0.114.0/http/server.ts'
import numbers from './api.js'
import { even } from './numbers/even.js'
import { odd } from './numbers/odd.js'
import { prime } from './numbers/prime.js'
import { multipleOfFive } from './numbers/multipleOfFive.js'
import { fibonacci } from './numbers/fibonacci.js'
import { perfect } from './numbers/perfect.js'
import { intSquareRoot } from './numbers/intSquareRoot.js'
import { triangular } from './numbers/triangular.js'

await serve(request => {
  
  const url = new URL(request.url)
  switch (url.pathname) {
    case '/':
      return new Response(numbers)

    case '/even':
      return new Response(even())

    case '/odd':
      return new Response(odd())

    case '/prime':
      return new Response(prime())

    case '/fibonacci':
      return new Response(fibonacci())

    case '/multiple-of-five':
      return new Response(multipleOfFive())

    case '/square-root':
      return new Response(intSquareRoot())

    case '/perfect':
      return new Response(perfect())

    case '/triangular':
      return new Response(triangular())

    default:
      return new Response('Página Não Encontrada', { status: 404 })
  }
})
