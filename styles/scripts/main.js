/* oh this a comment */
// comemnt

let feedbackButton = document.querySelector('button[id="feedback"]');
let heading = document.querySelector('h1');

function setFeedback() {
    let feedback = prompt('Please enter feemdbamk about what you think of Cheems or this site:');
    localStorage.setItem('feedback', feedback);
    heading.textContent = feedback;
  }
  
feedbackButton.onclick = function() {
    setFeedback();
    let myImage = document.querySelector('img');
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cheemsclose.jpeg') {
        myImage.setAttribute('src','images/cheems.jpeg');
    } else {
        myImage.setAttribute('src','images/cheemsarizard.jpg');
    }
}


let myImage = document.querySelector('img[src="images/cheemsclose.jpeg"]');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cheemsclose.jpeg') {
      myImage.setAttribute('src','images/hemlo.png');
      alert('hemlo!');
    } else {
      myImage.setAttribute('src','images/cheemsclose.jpeg');
    }
}
