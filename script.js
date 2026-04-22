const animatedItems = document.querySelectorAll(
  ".hero-inner, .tech .content-wrap, .project-card, .job, .contact .content-wrap"
);

animatedItems.forEach((item) => item.classList.add("reveal"));

const revealOnScroll = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.18,
  }
);

animatedItems.forEach((item) => revealOnScroll.observe(item));

const avatar = document.querySelector(".avatar");

if (avatar) {
  avatar.addEventListener("click", () => {
    avatar.classList.remove("avatar-pop");
    void avatar.offsetWidth;
    avatar.classList.add("avatar-pop");
  });
}
