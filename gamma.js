/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global Idioma */
  // Simulam una Taula de ParaulesPistes, similar a la consulta a la base de dades, amb un array d'objectes
    const Taula_dft = [
        // Deixam per defecte les paraules i pistes en Català
        {"Paraula": "cordes", "Pista": "A ca un penjat, no hi anomenis cordes"},
        {"Paraula": "fetge", "Pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"},
        {"Paraula": "forca", "Pista": "A la quinta forca"},
        {"Paraula": "jutges", "Pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"},
        {"Paraula": "jutjat", "Pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"},
        {"Paraula": "mengen", "Pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"},
        {"Paraula": "penjat", "Pista": "A ca un penjat, no hi anomenis cordes"},
        {"Paraula": "quinta", "Pista": "A la quinta forca"},
        {"Paraula": "setze", "Pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"}
    ];
    var Taula = Taula_dft;
const Idiomes_dft = [
                {
                    "IdIdioma": "ca",
                    "Titol": "Versió amb Estructures de Dades Joc del Penjat",
                    "Versio": "Versió β Joc del Penjat",
                    "Input": "Escriu una lletra minúscula",
                    "Pregunta": "Anam a la quinta forca?",
                    "Comprovar": "Comprovar",
                    "Paraula": "Paraula:",
                    "Sopes": "Demanes sopes?",
                    "Pista": "Pista",
                    "Vides": "Vides:",
                    "Moix": "Un moix en té set?",
                    "Lletres": "Lletres:",
                    "Ets": "Ets de lletres?",
                    "URLpistes": "URLpistes:",
                    "Dita": "Dita",
                    "Dita1": "A la quinta forca, ",
                    "Dita2": "A ca un penjat, no hi anomenis cordes, ",
                    "Dita3": "Setze jutges d'un jutjat mengen fetge d'un penjat, …",
                    "Credits": "Crèdits:",
                    "YouTube": "Joc Penjat on Scratch",
                    "Wikis": "Penjat",
                    "Idioma": "en Català",
                    "Diccionari": "Diccionari",
                    "Teclat": "Mostra o Amaga",
                    "Incorrecte": "Caràcter incorrecte!",
                    "Repetida": "Lletra repetida!",
                    "Encertat": "Has encertat!",
                    "Guanyat": "i has guanyat!",
                    "Fallat": "Has fallat!",
                    "Perdut": "i has perdut!",
                    "Descansi": "En pau descansi – RIP!",
                    "Puntuacio": "Puntuació:"
                },
                {
                    "IdIdioma": "es",
                    "Titol": "Versión con Estructuras de Datos Juego del Ahorcado",
                    "Versio": "Versión β Juego del Ahorcado",
                    "Input": "Escribe una letra minúscula",
                    "Pregunta": "Vamos al quinto pino?",
                    "Comprovar": "Comprobar",
                    "Paraula": "Palabra:",
                    "Sopes": "Te rindes?",
                    "Pista": "Pista",
                    "Vides": "Vidas:",
                    "Moix": "Un gato tiene siete?",
                    "Lletres": "Letras:",
                    "Ets": "Eres de letras?",
                    "URLpistes": "URLpistas:",
                    "Dita": "Dicho",
                    "Dita1": "Al quinto pino, ",
                    "Dita2": "En casa de un ahorcado, no hables de cuerdas,",
                    "Dita3": "Dieciséis jueces de un juzgado comen hígado de un ahorcado, …",
                    "Credits": "Crèditos:",
                    "YouTube": "Juego Ahorcado on Scratch",
                    "Wikis": "Ahorcado",
                    "Idioma": "en Español",
                    "Diccionari": "Diccionario",
                    "Teclat": "Muestra o Esconde",
                    "Incorrecte": "Carácter incorrecto!",
                    "Repetida": "Letra repetida!",
                    "Encertat": "Has acertado!",
                    "Guanyat": "y has ganado!",
                    "Fallat": "Has fallado!",
                    "Perdut": "y has perdido!",
                    "Descansi": "En paz descanse - RIP!",
                    "Puntuacio": "Puntuación:"
                },
                {
                       
            "IdIdioma": "en",
            "Titol": "Hangman Game Database Version",
            "Versio": "Hangman Game γ Versión",
            "Input": "Write a lowercase letter",
            "Pregunta": "Are we going to the boondocks?",
            "Comprovar": "Check it",
            "Paraula": "Word:",
            "Sopes": "You give up?",
            "Pista": "Clue",
            "Vides": "Lives:",
            "Moix": "A cat has seven?",
            "Lletres": "Letters:",
            "Ets": "Are you in liberal arts?",
            "URLpistes": "URLclues:",
            "Dita": "Saying",
            "Dita1": "To the boondocks,",
            "Dita2": "In a hanged man's home, don't talk about ropes,",
            "Dita3": "Sixteen judges of a court eat the liver of a hangman, …",
            "Credits": "Credits:",
            "YouTube": "Hangman Game on Scratch",
            "Wikis": "Hangman",
            "Idioma": "in English",
            "Diccionari": "Dictionary",
            "Teclat": "Show or Hide",
            "Incorrecte": "Wrong character!",
            "Repetida": "Repeated letter!",
            "Encertat": "You're right!",
            "Guanyat": "and you have won!",
            "Fallat": "You have failed!",
            "Perdut": "and you have lost!",
            "Descansi": "Rest in peace - RIP!",
            "Puntuacio": "Score:"
        }
    ];

