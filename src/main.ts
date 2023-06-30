
const nameEL = document.getElementById('name')
const emailEL = document.getElementById('email')

const submitEl = document.getElementById('submit')

console.log( nameEL.value, emailEL.value)


submitEl?.addEventListener('click', function(){
  console.log('i was clicked')
})
