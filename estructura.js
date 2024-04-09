/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var Paraula = [];
var Lletres = ["_","_","_","_","_","_","_",];
var Vides = 7;
var Punts
var Idioma_ant

// Llista de paraules per al joc i les pistes associades
var paraula = ["cordas", "fetge", "forca","jutges", "jutjat", "menjen", "penjat", "quinta", "setze"];
var pistes = [ "A la quinta forca", "A ca un penjat, no hi anomenis cordes", "Setze jutges d'un jutjat mengen fetge d'un penjat"];
var paraulespistes = [1,2,0,2,2,2,1,0,2];

//Escull una paraula aleatori
var aleatori = Math.floor(Math.random() * paraules.length);
var paraula = paraules[aleatori];
var pista = pistes[paraulespistes[aleatori]];

// Marcam cada lletra amb un "_"
for (var i = 0; i < paraula.lenght; i++) {
    Paraula[i] = "_";
}
