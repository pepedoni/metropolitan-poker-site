$('document').ready(function(){
    $("#blindPampulhaBtn").click(function(){
          
        $(function(){
            $("#modalBlindsPampulha").load("templates/blindTorneioPampulha.tmpl.html"); 
        });
    })
});

$('document').ready(function(){
    $("#blindPiemonteBtn").click(function(){
          
        $(function(){
            $("#modalBlindsPiemonte").load("templates/blindTorneioPiemonte.tmpl.html"); 
        });
    })
});

$('document').ready(function(){
    $("#blindFreerollBtn").click(function(){
          
        $(function(){
            $("#modalBlindsFreeroll").load("templates/blindTorneioFreeroll.tmpl.html"); 
        });
    })
});

$('document').ready(function(){
    $("#blindMineiraoBtn").click(function(){
          
        $(function(){
            $("#modalBlindsMineirao").load("templates/blindTorneioMineirao.tmpl.html"); 
        });
    })
});