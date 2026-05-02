//STYLES
import "../css/reset.css";
import "../css/xobett-reset.css";
import "../css/variables.css";
import '../css/main.css';
import '../css/card.css';
import '../css/review.css';
import '../css/picture.css';

//COMPONENTS
import { home } from "./home.js";
import { menu } from "./menu.js";
import { location } from "./location.js";
import { contactUs } from "./contact-us.js";

export { main };

const main = (() => {
    function enableTransitionsOnLoad(){
        window.addEventListener('load', function(e) {
            document.body.classList.remove('no-transition');
        });
    }

    const sections = [
        { name: 'home', module: home },
        { name: 'menu', module: menu },
        { name: 'location', module: location },
        { name: 'contactUs', module: contactUs },
    ];
    const card = document.getElementById('card');
    
    function render(){
        enableTransitionsOnLoad();

        home.addToCard(card);
        menu.addToCard(card);
        location.addToCard(card);
        contactUs.addToCard(card);

        home.enableModule();
    }

    function enableModule(name){
        sections.forEach(s => {
            s.module.disableModule();
        });

        const active = sections.find(s => s.name == name);
        active.module.enableModule();
    }

    return { render, enableModule }
})();