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
    zoom: 11,
    center: uluru
  });
  let marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

// All functions/event handlers will be added automatically when this javascript file has been called (Once page loads)
(function() {
  // creates a javascript object called obj, which will contain the json information in facts.js
  let obj = JSON.parse(jsonString),
      theData = '';
  // Iterate over each fact and append it to theData variable
  for (key in obj.facts) {
    theData += `${obj.facts[key].fact} `;
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
  
  /*
  // Demonstration of how the modalDialogs in the portfolio were implemented first time round without abstracting out code
  // Open Modal Dialog1 - Rock Paper Scissors modal
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

  // Open Modal Dialog2 - Computer Science Module Chooser modal
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
  */

  /* 
  This is the equivalent of the above code whereas a function to abstract out the opening and closing of the modal dialog has been written
  The function accepts two arguments; the modalDialog to open and the new state of the dialog
  By writing code this way it reduces the amount of duplicate code as it has been abstracted out into a small function.
  */
  function openCloseModal(modalDialogToOpen, newModalDialogState) {
    let modalDialog = document.getElementById(modalDialogToOpen);
    modalDialog.style.display = newModalDialogState;
  }
  document.getElementById("rockPaperScissorsImg").addEventListener("click", function(){
    openCloseModal("modalDialog", "block");
  });
  document.getElementById("closeBtn").addEventListener('click', function() {
    openCloseModal('modalDialog', 'none');
  });
  document.getElementById("computerScienceModuleChooserImg").addEventListener("click", function(){
    openCloseModal("modalDialog1", "block");
  });
  document.getElementById("closeBtn1").addEventListener('click', function() {
    openCloseModal('modalDialog1', 'none');
  });

  /*
  // Created Javascript code to create a popup modal but cluttered up the Javascript code so throught it is best to keep it in HTML
  function createDynamicPopup(headerText, imgSrc, imgAlt) {
    let containerPopupDiv = document.createElement('div'),
        popupDiv = document.createElement('div'),
        closeBtn = document.createElement('button'),
        headerTag = document.createElement('h1'),
        image = document.createElement('img'),
        description = document.createElement('p');
        
    containerPopupDiv.className = 'container-popup';
    containerPopupDiv.id = 'modalDialog';
    containerPopupDiv.style.display = 'block';
    popupDiv.className = 'popup';
    closeBtn.id = 'closeBtn';
    closeBtn.addEventListener('click', function() {
      document.getElementById('portfolio').removeChild(containerPopupDiv);
      containerPopupDiv.style.display = 'none';
    });

    headerTag.innerHTML = headerText;
    image.src = imgSrc;
    image.alt = imgAlt;
    image.className = 'modalPicture';
    // description.innerText = descriptionParam;

    popupDiv.appendChild(closeBtn);
    popupDiv.appendChild(headerTag);
    popupDiv.appendChild(image);
    popupDiv.appendChild(description);
    containerPopupDiv.appendChild(popupDiv);
    document.getElementById('portfolio').appendChild(containerPopupDiv);
  }
  document.getElementById('rockPaperScissorsImg').addEventListener("click", createDynamicPopup("Rock Paper Scissors", "img/RockPaperScissors.jpg", "Rock Paper Scissors Picture"));
  */

  /*
  Function to check if the fields within the form are empty or contain invalid characters
  This is a function to check if the fields within the form are filled in or not.
  Uses regex to match and make sure invalid characters haven't been entered into the contact form and displays error or success message accordingly
  */
  function isFormEmpty() {
    let nameInput = document.getElementById('name').value,
        emailInput = document.getElementById('email').value,
        messageInput = document.getElementById('message').value,
        customMsg = document.getElementById('customMessage'),
        regEx = /^([^<>%$]*)$/;

        if(!nameInput || !emailInput || !messageInput) {
          customMsg.style.color = 'red';
          customMsg.innerHTML = 'Please make sure all fields are filled in';
        }
        else if(!nameInput.match(regEx) || !emailInput.match(regEx)) {
          customMsg.style.color = 'red';
          customMsg.innerHTML = 'One of your fields contains invalid characters';
        }
        else {
          customMsg.style.color = 'green';
          customMsg.innerHTML = 'Success!';
          resetContactFields();
        }
  }
  document.getElementById('submitBtn').addEventListener("click", isFormEmpty);

  // Function to get fields of contact us form and set the value to empty when all fields are valid and submit button clicked on
  function resetContactFields() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  }

  /*  
    This is an anonymous function as it has no name and is declared all at once.
    It has been done like this because the event only needs one line of code and is just as easy
    to understand like this.
    NOTE: The location specified for window.open is relevant to index.html as this is the page the user will be on.
  */
  document.getElementById('downloadCV').addEventListener('click', function() {
    window.open("misc/Kishans%20CV.pdf");
  });
})();