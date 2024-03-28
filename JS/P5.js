function verificar(form) {
    
    var numOK = "1234567890.";
    var hombres = form.hombres.value;
    var mujeres = form.mujeres.value;
    var allValido = true;

    for(var i = 0; i < hombres.length; i++){
        var caracteres = hombres.charAt(i);
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
        form.hombres.focus();
        return false;
    } else {
        for(var i = 0; i < mujeres.length; i++){
            var caracteres = mujeres.charAt(i);
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
            form.mujeres.focus();
            return false;
        } else {
            var total = parseFloat(hombres) + parseFloat(mujeres);
            var ph = (parseFloat(hombres) / parseFloat(total))*100;
            var pm = (parseFloat(mujeres) / parseFloat(total))*100;
            alert("Hay " + ph + "% de hombres y " + pm + "% de mujeres");
        }
    }

}