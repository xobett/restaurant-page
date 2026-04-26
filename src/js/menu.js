import '../css/menu.css';
import icon2 from '../assets/imgs/icon-2.jpg';
import icon3 from '../assets/imgs/icon-2.jpg';
export { menu };

const menu = (() => {
    const cardTitle = document.createElement('div');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = "MENU";
    
    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    const ul = document.createElement('ul');

    const menuItemsInfo = [
        { itemName: 'Backdoor Nachos', imgSrc: icon2, alt:'Picture of Backdoor Nachos' },
        { itemName: 'Alleyway Loaded Fries', imgSrc: icon3, alt:'Picture of Alleyway Loaded Fries' },
        { itemName: 'Backdoor Nachos', imgSrc: icon2, alt:'Picture of Backdoor Nachos' },
        { itemName: 'Backdoor Nachos', imgSrc: icon2, alt:'Picture of Backdoor Nachos' },
        { itemName: 'Backdoor Nachos', imgSrc: icon2, alt:'Picture of Backdoor Nachos' },
        { itemName: 'Backdoor Nachos', imgSrc: icon2, alt:'Picture of Backdoor Nachos' },
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

        li.append(imgContainer, menuItemName);
        ul.appendChild(li);
    })
    
    const cardFooter = document.createElement('div');
    cardTitle.classList.add('card-footer');
    const a = document.createElement('a');
    a.href = '#';
    a.textContent = "GO TO LOCATION";
    cardTitle.appendChild(a);
})();