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

