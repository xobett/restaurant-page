import '../css/menu.css';
import backdoorNachosImg from '../assets/imgs/backdoor-nachos.jpg';
import allewayLoadedFriesImg from '../assets/imgs/alleyway-loaded-fries.jpg';
import hiddenStashWingsImg from '../assets/imgs/hidden-stash-wings.jpg';
import secretPassageSlidersImg from '../assets/imgs/secret-passage-sliders.jpg';
import getawayBurgerImg from '../assets/imgs/getaway-burger.jpg';
import vaultMozzarellaSticksImg from '../assets/imgs/vault-mozzarella-sticks.jpg';
export { menu };

const menu = (() => {
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('content-container', 'menu');

    const cardTitle = document.createElement('div');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = "MENU";
    
    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    const ul = document.createElement('ul');
    const menuItemsInfo = [
        { itemName: 'Backdoor Nachos', imgSrc: backdoorNachosImg, alt:'Picture of The Backdoor Nachos' },
        { itemName: 'Alleyway Loaded Fries', imgSrc: allewayLoadedFriesImg, alt:'Picture of The Alleyway Loaded Fries' },
        { itemName: 'Hidden Stash Wings', imgSrc: hiddenStashWingsImg, alt:'Picture of The Hidden Stash Wings' },
        { itemName: 'Secret Passage Sliders', imgSrc: secretPassageSlidersImg, alt:'Picture of The Secret Passage Sliders' },
        { itemName: 'The Getaway Burger', imgSrc: getawayBurgerImg, alt:'Picture of The Getaway Burger' },
        { itemName: 'Vault Mozarella Sticks', imgSrc: vaultMozzarellaSticksImg, alt:'Picture of The Vault Mozzarella Sticks' },
    ]

    menuItemsInfo.forEach((item) => {
        const li = document.createElement('li');
        li.classList.add('menu-item');
        
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');
        const img = document.createElement('img');
        img.src = item.imgSrc;
        img.alt = item.alt;
        imgContainer.appendChild(img);
        
        const menuItemName = document.createElement('div');
        menuItemName.classList.add('menu-item-name');
        menuItemName.textContent = item.itemName;

        li.append(imgContainer, menuItemName);
        ul.appendChild(li);
    });
    cardContent.appendChild(ul);
    
    const cardFooter = document.createElement('div');
    cardFooter.classList.add('card-footer');
    const a = document.createElement('a');
    a.href = '#';
    a.textContent = "GO TO LOCATION";
    a.dataset['module'] = 'location';
    cardFooter.appendChild(a);

    contentContainer.append(cardTitle, cardContent, cardFooter);

    function disableModule(){
        contentContainer.inert = true;
        contentContainer.classList.remove('active');
    }
    
    function enableModule(){
        contentContainer.inert = false;
        contentContainer.classList.add('active');
    }
    
    function addToCard(card){
        card.append(contentContainer);
        disableModule();
    }

    return { addToCard, enableModule, disableModule };
})();