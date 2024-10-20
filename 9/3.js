const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});




gsap.to(".logo",{
    rotate:360,
    duration:15,
    repeat:-1,
    yoyo:true, 
})


