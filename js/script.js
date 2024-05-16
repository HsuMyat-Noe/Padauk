// Navbar
document.querySelector(".openbtn").onclick = openNav;
document.querySelector(".closebtn").onclick = closeNav;

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
function closeNav() {
document.getElementById("mySidenav").style.width = "0";
}

// Carousel

document.querySelector("#prev").onclick = prev;
document.querySelector("#next").onclick = next;

var image = 1;
function prev(){
    document.querySelector("#img" + image).style.display = "none";
    image--;
    if(image < 1) image = 3;
    document.querySelector("#img" + image).style.display = "block";
}
function next(){
    document.querySelector("#img" + image).style.display = "none";
    image++;
    if(image > 3) image = 1;
    document.querySelector("#img" + image).style.display = "block";
}

// Contact

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message, ' + name + '! We will get back to you shortly.');
        // Clear the form
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill in all fields before submitting.');
    }
});



