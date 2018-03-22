//Click Event to H1
//Once clicked, paragraph text appears in header
var headingOne = document.getElementById('heading1');
headingOne.addEventListener('click', function () {
    var headerElement = document.createElement('heading');
    headerElement.innerHTML = '<p>I like to design websites!</p>';
    document.getElementById('heading1').appendChild(headerElement);
}
);

//Change Education H2 to Different Font and Font Color
var sectioncolor = document.getElementById('education');
sectioncolor.addEventListener('mouseover', function () {
    sectioncolor.id = 'pink';
}
);
//When Copied The Text Content Changes from Work Experience to "Looks Like You Want to Hire Me"
var textChange = document.getElementById('work');
textChange.addEventListener('copy', function () {
    textChange.innerHTML = '<h1>Looks Like You Want To Hire Me';
}
);
