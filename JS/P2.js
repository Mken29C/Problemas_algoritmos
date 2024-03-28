function verificar(form) {
    
    var numOK = "1234567890.";
    var venta1 = form.venta1.value;
    var venta2 = form.venta2.value;
    var venta3 = form.venta3.value;
    var allValido = true;

    for(var i = 0; i < venta1.length; i++){
        var caracteres = venta1.charAt(i);
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
        form.venta1.focus();
        return false;
    } else {
        for(var i = 0; i < venta2.length; i++){
            var caracteres = venta2.charAt(i);
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
            form.venta2.focus();
            return false;
        } else {
            for(var i = 0; i < venta3.length; i++){
                var caracteres = venta3.charAt(i);
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
                form.venta3.focus();
                return false;
            } else {
                var comision = parseFloat(venta1*(1/10)) + parseFloat(venta2*(1/10)) + parseFloat(venta3*(1/10));
                var total = parseFloat(venta1) + parseFloat(venta2) + parseFloat(venta3) + parseFloat(comision);
                alert("La comision fue de: " + comision);
                alert("La venta total es de: " + total);
            }
        }
    }

}