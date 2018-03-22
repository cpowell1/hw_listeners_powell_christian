var formInfo = document.getElementById('form');
formInfo.addEventListener('submit', function userInfo() {
    userInfo.preventDefault();
    var inputName = document.getElementsByClassName('inputValues');
    console.log(inputName.value);
});

