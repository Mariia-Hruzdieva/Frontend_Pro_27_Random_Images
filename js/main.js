const image = document.createElement('img');
const imgRef = Math.floor(Math.random() * 9) + 1;
image.setAttribute('src', `./images/${imgRef}.jpg`);
document.querySelector('#image').appendChild(image);