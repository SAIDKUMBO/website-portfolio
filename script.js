const socialLinks = document.querySelectorAll(".social-rail a");
socialLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => link.classList.add("active"));
  link.addEventListener("mouseleave", () => link.classList.remove("active"));
  link.addEventListener("focus", () => link.classList.add("active"));
  link.addEventListener("blur", () => link.classList.remove("active"));
});

const heroImage = document.querySelector(".hero-image");
const picture = document.querySelector(".profile-picture");

if (heroImage && picture) {
  heroImage.addEventListener("mouseenter", () => {
    picture.style.transform = "scale(1.05)";
  });

  heroImage.addEventListener("mouseleave", () => {
    picture.style.transform = "scale(1)";
  });
}