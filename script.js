window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('nav-blur');
        navbar.classList.remove('nav-transparent');
    } else {
        navbar.classList.add('nav-transparent');
        navbar.classList.remove('nav-blur');
    }
});

function drawHexagon(ctx, x, y, radius, rotation) {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
        ctx.lineTo(
            x + radius * Math.cos(rotation + (i * Math.PI) / 3),
            y + radius * Math.sin(rotation + (i * Math.PI) / 3)
        );
    }
    ctx.closePath();
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    ctx.stroke();
}

window.onload = function() {
    const canvas = document.getElementById('hexagonCanvas');
    const ctx = canvas.getContext('2d');

    // Center of the canvas
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 200; // Larger radius for a bigger hexagon
    const rotation = Math.PI / 2; // 90 degrees rotation

    drawHexagon(ctx, centerX, centerY, radius, rotation);
}