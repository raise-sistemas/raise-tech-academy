let counter = 0
const stop = setInterval(() => {
  console.clear()
  console.log(counter)
  counter += 1

  if (counter > 20) {
    clearInterval(stop)
  }

}, 1000)

