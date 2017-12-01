/* 
  This function initMap() needs to be in the global scope of the javascript so the callback for googlemaps api can work properly.
  Changed to use let instead of var 
*/
function initMap() {
  let uluru = {
    lat: 51.5751,
    lng: 0.1858
  };
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: uluru
  });
  let marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

// All functions/event handlers will be added automatically when this javascript file has been added
(function() {
  
  // creates a javascript object called obj, which will contain the json information in facts.js
  let obj = JSON.parse(jsonString),
      theData = '';
  // Iterate over each fact and append it to theData variable
  for (key in obj.facts) {
    theData += `${obj.facts[key].fact}`;
  }
  // populates the chosen element's content with the data:
  document.getElementById('information').innerHTML = theData;

  
  /* 
  Function that appends 'responsive' to the classname when hamburger menu has been clicked on
  Tutorial followed for javascript eventlistener - https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
  Has been adapted with meaningful variable names and let instead of var
  */
  function clickHamburgerMenu() {
    let navBar = document.getElementById('topNavigationBar');
    if (navBar.className === 'topNavigation') {
      navBar.className += ' responsive';
    } else {
      navBar.className = 'topNavigation';
    }
  }
  // Add event listener so when responsive menu clicked on, runs clickHamburgerMenu function
  document.getElementById('responsiveIcon').addEventListener('click', clickHamburgerMenu);
  
  
  // Open Modal Dialog1
  function openModal1() {
    let modalDialog = document.getElementById('modalDialog');
    modalDialog.style.display = 'block';
  }
  document.getElementById('rockPaperScissorsImg').addEventListener('click', openModal1);
  function closeBtnOnModal1() {
    let modalDialog = document.getElementById('modalDialog');
    modalDialog.style.display = 'none';
  }
  document.getElementById('closeBtn').addEventListener('click', closeBtnOnModal1);

  // Open Modal Dialog2
  function openModal2() {
    let modalDialog = document.getElementById('modalDialog1');
    modalDialog.style.display = 'block';
  }
  document.getElementById('computerScienceModuleChooserImg').addEventListener('click', openModal2);
  function closeBtnOnModal2() {
    let modalDialog = document.getElementById('modalDialog1');
    modalDialog.style.display = 'none';
  }
  document.getElementById('closeBtn1').addEventListener('click', closeBtnOnModal2);

  // Tried to abstract out the open close states by passing parameters into function on eventListener but didn't work
  // function openCloseModal(modalDialogToOpen, newModalDialogState) {
  //   let modalDialog = document.getElementById(modalDialogToOpen);
  //   modalDialog.style.display = newModalDialogState;
  // }
  // document.getElementById('rockPaperScissorsImg').addEventListener('click', openCloseModal('modalDialog', 'block'));
  // document.getElementById('closeBtn').addEventListener('click', openCloseModal('modalDialog', 'none'));
  // document.getElementById('computerScienceModuleChooserImg').addEventListener('click', openCloseModal('modalDialog1', 'block'));
  // document.getElementById('closeBtn1').addEventListener('click', openCloseModal('modalDialog1', 'none'));

  /*  
    This is an anonymous function as it has no name and is declared all at once.
    It has been done like this because the event only needs one line of code and is just as easy
    to understand like this.
    NOTE: The location is relevant to index.html as this is the page the user will be on.
  */
  document.getElementById('downloadCV').addEventListener('click', function() {
    window.location = "misc/Kishans%20CV.pdf";
  });
})();