document.addEventListener('DOMContentLoaded', function() {
  console.log('loaded');
});

  var header1 = document.getElementsByTagName('h1')
  console.log(header1)

  var header2 = document.getElementById('headerID')
  console.log(header2)

var newParagraph = document.createElement('p');
document.body.appendChild(newParagraph);
newParagraph.innerText = 'hi';
newParagraph.style.background = 'pink';

newParagraph.addEventListener('click', function(event) {
  event.target.innerText = 'changed';
});

var paragraph2 = document.createElement('p2');
document.body.appendChild(paragraph2); // allows to display on screen
paragraph2.innerText = 'My name is Deborah';
paragraph2.style.fontSize = '18px';
paragraph2.style.fontFamily = 'sans-serif';
paragraph2.style.padding = '10px';
paragraph2.style.border = '1px solid orange';
paragraph2.style.width = '100px';

paragraph2.addEventListener('mouseover', red);
  


function red(){
  paragraph2.style.color = "red"; // on hover change font colour 

};