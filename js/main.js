var formInfo = document.getElementById('form');
var firstName = document.getElementById('inputValue1');
var lastName = document.getElementById('inputValue2');
var emailName = document.getElementById('inputValue3');
var message = document.getElementById('inputValue4');

formInfo.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('The first name is' + firstName.value);
    console.log('The last name is' + lastName.value);
    console.log('The email is' + emailName.value);
    console.log('The message is' + message.value);
});

