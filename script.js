document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const lane = urlParams.get('lane');

  if (lane === 'democratic') {
    const select = document.querySelector('select[name="Party lane"]');
    if (select) {
      select.value = 'Democratic';
    }
  }

  if (lane === 'republican') {
    const select = document.querySelector('select[name="Party lane"]');
    if (select) {
      select.value = 'Republican';
    }
  }
});
