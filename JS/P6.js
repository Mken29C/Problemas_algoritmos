function verificar(form) {
    
    var numOK = "1234567890.";
    const fecha = new Date();
    var dia = form.dia.value;
    var dact = fecha.getDate();
    var mact = fecha.getMonth() + 1;
    var yact = fecha.getFullYear();
    var mes = form.mes.value;
    var year = form.year.value;
    var allValido = true;

    for(var i = 0; i < dia.length; i++){
        var caracteres = dia.charAt(i);
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
        form.dia.focus();
        return false;
    } else {
        for(var i = 0; i < mes.length; i++){
            var caracteres = mes.charAt(i);
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
            form.mes.focus();
            return false;
        } else {
            for(var i = 0; i < year.length; i++){
                var caracteres = year.charAt(i);
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
                form.year.focus();
                return false;
            } else {
                var edad = Math.abs(parseInt(yact) - parseInt(year));
                var dmes = Math.abs(parseInt(mes) - parseInt(mact));
                var ddia = Math.abs(parseInt(dact) - parseInt(dia));
                if(ddia > 0){
                    edad--;
                }
                alert(edad);
            }
        }
    }

}