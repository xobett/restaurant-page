import { main } from "./main.js";

main.render();

document.addEventListener('keyup', handleTabNavigation);
const a = document.querySelectorAll('a');
a.forEach(e => e.addEventListener('click', handleTabNavigation));

function handleTabNavigation(e){
    if (e.key == 'Enter' || e.type === 'click'){
        const module = document.activeElement.dataset.module;
        if (module){
            main.enableModule(module);
        }
    }
}