console.log('1')

const $firstname = document.getElementById('first-name')
const $lastname = document.getElementById('last-name')
const $email = document.getElementById('email')
const $password = document.getElementById('psw')

//const $error = document.getElementById('error-message')

function toggleVisibility  ($firstname,$lastname,  $email, $password )  {
    $firstname.preventDefault()
    console.log($firstname)

  
};

$firstname.addEventListener('invalid', toggleVisibility);
$lastname.addEventListener('invalid', toggleVisibility);
$email.addEventListener('invalid', toggleVisibility);
$password.addEventListener('invalid', toggleVisibility);
