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
  // Function that appends 'responsive' to the classname when hamburger menu has been clicked on
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
  document.getElementById('rockPaperScissorsDiv').addEventListener('click', openModal1);

  function closeBtnOnModal() {
    let closeBtn = document.getElementById('closeBtn'),
        modalDialog = document.getElementById('modalDialog');
    modalDialog.style.display = 'none';
  }
  document.getElementById('closeBtn').addEventListener('click', closeBtnOnModal);






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