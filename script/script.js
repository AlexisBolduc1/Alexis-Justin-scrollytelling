gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".fleche",
  {
    y: "0%",
  },
  {
    y: "1vh",
    duration: 1,
    repeat: -1,
  }
);

const body = document.querySelector("body");
let time;

function removeClass() {
  body.classList.remove("is-scrolling");
}

function resetTimeout() {
  clearTimeout(time);
  time = setTimeout(removeClass, 100);
}

function Scroll() {
  body.classList.add("is-scrolling");
  resetTimeout();
}

window.addEventListener("scroll", Scroll);

/* scène 2 */
gsap
.from(".fun", { x: "100vw",rotation:360, duration: 4, ease:"bounce.out", y: -500 });

/* scène 3 */
gsap
  .from(".sit", { x: "-100vw", duration: 4, ease: "power4.out" });

/* scène 4 */
gsap
  .timeline()
  .from(".stand", { x: "-100vw", duration: 2, ease: "slow(0.7, 0.7, false)" })
  .from(".standing", { x: "100vw", duration: 2, ease: "slow(0.7, 0.7, false)" })
  .from(".voiture1", { x: "-100vw", duration: 2, ease: "power4.out" })
  .from(".voiture2", { x: "100vw", duration: 2, ease: "power4.out" }, "<");

  /* scène 5 */
  gsap
  .timeline()
  .from(".angle", { x: "-100vw", duration: 2, ease: "slow(0.7, 0.7, false)" })
  .from(".scared", { x: "100vw",skewX:"50deg", duration: 2, ease: "power4.out" })
  .from(".manshot", { x: "-50vw",skewX:"50deg", duration: 2, ease: "power4.out" });