var Idiomes = Idiomes_dft;
var Paraula = [];
var Lletres = ["_","_","_","_","_","_","_"];
var Vides = 7;



// Llista de paraules per al joc i les pistes associades
var paraules = ["cordes", "fetge", "forca","jutges", "jutjat", "menjen", "penjat", "quinta", "setze"];
var pistes = [ "A la quinta forca", "A ca un penjat, no hi anomenis cordes", "Setze jutges d'un jutjat mengen fetge d'un penjat"];
var paraulespistes = [1,2,0,2,2,2,1,0,2];


    var Taula = Taula_dft;
    
    // Alternativament, fent servir l'array d'objectes
    // window.alert(Taula.lenght);
    aleatori = Math.floor(Math.random() * Taula.length);
    Paraula = Taula[aleatori].Paraula;
    Pista = Taula[aleatori].Pista;
    // window.alert(aleatori=" + aleatori + ", paraula=" + paraula + ", psita=" + pista);
    

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


            function CanviarIdioma(IdIdioma) {
             window.alert("CanviarIdioma"); 
    
                if ((Idioma != "ca") && (IdIdioma != "es")) {
                    document.getElementById("Idiomes").value = IdIdioma;
                }

            AleWeb_SQLite(IdIdioma);
            Idioma = Idiomes.find(Idioma => Idioma.IdIdioma == IdIdioma);

            /*
            document.title = Idioma.Titol;
            document.getElementById("Versio").innerHTML = Idioma.Versio;
            document.getElementById("Letres").placeholder = Idioma.Input;
            document.getElementById("Comprova").innerHTML = Idioma.Comprova;
             */
        }

            function AleWeb_SQLite(IdIdioma) {
                 window.alert("AleWeb_SQLite"); 
              config = {
                    locateFile: filename => `/dist/${filename}`
              };
             alasql('ATTACH SQLITE DATABASE penjat("db/penjat.db"); USE penjat; \n\ \n\
                SELECT * FROM TblTextosGUI;',
                 [], function(idiomes) {Print_Data(Idiomes = idiomes.pop());}
             // [], function(idiomes) {SQL_TblTextosGUI(IdIdioma, idiomes.pop());}
             );

            //Recuperam de la base de dades les paraules del IdIdioma
            /*
                alasql ('ATTACH SQLITE DATABASE penjat("db/penjat.db"); USE penjat; \n\
                     SELECT Paraula, Pista \n\ \n\
                     FROM TblParaules INNER JOIN TblPistes \n\
                       ON TblParaules.IdPista = TblPistes \n\
                     WHERE TblParaules.IdIdioma = "' + IdIdioma + '";',
            //     [], function(taula) {Print_Data(Taula = taula.pop());}
             [], function(taula) {SQL_TblParaulesPistes(IdIdioma, taula.pop());}
        );                         
             */

            }
       
            function SQL_TblTextosGUI(IdIdioma, TblTextosGUI) {
                Idiomes = TblTextosGUI;
                if (Idiomes.length == 0) {Idiomes = Idiomes_dft; };
                if (Idiomes.find(Idioma.IdIdioma == IdIdioma) == undefined) {
                    window.alert("GUI: Idioma no trobat / Idioma no encontrado / Language not found!");
                };
            }
            
            function SQL_TblParaulesPistes(IdIdioma, TblParaulesPistes) {
            // window.alert("SQL_TblParaulesPistes IdIdiomes = '" + IdIdiomes + '");
            Taula = TblParaulesPistes;
            if (Taula.length == 0) {
                window.alert("Idioma sense paraules / Idioma sin palabras / Language without words!");
                Taula = Taula_dft;
                IdIdioma = "ca";
                IdIdioma_ant = IdIdioma;
            } else {
                // window.alert("Paraules en idioma / Palabras en idioma / Language words = '" + IdIdioma + "'");
            };
                // window.alert(Taula[0].Pista);
            }


          // Print data  
    function Print_Data(res) {
        for (var i in res)
        {
           // console.log("row " + i);
           // document.getElementById("res").innerHTML += "<br>";
           for (var j in res[i])
             {
              // console.log(" " + res[i][j]);
              // document.getElementById("res").innerHTML += res[i][j] + ", ";
              window.alert("res[" + i + "][" +j + "] = " + res[i][j]);
             }
        }
    }