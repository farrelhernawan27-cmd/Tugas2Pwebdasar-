// Menu mobile: semua tautan tetap terlihat saat JavaScript tidak tersedia.
document.documentElement.classList.add('has-js');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigasi');
menuButton.hidden = false;

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}

menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  navigation.classList.toggle('is-open', !expanded);
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});

document.querySelector('a[href="#catatan-tugas"]').addEventListener('click', () => {
  document.querySelector('#catatan-tugas').open = true;
});

// Demo lokal: tanpa fetch, penyimpanan, atau pengiriman data ke server.
const form = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');
form.querySelector('[type="submit"]').disabled = false;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nameInput = form.elements.namedItem('fnama');
  const name = nameInput.value.trim();
  nameInput.setCustomValidity(name ? '' : 'Isi nama lengkap, bukan hanya spasi.');
  if (!form.reportValidity()) return;
  formStatus.textContent = `Terima kasih, ${name}! Isian valid. Ini hanya demo lokal: pesan tidak dikirim atau disimpan.`;
});

form.elements.namedItem('fnama').addEventListener('input', (event) => {
  event.target.setCustomValidity('');
});

form.addEventListener('input', () => {
  formStatus.textContent = '';
});

form.addEventListener('reset', () => {
  form.elements.namedItem('fnama').setCustomValidity('');
  formStatus.textContent = '';
});
