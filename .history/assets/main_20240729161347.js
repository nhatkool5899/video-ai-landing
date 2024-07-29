document.addEventListener('DOMContentLoaded', function() {
  var spinButton = document.querySelector('.btn');
  var wheel = document.querySelector('.wheel');

  spinButton.addEventListener('click', function() {
      var spin = (Math.floor((Math.random() * 8) + 1)) * 45;
      wheel.style.transform = 'rotate(' + spin + 'deg)';
  });
});