// في هذه النسخة: فقط المقارنة
document.querySelectorAll('nav a').forEach(a => {
  a.addEventListener('click', (e) => {
    console.log('انتقل إلى:', a.getAttribute('href'));
  });
});

