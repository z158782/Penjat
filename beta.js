/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


        
var Paraula = [];
var Lletres = ["_","_","_","_","_","_","_"];
var Vides = 7;

// Llista de paraules per al joc i les pistes associades
var paraules = ["cordes", "fetge", "forca","jutges", "jutjat", "menjen", "penjat", "quinta", "setze"];
var pistes = [ "A la quinta forca", "A ca un penjat, no hi anomenis cordes", "Setze jutges d'un jutjat mengen fetge d'un penjat"];
var paraulespistes = [1,2,0,2,2,2,1,0,2];

//Escull una paraula aleatori
var aleatori = Math.floor(Math.random() * paraules.length);
var paraula = paraules[aleatori];
var pista = pistes[paraulespistes[aleatori]];

// Marcam cada lletra amb un "_"
for (var i = 0; i < paraula.length; i++) {
    Paraula[i] = "_";
}

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
               window.alert(paraula); 
               var pos = paraula.indexOf(lletra);
               if ((pos != -1) && (lletra !="")) {
                   document.getElementById("miau").play();
                   // document.getElementById("disfraz3").hidden = true;
                   // document.getElementById("disfraz2").hidden = false;
                   // document.getElementById("disfraz1").hidden = true;
                   window.alert("Has encertat!");
                   for (var i = pos; i < paraula.length; i++) {
                     if (paraula[i] == lletra) {
                       Paraula[i] = lletra;
                  }
               }
                   document.getElementById("Lletres").innerHTML = Paraula;
           }   else if (((lletra >= "a") && (lletra <= "z")) ||
                         (lletra == "ñ") || (lletra == "-") ||
                         (lletra == "ç") || (lletra == "·")) {
                   document.getElementById("boom.cloud").play();
                   window.alert("has perdut!");
                   //document.getElementById("disfraz3").hidden = true;
                   //document.getElementById("disfraz2").hidden = true;
                   //document.getElementById("disfraz1").hidden = false;
           
            Lletres[7-Vides] = lletra;
            document.getElementById("Dolentes").innerHTML = Lletres;
             Vides--;
            MostraImg();
            if (Vides <= 0) {
               window.alert("i has perdut!");
               document.getElementById('bell_toll_x3').play();   
               AturaTot();
  } 
            document.getElementById("vida").innerHTML = "&#160;&#160;&#160;&#160;&#160;&#160;&#160;" + Vides;
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
