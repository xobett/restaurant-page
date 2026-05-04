import { reviews } from "./reviews.js";
import { gallery } from "./gallery.js";

export {layout};

const layout = (() => {
    const card = document.createElement('div');
    card.id = 'card';
    card.classList.add('card');

    const content = document.getElementById('content');
    gallery.addToNode(content);
    content.append(card);
    reviews.addToNode(content);
    
    return { card };
})();