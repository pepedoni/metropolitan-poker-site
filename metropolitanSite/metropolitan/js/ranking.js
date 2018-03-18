function abrir(idElement) {
    var element = document.getElementById(idElement);
    var display = element.style.display;
    if(display) element.style.display = (display == 'block') ? 'none' : 'block';
    else element.style.display = 'block';
}