let myHeading = document.querySelector('.box-welcome');

function setUserName() {
    let myName = prompt('Your name?');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hi! ' + myName;
  }

setUserName();