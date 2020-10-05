window.addEventListener('load', () => {

  const canvas = document.getElementById('canvas');


  const canv = new Canvas(canvas)

  canv.init(300, 300)

  // canv.setContext('2d')
  const ctx = canv.setContext('2d')



  canv.beginPath



  canv.drawRect(50, 50, 50, 50, '', 'red')


  canv.drawPoint(150, 150, 'red')


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
