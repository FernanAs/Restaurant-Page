const mainDocument = document.querySelector('#container');
const infoContainer = document.createElement('div');

const aboutUs = () => {
    infoContainer.classList.add('info-container');

    const information = document.createElement('div');
    information.classList.add('info');

    const title = document.createElement('h4');
    const paragraph = document.createElement('p');
    const foodImg1 = document.createElement('img');
    foodImg1.classList.add('food-image1');
    foodImg1.src = 'img/pexels-steyn-viljoen-62097.jpg';

    title.textContent = 'what do we do? ';

    paragraph.textContent = `Best Homemade food in town and pastries You can try!.`;

    paragraph.appendChild(foodImg1);
    information.appendChild(title);
    information.appendChild(paragraph);
    infoContainer.appendChild(information);
    mainDocument.appendChild(infoContainer);
};

const cleanAboutUs = () => {
    infoContainer.innerHTML = null;
    mainDocument.appendChild(infoContainer);
}

export { aboutUs, cleanAboutUs};