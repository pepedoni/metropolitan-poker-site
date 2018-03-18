$(document).ready(function(){
$('.carousel').carousel({
	interval: 5000 //changes the speed
});
//add affix na barra superior
$('#mainNav').affix({
	offset: {
		top: 100
	}
});
//galeria de imagem no sobre.html
$(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });

});


var win = null;
function DescricaoTorneio(torneio){
	if(torneio == 'pampulha') el = "torneioPamp";
	var element = document.getElementById(el);
	var scroll  = $(document).scrollTop();
	var display = document.getElementById(el).style.display;
	if(display == "none") {
		document.getElementById(el).style.display = 'block';
		document.getElementById(el).style.top     = (50+(scroll/10));
	}
	else
		document.getElementById(el).style.display = 'none';
}