function toggleNavLogo(){
    const links = document.querySelector(".navLogo-links");
    const logo = document.querySelector(".navLogo-menu");
    links.classList.toggle("open");
    logo.classList.toggle("open")
}