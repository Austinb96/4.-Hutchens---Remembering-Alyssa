var menus = document.getElementsByClassName ('hamburger');

[].forEach.call(menus, function (m) {
  m.addEventListener( 'click' , function () {
    m.classList.toggle('open');
  });
});
