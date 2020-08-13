const mainDocument = document.querySelector('#container');
const infoContainer = document.createElement('div');

const menu = () => {
    infoContainer.classList.add('info-container');

    const information = document.createElement('div');
    information.classList.add('info');

    const title = document.createElement('h4');
    title.textContent = 'Menu';

    
    const paragraph = document.createElement('p');
    const foodImg2 = document.createElement('img');
    foodImg2.classList.add('food-image2');
    foodImg2.src = 'img/pj.jpg';

    paragraph.textContent = `Exclusive Menu Come Try it Out.`;

    paragraph.appendChild(foodImg2);
    information.appendChild(title);
    information.appendChild(paragraph);
    infoContainer.appendChild(information);
    mainDocument.appendChild(infoContainer);
};

const cleanDoc = () => {
    infoContainer.innerHTML = null;
    mainDocument.appendChild(infoContainer);
}

export { menu , cleanDoc }