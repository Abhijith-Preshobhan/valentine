gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  var tl1 = gsap.timeline({
    defaults: { ease: "power2.out" },
  });
  tl1
    .to("#section1 h1", {
      opacity: 1,
      duration: 1,
    })
    .to("#section1 .face-sub", {
      opacity: 1,
      duration: 1,
    })
    .to("#section1 .pill", {
      opacity: 1,
      duration: 1,
    })
    .to("#section1 .pill2", {
      opacity: 1,
      duration: 2,
    });

  var tl2 = gsap.timeline({
    defaults: { ease: "power2.out" },
    scrollTrigger: {
      trigger: "#section2",
      pin: true, // pin the trigger element while active
      start: "top top", // when the top of the trigger hits the top of the viewport
      end: "bottom 50%", // end after scrolling 500px beyond the start
      scrub: true,
      // markers: true,
    },
  });
  tl2
    .to("#section2 .section2h2", {
      opacity: 1,
      y: 200,
      duration: 1,
    })
    .to("#section2 p", {
      opacity: 1,
      y: 200,
      duration: 1,
    });

  var tl3 = gsap.timeline({
    defaults: {
      ease: "power2.out",
    },
    scrollTrigger: {
      trigger: "#section3",
      // pin: true, // pin the trigger element while active
      start: "top 80%", // when the top of the trigger hits the top of the viewport
      end: "bottom 30%", // end after scrolling 500px beyond the start
      scrub: true,
      markers: true,
    },
  });
  tl3.to("#section3 p", {
    y: 50,
    opacity: 1,
    duration: 1,
  });

  var tl4 = gsap.timeline({
    defaults: {
      ease: "power2.out",
    },
    scrollTrigger: {
      trigger: "#section4",
      pin: true, // pin the trigger element while active
      start: "top top", // when the top of the trigger hits the top of the viewport
      end: "bottom 50%", // end after scrolling 500px beyond the start
      scrub: true,
      markers: true,
    },
  });
  tl4
    .to("#section4 .sec4p1", {
      y: 50,
      opacity: 1,
      duration: 1,
    })
    .to("#section4 .sec4p2", {
      y: 50,
      opacity: 1,
      duration: 1,
    });

  ScrollTrigger.create({
    trigger: "#section5",
    start: "top 80%",
    onEnter: () => {
      for (let i = 0; i < 10; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        document.getElementById("section5").appendChild(heart);

        gsap.set(heart, {
          left: Math.random() * window.innerWidth + "px",
          top: Math.random() * window.innerHeight + "px",
        });

        gsap.to(heart, {
          opacity: 1,
          duration: 2,
          y: -100,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: Math.random() * 3,
        });
      }
    },
  });
});
