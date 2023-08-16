window.addEventListener('scroll', function() {
    var nav = document.getElementById('sticky-nav');
    var content = document.querySelector('.content');
    var navPosition = content.getBoundingClientRect().top + window.pageYOffset;
    
    if (window.pageYOffset > navPosition) {
      nav.classList.add('fixed');
    } else {
      nav.classList.remove('fixed');
    }
  });
  