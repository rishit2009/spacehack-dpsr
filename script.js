const trailer = document.getElementById("trailer");

const animateTrailer = (e, interacting) => {
  const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;
  
  const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 2 : 1})`
  }
  
  trailer.animate(keyframes, { 
    duration: 800, 
    fill: "forwards" 
  });
}


window.onmousemove = e => {
  const interactable = e.target.closest(".interactable"),
        interacting = interactable !== null;
    
  animateTrailer(e, interacting);
  

}


window.addEventListener('scroll', function() {
  const hiddenNav = document.getElementById('hidden-nav');
  if (window.scrollY > 500) {
    hiddenNav.classList.add('nav-visible');
  } else {
    hiddenNav.classList.remove('nav-visible');
  }
});


function toggleresponsive() {
  const ham = document.querySelector('.hamburger')
  const nav = document.querySelector('.mobile-nav')
  ham.classList.toggle('active')
  const wrapper = document.querySelector('.hamburger-wrapper')
  wrapper.classList.toggle('wrapper-active')
  nav.classList.toggle('mobile-active')
}
