    let btnAA = document.querySelector('#AA');
    let btnAB = document.querySelector('#AB');
    let btnAC = document.querySelector('#AC');
    btnAA.addEventListener('click', () => btnAA.style.backgroundColor = '#ba2323')
    btnAB.addEventListener('click', () => btnAB.style.backgroundColor = '#ba2323')
    btnAC.addEventListener('click', () => btnAC.style.backgroundColor = '#5beb34')

  let btnBA = document.querySelector('#BA');
    let btnBB = document.querySelector('#BB');
    let btnBC = document.querySelector('#BC');
    btnBA.addEventListener('click', () => btnBA.style.backgroundColor = '#ba2323')
    btnBB.addEventListener('click', () => btnBB.style.backgroundColor = '#5beb34')
    btnBC.addEventListener('click', () => btnBC.style.backgroundColor = '#ba2323')

let btnCA = document.querySelector('#CA');
    let btnCB = document.querySelector('#CB');
    let btnCC = document.querySelector('#CC');
    btnCA.addEventListener('click', () => btnCA.style.backgroundColor = '#5beb34')
    btnCB.addEventListener('click', () => btnCB.style.backgroundColor = '#ba2323')
    btnCC.addEventListener('click', () => btnCC.style.backgroundColor = '#ba2323')

 if (document.getElementsById('AC').style.display == 'block') {

 }

function correct(){
        correct.style.display = 'block'
    }

// When the user clicks on <div>, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
