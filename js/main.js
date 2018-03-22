var heading1 = document.getElementById('heading1');
heading1.addEventListener('click', function () {
    var clickp = document.createElement('p');
    clickp.innerHTML = '<p> This is click number x </p>';
    document.getElementById('container').appendChild(clickp);
}
);
