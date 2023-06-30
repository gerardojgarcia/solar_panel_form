
const nameEL = document.getElementById('name')
const emailEL = document.getElementById('email')

const submitEl = document.getElementById('submit')
const addressEl = document.getElementById('address')
const panelsEl = document.getElementById('panels')
const recurringEl = document.getElementById('recurring')


console.log( nameEL?.value , emailEL?.value)



interface User {
  name: string,
  email: string,
  address: string,
  panels: number;
  recurring: Boolean;


}

class UserAccount {
  name: string;
  email: string;
  address: string;
  panels: number;
  recurring: Boolean;

  constructor(name: string, email: string, address: string, panels: number, recurring: boolean){
    this.name = name
    this.email = email
    this.address = address
    this.panels = panels
    this.recurring = recurring
  }

}





submitEl?.addEventListener('click', function(){
  console.log('i was clicked')



var newName = nameEL?.value
var newEmail = emailEL?.value
var newAddress = addressEl?.value
var newPanels = panelsEl?.value
var newRecurring = recurringEl?.value



const user: User = new UserAccount( newName, newEmail, newAddress, newPanels, newRecurring )

console.log(user)
const displayEl = document.getElementById('app__container-display')

displayEl.innerHTML = `<p>${user.name}</p>
  <p>${user.email}</p>
  <p>${user.address}</p>
  <p>${user.panels}</p>
  <p>${user.recurring}</p>


  `




})
