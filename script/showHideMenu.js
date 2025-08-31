function menuSizeChange(){

    let htmlnav, cssnav, jsnav, htmlstyle, cssstyle, jsstyle;

    htmlnav = document.getElementById("htmlnav");
    cssnav = document.getElementById("cssnav");
    jsnav = document.getElementById("jsnav");

    htmlstyle = getComputedStyle(htmlnav);
    cssstyle = getComputedStyle(cssnav);
    jsstyle = getComputedStyle(jasnav);


    if (window.innerWidth <= 1000){

        if (htmlstyle == 'flex'){
            htmlnav.style.display = "block";
        }
        else if (cssstyle == 'block'){
            htmlnav.style.display = "flex";
        }
        else if (cssstyle == 'flex'){
            cssstyle.style.display = "block";
        }
        else if (cssstyle == 'block'){
            cssstyle.style.display = "flex";
        }
        else if (jsstyle == 'flex'){
            jsstyle.style.display = "block";
        }
        else if (jsstyle == 'block'){
            jsstyle.style.display = "flex";
        }
    }
    else{
        if (htmlstyle == 'flex'){
            htmlnav.style.display = "block";
        }
        else if (cssstyle == 'block'){
            htmlnav.style.display = "flex";
        }
        else if (cssstyle == 'flex'){
            cssstyle.style.display = "block";
        }
        else if (cssstyle == 'block'){
            cssstyle.style.display = "flex";
        }
        else if (jsstyle == 'flex'){
            jsstyle.style.display = "block";
        }
        else if (jsstyle == 'block'){
            jsstyle.style.display = "flex";
        }
    }
}

function showHideMenu(id){

    //för att kunan dölja om reda uppe
    let shown = document.getElementById(id).style.display;

    //console.log(1);

    // Dölj alla först
    document.getElementById("html-nav").style.display = 'none';
    document.getElementById("css-nav").style.display = 'none';
    document.getElementById("js-nav").style.display = 'none';
    
    // Visa den vi vill ha
    if (shown == 'none' || shown == ''){
        //if (window.innerWidth <= 1000){
        //    document.getElementById(id).style.display = 'block';
        //}
        //else{
        //    document.getElementById(id).style.display = 'flex';
        //}
        document.getElementById(id).style.display = 'flex';
    }
    else{
        document.getElementById(id).style.display = 'none';
    }
}


function menuButtonToggle() {
    // Detta fixar animationen
    let but = document.getElementById("sammbutton");
    but.classList.toggle("change");

    let samm = document.getElementById('sammanfattning');

    if (samm.style.display == ''){
        samm.style = getComputedStyle(samm);
    }

    if (samm.style.display == 'none'){
        samm.style.display = 'block';
    }
    else{
        samm.style.display = 'none';
    }
    
}

  /*
function openNav(){
    document.getElementById("main-nav").style.display = "block";
    document.getElementById("navbutton1").style.display = "none";
    document.getElementById("navbutton2").style.display = "block";
}

function closeNav(){
    document.getElementById("main-nav").style.display = "none";
    document.getElementById("navbutton1").style.display = "block";
    document.getElementById("navbutton2").style.display = "none";
}
*/


// This write this in your document:
/*
<script src="script/showHideMenu.js"></scipt>

<script>
    let id = "id";
    let knapp = "knapp";
    document.getElementById(knapp).addEventListener('click', a => showHideMenu(id));
</script>
*/