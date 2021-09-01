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

// горизонталь
const caseWin1 = [[], []]
const caseWin2 = [[], []]
const caseWin3 = [[], []]

// вертикаль
const caseWin4 = [[], []]
const caseWin5 = [[], []]
const caseWin6 = [[], []]

// косая
const caseWin7 = [[], []]
const caseWin8 = [[], []]


boxes.forEach(function (box) {
  box.addEventListener('click', function () {

    if (player === 0) {

      box.textContent = 'x'

      const classBox = box.classList[1]

      if (classBox === 'box-1') {

        caseWin1[player].push('x')
        caseWin4[player].push('x')
        caseWin7[player].push('x')

      } else if (classBox === 'box-2') {

        caseWin1[player].push('x')
        caseWin5[player].push('x')

      } else if (classBox === 'box-3') {

        caseWin1[player].push('x')
        caseWin6[player].push('x')
        caseWin8[player].push('x')

      } else if (classBox === 'box-4') {

        caseWin2[player].push('x')
        caseWin4[player].push('x')

      } else if (classBox === 'box-5') {

        caseWin2[player].push('x')
        caseWin5[player].push('x')
        caseWin7[player].push('x')
        caseWin8[player].push('x')

      } else if (classBox === 'box-6') {

        caseWin2[player].push('x')
        caseWin6[player].push('x')

      } else if (classBox === 'box-7') {

        caseWin3[player].push('x')
        caseWin4[player].push('x')
        caseWin8[player].push('x')

      } else if (classBox === 'box-8') {

        caseWin3[player].push('x')
        caseWin5[player].push('x')

      } else if (classBox === 'box-9') {

        caseWin3[player].push('x')
        caseWin6[player].push('x')
        caseWin7[player].push('x')

      }


      if (caseWin1[player].length === 3 ||
        caseWin2[player].length === 3 ||
        caseWin3[player].length === 3 ||
        caseWin4[player].length === 3 ||
        caseWin5[player].length === 3 ||
        caseWin6[player].length === 3 ||
        caseWin7[player].length === 3 ||
        caseWin8[player].length === 3) {
        console.log('Winner Player X ');
        winnerTitle.textContent = 'Winner Player X'
      }

      player++

    } else if (player === 1) {

      box.textContent = '0'

      const classBox = box.classList[1]

      if (classBox === 'box-1') {

        caseWin1[player].push('x')
        caseWin4[player].push('x')
        caseWin7[player].push('x')

      } else if (classBox === 'box-2') {

        caseWin1[player].push('x')
        caseWin5[player].push('x')

      } else if (classBox === 'box-3') {

        caseWin1[player].push('x')
        caseWin6[player].push('x')
        caseWin8[player].push('x')

      } else if (classBox === 'box-4') {

        caseWin2[player].push('x')
        caseWin4[player].push('x')

      } else if (classBox === 'box-5') {

        caseWin2[player].push('x')
        caseWin5[player].push('x')
        caseWin7[player].push('x')
        caseWin8[player].push('x')

      } else if (classBox === 'box-6') {

        caseWin2[player].push('x')
        caseWin6[player].push('x')

      } else if (classBox === 'box-7') {

        caseWin3[player].push('x')
        caseWin4[player].push('x')
        caseWin8[player].push('x')

      } else if (classBox === 'box-8') {

        caseWin3[player].push('x')
        caseWin5[player].push('x')

      } else if (classBox === 'box-9') {

        caseWin3[player].push('x')
        caseWin6[player].push('x')
        caseWin7[player].push('x')

      }


      if (
        caseWin1[player].length === 3 ||
        caseWin2[player].length === 3 ||
        caseWin3[player].length === 3 ||
        caseWin4[player].length === 3 ||
        caseWin5[player].length === 3 ||
        caseWin6[player].length === 3 ||
        caseWin7[player].length === 3 ||
        caseWin8[player].length === 3) {
        console.log('Winner Player O ');
        winnerTitle.textContent = 'Winner Player O'
      }

      player = 0


    }



  })

})