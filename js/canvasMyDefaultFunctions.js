
// drawing line from from points x1, y1 to x2, y2 


const drawLine = (ctx, x1, y1, x2, y2, color = 'black') => {
  ctx.strokeStyle = color
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
}


class Canvas {
  constructor(path) {
    this.path = path
    this.ctx;
  }

  init(w, h) {
    this.path.width = w;
    this.path.height = h
  }

  setContext(ctx) {
    this.ctx = this.path.getContext(ctx)
    return this.ctx
  }

  beginPath() {
    this.ctx.beginPath()
  }

  drawLine = (x1, y1, x2, y2, color = 'black', width = 2) => {
    this.ctx.beginPath()

    this.ctx.strokeStyle = color
    this.ctx.lineWidth = width
    this.ctx.moveTo(x1, y1)
    this.ctx.lineTo(x2, y2)
    this.ctx.stroke()
  }

  drawRect = (x1, y1, w, h, fill = 'black', stroke = 'black', width = 2) => {
    this.ctx.beginPath()

    this.ctx.strokeStyle = stroke
    this.ctx.fillStyle = fill

    this.ctx.lineWidth = width

    fill !== '' && this.ctx.fillRect(x1, y1, w, h)
    stroke !== '' && this.ctx.strokeRect(x1, y1, w, h)

  }

  drawCircle = (x1, y1, r, fill = 'black', stroke = 'black', width = 2) => {
    this.ctx.beginPath()

    this.ctx.strokeStyle = stroke
    this.ctx.fillStyle = fill

    this.ctx.lineWidth = width

    this.ctx.arc(x1, y1, r, 0, Math.PI * 2, true)

    fill !== '' && this.ctx.fill()
    stroke !== '' && this.ctx.stroke()
  }

  drawPoint = (x1, y1, fill = 'black') => {
    this.ctx.beginPath()

    this.ctx.fillStyle = fill

    // this.ctx.lineWidth = 2


    this.ctx.arc(x1, y1, 2, 0, Math.PI * 2, true)

    this.ctx.fill()
  }













  render = (f, frames) => {
    const id = setInterval(f, 1000 / frames)
    return id
  }

}