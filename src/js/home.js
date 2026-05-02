import '../css/home.css';
export { home };

//TODO: IMPLEMENT LANDING CONTENT
const home = (() => {
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('content-container', 'home');

    const cardTitle = document.createElement('div');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = "SNEAK A BITE OF HAPPINESS";
    
    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    cardContent.textContent = "Welcome to Sneaky Bar! Where great flavors and good times come with a playful twist. Tucked away but hard to forget, we serve up irresistible bites and perfectly crafted drinks in a vivid and inviting atmosphere. Come in, unwind, and treat yourself, you've found your new favorite spot.";
    
    const cardFooter = document.createElement('div');
    cardFooter.classList.add('card-footer');
    const a = document.createElement('a');
    a.href = '#';
    a.textContent = "GO TO MENU";
    a.dataset['module'] = 'menu';
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