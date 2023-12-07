let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');


menu.onclick =() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

document.querySelectorAll('.featured-image-1').forEach(image_1 =>{
    image_1.addEventListener('click', () =>{
        var src = image_1.getAttribute('src');
        document.querySelector('.big-image-1').src = src;
    });
});

document.querySelectorAll('.featured-image-2').forEach(image_2 =>{
    image_2.addEventListener('click', () =>{
        var src = image_2.getAttribute('src');
        document.querySelector('.big-image-2').src = src;
    });
});

document.querySelectorAll('.featured-image-3').forEach(image_3 =>{
    image_3.addEventListener('click', () =>{
        var src = image_3.getAttribute('src');
        document.querySelector('.big-image-3').src = src;
    });
});
function scrollProduct() {
            // Scroll down by three times the window height
            window.scrollBy({
                top: 1.5 * window.innerHeight,
                behavior: 'smooth'
            });
        }
        document.getElementById('myForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Get the user's email
        var userEmail = document.getElementById('userEmail').value;

        // Check if the email is not empty
        if (userEmail.trim() !== '') {
            // Display a success message
            document.getElementById('subscriptionMessage').innerText = 'Subscription successful! You will receive our newsletter soon.';

            // You can add additional logic here, like sending the email to a server or other actions
        } else {
            // If the email is empty, display an error message
            document.getElementById('subscriptionMessage').innerText = 'Please enter a valid email address.';
        }
    });
