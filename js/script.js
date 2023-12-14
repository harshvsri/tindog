const socials = ["twitter", "facebook", "instagram"];
const icons = document.querySelector(".icons");
console.log(icons);
socials.forEach((social) => {
  const icon = document.createElement("i");
  icon.className = `footer-icon fa-brands fa-${social} fa-2x`;
  icons.appendChild(icon);
});

const copyright = document.querySelector(".copyright");
const currYear = new Date().getFullYear();
copyright.innerHTML = `© Copyright ${currYear} TinDog & Harsh`;
