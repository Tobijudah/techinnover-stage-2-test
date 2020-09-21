(function menubarLogic () {

  const menuBtn = document.getElementById('sidebar-icon'),
  closeBtn = document.getElementById('close-btn'),
  menuLinks = Array.from(document.getElementsByClassName('mobile-nav-links'));

  const openNav = () => {

    const mobileMenu = document.getElementById('mobile-nav')
    mobileMenu.style.transform = 'scaleY(1)'

  }

  const closeNav = () => {

    const mobileMenu = document.getElementById('mobile-nav')
    mobileMenu.style.transform = 'scaleY(0)'

  }

  menuBtn.addEventListener( 'click', () => openNav() )

  closeBtn.addEventListener( 'click', () => closeNav() )

  menuLinks.forEach(link => {
    link.addEventListener( 'click', () => closeNav() )
  });

}());


$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});