/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

        var Vides = 7;
        var correctes = "";
            var Dolentes = "";
        var Lletres = "";

        function Comprovar() {

            var lletra = document.getElementById("valor").value;
            document.getElementById("valor").value = "";
            lletra = lletra.toLowerCase();

            switch (lletra) {

        case "á":
        case "à":
            lletra = "a";
            break;
        case "é":
        case "è":
            lletra = "e";
           break;
        case "í":
        case "ì":
            lletra = "i";
           break;
        case "ó":
        case "ò":
            lletra = "o";
           break;
        case "ú":
        case "ù":
        case "ü":
            lletra = "u";
            break;
            }

            if (((lletra >= "a") && (lletra <= "m")) || (lletra == "ç")) {
                window.alert("Has encertat!");
                document.getElementById('miau').play();  


                LLetres = LLetres + lletra + ", ";
                document.getElementById("Lletres").innerHTML = LLetres;

        }   else if (((lletra >= "n") && (lletra <= "z")) || (lletra == "ñ")) {
                window.alert("Has fallat");
                document.getElementById('boom_cloud').play();   
                
                if (Dolentes == ""){
                    Dolentes = Dolentes  + lletra; 
                }
                else{
                    Dolentes = Dolentes  + ", " + lletra;
                }
                document.getElementById("Dolentes").innerHTML = Dolentes;

            Vides = Vides - 1;
            MostraImg();

        }
                document.getElementById("vida").innerHTML =
                    "&#160;&#160;&#160;&#160;&#160;&#160;&#160;" + Vides;

            if (Vides <= 0) {
               window.alert ("i has perdut!")
               document.getElementById('bell_toll_x3').play();   
               AturaTot();
  } 
            else {
            if (Lletres.lenght >= 14) {
                window.alert("i has guanyat")
                AturaTot();
        }

    }
}

        function AturaTot() {

            document.getElementById("valor").disabled = true;
            document.getElementById("Comprovar").disabled = true;
        }
          function MostraImg() {

          switch (Vides) { 

            case 6:

            document.getElementById("ahorcado_6").hidden=false
            break;

            case 5:

            document.getElementById("ahorcado_5").hidden=false;
            document.getElementById("ahorcado_6").hidden=true;
            break;

            case 4:

            document.getElementById("ahorcado_4").hidden=false;
            document.getElementById("ahorcado_5").hidden=true;
            break;

            case 3:

            document.getElementById("ahorcado_3").hidden=false;
            document.getElementById("ahorcado_4").hidden=true;
            break;

            case 2:

            document.getElementById("ahorcado_2").hidden=false;
            document.getElementById("ahorcado_3").hidden=true;
            break;

            case 1:

            document.getElementById("ahorcado_1").hidden=false;
            document.getElementById("ahorcado_2").hidden=true;
            break;

            case 0:

            document.getElementById("ahorcado_0").hidden=false;
            document.getElementById("ahorcado_1").hidden=true;
            break;

            default:
            break;
        }
    }

            function amaga() {

            document.getElementById("ahorcado_0").hidden=true;
            document.getElementById("ahorcado_1").hidden=true;
            document.getElementById("ahorcado_2").hidden=true;
            document.getElementById("ahorcado_3").hidden=true;
            document.getElementById("ahorcado_4").hidden=true;
            document.getElementById("ahorcado_5").hidden=true;
            document.getElementById("ahorcado_6").hidden=true;

            }

