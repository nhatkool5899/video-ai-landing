document.addEventListener('DOMContentLoaded', function() {
    var spinButton = document.querySelector('.btn');
    var wheel = document.querySelector('.wheel');

    spinButton.addEventListener('click', function() {
        var spin = (Math.floor((Math.random() * 8) + 1)) * 45;
        wheel.style.transition = 'none';
        // wheel.style.transform = 'rotate(0deg)';

        // Force reflow to reset animation
        wheel.offsetWidth;

        wheel.style.transition = 'transform 10s cubic-bezier(0.25, 0.1, 0.25, 1)';
        wheel.style.transform = 'rotate(' + spin + 'deg)';
    });
});