document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');

  if (form) {
    form.addEventListener('submit', (event) => {
      const name = form.querySelector('input[name="Name"]')?.value?.trim();
      const email = form.querySelector('input[name="Email"]')?.value?.trim();
      const campaign = form.querySelector('input[name="Campaign"]')?.value?.trim();

      if (!name || !email || !campaign) {
        event.preventDefault();
        alert('Please fill in your name, email, and campaign office before submitting.');
      }
    });
  }
});
