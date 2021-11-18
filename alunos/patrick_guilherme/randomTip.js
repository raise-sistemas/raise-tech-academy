import { tips } from './allTips.js'

export async function randomTip(word) {
  const allTips = await tips(word)
  const sortition = Math.round(Math.random() * (3 - 1) + 1)

  if (sortition == 1) {
    return allTips.class
  }
  else if{}
  // console.log(tips[sortition - 1])
}
