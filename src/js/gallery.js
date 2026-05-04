import '../css/picture.css';
import gallery1 from '../assets/imgs/gallery-1.jpeg';
import gallery2 from '../assets/imgs/gallery-2.jpg';
import gallery3 from '../assets/imgs/gallery-3.jpg';
import gallery4 from '../assets/imgs/gallery-4.jpeg';
import gallery5 from '../assets/imgs/gallery-5.jpg';
export {gallery};

const gallery = (() => {
    const gallerySection = document.createElement('div');
    gallerySection.classList.add('gallery');
    
    const galleryContainer = document.createElement('div');
    galleryContainer.classList.add('gallery-container');

    const pictures = [
        {isLarge: false, imgSrc: gallery1, alt: 'Image of people having fun at Sneaky Bar'},
        {isLarge: false, imgSrc: gallery2, alt: 'Image of people having fun at Sneaky Bar'},
        {isLarge: true, imgSrc: gallery4, alt: 'Image of people having fun at Sneaky Bar'},
        {isLarge: false, imgSrc: gallery3, alt: 'Image of people having fun at Sneaky Bar'},
        {isLarge: false, imgSrc: gallery5, alt: 'Image of people having fun at Sneaky Bar'},
    ];

    pictures.forEach(function (p){
        const picture = document.createElement('div');
        picture.classList.add('picture');
        
        if (p.isLarge){
            picture.classList.add('large-picture');            
        }

        const img = document.createElement('img');
        img.src = p.imgSrc;
        img.alt = p.alt;

        picture.append(img);
        galleryContainer.append(picture);
    })

    gallerySection.append(galleryContainer);

    function addToNode(card){
        card.append(gallerySection);
    }

    return { addToNode };
})();