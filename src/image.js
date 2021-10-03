const images = ["1.jpg", "2.jpg", "3.jpg"];

const imageNumber = Math.floor(Math.random() * 3);

const imgTag = document.createElement("img");
imgTag.src = `./img/${images[imageNumber]}`;

document.body.style.backgroundImage = `url(${imgTag.src})`;
