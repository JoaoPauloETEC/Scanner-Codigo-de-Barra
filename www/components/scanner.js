
$(document).on('click','#scanner', function(){
 scanBarcode();
});

function scanBarcode() {
        window.plugins.barcodeScanner.scan( function(result) {
                if(result.text == "280720550"){
                  location.href = "ipad.html";
                }
                else if(result.text == "989895555"){
                  location.href = "samsung.html";
                }
                else if(result.text == "8523697"){
                  location.href = "motorola.html";
                }
                else if(result.text == "85369877444"){
                  location.href = "asus.html";
                }
                else{
                  alert("Esse código de barra não esta registrado no banco de dados");
                }
            }, function(error) {
                alert("Código de barra invalido: " + error);
            }
        );

    }

$(document).on('click','#btn1', function(){
 location.href = "ipad.html";
});

$(document).on('click','#btn2', function(){
 location.href = "samsung.html";
});

$(document).on('click','#btn3', function(){
 location.href = "motorola.html";
});

$(document).on('click','#btn4', function(){
 location.href = "asus.html";
});

$(document).on('click','#voltar', function(){
 location.href = "index.html";
});