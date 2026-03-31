document.querySelectorAll('.collapsible').forEach((block) => {
  const button = block.querySelector('.toggle');
  const icon = block.querySelector('.icon');

  if (!button || !icon) {
    return;
  }

  const syncState = (open) => {
    block.classList.toggle('open', open);
    button.setAttribute('aria-expanded', String(open));
    icon.textContent = open ? '−' : '+';
  };

  syncState(block.classList.contains('open'));

  button.addEventListener('click', () => {
    const isOpen = !block.classList.contains('open');
    syncState(isOpen);
  });
});
