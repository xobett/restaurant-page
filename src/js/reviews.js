import '../css/review.css';
export {reviews};

const reviews = (() => {
    const reviewSection = document.createElement('div');
    reviewSection.classList.add('reviews');

    const reviewsContainer = document.createElement('div');
    reviewsContainer.classList.add('reviews-container');

    const reviewsArr = [
        {rating: 'DIABOLICAL!', message: 'Will come back again with my pet, Terror.', author: '- Billy Butcher'},
        {rating: 'Good', message: 'Better than Arasaka\'s, that\'ll tell you...', author: '- Johnny Silverhand'},
        {rating: 'EXCELLENT!', message: 'Is the waitress named Lisa single? Tell her Barney said hi.', author: '- Barney Stinson'},
    ]

    reviewsArr.forEach(function (r) {
        const review = document.createElement('div');
        review.classList.add('review');

        const message = document.createElement('p');
        message.innerHTML = `<p><b>${r.rating}</b><br>${r.message}</p>`;

        const author = document.createElement('p');
        author.innerText = r.author;

        review.append(message, author);
        reviewsContainer.append(review);
    })

    reviewSection.append(reviewsContainer);

    function addToNode(card){
        card.append(reviewSection);
    }

    return { addToNode };
})();