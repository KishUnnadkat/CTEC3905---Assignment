(function() {
  
  // Function that appends 'responsive' to the classname when hamburger menu has been clicked on
  function clickHamburgerMenu() {
    let navBar = document.getElementById("topNavigationBar");
    if (navBar.className === "topNavigation") {
      navBar.className += " responsive";
    } else {
      navBar.className = "topNavigation";
    }
  }
  
  // Add event listener so when responsive menu clicked on, runs clickHamburgerMenu function
  document.getElementById('responsiveIcon').addEventListener("click", clickHamburgerMenu);
})();