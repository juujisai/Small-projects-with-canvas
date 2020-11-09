const project2 = (currentProjectId) => {

  const initProject = () => {
    const projectContainer = document.getElementById('project-data')
    projectContainer.innerHTML = ''

    const canvas = document.createElement('canvas')
    canvas.id = 'canvas2'
    projectContainer.appendChild(canvas)





  }


  initProject()





  const projectStart = () => {

    const canvas = document.getElementById('canvas2')
    const ctx = canvas.getContext('2d')

    let width = window.innerWidth - 100
    let height = window.innerHeight / 2

    canvas.width = width
    canvas.height = height





    class Square {
      constructor(x, y, width, height, mass, velocity, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.mass = mass;
        this.velocity = velocity;
        this.color = color;

        this.squareDist = 0;
        this.otherSquareX = 0;
      }

      draw() {
        ctx.beginPath()

        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)

        ctx.fillStyle = 'black'
        ctx.font = '20px Arial'
        ctx.fillText(`${this.mass} kg`, this.x + this.width / 2, this.y - 5)

        ctx.fillText(`${this.velocity} v`, this.x + this.width + 5, this.y + this.height / 2)


        ctx.closePath()
      }

      update() {

        this.otherSquareX = squares.find(item => item !== this)
        this.squareDist = Math.abs((this.x + this.width / 2) - (this.otherSquareX.x + this.otherSquareX.width / 2))

        console.log(this.squareDist <= Math.abs(this.width / 2 + this.otherSquareX.width / 2))
        if (this.x > 0 && (this.squareDist <= Math.abs(this.width / 2 + this.otherSquareX.width / 2))) {
          this.velocity = -this.velocity
        } else if (this.x < 0) {
          this.velocity = -this.velocity
        }


        this.x -= this.velocity

        this.draw()
      }

    }









    let squares = []

    const initSquares = () => {
      let m1 = 1
      let m2 = 100

      let det = m2 / (m1 * 9.9)
      if (det > 5) {
        det = 5
      }


      let v1 = 2;
      let v2 = 2;

      let w = width / 20;
      let h = height / 10

      let x1 = width * .20;
      let y1 = height - h

      let x2 = width * .50
      let y2 = height - h * det



      let square1 = new Square(x1, y1, h, h, m1, v1, 'red')
      let square2 = new Square(x2, y2, h * det, h * det, m2, v2, 'black')

      squares = [square1, square2]

    }

    function animate() {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      squares.forEach(item => item.update())




    }

    initSquares()
    animate()

  }


  projectStart()


}