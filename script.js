// Add a hover effect for the button (optional)
document.querySelector('.discord-button').addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
});
document.querySelector('.discord-button').addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});
