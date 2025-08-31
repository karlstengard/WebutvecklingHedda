function HilightActivePageLink(){
    /* This function hilights the current webpage */
    let navs = document.getElementsByTagName('nav'); // Gets all the navs
    let path = window.location.pathname.split("/").pop(); // Current file name
    for (let i=0; i<navs.length; i++){ // Go through the navs
        let links = navs[i].childNodes; // Find all their children (links)
        for (let j=0; j<links.length; j++){ // Go through every link
            if (links[j].nodeName === 'A'){ // The first nav contains buttons
                if (links[j].getAttribute('href') === path){ // Check if current file
                    links[j].classList.add('active-link'); // Change the appearence of active link
                    return // Stop searching
                }
            }
        }
    }
}

function HilightActiveSectionLink(){
    /* This function hilights the active part of the page in the scrolling navbar */
    let parts = Array.from(document.getElementsByTagName('article')).concat(Array.from(document.getElementsByTagName('section'))); // Get all parts
    let y_pos; // Variable for y position
    for (let i=0; i<parts.length; i++){ // Go through all parts
        y_pos = parts[i].getBoundingClientRect()['y']; // Get element's y position
        if (y_pos <= 200){ // It is on screen
            let id = parts[i].getAttribute('id'); // This is the id of the part we're on
            let aside = document.getElementsByTagName('aside'); // Find my aside with the links
            let links; // Variable for later
            aside = aside[0].childNodes; // Find all the elements in sidebar
            for (let j=0; j<aside.length; j++){ // Go through the entire sidebar
                if (aside[j].nodeName === 'NAV'){ // Find the nav
                    links = aside[j].childNodes; // Store the links
                }
            }
            if (id != null){ // Make sure the part has an id
                for (let j=0; j<links.length; j++){ // Go through all links
                    if (links[j].nodeName === 'A'){ // Make sure it's a link
                        if (links[j].getAttribute('href')==="#"+id){ // If we find the corresponding link
                            links[j].classList.add('active-link'); // Hilight the link
                        }
                        else{
                            links[j].classList.remove('active-link'); // Clear other links
                        }
                    }
                }
            }
        }
    }
}