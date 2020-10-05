window.addEventListener('load', () => {



  const canvas = document.getElementById('canvas');

  const buttonStart = document.getElementById('start')
  const PIcont = document.getElementById('pi')



  const frames = 30
  const width = 300
  const height = 300

  let count = 0
  let inCircle = 0
  let pi = 0

  const startFunction = () => {


    const canv = new Canvas(canvas)

    canv.init(width, height)

    const ctx = canv.setContext('2d')

    canv.beginPath

    canv.drawCircle(width / 2, height / 2, width / 2, '', 'red')



    PIcont.textContent = pi


    const calculatePi = () => {
      let xRand = Math.floor(Math.random() * width)
      let yRand = Math.floor(Math.random() * height)

      xRand === 0 ? xRand++ : xRand
      yRand === 0 ? yRand++ : yRand


      let xDelta = width / 2 - xRand
      let yDelta = height / 2 - yRand

      let distance = Math.sqrt(xDelta * xDelta + yDelta * yDelta)

      count++;

      if (distance < width / 2) {
        canv.drawPoint(xRand, yRand, 'red')

        inCircle++
      } else {
        canv.drawPoint(xRand, yRand, 'blue')

      }




      pi = 4 * (inCircle / count)

      PIcont.textContent = pi
    }


    canv.render(calculatePi, frames)

  }

  buttonStart.addEventListener('click', startFunction)

})











// old

 // canvas.width = 500;
  // canvas.height = 300;


  // const ctx = canvas.getContext("2d")
  // ctx.beginPath()

  // ctx.moveTo(100, 50)
  // ctx.lineTo(150, 100)
  // ctx.moveTo(300, 200)
  // ctx.lineTo(300, 250)

  // drawLine(ctx, 100, 50, 150, 100)
  // drawLine(ctx, 300, 100, 300, 250, 'red')

  // ctx.stroke()

    // canv.drawLine(10, 10, 10, 300, 'green')

  // canv.drawCircle(150, 150, 50, '', 'red', 4)

    // ctx.fillRect(50, 50, 50, 50)
