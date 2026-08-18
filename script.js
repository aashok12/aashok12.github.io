document.addEventListener('DOMContentLoaded', () => {
  const noteItems = document.querySelectorAll('.note-item');
  const notes = document.querySelectorAll('.note');

  noteItems.forEach(item => {
    item.addEventListener('click', () => {
      const target = item.getAttribute('data-note');

      noteItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      notes.forEach(note => {
        note.classList.toggle('active', note.id === `note-${target}`);
      });
    });
  });

  const timeEl = document.getElementById('statusbar-time');

  function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    timeEl.textContent = `${hours}:${minutes} ${ampm}`;
  }

  updateClock();
  setInterval(updateClock, 30000);
});
