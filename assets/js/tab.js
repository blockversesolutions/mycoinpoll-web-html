// start ico tab js
function active_coin_tab(evt, coinName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("ico-tab-content");
    for (i = 0; i < tabcontent.length; i++) {
       tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("ico-tab-btn");
    for (i = 0; i < tablinks.length; i++) {
       tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(coinName).style.display = "block";
    evt.currentTarget.className += " active";
    }
    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();
    // End ico tab js