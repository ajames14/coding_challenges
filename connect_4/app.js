function setUpGame() {

  const grid = document.querySelector('#grid')
  const cells = []

  for (let i = 0; i < 42; i++) {
    const cell = document.createElement('div')
    grid.appendChild(cell)
    cells.push(cell)
  }

  let rowArray = []
  for (let i = 0; i < 6; i++) {
    rowArray.push(cells.slice(i * 7, ((i * 7) + 7)))
  }
  // console.log(rowArray[0])

  // A player can select a column and then the piece will occupy the lowest available space in the column

  let player1Go = true

  
  for (let y = 0; y < 7; y++) {
    rowArray[0][y].addEventListener('click', () => {
      const column = []
      for (let i = 0; i < 6; i++) {
        column.push(rowArray[i][y])
      }
      const highestCellIndex = column.findIndex((elem) => elem.classList.contains('player1-choice') || elem.classList.contains('player2-choice'))

      let x = 0
      if (highestCellIndex === -1) {
        x = 5
      } else {
        x = highestCellIndex - 1
      }
      rowArray[x][y].classList.add(player1Go ? 'player1-choice' : 'player2-choice')
      gameOver(x, y)
      player1Go = !player1Go
    })
  }


  function gameOver(row, column) {
    let count1 = 0
    let count2 = 0
    let count3 = 0
    let count4 = 0
    let count5 = 0
    let count6 = 0
    let count7 = 0
    for (let i = 0; i < 4; i++) {
      if (rowArray[row][column + i] && rowArray[row][column + i].classList.contains(player1Go ? 'player1-choice' : 'player2-choice')) {
        count1 += 1
      }
      if (rowArray[row][column - i] && rowArray[row][column - i].classList.contains(player1Go ? 'player1-choice' : 'player2-choice')) {
        count2 += 1
      }
      if (row + i < 6 && rowArray[row + i][column].classList.contains(player1Go ? 'player1-choice' : 'player2-choice')) {
        count3 += 1
      }
      if (row - i >= 0 && column + i < 7 && rowArray[row - i][column + i].classList.contains(player1Go ? 'player1-choice' : 'player2-choice')) {
        count4 += 1
      }
      if (row - i >= 0 && column - i >= 0 && rowArray[row - i][column - i].classList.contains(player1Go ? 'player1-choice' : 'player2-choice')) {
        count5 += 1
      }
      if (row + i < 6 && column + i < 7 && rowArray[row + i][column + i].classList.contains(player1Go ? 'player1-choice' : 'player2-choice')) {
        count6 += 1
      }
      if (row + i < 6 && column - i >= 0 && rowArray[row + i][column - i].classList.contains(player1Go ? 'player1-choice' : 'player2-choice')) {
        count7 += 1
      }
    }
    console.log(count1, count2, count3, count4, count5, count6, count7)
    if (count1 === 4 || count2 === 4 || count3 === 4 || count4 === 4 || count5 === 4 || count6 === 4 || count7 === 4) {
      alert(`GAME OVER - ${player1Go ? 'Player 1 Wins' : 'Player 2 Wins'}`)
    }
  }


}

document.addEventListener('DOMContentLoaded', setUpGame)
