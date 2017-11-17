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