const canvas = document.getElementById('scroll-gif');
const ctx = canvas.getContext('2d');

// Load the sprite sheet
const spriteSheet = new Image();
spriteSheet.src = '/Images/sprite-sheet.png'; // Replace with the path to your sprite sheet

// Sprite sheet settings
const totalFrames = 50; // Total number of frames in the sprite sheet
const frameWidth = 600; // Width of a single frame
const frameHeight = 400; // Height of a single frame

// Event listener for scrolling
window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / scrollHeight;

    // Calculate the current frame based on scroll position
    const frameIndex = Math.floor(scrollPercent * totalFrames);

    // Clear the canvas and draw the current frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
        spriteSheet,          // Source image
        frameIndex * frameWidth, // Source X position (frame offset)
        0,                   // Source Y position
        frameWidth,          // Source width
        frameHeight,         // Source height
        0,                   // Destination X position
        0,                   // Destination Y position
        frameWidth,          // Destination width
        frameHeight          // Destination height
    );
});
