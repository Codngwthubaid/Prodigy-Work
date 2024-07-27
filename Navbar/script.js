// Add JavaScript code here to change background color and show shadow on hover
const menuItems = document.querySelectorAll('.navbar a');

menuItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.backgroundColor = '#555';
    item.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
  });

  item.addEventListener('mouseleave', () => {
    item.style.backgroundColor = '';
    item.style.boxShadow = '';
  });
});
