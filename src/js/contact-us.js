import '../css/contact-us.css';
export { contactUs };

const contactUs = (() => {
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('content-container', 'contact-us');

    const cardTitle = document.createElement('div');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = "Contact us!";
    
    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    const messageContainer = document.createElement('div');
    messageContainer.textContent = 'Whether it\'s to make a sneaky reservation or get additional information about our job openings, make sure to contact us through any of our available channels:';
    
    const contactInfoContainer = document.createElement('div');
    contactInfoContainer.classList.add('contact-info');

    const phoneContainer = document.createElement('div');
    phoneContainer.textContent = 'Phone: (111) 111-1111';

    const emailContainer = document.createElement('div');
    emailContainer.textContent = 'Email: info@sneakybar.com';

    contactInfoContainer.append(phoneContainer, emailContainer);
    cardContent.append(messageContainer, contactInfoContainer);

    const cardFooter = document.createElement('div');
    cardFooter.classList.add('card-footer');
    const a = document.createElement('a');
    a.href = '#';
    a.textContent = "GO TO HOME";
    a.dataset['module'] = 'home';
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