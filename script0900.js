// 'use strict'
const formElement = document.querySelector('form')
let ref1 = document.querySelector('#reflect__data-v1')
let ref2 = document.querySelector('#reflect__data-v2')

formElement.addEventListener('submit', (event) => {
  event.preventDefault()

  const formData = new FormData(formElement)

  /*  formData.forEach((value, name)=>{
      console.log(`${name}: ${value}`);*/

  obj1 = Object.fromEntries(formData)
  // console.log(obj1);
  const formDataAsString = JSON.stringify(obj1)
  // console.log(formDataAsString);
  ref1.innerHTML = formDataAsString
  console.log(ref1);

let xp1 = Array.from(formDataAsString)
console.log(xp1);
ref2.innerHTML=xp1.join('')

})