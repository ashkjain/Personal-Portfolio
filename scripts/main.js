let hamburger = document.getElementById('ham-button');
let navbar = document.getElementById('nav-links');

hamburger.addEventListener('click', function()
{
    if(navbar.style.display == 'none')
    {
        navbar.style.display = 'block';
    }
    else
    {
        navbar.style.display = 'none';
    }
});

// Function to handle screen resize
function handleResize() {
    var logoElement = document.querySelector('.logo-name');

    if (window.innerWidth > 769) {
        // Add logo element if it doesn't exist
        if (!logoElement) {
            navbar.innerHTML += "<li class='logo-name links'>AJ</li>";
        }
    } else {
        // Remove logo element if screen size is 769px or less
        if (logoElement) {
            logoElement.remove();
        }
    }
}

// Initial check on page load
handleResize();

// Event listener for window resize
window.addEventListener('resize', function() {
    // Call handleResize function on resize
    handleResize();
});
