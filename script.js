document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const dropdown = document.getElementById('dropdown');
  const logo = document.getElementById('logo');

  // Sample data for dropdown
  const items = [
    'มอเตอร์ไซต์'
  ];

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    dropdown.innerHTML = ''; // Clear previous results
    if (query) {
      const filteredItems = items.filter(item => item.toLowerCase().includes(query));
      filteredItems.forEach(item => {
        const div = document.createElement('div');
        div.textContent = item;
        div.addEventListener('click', () => {
          searchInput.value = item;
          dropdown.style.display = 'none';
          if (item === 'มอเตอร์ไซต์') {
            window.location.href = 'moter.html';
          }
        });
        dropdown.appendChild(div);
      });
      dropdown.style.display = 'block';
    } else {
      dropdown.style.display = 'none';
    }
  });

  // Enter key event listener
  searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      const query = searchInput.value.toLowerCase();
      if (query === 'มอเตอร์ไซต์') {
        window.location.href = 'moter.html';
      }
    }
  });

  // Click event listener for logo
  logo.addEventListener('click', () => {
    window.location.href = 'moter.html';
  });

  document.addEventListener('click', (event) => {
    if (!searchInput.contains(event.target) && !dropdown.contains(event.target)) {
      dropdown.style.display = 'none';
    }
  });
});
