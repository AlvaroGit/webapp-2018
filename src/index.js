import './css/main.css';
import './scss/main.scss';
//import {capLettre} from './module';

import * as outils from './js/module';

import moment from 'moment';
import 'moment/locale/fr';


//Importation de la class METEO
import Meteo from './js/meteoclassinfohandlebars';
//import Meteo from './js/meteoclassinfosjquery';

           

//-----------------Variables-------------------------
var maDate = document.querySelector('.date');
var maintenant = moment();

//------------------FONCTION------------------

function dateDuJour() {
    console.log("Date du jour : " + maintenant.format('LLLL'));
    maDate.innerHTML = outils.capLettre(maintenant.format('LLLL'));
}
 dateDuJour();


////-------------------INTELLIGENTE------------------------------------

function meteoDuJour() {
    
    const infosMeteo = {
        "villeID":"2464470",
        "units":"metric",
        "langue":"fr"
    };

    const maMeteo = new Meteo(infosMeteo);
    console.log(maMeteo.getMeteoInformations());
}


$(document).ready(function() {
    console.log("READY");
    dateDuJour();
    meteoDuJour();
});
