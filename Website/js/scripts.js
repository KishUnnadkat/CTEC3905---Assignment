
// This function initMap() needs to be in the global scope of the javascript so the callback for googlemaps api can work properly.
function initMap() {
  var uluru = {
    lat: 51.5751,
    lng: 0.1858
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

// All functions/event handlers will be added automatically
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