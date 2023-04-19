const allCards = document.querySelectorAll('.card');

allCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.add('hidden');
    const iframeContainer = card.nextElementSibling;
    iframeContainer.classList.remove('hidden');
    const backButtons = iframeContainer.querySelectorAll('.back');
    backButtons.forEach(button => {
      button.addEventListener('click', () => {
        iframeContainer.classList.add('hidden');
        card.classList.remove('hidden');
      });
    });
  });
});

'