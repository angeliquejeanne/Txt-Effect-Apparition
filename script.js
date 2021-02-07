const allLetters = document.querySelectorAll('.bloc span');
const ligne = document.querySelector('.ligne');

const TLLetters = gsap.timeline();

TLLetters
.from(ligne, {width: '0%', opacity: 0, duration: 0.7, ease: "power1.in"})
.from(allLetters, {opacity:0, top: gsap.utils.wrap([100,-100]), stagger: 0.1, ease: "power2.out"})
.set(ligne, {width: '85vw'})