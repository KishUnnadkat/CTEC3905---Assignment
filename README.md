# CTEC3905---Assignment Portfolio Website
Welcome to my Github repository for my CTEC3905 Assignment where I chose to create a single page web application portfolio site for myself consisting of a few of my development projects that I have undertaken throughout my time at university.
<br/>
[Github repository](https://github.com/KishUnnadkat/CTEC3905---Assignment)
<br/>
[Github pages link](https://kishunnadkat.github.io/CTEC3905---Assignment/)


## Designs/Prototypes created on Invisionapp
These are the initial designs created on invisionapp before starting development of the portfolio website.
![Designs for Mobile](img/mobiledesigns.png "Designs for mobile portfolio website")
![Designs for Desktop](img/desktopdesigns.png "Designs for desktop portfolio website")
Designs were not done for tablet styles as I wanted the tablet styles to be similar to the desktop styles and therefore simply resized everything to look proportional on a tablet.
<br/>
When doing the designs for my portfolio website the PARC principles were taken into consideration.
* Proximity - Common elements were grouped together (e.g. Assignments grouped into portfolio section)
* Alignment - When placing elements throughout the website, the alignment was an important point as it needed to look correct on all different devices (mobile, tablet and desktop)
* Repetition - Repetition has been used throughout in terms of fonts, sizes and the portfolio modal pictures and dialogs to keep a simplistic and consistent design throughout the website.
* Contrast - The colours and background images for the various sections look like a good contrast and makes each section stand out (e.g. When going from the About Me section to the Contact Me section)


## Development Process
This section of the readme talks about the development process and the some features that were implemented as part of this assignment
* The responsive navigation menu Javascript code was based on the W3Schools example and was adapted to suit my portfolio website
* This website was designed mobile first as demonstrated by the 'min-width' in the css and the site has the following breakpoints - 768px for tablets and 1250px for desktops
* The Google Maps API was used as an external API to display a map of my home location and the provided combined google maps example code was adapted and abstracted out into the relevant css and javascript files
* An external json file called facts.js containing a json array was used to populate the paragraph text in the 'About Me' section.
* On this site, my CV can be viewed/downloaded and my assignments can be downloaded. All these files are linked to the files in the `misc` folder. My assignments are .rar files, which have been password protected.
* The portfolio modal pictures for the computer science module chooser and rock paper scissors assignment was created myself
* The Contact Me form contains some validation to make sure fields are valid, which I wrote using Javascript and learnt during my placement.
* font-awesome was used for the social media links at the bottom of the page
* The sitemap was created at the bottom of the page as the mark scheme specified but is not necessary as this is a single page web app and is easy enough to navigate through.

NOTE: When committing and doing branching process for tablet styles, it didn't work properly and got slightly confused so may not show up on github properly. I then downloaded a GUI called 'sourcetree' to commit my desktop styles branch that I created and didn't show how the branch merged into master visually. Master contains all merged branches but not sure if displayed visually properly.
#### This website has no console errors and has been run through the HTML validator to make sure it is valid HTML5


## Testing
### All links on the site tested including:
- All links in navigation menu (in all modes)
- Portfolio modal dialogs
- Download Links for assignments in modal dialog
- Close buttons in modal dialog
- View my CV button
- Contact us submit button behaves correctly
- Footer social media links
- Footer sitemap links
- Evidence of mobile testing ![Evidence of user testing for mobile](img/mobiletesting.gif "Evidence of User Testing for mobile")
- Evidence of tablet testing ![Evidence of user testing for tablet](img/tablettesting.gif "Evidence of User Testing for tablet")
- Evidence of desktop testing ![Evidence of user testing for desktop](img/desktoptesting.gif "Evidence of User Testing for desktop")
- NOTE: The gif images may not load properly on the readme file on github as the files are quite large, to view user testing properly, view the gifs in the img directory.
- NOTE: The user test was done by my sister recorded on my laptop


### When writing the function to see if the fields are blank or contain invalid characters the following combinations were tested
#### The message field can contain any characters as the user may want to enter other characters
- Typing 'Kishan Unnadkat' as name, 'P14176943@my365.dmu.ac.uk' as email, 'Testing' as message    -> Valid
- Typing 'P14176943' as name, 'P14176943@my365.dmu.ac.uk' as email, 'P14176943' as message        -> Valid
- Typing 'Testing' as name, 'P14176943@my365.dmu.ac.uk' as email, '!@£$%^&*()_' as message        -> Valid
- Typing '!@£$%^&*()_' as name, '!@£$%^&*()_' as email, '!@£$%^&*()_' as message                  -> Invalid
- Typing '!@£$%^&*()_' as name, 'P14176943@my365.dmu.ac.uk' as email, 'Testing' as message        -> Invalid
- Typing 'Testing' as name, '!@£$%^&*()_' as email, 'Testing' as message                          -> Invalid


### Other various testing
- Resizing at each breakpoint works (768px and 1250px)
- Works on all devices (Mobile, Tablet and Desktop)
- Animation works for responsive icon for mobile
- Validated on HTML validator and No console errors throughout the site


## References
* Gandy, D. (2017). Font Awesome, the iconic font and CSS toolkit. [online] Fontawesome.io. Available at: http://fontawesome.io/ [Accessed 9 Dec. 2017].
* Validator.w3.org. (2017). The W3C Markup Validation Service. [online] Available at: https://validator.w3.org/ [Accessed 6 Dec. 2017].
* W3schools.com. (2017). How To Create a Responsive Top Navigation Menu. [online] Available at: https://www.w3schools.com/howto/howto_js_topnav_responsive.asp [Accessed 6 Dec. 2017].