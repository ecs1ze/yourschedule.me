let username = document.querySelector('#name');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let registerButton = document.querySelector('#registerButton');

let users = {};

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

function CreateId(users) {
  return Object.keys(users).length;
}

registerButton.addEventListener('click', () => {
  const nameUser = username.value;
  const emailUser = email.value;
  const passwordUser = password.value;

  const user = new User(nameUser, emailUser, passwordUser);

  const userId = 'User' + CreateId(users);
  users[userId] = user;

  console.log(users);
});
