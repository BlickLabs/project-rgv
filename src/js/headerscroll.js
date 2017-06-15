var last_known_scroll_position = 0;
var ticking = false;
//navbar-fixed-top
function doSomething(scroll_pos) {
  if (window.location.pathname === '/project-rgv/' || window.location.pathname === '/project-rgv/index.html') {
    if (scroll_pos > 140) {
      document.querySelector('.site-navbar').classList.add('site-navbar-blue');
      document.querySelector('.site-navbar').classList.remove('site-navbar-transparent');
    } else {
      document.querySelector('.site-navbar').classList.add('site-navbar-transparent');
      document.querySelector('.site-navbar').classList.remove('site-navbar-blue');
    }
  }
}
doSomething();
window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false
    });
  }
  ticking = true;
});