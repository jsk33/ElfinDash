const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `./images/${imgNumber + 1}.jpeg`;
    image.classList.add("backgroundImage");
    body.append(image);
}

function generateRandom() {
    return Math.floor(Math.random() * IMG_NUMBER);
}

function init() {
    const randomNumber = generateRandom();
    paintImage(randomNumber);
}

init();