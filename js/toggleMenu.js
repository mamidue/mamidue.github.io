(function () {
  document.querySelector('.menu-icon-button').addEventListener('click', function (e){
    e.preventDefault();
    document.querySelector('.menu').classList.toggle('open');
    document.querySelector('.menu-icon').classList.toggle('open');
  });
}());
