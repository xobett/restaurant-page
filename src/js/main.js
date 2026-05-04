//STYLES
import "../css/reset.css";
import "../css/xobett-reset.css";
import "../css/variables.css";
import '../css/main.css';
import '../css/card.css';

//COMPONENTS
import { layout } from "./layout.js";

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

    function render(){
        enableTransitionsOnLoad();

        const card = layout.card;
        home.addToCard(card);
        menu.addToCard(card);
        location.addToCard(card);
        contactUs.addToCard(card);

        home.enableModule();

        enableTabNavigation();
        enableMobileBurgerMenu();
    }

    const sections = [
        { name: 'home', module: home },
        { name: 'menu', module: menu },
        { name: 'location', module: location },
        { name: 'contactUs', module: contactUs },
    ];

    function enableModule(name){
        sections.forEach(s => {
            s.module.disableModule();
        });

        const active = sections.find(s => s.name == name);
        active.module.enableModule();
    }

    const enableTabNavigation = function () {
        //TAB NAVIGATION
        document.addEventListener('keyup', handleTabNavigation);
        const a = document.querySelectorAll('a');
        a.forEach(e => e.addEventListener('click', handleTabNavigation));
    
        function handleTabNavigation(e){
            if (e.key == 'Enter' || e.type === 'click'){
                const module = document.activeElement.dataset.module;
                if (module){
                    const activeTab = document.querySelector(`a[data-module="${module}"]`);
                    activeTab.focus();
                    main.enableModule(module);
                }
            }
        }
    }

    const enableMobileBurgerMenu = function () {
        //MOBILE BURGER MENU
        const navTabsContainer = document.getElementById('nav-tabs-container');
        const navTabs = navTabsContainer.querySelector('ul.nav-tabs');
        navTabsContainer.addEventListener('click', toggleBurgerMenu);
    
        function toggleBurgerMenu() {
            if (navTabs.classList.contains('active')){
                navTabs.classList.remove('active');
            }
            else {
                navTabs.classList.add('active');
            }
        }
    }

    return { render, enableModule }
})();