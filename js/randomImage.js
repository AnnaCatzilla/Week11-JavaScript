const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["pic1.jpeg", "pic2.webp", "pic3.jpeg", "pic4.jpeg", "pic5.webp", "pic6.jpeg", "pic7.jpeg", "pic8.jpeg"];

myButton.addEventListener('click', changeImage);

function changeImage() {
    let randomIndex = Math.floor(Math.random() *  images.length);
    image.style.backgroundImage = images[randomIndex];
    image.src = "images/" + images[randomIndex];
}

