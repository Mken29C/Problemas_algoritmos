function verificar(form) {
    
    var numOK = "1234567890.";
    var compra = form.compra.value;
    var allValido = true;

    for(var i = 0; i < compra.length; i++){
        var caracteres = compra.charAt(i);
        for (var j = 0; j < numOK.length; j++) {
            if (caracteres == numOK.charAt(j)) {
                break;
            }
        }
        if (j == numOK.length) {
            allValido = false;
            break;
        }
    }

    if (!allValido) {
        alert("Escriba unicamente numeros en el campo");
        form.compra.focus();
        return false;
    } else {
        var compra = form.compra.value;
        var descuento = compra - (compra*(3/20));
        alert("El descuento final es de: " + descuento);
    }

}