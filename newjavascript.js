/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

        var vides = 7;
        var correctes = "";

        function Comprovar () {

            lletra = document.getElementById("valor").value;

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
                document.getElementById('cheer').play();  


                Paraula = Paraula + lletra + " ";
                document.getElementById(Paraula).innerHTML = Paraula;

        }   else if (((lletra >= "n") && (lletra <= "z")) || (lletra == "ñ")) {
                window.alert("Has fallat");
                document.getElementById('boom_cloud').play();   

                Lletres = Lletres  + ", " + lletra;
                document.getElementById("Lletres").innerHTML = Lletres;

            Vides = Vides - 1;
            MostraImg ()

        }
                document.getElementById("Vides").innerHTML =
                    "&#160;&#160;&#160;&#160;&#160;&#160;&#160;" + Vides;

            if (Vides <= 0) {
               window.alert ("i has perdut!")
               document.getElementById('bell_toll_x3').play();   
               AturaTot ();

           } else {
               if (Paraula.lenght >= 14) {
                   window.alert("i has guanyat")
                   Aturatot();
        }

    }
}

        function AturaTot () {

            document.getElementById("lletra").disabled = true;
            document.getElementById("Comprovar").disabled = true;
        }
          function MostraImg () {

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

