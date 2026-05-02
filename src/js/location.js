import '../css/location.css';
import barImage from '../assets/imgs/bar.jpg';

export { location };

const location = (() => {
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('content-container', 'location');

    const cardTitle = document.createElement('div');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = "Come visit us!";
    
    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    const descriptionContainer = document.createElement('div');
    descriptionContainer.textContent = "We're located at \n 826 E Fictional Street, Fictional, FC 11111"; 
    
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('image-container');

    const img = document.createElement('img');
    img.src = barImage;
    img.alt = 'Image of the outsides of Sneaky Bar';

    imgContainer.appendChild(img);
    cardContent.append(descriptionContainer, imgContainer);

    const cardFooter = document.createElement('div');
    cardFooter.classList.add('card-footer');
    const a = document.createElement('a');
    a.href = '#';
    a.textContent = "GO TO CONTACT US";
    a.dataset['module'] = 'contactUs';
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