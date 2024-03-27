// JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// Initialize Marqueefy
const marqueefyList = Array.prototype.slice.call(document.querySelectorAll('.marqueefy'))
const marqueefyInstances = marqueefyList.map(m => {
    return new marqueefy.Marqueefy(m)
})
const sideNav = document.querySelector(".offcanvas");

function closeCanva(){
    const sideNavBackDrop = document.querySelector(".offcanvas-backdrop");
    console.log(sideNavBackDrop)
    sideNavBackDrop.classList.remove("show");
    sideNavBackDrop.style.display = "none";
    sideNav.classList.remove("show");
    document.body.style.overflow = "auto";
    
}
// About scroll
function scrollToAbout() {
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
    closeCanva()
}
function scrollToWork() {
    const workSection = document.getElementById('work');
    workSection.scrollIntoView({ behavior: 'smooth' });
    closeCanva()
}