const likeButton = document.querySelectorAll(".like-btn");

function handleLike(event) {
  event.target.classList.toggle("active");
}

likeButton.forEach((likeButton) => {
  likeButton.addEventListener("click", handleLike);
});

