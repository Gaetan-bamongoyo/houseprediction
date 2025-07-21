document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.form-container form');
  const modalOverlay = document.getElementById('modal-overlay');
  const modalClose = document.getElementById('modal-close');
  const btnOui = document.getElementById('btn-oui');
  const btnNon = document.getElementById('btn-non');
  const estimationText = document.getElementById('estimation-text');

  function openModal(estimation) {
    estimationText.textContent = estimation || "Votre estimation personnalisée s'affichera ici.";
    modalOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.style.display = 'none';
    document.body.style.overflow = '';
  }

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      // Exemple d'estimation (à personnaliser selon logique)
      const estimation = "Estimation de prix : 250 000 €";
      openModal(estimation);
      form.reset();
    });
  }

  [modalClose, btnOui, btnNon].forEach(function(btn) {
    if (btn) btn.addEventListener('click', closeModal);
  });

  // Fermer la modal si on clique en dehors
  modalOverlay.addEventListener('click', function(e) {
    if (e.target === modalOverlay) closeModal();
  });
}); 