var heading1 = document.getElementById('heading1');
var clickNumber = 1;

heading1.addEventListener('click', function () {
    var clickp = document.createElement('p');
    
    
    clickp.innerHTML = 'This is click number' + clickNumber;
    clickNumber = clickNumber + 1;
    
    document.getElementById('container').appendChild(clickp);
    
    
});
