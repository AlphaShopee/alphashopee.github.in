function loadImage(event, cardNumber) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    const card = document.querySelector(`#cover-image-${cardNumber}`);
    card.src = e.target.result;
  };

  reader.readAsDataURL(file);
}
