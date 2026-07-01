const { anime } = window;

anime({
  targets: ".hero-media img",
  scale: [1.08, 1],
  duration: 1600,
  easing: "easeOutCubic"
});

anime({
  targets: ".hero-copy",
  opacity: [0, 1],
  translateY: [24, 0],
  duration: 1200,
  easing: "easeOutCubic"
});

anime({
  targets: ".image-card, .text-panel, .panel-inner",
  opacity: [0, 1],
  translateY: [28, 0],
  delay: anime.stagger(80),
  duration: 900,
  easing: "easeOutQuad"
});

document.querySelectorAll(".image-card").forEach((card) => {
  const image = card.querySelector("img");
  card.addEventListener("mouseenter", () => {
    anime({
      targets: image,
      scale: 1.04,
      duration: 420,
      easing: "easeOutQuad"
    });
  });

  card.addEventListener("mouseleave", () => {
    anime({
      targets: image,
      scale: 1,
      duration: 420,
      easing: "easeOutQuad"
    });
  });
});
