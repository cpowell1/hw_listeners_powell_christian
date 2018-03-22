//Click Event to H1
//Once clicked, paragraph text appears in header
var headingOne = document.getElementById('heading1');
headingOne.addEventListener('click', function () {
    var headerElement = document.createElement('heading');
    headerElement.innerHTML = '<p>I like to design websites!</p>';
    document.getElementById('heading1').appendChild(headerElement);
}
);
