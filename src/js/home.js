import '../css/home.css';
export { home };

//TODO: IMPLEMENT LANDING CONTENT
const home = (() => {
    const cardTitle = document.createElement('div');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = "SNEAK A BITE OF HAPPINESS";
    
    const cardContent = document.createElement('div');
    cardTitle.classList.add('card-content');
    cardTitle.textContent = "Welcome to Sneaky Bar! Where great flavors and good times come with a playful twist. Tucked away but hard to forget, we serve up irresistible bites and perfectly crafted drinks in a vivid and inviting atmosphere. Come in, unwind, and treat yourself, you've found your new favorite spot.";
    
    const cardFooter = document.createElement('div');
    cardTitle.classList.add('card-footer');
    cardTitle.textContent = "GO TO MENU";
})();