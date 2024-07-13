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

// Redirect to a subdomain
function redirectToSubdomain(subdomain) {
    const currentDomain = window.location.hostname;
    const newUrl = `localhost://${subdomain}.${currentDomain}`;
    window.location.href = newUrl;
}

// Example usage: Redirect to blog subdomain
redirectToSubdomain('blog');
