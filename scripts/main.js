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

if (window.innerWidth >  768)
{
    navbar.innerHTML += "<li class='logo-name links'>AJ</li>"
}