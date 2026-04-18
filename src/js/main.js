//STYLES
import "../css/reset.css";
import "../css/variables.css";
import '../css/main.css';

//COMPONENTS
import { home } from "./home.js";
import { contactUs } from "./contact-us.js";
import { location } from "./location.js";
import { menu } from "./menu.js";

export { main };

const main = (() => {
    //TODO: IMPORT AND SET EACH MODULE FROM EACH TAB OF THE LANDING PAGE
    function render(){
        console.log('test');
    }

    return { render }
})();