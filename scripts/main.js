let webImage = document.querySelector('img');

webImage.onclick = function() {
    let mySrc = webImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      webImage.setAttribute ('src','images/firefox2.png');
    } else {
      webImage.setAttribute ('src','images/firefox-icon.png');
    }
}

let webButton = document.querySelector('button');
let webHeading = document.querySelector('h1');

function setUserName() {
  let userName = prompt('Welcome to our Firefox logo website. Please enter your name here.');
  if(!userName || userName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', userName);
    webHeading.innerHTML = 'The Blazing Firefox Logos, ' + 'Welcome ' + userName;
  }
}

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    webHeading.innerHTML = 'The Blazing Firefox Logos, ' + 'Welcome ' + storedName;
  }

  webButton.onclick = function() {
    setUserName();
  }