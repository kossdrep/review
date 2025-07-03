const stars = document.querySelectorAll("#stars span");
const thankYou = document.getElementById("thankYou");

stars.forEach(star => {
  star.addEventListener("click", () => {
    const value = parseInt(star.dataset.value);
    stars.forEach(s => {
      s.classList.toggle("selected", parseInt(s.dataset.value) <= value);
    });
    thankYou.textContent = "Спасибо за вашу оценку: " + value + " звёзд!";

    setTimeout(() => {
      if (value >= 4) {
        window.location.href = "https://hotel-website.com";
      } else {
        window.location.href = "mailto:feedback@hotel.com?subject=Отзыв%20об%20отеле";
      }
    }, 1500);
  });
});
