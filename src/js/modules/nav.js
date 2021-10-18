function closenav() {
  header.classList.remove("nav-open");
  navBtn.style.marginRight = "0";
  body.classList.remove('scroll-hidden');
}

function togglenav() {
  header.classList.toggle("nav-open");
  if (header.classList.contains("nav-open")) {
    body.classList.add('scroll-hidden');
    navBtn.style.marginRight = "0";
  } else {
    body.classList.remove('scroll-hidden');
    navBtn.style.marginRight = `${-((window.innerWidth - html.offsetWidth))}px`;
  }
}
navBtn.addEventListener("click", togglenav);
const links = header.querySelectorAll('a');
links.forEach(link => {
  link.addEventListener('click', closenav);
});