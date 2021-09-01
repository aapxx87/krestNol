const box1 = document.querySelector('.box-1')
const box2 = document.querySelector('.box-2')
const box3 = document.querySelector('.box-3')
const box4 = document.querySelector('.box-4')
const box5 = document.querySelector('.box-5')
const box6 = document.querySelector('.box-6')
const box7 = document.querySelector('.box-7')
const box8 = document.querySelector('.box-8')
const box9 = document.querySelector('.box-9')

let player = 0

const boxes = document.querySelectorAll('.box')

const winnerTitle = document.querySelector('.winner')

console.log(winnerTitle)

// горизонталь
const caseWin1 = [[], []]
const caseWin2 = [[], []]
const caseWin3 = [[], []]


boxes.forEach(function (box) {
  box.addEventListener('click', function () {

    if (player === 0) {

      box.textContent = 'x'

      const classBox = box.classList[1]

      if (classBox === 'box-1' || classBox === 'box-2' || classBox === 'box-3') {
        caseWin1[player].push('x')
      } else if (classBox === 'box-4' || classBox === 'box-5' || classBox === 'box-6') {
        caseWin2[player].push('x')
      } else if (classBox === 'box-7' || classBox === 'box-8' || classBox === 'box-9') {
        caseWin2[player].push('x')
      }


      console.log(caseWin1);

      if (caseWin1[player].length === 3 || caseWin2[player].length === 3 || caseWin3[player].length === 3) {
        console.log('Winner Player X ');
        winnerTitle.textContent = 'Winner Player X'
      }

      player++

    } else if (player === 1) {

      box.textContent = '0'

      const classBox = box.classList[1]

      if (classBox === 'box-1' || classBox === 'box-2' || classBox === 'box-3') {
        caseWin1[player].push('o')
      } else if (classBox === 'box-4' || classBox === 'box-5' || classBox === 'box-6') {
        caseWin2[player].push('0')
      } else if (classBox === 'box-7' || classBox === 'box-8' || classBox === 'box-9') {
        caseWin2[player].push('')
      }


      console.log(caseWin1);

      if (caseWin1[player].length === 3 || caseWin2[player].length === 3 || caseWin3[player].length === 3) {

        winnerTitle.textContent = 'Winner Player O'
        console.log('Winner Player O ');
      }

      player = 0


    }



  })

})